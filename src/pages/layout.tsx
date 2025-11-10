import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/nav";
import Sidebar from "../components/sidebar";
import Navigation from "../components/steps";
import image from "../assets/images/bg.png"
const Layout = () =>{
    const location = useLocation()

    return(<div>
        <div className="relative z-10">
            <Nav/>
            <div className="grid md:grid-cols-4 gap-4 layout !py-5">
                <div className="md:col-span-1 relative">
                    <Sidebar/>
                </div>
                <div className="md:col-span-3 card p-5 flex flex-col gap-10 bg-[var(--light)]">
                    {location.pathname !="/confirmation" && <div className="flex justify-center">
                        <Navigation/>
                    </div>}
                    
                    <Outlet/>
                </div>

            </div>
        </div>
        <div className="fixed bottom-0 left-0 -z-0"><img className="w-1/2" src={image} alt="Banner" /></div>
    </div>)
}
export default Layout;