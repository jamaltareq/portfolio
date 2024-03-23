import { Outlet } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
export default function layOut() {
    return (
        <>
            <div className="bg-black text-white ">

                <NavBar />
                <div className="mt-5 pt-5">
                    <Outlet />
                </div>
                <Footer />
            </div>


        </>
    )
}