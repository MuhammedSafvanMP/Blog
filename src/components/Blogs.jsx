import React, { useContext, memo } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from '../context/Context'; 

function Blogs() {
    const [blog, setBlog, blogs, setBlogs] = useContext(GlobalContext);
    const navigate = useNavigate();

    const handleDelete = (Id) => {
        setBlogs(prevBlogs => prevBlogs.filter(value => value.id !== Id));
    }

    return (
        <div className="w-[100%] h-[100vh] bg-gray-700 flex flex-col justify-center relative">
            <button className="w-[7%] h-[7%] rounded-full absolute top-3 left-2 cursor-pointer font-semibold text-center bg-blue-500" onClick={() => navigate('/')}>BACK</button>
            <ul className="flex gap-8 justify-center items-center text-center flex-wrap">

            {
                blogs &&
                blogs.map((blogData) => (
                    <div key={blogData} className="p-10 text-black  rounded-md  text-wrap   bg-lime-300">
                        <h1 className="text-2xl  font-mono capitalize">{blogData.title}</h1>
                        <button className="px-5 mr-3 py-4 bg-gray-700 mt-5 text-sm  text-lime-300 rounded-full font-semibold cursor-pointer" onClick={() => navigate(`${blogData.id}`)}>More View</button>
                        <button className="px-5 py-4 bg-gray-700 mt-5 text-sm  text-lime-300 rounded-full font-semibold cursor-pointer" onClick={() => handleDelete(blogData.id)}>Delete</button>                        
                    </div>
                ))
            }
            </ul>
        </div>
    );
}

export default memo(Blogs);
