import { TestimonialCardType } from "../../types/TestimonialCardType"

const TestimonialCard = ({ name, src, desc }: TestimonialCardType) => {
    return (
        <div className="max-w-[413px] min-h-[290px] shadow-md p-4 flex flex-col gap-4 rounded-lg w-full shrink-0">
            <div className="flex items-center gap-2">
                <img src={src} alt="" />
                <div className="flex flex-col gap-2">
                    <p className="text-[24px] text-[#011632] font-medium tracking-widest">{name}</p>
                    <div className="flex items-center gap-2">
                        <img src="/assets/star.png" alt="" />
                        <img src="/assets/star.png" alt="" />
                        <img src="/assets/star.png" alt="" />
                        <img src="/assets/star.png" alt="" />
                        <img src="/assets/star.png" alt="" />
                    </div>
                </div>
            </div>
            <div>
                <p className="text-[16px] text-[#3C4959] tracking-wider">
                    {desc}
                </p>
            </div>
        </div>
    )
}
export default TestimonialCard