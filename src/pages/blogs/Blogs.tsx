import { useRef } from "react";

import AccordionComponent from "../../components/accordion/Accordion";
import BlogCard from "../../components/cards/BlogCard";

const Blogs = () => {
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
                <div className="py-16 max-w-[1280px] mx-auto space-y-16">
                    <div className="flex flex-col items-center justify-center px-4 sm:px-0">
                        <div className="space-y-2 flex flex-col gap-4 items-center justify-center">
                            <div className="flex flex-col gap-0">
                                <h1 className="font-semibold text-[42px] sm:text-[58px] tracking-tighter max-w-[687px]">Blogs</h1>
                                <img src="/assets/underline.png" alt="" />
                            </div>
                            <p className="text-[#3C4959] tracking-wide text-center text-[18px] font-normal max-w-[531px]">We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.</p>
                        </div>
                    </div>
                    <div className="px-4 sm:px-0">
                        <div id="scrollContainer" ref={scrollContainerRef} className="py-8 px-4 flex gap-6 items-center flex-row overflow-x-auto scroll-smooth w-full">
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
                        <div className="flex itemc justify-center gap-2">
                            <button onClick={scrollLeft} className="px-4 py-1 bg-white">
                                <img src="/assets/leftArrow.png" alt="" />
                            </button>
                            <button onClick={scrollRight} className="px-4 py-1 bg-white">
                                <img src="/assets/rightArrow.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="space-y-8 px-4 sm:px-0 py-16 max-w-[1280px] mx-auto flex flex-col justify-center items-center">
                <div className="flex flex-col gap-0">
                    <h1 className="font-semibold text-[58px] tracking-tighter max-w-[687px]">Articles</h1>
                    <img src="/assets/underline.png" alt="" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 justify-items-center gap-8">
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
                <button className="bg-[#1376F8] px-6 py-3 rounded-lg text-white">checkout more</button>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 max-w-[1280px] mx-auto py-16 px-4 sm:px-0">
                <h2 className="sm:text-[42px] text-[36px] tracking-wider text-center max-w-[752px] font-semibold text-[#011632]">We’re welcoming new patients and can’t wait to meet you.</h2>
                <p className="text-[#3C4959] max-w-[463px] text-[18px] text-center">We use only the best quality materials on the market in order to provide the best products to our patients.</p>
                <img src="/assets/video.png" alt="" />
                <button className="bg-[#1376F8] px-6 py-3 rounded-lg text-white">Watch Playlist</button>
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
export default Blogs