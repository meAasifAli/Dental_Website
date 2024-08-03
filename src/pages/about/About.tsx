import AboutCard from "../../components/cards/AboutCard"
import ServiceCard from "../../components/cards/ServiceCard"

const About = () => {
    return (
        <>
            <div className="w-full bg-[#E6F6FE] py-2">
                <div className="py-16 max-w-[1280px] mx-auto space-y-16">
                    <div className="flex flex-col items-center justify-center">
                        <div className="space-y-2 flex flex-col items-center justify-center">
                            <div className="flex flex-col gap-0">
                                <h1 className="font-semibold text-[58px] tracking-tighter max-w-[687px]">About Us</h1>
                                <img src="/assets/underline.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 max-w-[1280px] mx-auto">
                        <div className="flex flex-col justify-between w-full gap-4">
                            <div>
                                <h1 className="font-semibold text-[42px] tracking-tighter max-w-[687px]">Our Mission</h1>
                                <p className="text-[#3C4959]  text-[16px] font-normal max-w-[749px] tracking-tight">At Northern Heights Dental, people come first. We help each of our patients to achieve optimal wellness and health by using a whole body approach to oral health. This means not just focusing on cavities, but focusing on; cranio-facial development, bite and joint balance, oral flora, proper muscle balance/function, and bio-compatibility of dental materials. Great care and planning ensure that everything we do helps promote overall health and well being.</p>
                            </div>
                            <h4 className="font-semibold text-[24px] tracking-tighter max-w-[687px]">More than anything else we love creating happy, healthy smiles.</h4>
                            <p className="text-[#3C4959]  text-[16px] font-normal max-w-[749px] tracking-tight">We work hard to stay up to date with the most advanced techniques and technologies to ensure that our patients receive the best care possible. Our office utilizes 3D CBCT radiographs to allow for guided surgical and endodontic protocols. This enables these procedures to performed digitally before they are performed surgically to ensure optimal results. 3D imaging also is utilized for the analysis of airway growth and development. We also use the best 3D optical scanner for all of our dental restoration and Invisalign impressions. Dr Williams is a strong advocate for using microsurgical techniques, this means less discomfort and faster healing times.</p>
                        </div>
                        <div>
                            <img src="/assets/about-hero.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>
            <div className="flex flex-col justify-center items-center gap-4 space-y-8 py-16 max-w-[1280px] mx-auto">
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <h1 className="font-semibold text-[58px] tracking-tighter max-w-[687px]">Meet Our</h1>
                        <div>
                            <h1 className="font-semibold text-[58px] tracking-tighter max-w-[687px]">Specialists</h1>
                            <img src="/assets/underline.png" alt="" />
                        </div>

                    </div>
                    <p className="text-[#3C4959] tracking-wide text-center text-[18px] font-normal max-w-[531px]">We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.</p>
                </div>
                <div className="flex flex-col gap-16 w-full">
                    <AboutCard
                        name="DR. Brent"
                        src="/assets/brent.png"
                        speciality="Specility in General & Cosmetic Service"
                        desc="Dr. Brent provides general and cosmetic dentistry services at Northern Heights Dental in Flagstaff, Arizona. He has extensive experience in general and cosmetic dentistry, including full mouth restoration, dental veneers, crowns, bridges, dental implants, wisdom teeth extractions, Invisalign, and dentures. Dr. Brent and his younger sister grew up in Massachusetts with a mother who worked as a hygienist and a grandfather who was a general dentist."
                    />
                    <AboutCard
                        name="DR. Ashish J. Vashi"
                        src="/assets/ashish.png"
                        speciality="Specility in implant dentistry"
                        desc="Dr. Ashish J. Vashi has been practicing general, cosmetic and implant dentistry in California for over 18 years. He believes in giving the highest quality dentistry in a comfortable, caring environment. He strives to get to know his patients, not just their teeth.including full mouth restoration, dental veneers, crowns, bridges, dental implants, wisdom teeth extractions, Invisalign, and dentures."
                    />
                    <AboutCard
                        name="Dr. James Connors"
                        src="/assets/connors.png"
                        speciality="Specility in Oral Surgeon"
                        desc="When it comes to oral surgeons, few can compare to the modern-day legend that is Dr. James Connors. As our oral and maxillofacial surgery specialist, Dr. Connors will brighten your day with his seasoned expertise, welcoming conversations, and – of course – his signature rotation of fun bowties. Dr. Connors and his younger sister grew up in Massachusetts with a mother who worked as a hygienist and a grandfather who was a general dentist."
                    />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 space-y-8 py-16 max-w-[1280px] mx-auto">
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <h1 className="font-semibold text-[58px] tracking-tighter max-w-[687px]">Latest</h1>
                        <div>
                            <h1 className="font-semibold text-[58px] tracking-tighter max-w-[687px]">Technology</h1>
                            <img src="/assets/underline.png" alt="" />
                        </div>

                    </div>
                    <p className="text-[#3C4959] tracking-wide text-center text-[18px] font-normal max-w-[531px]">Thanks to major technological advancements, dentistry allows treating the most complex cases with less time and more efficiency.</p>
                </div>
                <div className="flex items-center gap-16 w-full">
                    <img src="/assets/technology.png" alt="" />
                    <div className="flex flex-col justify-start items-start gap-4">
                        <h4 className="font-semibold text-2xl text-[#011632]">The Future of Dentistry is Digital:</h4>
                        <br />
                        <p className="text-[#3C4959]  text-[16px] font-normal max-w-[739px] tracking-tight">Dentists today already utilize software to capture insights in clinical decision-making. These practices will continue to develop to integrate AI algorithms that enable clinicians to find the best modalities for their patients. <br /> <br /> In the 21st century, digital radiographs and 3D imaging have become the standard of dental care. Using an intraoral scanner with digitized data for 3D dental impressions (vs. polyvinyl siloxane and rubber base impressions) for a dental crown is now commonplace. <br /> <br /> Artificial intelligence is laying the groundwork for the future of the dental industry. Dental robots can now perform functions such as filling cavities and cleaning or extracting teeth</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#011632] w-full rounded-lg mx-auto py-16 grid grid-cols-1 sm:grid-cols-3 place-items-center max-w-[1280px]">
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
            <div className="flex flex-col items-center justify-center gap-4 max-w-[1280px] mx-auto py-16">
                <h2 className="text-[42px] tracking-wider text-center max-w-[752px] font-semibold text-[#011632]">We’re welcoming new patients and can’t wait to meet you.</h2>
                <p className="text-[#3C4959] max-w-[463px] text-[18px] text-center">We use only the best quality materials on the market in order to provide the best products to our patients.</p>
                <img src="/assets/video.png" alt="" />
                <button className="bg-[#1376F8] px-6 py-3 rounded-lg text-white">Watch Playlist</button>
            </div>
        </>
    )
}
export default About