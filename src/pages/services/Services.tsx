import { useRef } from "react"
import ServiceCard from "../../components/cards/ServiceCard"
import AccordionComponent from "../../components/accordion/Accordion";


const Services = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -305,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 305,
                behavior: 'smooth',
            });
        }
    };
    return (
        <>
            <div className="w-full bg-[#E6F6FE] py-2">
                <div className="py-16 max-w-[1280px] mx-auto space-y-16 px-4 sm:px-0">
                    <div className="flex flex-col items-center justify-center">
                        <div className="space-y-4 flex flex-col items-center justify-center">
                            <div className="flex flex-col gap-0">
                                <h1 className="font-semibold text-[42px] sm:text-[58px] tracking-tighter max-w-[687px]">Services</h1>
                                <img src="/assets/underline.png" alt="" />
                            </div>
                            <p className="text-[#3C4959] tracking-wide text-center text-[18px] font-normal max-w-[531px]">We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <ServiceCard
                            src="/assets/teeth.png"
                            title="Root Canal Treatment"
                            desc="Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth."
                        />
                        <ServiceCard
                            src="/assets/smile.png"
                            title="Cosmetic Dentist"
                            desc="Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile."
                        />
                        <ServiceCard
                            src="/assets/implant.png"
                            title="Dental Implants"
                            desc="A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge."
                        />
                        <ServiceCard
                            src="/assets/whitening.png"
                            title="Teeth Whitening"
                            desc="It's never been easier to brighten your smile at home. There are all kinds of products you can try."
                        />
                        <ServiceCard
                            src="/assets/emergency.png"
                            title="Emergency Dentistry"
                            desc="In general, any dental problem that needs immediate treatment to stop bleeding, alleviate severe pain."
                        />
                        <ServiceCard
                            src="/assets/prevention.png"
                            title="Prevention"
                            desc="Preventive dentistry is dental care that helps maintain good oral health. a combination of regular dental."
                        />

                    </div>
                </div>
                <div className="sm:max-w-[1440px] max-w-full  mx-auto min-h-[392px] bg-[#011632] rounded-lg sm:p-16 p-4 my-16">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-16 w-full">
                        <div className="space-y-4">
                            <h2 className="sm:text-[42px] text-[36px] text-[#fff] font-semibold max-w-[692px] tracking-tight">Leave your worries at the door and enjoy a healthier, more precise smile</h2>
                            <p className="text-[#fff] max-w-[531px] text-[18px]">We use only the best quality materials on the market in order to provide the best products to our patients.</p>
                            <button className="bg-[#1376F8] px-6 py-3 rounded-lg text-white">Learn more</button>
                        </div>
                        <form className="max-w-[414px] bg-white rounded-lg p-4 space-y-4">
                            <h4 className="font-semibold text-[24px] text-center mb-4">Request Appointment?</h4>
                            <input type="text" placeholder="Full Name" className="w-full px-4 py-2 rounded-lg border border-[#E0E0E0] focus:outline-none" />
                            <input type="text" placeholder=" phone Number" className="w-full px-4 py-2 rounded-lg border border-[#E0E0E0] focus:outline-none" />
                            <input type="email" placeholder="Email Address" className="w-full px-4 py-2 rounded-lg border border-[#E0E0E0] focus:outline-none" />
                            <button className="bg-[#1376F8] px-6 py-3 rounded-lg text-white w-full ">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 max-w-[1280px] mx-auto py-16 px-4 sm:px-0">
                <h2 className="sm:text-[42px] text-[36px] tracking-wider sm:text-center max-w-[752px] font-semibold text-[#011632]">We’re welcoming new patients and can’t wait to meet you.</h2>
                <p className="text-[#3C4959] max-w-[463px] text-[18px] sm:text-center">We use only the best quality materials on the market in order to provide the best products to our patients.</p>
                <img src="/assets/video.png" alt="" />
                <button className="bg-[#1376F8] px-6 py-3 rounded-lg text-white">Watch Playlist</button>
            </div>
            <div className="bg-[#E6F6FE] h-[753px] w-full flex flex-col items-center justify-center gap-4 max-w-full mx-auto py-16 px-4 sm:px-0">
                <div>
                    <h2 className="sm:text-[42px] text-[36px] tracking-wider text-center max-w-[629px] font-semibold text-[#011632]">Meet Our Specialists</h2>
                    <p className="text-[#3C4959] max-w-[463px] text-[18px] text-center">We use only the best quality materials on the market in order to provide the best products to our patients.</p>
                </div>
                <div id="scrollContainer" ref={scrollContainerRef} className="py-8 px-4 flex gap-6 items-center flex-row overflow-x-auto scroll-smooth w-full">

                    <div className="w-[305px] h-[340px] shrink-0">
                        <img className="w-[305px] h-[340px] object-contain" src="/assets/jim2.png" alt="" />
                    </div>
                    <div className="w-[305px] h-[340px] shrink-0">
                        <img className="w-[305px] h-[340px] object-contain" src="/assets/wade.png" alt="" />
                    </div>
                    <div className="w-[305px] h-[340px] shrink-0">
                        <img className="w-[305px] h-[340px] object-contain" src="/assets/jenny.png" alt="" />
                    </div>
                    <div className="w-[305px] h-[340px] shrink-0">
                        <img className="w-[305px] h-[340px] object-contain" src="/assets/jacob2.png" alt="" />
                    </div>
                    <div className="w-[305px] h-[340px] shrink-0">
                        <img className="w-[305px] h-[340px] object-contain" src="/assets/jim2.png" alt="" />
                    </div>
                    <div className="w-[305px] h-[340px] shrink-0">
                        <img className="w-[305px] h-[340px] object-contain" src="/assets/wade.png" alt="" />
                    </div>
                    <div className="w-[305px] h-[340px] shrink-0">
                        <img className="w-[305px] h-[340px] object-contain" src="/assets/jenny.png" alt="" />
                    </div>
                    <div className="w-[305px] h-[340px] shrink-0">
                        <img className="w-[305px] h-[340px] object-contain" src="/assets/jacob2.png" alt="" />
                    </div>
                    <div className="w-[305px] h-[340px] shrink-0">
                        <img className="w-[305px] h-[340px] object-contain" src="/assets/jim2.png" alt="" />
                    </div>
                    <div className="w-[305px] h-[340px] shrink-0">
                        <img className="w-[305px] h-[340px] object-contain" src="/assets/wade.png" alt="" />
                    </div>
                    <div className="w-[305px] h-[340px] shrink-0">
                        <img className="w-[305px] h-[340px] object-contain" src="/assets/jenny.png" alt="" />
                    </div>
                    <div className="w-[305px] h-[340px] shrink-0">
                        <img className="w-[305px] h-[340px] object-contain" src="/assets/jacob2.png" alt="" />
                    </div>
                    <div className="w-[305px] h-[340px] shrink-0">
                        <img className="w-[305px] h-[340px] object-contain" src="/assets/jim2.png" alt="" />
                    </div>
                    <div className="w-[305px] h-[340px] shrink-0">
                        <img className="w-[305px] h-[340px] object-contain" src="/assets/wade.png" alt="" />
                    </div>
                    <div className="w-[305px] h-[340px] shrink-0">
                        <img className="w-[305px] h-[340px] object-contain" src="/assets/jenny.png" alt="" />
                    </div>
                    <div className="w-[305px] h-[340px] shrink-0">
                        <img className="w-[305px] h-[340px] object-contain" src="/assets/jacob2.png" alt="" />
                    </div>

                </div>
                <div className="flex itemc justify-center gap-2">
                    <button onClick={scrollLeft} className="px-4 py-1 bg-white">
                        <img src="/assets/leftArrow.png" alt="" />
                    </button>
                    <button onClick={scrollRight} className="px-4 py-1 bg-white">
                        <img src="/assets/rightArrow.png" alt="" />
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 max-w-[1280px] mx-auto py-16 px-4 sm:px-0">
                <div>
                    <h2 className="text-[42px] tracking-wider text-center max-w-[629px] font-semibold text-[#011632]">FAQS</h2>
                    <p className="text-[#3C4959] max-w-[463px] text-[18px] text-center">We use only the best quality materials on the market in order to provide the best products to our patients.</p>
                </div>
                <div>
                    <AccordionComponent />
                </div>
            </div>
            <div className="max-w-[1280px] mx-auto min-h-[392px] bg-[#011632] rounded-lg p-4 sm:p-16 my-16">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-16">
                    <div className="space-y-4">
                        <h2 className="sm:text-[42px] text-[36px] text-[#fff] font-semibold max-w-[752px] tracking-tight">Dental Website that's gonna shake the game rules up.</h2>
                        <p className="text-[#fff] max-w-[531px] text-[18px]">We use only the best quality materials on the market in order to provide the best products to our patients.</p>
                        <button className="bg-[#1376F8] px-6 py-3 rounded-lg text-white">Learn more</button>
                    </div>
                    <div>
                        <img src="/assets/banner.png" alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}
export default Services