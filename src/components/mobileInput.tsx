import { useEffect, useRef, useState } from "react";
import { countriesWithCodeNumber } from "../data/countries";

type countriesWithCodeNumberProps = {
    name: string;
    code: string;
    dial_code: string;
}
interface Props {
  country?: countriesWithCodeNumberProps[],
  register: any,
  returnedCountry: (selection: { name: string; code: string; dial_code: string;}) => void
}
function MobileInput({register,returnedCountry}: Props) {
    const [ countries, setCountries] = useState<countriesWithCodeNumberProps[]>(countriesWithCodeNumber)
    const [ selectedCountry, setSelectedCountry] = useState<countriesWithCodeNumberProps | null>(null)
    const [number ,setNumber ] = useState("")
    const [isOpen ,setIsOpen ] = useState(false)
    useEffect(()=>{
        const defaultCountry = countries.find(e => e.code === "AE") ?? countries[0];
        setSelectedCountry(defaultCountry)
        returnedCountry(defaultCountry)
    },[])


    const handleSearch = (e:any) => {
        if(e.target.value.length >0 ){
            const searchQuery = e.target.value.toLowerCase();
            const filtered = countriesWithCodeNumber.filter((country) =>{
                    const name = country.name.toLowerCase();
                    const code = country.dial_code.toLowerCase();
                    return name.includes(searchQuery) || code.includes(searchQuery)
            }
            );
            setCountries(filtered);
        }else{
            setCountries(countriesWithCodeNumber)
        }
       
    };
    const targetRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const handleClickOutside = (event:any) => {
        if (targetRef.current && !targetRef.current.contains(event.target)) {
            setIsOpen(false);
        }
        };
        if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        } else {
        document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);
    return ( <div ref={targetRef} className={`${"mobile-input"} items-center`}>
        <div  style={{minWidth:"50px"}} className={`flex items-center min-w-8 sm:min-w-12 ${isOpen && "cursor-pointer"}`} onClick={()=>{setIsOpen(!isOpen)}}>
            
            {/* {loading ? <div className="loader-dark0"></div> : */}
            <img className="w-5 h-4 object-cotaint  rounded" alt={"flag"} src={selectedCountry?.code ?`https://flagcdn.com/w320/${selectedCountry.code.toLowerCase()}.png` :""} />
            {/* } */}
            {<div className="flex cursor-pointer items-center">
                {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clipPath="url(#clip0_17_4651)">
                    <path d="M12 8L6 14L7.41 15.41L12 10.83L16.59 15.41L18 14L12 8Z" fill="#323232"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_17_4651">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clipPath="url(#clip0_17_4652)">
                        <path d="M16.59 8.58997L12 13.17L7.41 8.58997L6 9.99997L12 16L18 9.99997L16.59 8.58997Z" fill="#323232"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_17_4652">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>}
                
            </div>}
            
        </div>
        <div className="w-fit whitespace-nowrap">
            ( {selectedCountry && "dial_code" in selectedCountry && selectedCountry.dial_code} )
        </div>
        <div className="w-full">
            <input  placeholder="XX XX XX" {...register} value={number} onChange={(e)=>{
                register.onChange(e)
                console.log(e.target.value);
                setNumber(e.target.value)
                }} type="number" />
            
        </div>
        <ul className={`${isOpen?"block":"hidden"} ${"menu-countries"} `}>
            <li className="py-2">
                <input onChange={handleSearch} placeholder={"Search"} />
            </li>
            {countries.length>0 ? countries.map((ele)=>{
                const code = ele.code.toLowerCase()
                return <li onClick={()=>{setSelectedCountry(ele)
                    returnedCountry(ele)
                    setIsOpen(false)
                }} className="flex mb-2 gap-2 cursor-pointer hover:text-stone-700 details-country" key={`Countries_${ele.name}`}>
                <img className="w-5 h-4  rounded" alt={ele.name} src={`https://flagcdn.com/w320/${code}.png`} />
                <div >
                    {ele.name}
                </div>
                <div>{`(${ele.dial_code})`}</div>
            </li>
            }):<div className="flex justify-center py-4">
                <p>No Country founded</p>
                </div>}
        </ul>
    </div> );
}

export default MobileInput;