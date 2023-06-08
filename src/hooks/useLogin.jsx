import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function useLogin(){
    const nav = useNavigate()
    const [user, setUser] = useState("")
    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(token){
            setUser(localStorage.getItem("username"))
        }else{
            nav("/login")
        }
    },[])
    return user
}