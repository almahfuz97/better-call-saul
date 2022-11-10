import { Accordion } from 'flowbite-react'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider'
import Spin from '../../shared/Spinner/Spin';
import BlogCard from './BlogCard';

export default function Blog() {
    const { user, loading } = useContext(AuthContext);
    const [blogs, setBlogs] = useState();
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
                setSpinner(false);
            })
    }, [])

    if (spinner) return <Spin />
    return (
        <div className='mx-4 md:mx-20 mt-8'>
            <div className='flex justify-center'>
                <div>
                    <h3 className=' font-bold text-2xl'>Blogs</h3>

                </div>
            </div>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16'>
                {
                    blogs?.map(blog => <BlogCard key={blog._id} blog={blog} />)
                }
            </div>
        </div>
    )
}
