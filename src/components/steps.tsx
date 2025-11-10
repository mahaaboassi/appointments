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
    return (<div className="flex  xs:gap-2 steps items-center">
        <div className={`flex flex-col items-center gap-1 ${(active.valueOf() < 3) ? 'active' : ''}`}>
            <span>01</span>
            <div className="circle"></div>
            <div className="title text-center text-[9px] 3xs:text-xs xs:text-sm md:text-md">Your Appointments</div>
        </div>
        <div className="w-[30px] xs:w-[50px] md:w-[100px] h-1 bg-[var(--grey-4)] rounded"></div>
        <div className={`flex flex-col items-center gap-1 ${(active.valueOf() >1 && active.valueOf() < 3)  ? 'active' : ''}`}>
            <div className="title text-center text-[9px] 3xs:text-xs xs:text-sm md:text-md">Your Details</div>
            <div className="circle"></div>
            <span>02</span>
        </div>
        <div className={`w-[30px] xs:w-[50px] md:w-[100px] h-1 bg-[var(--grey-4)] rounded ${active === 3 ? 'active' : ''}`}></div>
        <div className="flex flex-col items-center gap-1">
            <span>03</span>
            <div className="circle"></div>
            <div className="title text-center text-[9px] 3xs:text-xs xs:text-sm md:text-md">Confirmation</div>
        </div>
    </div>);
}   
export default Steps;