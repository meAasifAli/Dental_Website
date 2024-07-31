import { HomeCardType } from "../../types/HomeCardType"



const ServiceCard = ({ src, title, desc }: HomeCardType) => {
    return (
        <div className="max-w-[387px] min-h-[300px] bg-white rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 ease-linear shadow-lg flex justify-center items-center flex-col gap-4 px-4">

            <img src={src} alt="err" className="p-2 text-white bg-[#25B4F8] rounded-full object-contain w-[20%] h-[20%]" />

            <h4 className="text-[24px] font-medium text-[#011632]">{title}</h4>
            <p className="text-[#3C4959] text-[18px] font-normal tracking-wide text-center">{desc}</p>
            <div className="flex items-center gap-2">
                <p className="text-[#011632] font-medium underline text-[16px]">Learn More</p>
                <img src="/assets/arrowright.png" alt="" />
            </div>
        </div>
    )
}
export default ServiceCard