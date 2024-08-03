import { AboutCardType } from "../../types/AboutCardType"

const AboutCard = ({ src, name, speciality, desc }: AboutCardType) => {
    return (
        <div className="flex flex-col sm:flex-row items-center  gap-8 sm:bg-transparent bg-[#E6F6FE] p-4 rounded-lg">
            <img src={src} alt="" className="w-full" />
            <div className="space-y-8">
                <div className="flex flex-col sm:flow-root sm:items-center gap-2">
                    <h4 className="font-semibold text-2xl text-[#011632]">{name}</h4>
                    <span className="text-[#011632] text-[18px] tracking-tight">({speciality})</span>
                </div>
                <p className="text-[#3C4959]  text-[16px] font-normal max-w-[739px] tracking-tight">{desc}</p>
                <button className="bg-[#1376F8] px-6 py-3 rounded-lg text-white  ">Book an Appointment</button>
            </div>
        </div>
    )
}
export default AboutCard