import { ContactCardType } from "../../types/ContactCardType"

const ContactCard = ({ icon, label, desc }: ContactCardType) => {
    return (
        <div className="flex items-center gap-4 bg-white p-2 rounded-lg">
            <div className="p-3 bg-[#1376F8] rounded-full">
                {icon}
            </div>
            <div className="space-y-2">
                <p className="text-lg font-medium text-[#011632] tracking-normal">{label}</p>
                <span className="text-[#3C4959] font-normal text-[16px] tracking-normal">{desc}</span>
            </div>
        </div>
    )
}
export default ContactCard