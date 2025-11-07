import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Steps = () => {
    const [ active , setActive ] =  useState<Number>(1);
    const location = useLocation()
    useEffect(()=>{
        if(location.pathname === "/"){
            setActive(1)
        }else if(location.pathname === "/details"){
            setActive(2)
        }else if(location.pathname === "/confirmation"){
            setActive(3)
        }   
    },[location])
    return (<div className="flex gap-2 steps items-center">
        <div className={`flex flex-col items-center gap-1 ${active === 1 ? 'active' : ''}`}>
            <span>01</span>
            <div className="circle"></div>
            <div className="title">Your Appointments</div>
        </div>
        <div className="w-[100px] h-1 bg-[var(--grey-4)] rounded"></div>
        <div className={`flex flex-col items-center gap-1 ${active === 2 ? 'active' : ''}`}>
            <div className="title">Your Details</div>
            <div className="circle"></div>
            <span>02</span>
        </div>
        <div className={`w-[100px] h-1 bg-[var(--grey-4)] rounded ${active === 3 ? 'active' : ''}`}></div>
        <div className="flex flex-col items-center gap-1">
            <span>03</span>
            <div className="circle"></div>
            <div className="title">Confirmation</div>
        </div>
    </div>);
}   
export default Steps;