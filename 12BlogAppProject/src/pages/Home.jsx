import React from 'react'
import { Container, PostCard } from '../components'
import appwriteService from '../appwrite/config'
import { useEffect, useState } from 'react'

function Home() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getALlPosts().then((posts) => {
            if (posts) {
                setPosts(posts)
            } 
        })
    },[])
  
    if (posts.length === 0) {
        return (
            <div className='w-full py-8'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full text-center text-gray-500'>
                            No posts found
                        </div>
                    </div>
                </Container>
            </div>
        )
    } 
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} /> 
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home