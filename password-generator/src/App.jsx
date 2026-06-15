import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(12)
  const [numbersAllowed, setNumbersAllowed] = useState(true)
  const [charactersAllowed, setCharactersAllowed] = useState(true)
  const [password, setPassword] = useState('')
  const [copyMessage, setCopyMessage] = useState('')
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let charSet = letters

    if (numbersAllowed) charSet += '0123456789'
    if (charactersAllowed) charSet += '!@#$%^&*()-_=+?'

    let pass = ''
    for (let i = 0; i < length; i += 1) {
      pass += charSet.charAt(Math.floor(Math.random() * charSet.length))
    }

    setPassword(pass)
  }, [length, numbersAllowed, charactersAllowed])

  const copyPasswordToClipboard = useCallback(async () => {
    try {
      await window.navigator.clipboard.writeText(password)
      setCopyMessage('Password copied!')
    } catch {
      setCopyMessage('Copy failed. Try again.')
    }
    setTimeout(() => setCopyMessage(''), 1800)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator])

  return (
    <main className='min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4 py-8'>
      <section className='w-full max-w-xl rounded-[32px] border border-slate-700 bg-slate-900/95 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-sm'>
        <div className='mb-8 text-center'>
          <h1 className='text-4xl font-semibold tracking-tight text-white'>Password Generator</h1>
          <p className='mt-3 text-slate-400'>Generate a strong password with numbers and special characters.</p>
        </div>

        <div className='mb-6 rounded-3xl border border-slate-700 bg-slate-800/80 p-4 shadow-inner'>
          <div className='flex gap-3 items-center'>
            <input
              type='text'
              value={password}
              readOnly
              ref={passwordRef}
              className='w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-lg font-medium text-slate-100 outline-none transition focus:border-cyan-400'
              placeholder='Generated password'
            />
            <button
              type='button'
              onClick={copyPasswordToClipboard}
              className='rounded-3xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300'
            >
              Copy
            </button>
          </div>
        </div>

        <div className='space-y-6'>
          <div className='rounded-3xl border border-slate-700 bg-slate-800/80 p-5'>
            <div className='mb-3 flex items-center justify-between gap-4 text-sm font-medium text-slate-300'>
              <span>Length</span>
              <span className='text-slate-100'>{length}</span>
            </div>
            <input
              type='range'
              min={6}
              max={100}
              value={length}
              className='w-full accent-cyan-500'
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>

          <div className='grid gap-4 sm:grid-cols-2'>
            <label className='flex cursor-pointer items-center gap-3 rounded-3xl border border-slate-700 bg-slate-800/80 px-4 py-4 transition hover:border-cyan-400'>
              <input
                type='checkbox'
                checked={numbersAllowed}
                onChange={() => setNumbersAllowed((prev) => !prev)}
                className='h-5 w-5 accent-cyan-500'
              />
              <span className='text-sm font-medium text-slate-200'>Include numbers</span>
            </label>

            <label className='flex cursor-pointer items-center gap-3 rounded-3xl border border-slate-700 bg-slate-800/80 px-4 py-4 transition hover:border-cyan-400'>
              <input
                type='checkbox'
                checked={charactersAllowed}
                onChange={() => setCharactersAllowed((prev) => !prev)}
                className='h-5 w-5 accent-cyan-500'
              />
              <span className='text-sm font-medium text-slate-200'>Include symbols</span>
            </label>
          </div>
        </div>

        <p className='mt-6 text-center text-sm text-slate-400'>{copyMessage || 'Your password updates automatically when options change.'}</p>
      </section>
    </main>
  )
}

export default App
