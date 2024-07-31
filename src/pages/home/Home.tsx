import { useRef } from "react"
import TestimonialCard from "../../components/cards/TestimonialCard";
import { Link } from "react-router-dom";
import BlogCard from "../../components/cards/BlogCard";
import Accordion from "../../components/accordion/Accordion";
import ServiceCard from "../../components/cards/ServiceCard";



const Home = () => {

    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const scrollContainerRef2 = useRef<HTMLDivElement>(null)


    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -305,
                behavior: 'smooth',
            });
        }
    };
    const scrollLeft2 = () => {
        if (scrollContainerRef2.current) {
            scrollContainerRef2.current.scrollBy({
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

    const scrollRight2 = () => {
        if (scrollContainerRef2.current) {
            scrollContainerRef2.current.scrollBy({
                left: 305,
                behavior: 'smooth',
            });
        }
    };
    return (
        <div className="pt-16  mx-auto">
            <div className="max-w-full">
                <div className="flex flex-col sm:flex-row items-start justify-between max-w-[1280px] mx-auto">
                    <div className="flex flex-col justify-start gap-8">
                        <h1 className="font-semibold text-[58px] tracking-tighter max-w-[687px]">Get ready for your best  ever Dental Experience!</h1>
                        <p className="text-[#3C4959] tracking-wide text-[18px] font-normal max-w-[531px]">We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.</p>
                        <div className="flex items-center gap-4">
                            <button className="bg-[#1376F8] px-6 py-3 rounded-lg text-white">Book an Appointment</button>
                            <div className="p-3 rounded-lg border border-[#1376F8]">
                                <img src="/assets/Calling.png" alt="" />
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <h2 className="text-[#1376F8] font-bold text-[14px]">Dental 24H Emergency</h2>
                                <p className="text-[#011632] font-medium text-[14px]">0900-78601</p>
                            </div>
                        </div>
                        <div className="shadow-md max-w-[374px] min-h-[117px] p-4">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <img src="/assets/thomas_daniel.png" alt="" />
                                        <div className="flex flex-col gap-1">
                                            <p className="text-[#011632] font-medium text-sm">Thomas daniel</p>
                                            <p className="text-[#011632] font-normal text-xs">Sr Dental</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src="/assets/linkedin.png" alt="" />
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[12px] text-[#011632] tracking-wide">Top Quailty dental treatment done by field experts, Highly Recommended for everyone</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <img src="/assets/hero.png" alt="" className="w-[695px] h-[626px] object-contain z-10" />
                        <img src="/assets/ellipse.png" alt="" className="absolute -top-[2%] -right-[8%] -z-10" />
                        <img src="/assets/ellipse.png" alt="" className="absolute top-[8%] right-[3%] w-[70%] h-[70%] -z-10" />

                        <img src="/assets/tooth.png" alt="" className="absolute top-[50%] -right-[10%] -z-10" />
                        <img src="/assets/tooth.png" alt="" className="absolute top-[0%] right-[7%] -z-10" />
                        <img src="/assets/tooth.png" alt="" className="absolute top-[45%] left-[12%] -z-10 -rotate-45" />


                        <img src="/assets/tooth.png" alt="" className="absolute top-[20%] right-[2%] -z-10 rotate-60" />
                        <img src="/assets/tooth.png" alt="" className="absolute top-[18%] left-[27%] -z-10 -rotate-45" />
                    </div>
                </div>
                <div className="bg-[#E6F6FE] w-full rounded-lg mx-auto py-16 grid grid-cols-1 sm:grid-cols-3 place-items-center max-w-[1280px]">
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
                </div>
                <div className="flex items-center justify-center gap-8 py-16">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[42px] max-w-[507px] font-semibold text-[#011632]">We’re welcoming new patients and can’t wait to meet you.</h2>
                        <p className="text-[#3C4959] max-w-[531px] text-[18px]">We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.</p>
                        <div className="rounded-lg">
                            <input type="text" placeholder="Enter your Phone Number" className="px-4 rounded-l-lg py-2 border border-[#CECECE]" />
                            <button className="px-4 py-2 bg-[#1376F8] border rounded-r-lg border-[#1376F8] text-white">Submit</button>
                        </div>
                    </div>
                    <div className="relative">
                        <img className=" z-10" src="/assets/boy.png" alt="" />
                        <img className="absolute -z-10 -right-8  -bottom-[-8%]" src="/assets/skyblue.png" alt="" />
                    </div>
                </div>
                <div className="bg-[#E6F6FE] w-full h-[554px] flex justify-center items-center gap-16 max-w-[1280px] mx-auto">
                    <div>
                        <img src="/assets/headphone.png" alt="" />
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-[42px] text-[#011632] font-semibold max-w-[522px]">Why choose Smile for all your dental treatments?</h2>
                        <p className="text-[#3C4959] max-w-[531px] text-[18px]">We use only the best quality materials on the market in order to provide the best products to our patients.</p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <img src="/assets/shield.png" alt="" />
                                <p>Top quality dental Team</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src="/assets/shield.png" alt="" />
                                <p>State of the art dental Services</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src="/assets/shield.png" alt="" />
                                <p>discount on all Dental treatment</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src="/assets/shield.png" alt="" />
                                <p>Enrollment is quick and easy</p>
                            </div>
                        </div>
                        <button className="bg-[#1376F8] px-6 py-3 rounded-lg text-white">Book an Appointment</button>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-16 py-16">
                    <div className="space-y-4">
                        <h2 className="text-[42px] max-w-[507px] font-semibold text-[#011632]">Leave your worries at the door and enjoy a healthier, more precise smile</h2>
                        <p className="text-[#3C4959] max-w-[531px] text-[18px]">We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.</p>
                        <button className="bg-[#1376F8] px-6 py-3 rounded-lg text-white">Book an Appointment</button>
                    </div>
                    <div className="relative">
                        <img className=" z-10" src="/assets/smile2.png" alt="" />
                        <img className="absolute -z-10 -right-6  -bottom-[-6%] h-[100%] w-[100%]" src="/assets/skyblue.png" alt="" />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <h2 className="text-[42px] tracking-wider text-center max-w-[629px] font-semibold text-[#011632]">We’re welcoming new patients and can’t wait to meet you.</h2>
                    <p className="text-[#3C4959] max-w-[463px] text-[18px] text-center">We use only the best quality materials on the market in order to provide the best products to our patients.</p>
                    <img src="/assets/video.png" alt="" />
                    <button className="bg-[#1376F8] px-6 py-3 rounded-lg text-white">Watch Playlist</button>
                </div>
                <div className="bg-[#E6F6FE] h-[753px] w-full flex flex-col items-center justify-center gap-4 my-16">
                    <div>
                        <h2 className="text-[42px] tracking-wider text-center max-w-[629px] font-semibold text-[#011632]">Meet Our Specialists</h2>
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
                <div className="flex flex-col items-center justify-center gap-8 py-16 max-w-[1280px] mx-auto">
                    <div>
                        <h2 className="text-[42px] tracking-wider text-center max-w-[629px] font-semibold text-[#011632]">Our Happy Clients</h2>
                        <p className="text-[#3C4959] max-w-[463px] text-[18px] text-center">We use only the best quality materials on the market in order to provide the best products to our patients.</p>
                    </div>
                    <div id="scrollContainer" ref={scrollContainerRef2} className="py-8 px-4 flex gap-6 items-center flex-row overflow-x-auto scroll-smooth w-full">

                        <TestimonialCard
                            name='Thomas daniel'
                            src='/assets/thomas_daniel2.png'
                            desc='Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.'

                        />
                        <TestimonialCard
                            name='Alena Alex'
                            src='/assets/alena.png'
                            desc='Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.'

                        />
                        <TestimonialCard
                            name='Thomas Edison'
                            src='/assets/thomas2.png'
                            desc='Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.'

                        />
                        <TestimonialCard
                            name='Thomas daniel'
                            src='/assets/thomas3.png'
                            desc='Phosfluorescently synergize covalent outsourcing through functional strategic theme areas. Assertively scale strategic portals without distinctive relationships. Holisticly cultivate tactical e-services before fully researched sources.'

                        />

                    </div>
                    <div className="flex itemc justify-center gap-2">
                        <button onClick={scrollLeft2} className="px-4 py-2 bg-black">
                            <img src="/assets/leftArrWhite.png" alt="" />
                        </button>
                        <button onClick={scrollRight2} className="px-4 py-2 bg-black">
                            <img src="/assets/rightArrWhite.png" alt="" />
                        </button>
                    </div>
                </div>
                <div className="space-y-16 flex justify-center items-center flex-col py-16 max-w-[1280px] mx-auto">
                    <div className="flex justify-between items-center w-full">
                        <div className="space-y-4">
                            <h2 className="text-[42px] tracking-wider  max-w-[629px] font-semibold text-[#011632]">News & Articles</h2>
                            <p className="text-[#3C4959] max-w-[455px] text-[18px] ">We use only the best quality materials on the market in order to provide the best products to our patients.</p>
                        </div>
                        <div>
                            <Link to={'/blogs'} className="bg-[#1376F8] px-6 py-3 rounded-lg text-white">View All</Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                        <BlogCard
                            src="/assets/blog1.png"
                            title="Care of your teeth"
                            desc="Lorem ipsum dolor sit amet consectetur."
                            author="Anita Jackson"
                        />
                        <BlogCard
                            src="/assets/blog2.png"
                            title="Care of your teeth"
                            desc="Lorem ipsum dolor sit amet consectetur."
                            author="Anita Jackson"
                        />
                        <BlogCard
                            src="/assets/blog3.png"
                            title="Care of your teeth"
                            desc="Lorem ipsum dolor sit amet consectetur."
                            author="Anita Jackson"
                        />
                        <BlogCard
                            src="/assets/blog4.png"
                            title="Care of your teeth"
                            desc="Lorem ipsum dolor sit amet consectetur."
                            author="Anita Jackson"
                        />
                        <BlogCard
                            src="/assets/blog5.png"
                            title="Care of your teeth"
                            desc="Lorem ipsum dolor sit amet consectetur."
                            author="Anita Jackson"
                        />
                        <BlogCard
                            src="/assets/blog6.png"
                            title="Care of your teeth"
                            desc="Lorem ipsum dolor sit amet consectetur."
                            author="Anita Jackson"
                        />
                        <BlogCard
                            src="/assets/blog7.png"
                            title="Care of your teeth"
                            desc="Lorem ipsum dolor sit amet consectetur."
                            author="Anita Jackson"
                        />
                        <BlogCard
                            src="/assets/blog8.png"
                            title="Care of your teeth"
                            desc="Lorem ipsum dolor sit amet consectetur."
                            author="Anita Jackson"
                        />
                    </div>
                    <button className="bg-[#1376F8] px-6 py-3 rounded-lg text-white text-center ">Checkout More</button>
                </div>
                <div className="flex flex-col items-center justify-center gap-8">
                    <div>
                        <h2 className="text-[42px] tracking-wider text-center max-w-[629px] font-semibold text-[#011632]">FAQS</h2>
                        <p className="text-[#3C4959] max-w-[463px] text-[18px] text-center">We use only the best quality materials on the market in order to provide the best products to our patients.</p>
                    </div>
                    <div>
                        <Accordion />
                    </div>
                </div>
                <div className="max-w-[1064px] mx-auto min-h-[392px] bg-[#011632] rounded-lg p-16 my-16">
                    <div className="flex items-center justify-between w-full">
                        <div className="space-y-4">
                            <h2 className="text-[42px] text-[#fff] font-semibold max-w-[692px] tracking-tight">Dental Website that's gonna shake the game rules up.</h2>
                            <p className="text-[#fff] max-w-[531px] text-[18px]">We use only the best quality materials on the market in order to provide the best products to our patients.</p>
                            <button className="bg-[#1376F8] px-6 py-3 rounded-lg text-white">Learn more</button>
                        </div>
                        <div>
                            <img src="/assets/banner.png" alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home