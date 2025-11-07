import { Outlet } from "react-router-dom";
import Nav from "../components/nav";
import Sidebar from "../components/sidebar";
import Navigation from "../components/steps";

const Layout = () =>{
    return(<div>
        <Nav/>
        <div className="grid grid-cols-4 gap-4 layout !py-5">
            <div className="col-span-1">
                <Sidebar/>
            </div>
            <div className="col-span-3 card p-5 flex flex-col gap-10">
                <div className="flex justify-center">
                    <Navigation/>
                </div>
                
                <Outlet/>
            </div>

        </div>
    </div>)
}
export default Layout;