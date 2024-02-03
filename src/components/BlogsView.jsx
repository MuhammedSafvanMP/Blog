import React, { memo } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/Context";


function BlogsView ()  {
    const navigate = useNavigate();
    const {id} = useParams();
    const [blog,setBlog,blogs,setBlogs] = useContext(GlobalContext);

    const Result = blogs.find((value) => value.id == id);

    return(
        <div className="w-[100%] h-[100vh] bg-blue-300 text-center flex justify-center items-center flex-col  relative p-5">
            <div className="absolute top-3 right-3 flex gap-3">
            <button className="px-5 py-6 bg-lime-200  rounded-md font-medium cursor-pointer" onClick={() => navigate('/')}>Create New</button>
            <button className="px-5 py-6  bg-lime-200 rounded-md font-medium cursor-pointer" onClick={() => navigate('/blogs')}>Back</button>
            </div>
            {
                <div className="w-auto h-auto p-5 flex justify-center gap-7 items-center flex-col bg-black text-white rounded-lg ">
                <h1 className="font-bold text-4xl capitalize">{Result.title}</h1>
                <p  className="font-mono text-2xl capitalize">{Result.content}</p>
                </div>
            }
        </div>
    )


}

export default memo(BlogsView);