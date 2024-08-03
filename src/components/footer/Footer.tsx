
import { IoGridOutline } from "react-icons/io5"
import Navlinks from "../links/Navlinks"

const Footer = () => {
    return (
        <footer className="flex flex-col w-full max-w-[1280px] gap-2 sm:gap-4 mx-auto py-8 px-4 sm:px-0">
            <div className="flex items-center justify-between">
                <div>
                    <img src="/assets/logo.png" className="w-24 h-24 object-contain" alt="" />
                </div>
                <div className="hidden sm:block space-x-4">
                    <Navlinks isFooter={true} />
                </div>
                <div className="block sm:hidden bg-[#011632] p-2 rounded-lg">
                    <IoGridOutline color="white" />
                </div>
            </div>
            <hr className="w-full bg-[#011632] h-0 " />
            <div className="flex items-center justify-between mt-2 sm:mt-0">
                <p className="hidden sm:flex text-sm text-[#011632] tracking-wider">All rights reserved ® uifry.com | Terms and conditions apply!</p>
                <p className="block sm:hidden text-lg font-semibold text-[#011632] tracking-wider">follow us</p>
                <div className="flex items-center gap-4">
                    <img src="/assets/facebook2.png" alt="" />
                    <img src="/assets/instagram.png" alt="" />
                    <img src="/assets/youtube.png" alt="" />
                    <img src="/assets/linkedin2.png" alt="" />
                    <img src="/assets/twitter.png" alt="" />
                </div>
            </div>
        </footer>
    )
}
export default Footer