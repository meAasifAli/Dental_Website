
import Navlinks from "../links/Navlinks"

const Footer = () => {
    return (
        <footer className="flex flex-col w-full max-w-[1280px] gap-4 mx-auto py-8">
            <div className="flex items-center justify-between">
                <div>
                    <img src="/assets/logo.png" className="w-24 h-24 object-contain" alt="" />
                </div>
                <div className="space-x-4">
                    <Navlinks isFooter={true} />
                </div>
            </div>
            <hr className="w-full bg-[#011632] h-0" />
            <div className="flex items-center justify-between">
                <p className="text-sm text-[#011632] tracking-wider">All rights reserved ® uifry.com | Terms and conditions apply!</p>
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