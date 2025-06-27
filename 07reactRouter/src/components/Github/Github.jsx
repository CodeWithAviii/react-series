import  { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/CodeWithAviii')
        .then(response => response.json())
        .then(data => {
            setData(data)
        })
    },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {data.followers}
    <div className='flex justify-center items-center mt-4 p-4'>
    <img className='rounded-3xl' src={data.avatar_url} alt="GitProfile" width={250} />
    </div>
    </div>
  )
}

export default Github