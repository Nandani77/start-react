import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
export default function Github() {

    const data = useLoaderData()
   // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Nandani77')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         }, [])
    // }, [])
    return (
        <div className="text-center m-4 bg-gray-500 text-white">Github Followers:{data.followers}
            <img src={data.avatar_url} alt="git img" width={300} />
        </div>

    )
}

export const githubInfoLoader = async () =>{
const response = await fetch('https://api.github.com/users/Nandani77')
return response.json()
}