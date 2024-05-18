import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../utils/useLogin";

const Login = ()=>{
    const {login,isLoading} = useLogin();

    const [formData,setFormData] = useState({
        email:"",
        password:"",
    })

    const handleFormData = (e)=>{
        setFormData((preVal) => ({
            ...preVal,
            [e.target.name]:e.target.value
        }))
    }
    const handleLogin = ()=>{
        if(!formData.email || !formData.password){
            alert("Please Provide All Details");
            return;
        }else{
            login(formData);
        }
    }
    
    return(
        <div className="flex justify-center p-14 ">
            <div className="login-container w-96 border border-slate-600 py-[30px] px-[20px] bg-slate-600 rounded-md shadow-2xl shadow-slate-900">
                <span className=" font-bold text-3xl text-center block mb-[15px]">Login</span>
                <div className="text-field-container flex flex-col">
                    <input type="text" name="email" placeholder="example@example.com" className="mb-[10px] border border-slate-500 bg-slate-500 rounded-md p-[6px] outline-none" onChange={handleFormData} value={formData.email} required/>
                    <input type="password" name="password" className="border border-slate-500 bg-slate-500 rounded-md p-[6px] outline-none" placeholder="password" onChange={handleFormData} value={formData.password} required/>
                </div>
                <div className="flex justify-between mt-[15px]">
                    <span>Don't have an account!</span>
                    <Link to="/signup"><span className=" cursor-pointer">Signup</span></Link>
                </div>
                <button className=" text-lg bg-slate-500 mt-[10px] px-[10px] py-[5px] rounded-md hover:text-white w-full" onClick={handleLogin}>
                    { isLoading ? "Loading...":"Login"}
                </button>
            </div>
        </div>
    )
}

export default Login;