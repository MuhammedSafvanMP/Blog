import React, { memo, useContext } from "react";
import { GlobalContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

function CreateBlogs () {

    const navigate = useNavigate();

    const [blog,setBlog,blogs,setBlogs] = useContext(GlobalContext);

    const handleSubmit = () => {
        if (blog && typeof blog.title === 'string' && blog.title.trim() !== '' &&
        typeof blog.content === 'string' && blog.content.trim() !== '') {            blogs.push(blog);
            navigate('/blogs');
            setBlog({
                id: 0,
                title: "",
                content: ""
            })
        } else {
            console.error('Invalid blog content. Cannot submit.');
        }
    } 

    return(
        <div className="w-[100%] h-[100vh] bg-blue-300 flex justify-center items-center flex-col gap-4">
            <input  className="px-5 py-[20px] w-[50%]  border-none rounded-lg text-xl " type="text" onChange={(e) => setBlog({...blog, id: Math.random() * 10, title: e.target.value }) }  />  
            <textarea className="w-[50%] text-xl px-3 py-4"  onChange={(e) => setBlog ({...blog, content: e.target.value})}  cols="30" rows="10"></textarea>
            <button className="px-7 py-4 boder-1 bg-teal-950 rounded-md text-2xl   text-white" onClick={handleSubmit}>ADD BLOG</button>
        </div>
    )
}

export default memo(CreateBlogs);