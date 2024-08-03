import AccordionComponent from "../../components/accordion/Accordion"
import { MdOutlineTimer } from "react-icons/md";
import ContactCard from "../../components/cards/ContactCard";
import { MdOutlineEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { MdOutlineChatBubbleOutline } from "react-icons/md";


const Contact = () => {
    return (
        <>
            <div className="w-full bg-[#E6F6FE] py-2">
                <div className="py-16 px-4 sm:px-0 max-w-[1280px] mx-auto space-y-16">
                    <div className="flex flex-col items-center justify-center">
                        <div className="space-y-2 flex flex-col items-center justify-center">
                            <div className="flex flex-col gap-0">
                                <h1 className="font-semibold sm:text-[58px] text-[42px] tracking-tighter max-w-[687px]">Get in Touch</h1>
                                <img src="/assets/underline.png" alt="" />
                            </div>
                            <p className="text-[#3C4959] tracking-wide text-center text-[18px] font-normal max-w-[531px]">Book an Appointment to treat your teeth right now.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-0 max-w-[1280px] mx-auto">
                        <div className="flex flex-col  max-w-[503px] mx-auto">
                            <img src="/assets/map.png" alt="" />
                            <div className="space-y-6">
                                <ContactCard
                                    icon={<MdOutlineTimer color="white" size={25} />}
                                    label="Office Timings"
                                    desc="Monday - Saturday (9:00am to 5pm) Sunday (Closed)"
                                />
                                <ContactCard
                                    icon={<MdOutlineEmail color="white" size={25} />}
                                    label="Email Address"
                                    desc="Smile01@gmail.com"
                                />
                                <ContactCard
                                    icon={<MdPhone color="white" size={25} />}
                                    label="Phone Number"
                                    desc="0900-78601"
                                />
                                <ContactCard
                                    icon={<MdOutlineChatBubbleOutline color="white" size={25} />}
                                    label="Live Chat"
                                    desc="+1-2064512559"
                                />
                            </div>
                        </div>
                        <form className="flex flex-col gap-4 border-2 border-[#25B4F8] rounded-lg p-4">
                            <div className="flex items-center gap-4">
                                <div>
                                    <label>First Name</label>
                                    <input type="text" placeholder="First Name" className="w-full border-2 border-[#D0D5DD] rounded-lg p-2 outline-none min-h-[55px]" />
                                </div>
                                <div>
                                    <label>Last Name</label>
                                    <input type="text" placeholder="Last Name" className="w-full border-2 border-[#D0D5DD] rounded-lg p-2 outline-none min-h-[55px]" />
                                </div>
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="email" placeholder="Email" className="w-full border-2 border-[#D0D5DD] rounded-lg p-2 outline-none min-h-[55px]" />
                            </div>
                            <div>
                                <label>Phone Number</label>
                                <input type="tel" placeholder="01-98765" className="w-full border-2 border-[#D0D5DD] rounded-lg p-2 outline-none min-h-[55px]" />
                            </div>
                            <div>
                                <label>Choose Date</label>
                                <input type="date" className="w-full border-2 border-[#D0D5DD] rounded-lg p-2 outline-none min-h-[55px]" />
                            </div>
                            <div>
                                <label>Message</label>
                                <textarea className="w-full border-2 border-[#D0D5DD] rounded-lg p-2 outline-none min-h-[185px]"></textarea>
                            </div>
                            <button className="bg-[#1376F8] px-6 py-3 rounded-lg text-white">Book an Appointment</button>
                        </form>
                    </div>

                </div>

            </div>


            <div className="flex flex-col items-center justify-center gap-8 max-w-[1280px] mx-auto py-16 px-4 sm:px-0">
                <div>
                    <h2 className="sm:text-[42px] text-[36px] tracking-wider text-center max-w-[629px] font-semibold text-[#011632]">FAQS</h2>
                    <p className="text-[#3C4959] max-w-[463px] text-[18px] text-center">We use only the best quality materials on the market in order to provide the best products to our patients.</p>
                </div>
                <div>
                    <AccordionComponent />
                </div>
            </div>

        </>
    )
}
export default Contact