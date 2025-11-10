import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/qilume_logo.png"
const Confirmation = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem("confirm")) navigate("/")
    },[])

    return (<div className="flex flex-col gap-10 py-20">
        <div className="flex flex-col gap-5 items-center ">
            <div className="flex justify-center">
                <img className="object-contain w-[250px] md:w-[400px]" src={logo} alt="Qilume Logo" />
            </div>
            <h2 className="font-medium text-md md:text-xl text-center flex gap-2 ">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="33" viewBox="0 0 36 33" fill="none">
                    <g clip-path="url(#clip0_1136_4663)">
                    <path d="M4.10112 0H21.9813C21.1387 0.973492 20.3751 1.92757 19.6862 2.85573H4.10112C3.75455 2.85573 3.43913 2.99765 3.21124 3.2248C2.97595 3.46223 2.84381 3.78354 2.84372 4.1185V28.8816C2.84372 29.2253 2.98716 29.5404 3.21553 29.7698C3.44503 30.0002 3.76045 30.1443 4.10112 30.1443H31.8988C32.2374 30.1443 32.5517 29.9991 32.7817 29.7681C33.0117 29.5372 33.1562 29.2215 33.1562 28.8816V14.9364C34.1115 14.5481 35.0596 14.1422 36 13.719V28.8816C36 30.011 35.5352 31.0417 34.7925 31.7874C34.0499 32.5332 33.0235 33 31.8988 33H4.10112C2.9764 33 1.94794 32.5354 1.20473 31.789C0.463711 31.0449 0 30.0148 0 28.8816V4.1185C0 1.85689 1.84908 0 4.10112 0Z" fill="#333333"/>
                    <path d="M9.66234 11.8254L14.0703 11.7671C14.205 11.7654 14.3374 11.8025 14.4519 11.874C15.3433 12.3915 16.1843 12.9818 16.9683 13.6477C17.5273 14.1236 18.0554 14.6349 18.5492 15.1786C20.0941 12.7206 21.9647 10.213 23.9287 7.86073C26.3582 4.95163 28.9461 2.26529 31.2476 0.192553C31.3774 0.0756633 31.5456 0.0111041 31.7199 0.0112987L35.0999 0.00854492C35.4922 0.00854492 35.8109 0.328547 35.8109 0.722476C35.8109 0.916793 35.7329 1.09381 35.6072 1.22218C32.4916 4.69962 29.2949 8.68418 26.3985 12.7665C23.7203 16.5417 21.2941 20.406 19.4214 24.0366C19.2419 24.3858 18.8136 24.5234 18.466 24.3432C18.3169 24.266 18.2 24.1383 18.136 23.9827C17.1107 21.78 15.8823 19.7515 14.4153 17.9329C12.9467 16.1128 11.2341 14.4982 9.24264 13.1254C8.9197 12.9041 8.83645 12.46 9.05674 12.1357C9.1975 11.9285 9.42911 11.8194 9.66234 11.8254Z" fill="#01A601"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1136_4663">
                    <rect width="36" height="33" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                </div>
                Thank you </h2>
            <p className="font-medium text-sm md:text-lg text-center">We’ll get in touch with you soon.</p>
            <p className="text-center text-sm md:text-lg">Would you like to know more about <Link className="underline" to="https://www.qilumeaesthetics.com/" >Qilume</Link>?</p>

        </div>
        
    </div>)
}   
export default Confirmation;