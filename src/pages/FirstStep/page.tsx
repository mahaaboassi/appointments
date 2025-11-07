import { useState } from "react";
import { getDaysBetween, getSeparatedWeeks, getWeeksFromFridayToThursday } from "../../functions";

type Item = {
    id: number;
    name: string;
};
const data: Item[] = [
    {id: 1, name: "Botox"},
    {id: 2, name: "Fillers"}, 
    {id: 3, name: "Thread Lifts"}, 
    {id: 4, name: "HIFU"}, 
    {id: 5, name: "Laser Skin Toning"}, 
    {id: 6, name: "Cryo T-Shock"}, 
    {id: 7, name: "Laser Hair Reduction"}, 
    {id: 8, name: "Dermaplaning"}, 
    {id: 9, name: "MediFacials"},     
]
const FirstStep = () => {
    const [service, setService] =  useState<Item | null>(null);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const bla = getSeparatedWeeks(tomorrow);
    console.log(bla);
    
        
    return (<div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5 items-center">
            <h2 className="font-medium text-xl">What type of appointment do you need?</h2>
            <div className="flex flex-wrap gap-2 items-center justify-center text-sm">
                {data.map((item)=>(
                    <div onClick={()=>setService(item)} key={`Service_${item.id}`} className={`cursor-pointer border border-[var(--yellow-2)] p-4 hover:bg-[var(--yellow-2)] hover:text-white rounded-md  text-center  transition-all duration-300 ease-in-out  ${service?.id === item.id ? 'bg-[var(--yellow-2)] text-white' : ''}`}>
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
        <div className="flex flex-col gap-5 items-center">
            <h2 className="font-medium text-xl">Find an appointment</h2>
            <div className="flex flex-col gap-3 w-full ">
                {/* This Week */}
                <div className="w-full ">
                    <div className="w-full p-3 rounded flex justify-between items-center cursor-pointer gap-4 bg-[var(--yellow-3)]">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                <g clip-path="url(#clip0_1134_2114)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.305972 2.39095H4.01364L4.00873 2.32747V0.672201C4.00873 0.302734 4.39487 0 4.86938 0C5.34224 0 5.73002 0.304362 5.73002 0.672201V2.32747L5.72512 2.39095H12.0393L12.0344 2.32747V0.672201C12.0344 0.302734 12.4205 0 12.8934 0C13.3662 0 13.754 0.304362 13.754 0.672201V2.32747L13.7491 2.39095H17.694C17.8626 2.39095 18 2.52767 18 2.69531V5.86263C18 6.03027 17.8626 6.16699 17.694 6.16699H0.305972C0.137442 6.16536 0 6.02865 0 5.861V2.69368C0 2.52604 0.137442 2.39095 0.305972 2.39095ZM0.0769021 6.86686H17.9247C17.9673 6.86686 18 6.90104 18 6.94173V19.9235C18 19.9642 17.9656 19.9984 17.9247 19.9984H0.0769021C0.0359967 19.9984 0 19.9642 0 19.9235V6.94336C0 6.90104 0.0343605 6.86686 0.0769021 6.86686ZM1.3466 8.13314H16.9021C16.9872 8.13314 17.0559 8.20638 17.0559 8.28613V18.7158C17.0559 18.7956 16.9823 18.8688 16.9021 18.8688H1.27134C1.19116 18.8688 1.11753 18.8005 1.11753 18.7158V8.35938C1.11753 8.19173 1.25498 8.05664 1.42187 8.05664L1.3466 8.13314ZM12.8181 4.86165C13.291 4.86165 13.6788 4.55729 13.6788 4.18945V2.45931L13.6738 2.39258H11.9624L11.9575 2.45931V4.11296C11.9575 4.48242 12.3436 4.78516 12.8165 4.78516L12.8181 4.86165ZM4.79247 4.86165C5.26534 4.86165 5.65312 4.55729 5.65312 4.18945V2.45931L5.64821 2.39258H3.93837L3.93346 2.45931V4.11296C3.93346 4.48242 4.31961 4.78516 4.79247 4.78516V4.86165Z" fill="black"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1134_2114">
                                <rect width="18" height="20" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <h3 className="text-md font-medium">This Week</h3>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="16" viewBox="0 0 27 16" fill="none">
                                <g clip-path="url(#clip0_1134_2111)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.9726 15.3268C0.557362 17.301 -1.09964 14.493 0.7979 12.5481L11.3904 1.34196C13.1555 -0.447469 13.8444 -0.447469 15.6095 1.34196L26.202 12.5481C28.0996 14.493 26.4426 17.301 23.0273 15.3268L13.4999 10.1222L3.9726 15.3268Z" fill="black"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1134_2111">
                                <rect width="16" height="27" fill="white" transform="translate(0 16) rotate(-90)"/>
                                </clipPath>
                                </defs>
                                </svg>
                        </div>
                        
                    </div>
                </div>
                {/* Next Week */}
                <div className="w-full">
                    <div className="w-full p-3 rounded flex justify-between cursor-pointer items-center gap-4 bg-[var(--yellow-3)]">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                <g clip-path="url(#clip0_1134_2114)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.305972 2.39095H4.01364L4.00873 2.32747V0.672201C4.00873 0.302734 4.39487 0 4.86938 0C5.34224 0 5.73002 0.304362 5.73002 0.672201V2.32747L5.72512 2.39095H12.0393L12.0344 2.32747V0.672201C12.0344 0.302734 12.4205 0 12.8934 0C13.3662 0 13.754 0.304362 13.754 0.672201V2.32747L13.7491 2.39095H17.694C17.8626 2.39095 18 2.52767 18 2.69531V5.86263C18 6.03027 17.8626 6.16699 17.694 6.16699H0.305972C0.137442 6.16536 0 6.02865 0 5.861V2.69368C0 2.52604 0.137442 2.39095 0.305972 2.39095ZM0.0769021 6.86686H17.9247C17.9673 6.86686 18 6.90104 18 6.94173V19.9235C18 19.9642 17.9656 19.9984 17.9247 19.9984H0.0769021C0.0359967 19.9984 0 19.9642 0 19.9235V6.94336C0 6.90104 0.0343605 6.86686 0.0769021 6.86686ZM1.3466 8.13314H16.9021C16.9872 8.13314 17.0559 8.20638 17.0559 8.28613V18.7158C17.0559 18.7956 16.9823 18.8688 16.9021 18.8688H1.27134C1.19116 18.8688 1.11753 18.8005 1.11753 18.7158V8.35938C1.11753 8.19173 1.25498 8.05664 1.42187 8.05664L1.3466 8.13314ZM12.8181 4.86165C13.291 4.86165 13.6788 4.55729 13.6788 4.18945V2.45931L13.6738 2.39258H11.9624L11.9575 2.45931V4.11296C11.9575 4.48242 12.3436 4.78516 12.8165 4.78516L12.8181 4.86165ZM4.79247 4.86165C5.26534 4.86165 5.65312 4.55729 5.65312 4.18945V2.45931L5.64821 2.39258H3.93837L3.93346 2.45931V4.11296C3.93346 4.48242 4.31961 4.78516 4.79247 4.78516V4.86165Z" fill="black"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1134_2114">
                                <rect width="18" height="20" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <h3 className="text-md font-medium">Next Week</h3>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="16" viewBox="0 0 27 16" fill="none">
                                <g clip-path="url(#clip0_1134_2111)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.9726 15.3268C0.557362 17.301 -1.09964 14.493 0.7979 12.5481L11.3904 1.34196C13.1555 -0.447469 13.8444 -0.447469 15.6095 1.34196L26.202 12.5481C28.0996 14.493 26.4426 17.301 23.0273 15.3268L13.4999 10.1222L3.9726 15.3268Z" fill="black"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1134_2111">
                                <rect width="16" height="27" fill="white" transform="translate(0 16) rotate(-90)"/>
                                </clipPath>
                                </defs>
                                </svg>
                        </div>
                        
                    </div>
                </div>
                {/* Custom Date */}
                <div className="w-full">
                    <div className="w-full p-3 rounded flex justify-between cursor-pointer items-center gap-4 bg-[var(--yellow-3)]">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                <g clip-path="url(#clip0_1134_2114)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.305972 2.39095H4.01364L4.00873 2.32747V0.672201C4.00873 0.302734 4.39487 0 4.86938 0C5.34224 0 5.73002 0.304362 5.73002 0.672201V2.32747L5.72512 2.39095H12.0393L12.0344 2.32747V0.672201C12.0344 0.302734 12.4205 0 12.8934 0C13.3662 0 13.754 0.304362 13.754 0.672201V2.32747L13.7491 2.39095H17.694C17.8626 2.39095 18 2.52767 18 2.69531V5.86263C18 6.03027 17.8626 6.16699 17.694 6.16699H0.305972C0.137442 6.16536 0 6.02865 0 5.861V2.69368C0 2.52604 0.137442 2.39095 0.305972 2.39095ZM0.0769021 6.86686H17.9247C17.9673 6.86686 18 6.90104 18 6.94173V19.9235C18 19.9642 17.9656 19.9984 17.9247 19.9984H0.0769021C0.0359967 19.9984 0 19.9642 0 19.9235V6.94336C0 6.90104 0.0343605 6.86686 0.0769021 6.86686ZM1.3466 8.13314H16.9021C16.9872 8.13314 17.0559 8.20638 17.0559 8.28613V18.7158C17.0559 18.7956 16.9823 18.8688 16.9021 18.8688H1.27134C1.19116 18.8688 1.11753 18.8005 1.11753 18.7158V8.35938C1.11753 8.19173 1.25498 8.05664 1.42187 8.05664L1.3466 8.13314ZM12.8181 4.86165C13.291 4.86165 13.6788 4.55729 13.6788 4.18945V2.45931L13.6738 2.39258H11.9624L11.9575 2.45931V4.11296C11.9575 4.48242 12.3436 4.78516 12.8165 4.78516L12.8181 4.86165ZM4.79247 4.86165C5.26534 4.86165 5.65312 4.55729 5.65312 4.18945V2.45931L5.64821 2.39258H3.93837L3.93346 2.45931V4.11296C3.93346 4.48242 4.31961 4.78516 4.79247 4.78516V4.86165Z" fill="black"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1134_2114">
                                <rect width="18" height="20" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                            <h3 className="text-md font-medium">Let me pick a date</h3>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="16" viewBox="0 0 27 16" fill="none">
                                <g clip-path="url(#clip0_1134_2111)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.9726 15.3268C0.557362 17.301 -1.09964 14.493 0.7979 12.5481L11.3904 1.34196C13.1555 -0.447469 13.8444 -0.447469 15.6095 1.34196L26.202 12.5481C28.0996 14.493 26.4426 17.301 23.0273 15.3268L13.4999 10.1222L3.9726 15.3268Z" fill="black"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1134_2111">
                                <rect width="16" height="27" fill="white" transform="translate(0 16) rotate(-90)"/>
                                </clipPath>
                                </defs>
                                </svg>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>)
}   
export default FirstStep;