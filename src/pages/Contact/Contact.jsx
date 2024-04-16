import { AiOutlineMail } from "react-icons/ai"; 
import { Helmet } from "react-helmet";
import {  } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";


const Contact = () => {
    return (
        <div  className="xl:max-w-screen-lg 2xl:max-w-screen-xl mx-auto lg:px-0 px-2 mt-24">
            <Helmet>
                <title>SAVE LIFE | Contact</title>
            </Helmet>
            <div className="text-center">
                <h2 data-aos="fade-right" className="text-3xl font-bold">SAVE LIFE MEDICAL CAMP</h2>
                <h3 data-aos="fade-left" className="italic">#123 Health Street <br />Cityville, Medtown</h3>
            </div>
            <div className="mt-16">
                <h2 className="text-3xl text-center">Our Contact Information</h2>
                <p className="text-center lg:mx-36 md:mx-12 mx-6  italic">Feel free to reach out to us for any assistance or inquiries. We look forward to hearing from you!</p>
            </div>
            <div className="flex items-center justify-center gap-1 text-xl mt-12">
                <BiPhoneCall className="text-3xl text-green-400" /> <span> +880 123456789</span>
            </div>
            <div className="flex items-center justify-center gap-1 text-xl">
                <AiOutlineMail className="text-3xl" /> <span> info@savelifemedicalcamp.org</span>
            </div>
            <div className="lg:flex gap-2 w-full justify-between">
                <div data-aos="fade-right" className="mt-8 rounded-bl-2xl rounded-tr-3xl w-full bg-ski p-4 ">
                    <h2 className="text-2xl text-center">For General Inquiries</h2>
                    <div className="flex items-center justify-center gap-1 text-xl">
                        <BiPhoneCall className="text-3xl text-black" /> <span> +123-456-7890</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-xl">
                        <AiOutlineMail className="text-3xl" /> <span> contact@slmc.org </span>
                    </div>
                </div>
                <div data-aos="fade-down" className="mt-8 rounded-bl-2xl rounded-tr-3xl w-full bg-grn p-4 text-white">
                    <h2 className="text-2xl text-center">For Media Inquiries</h2>
                    <div className="flex items-center justify-center gap-1 text-xl">
                        <BiPhoneCall className="text-3xl text-white" /> <span> +123-456-7980</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-xl">
                        <AiOutlineMail className="text-3xl" /> <span> media@slmc.org  </span>
                    </div>
                </div>
                <div data-aos="fade-left" className="mt-8 rounded-bl-2xl rounded-tr-3xl w-full bg-ski p-4 ">
                    <h2 className="text-2xl text-center">For Volunteer Opportunities</h2>
                    <div className="flex items-center justify-center gap-1 text-xl">
                        <BiPhoneCall className="text-3xl text-black" /> <span> +123-456-5689</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-xl">
                        <AiOutlineMail className="text-3xl" /> <span> volunteers@slmc.org   </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;