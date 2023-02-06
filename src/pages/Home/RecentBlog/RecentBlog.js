import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import BlogCard from '../../Blog/BlogCard';

export default function RecentBlog() {
    const [blogs, setBlogs] = useState();

    useEffect(() => {
        fetch('https://service-a11-server.vercel.app/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
                console.log(data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div className=' my-20'>
            <div className="bg-gray-100 p-10">
                <h2 className="text-2xl font-bold text-center">Recent Blog Posts</h2>
                <div className="mt-10">
                    <div className="flex gap-3 flex-col md:flex-row">
                        {
                            blogs?.slice(0, 3).map(blog =>
                                <BlogCard key={blog._id} blog={blog}></BlogCard>
                            )
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}
