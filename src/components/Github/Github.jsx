import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/awadhesh08')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    // },[])

    return (
        <div className='text-white bg-gray-600 p-5 text-center text-3xl'>Github Followers: {data.followers}
            <img src={data.avatar_url} alt="Git Picture" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/awadhesh08")
    return response.json()
}