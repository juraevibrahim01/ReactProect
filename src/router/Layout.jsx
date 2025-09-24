import { Outlet } from "react-router";
import SideBar from "../components/sidebar"

export function Layout () {
    
    return (
        <>
            <SideBar/>
            <div className="app_conteiner">
                <Outlet/>
            </div>
        </>
    )
}
