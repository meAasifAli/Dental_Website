import { Link, useLocation } from "react-router-dom"
import { IoGridOutline } from "react-icons/io5";
import Navlinks from "../links/Navlinks";
const Navbar = () => {
    const { pathname } = useLocation()
    return (
        <div className={`w-full pt-4 sm:pt-8 ${pathname === "/services" ? "bg-[#E6F6FE]" : "bg-[#fff]"}`}>
            <div className={`${pathname === '/services' ? "bg-white" : "bg-[#E6F6FE]"} w-full max-w-[1280px] h-[90px] mx-auto rounded-lg`}>
                <nav className={`flex items-center w-full justify-between sm:px-8 px-4`}>
                    <div>
                        <img src="/assets/logo.png" className="w-24 h-24 object-contain" alt="" />
                    </div>
                    <div className="hidden sm:flex items-center gap-4">
                        <Navlinks isFooter={false} />
                    </div>
                    <div className="hidden sm:flex items-center gap-4">
                        {
                            pathname === '/login' || pathname === "/signup" ? <>

                                <Link to={'/login'} className="text-[#011632] font-semibold text-[16px] tracking-wider">login</Link>
                                <Link to={'/signup'} className="bg-[#1376F8] text-white px-4 py-2 rounded-lg">signup</Link>
                            </> : <>

                                <img className="h-12 w-12 object-contain rounded-full" src='https://static.vecteezy.com/system/resources/thumbnails/019/900/322/small/happy-young-cute-illustration-face-profile-png.png' alt="err" />
                                <button className="bg-[#1376F8] text-white px-4 py-2 rounded-lg">Book Now</button>
                            </>
                        }
                    </div>
                    <div className="block sm:hidden bg-[#1376F8] p-2 rounded-lg">
                        <IoGridOutline color="white" />
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default Navbar