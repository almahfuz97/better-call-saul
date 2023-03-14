import React, { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider'
import gallary from '../../assets/gallary.png'
import './BlogCard.css'
import { Button, Card, Tooltip } from 'flowbite-react';
import ReadBlogModal from '../../utils/Modals/ReadBlogModal';
import '../Home/Banner/Banner.css'


export default function BlogCard({ blog }) {
    const { title, blog_img, createdAt, description, createdBy, photoURL, _id } = blog;
    const { user } = useContext(AuthContext);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = data => {
        setIsClicked(data);
    }
    return (
        <div>
            {isClicked &&
                <ReadBlogModal handleClick={handleClick} blog={blog} clicked={true} />
            }
            <Card
            >
                <div className='img-gradient relative'>
                    <img src={blog_img} className='max-h-[200px] min-h-[200px]' />
                </div>
                <Tooltip content={title}>
                    <h5 className="text-md hidden max-h-[50px] min-h-[50px] md:flex font-semibold tracking-tight text-gray-900 dark:text-white">
                        {
                            title.length >= 50
                                ? `${title.slice(0, 50)}...`
                                : title
                        }
                    </h5>
                </Tooltip>

                        {/* testing */}
                <h5 className="text-md max-h-[50px] md:hidden font-semibold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>

                <p style={{ wordBreak: "break-all" }} className='min-h-[80px] mt-4 max-h-[80px] text-sm opacity-50'>
                    {

                        description.length >= 80
                            ? `${description.slice(0, 80)}...`
                            : description
                    }
                </p>

                <Button
                    color="dark"
                    onClick={() => handleClick(true)}
                >
                    Details
                </Button>
                <hr />
                <div className='mt-4 flex justify-between'>
                    <div>
                        <h4 className=' font-bold'>{createdBy}</h4>
                    </div>
                    <div>
                        <p className=' font-bold opacity-50'> {new Date(createdAt).toString().slice(0, 16)}</p>
                    </div>
                </div>

            </Card>
        </div>
    )
}
