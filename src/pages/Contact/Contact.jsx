import { Helmet } from "react-helmet";
import { AiTwotoneMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";


const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>SAVE LIFE | Contact</title>
            </Helmet>
            <div className="text-center">
                <h2 className="text-3xl font-bold">SAVE LIFE MEDICAL CAMP</h2>
                <h3 className="italic">#123 Health Street <br />Cityville, Medtown</h3>
            </div>
            <div className="mt-16">
                <h2 className="text-3xl text-center">Our Contact Information</h2>
                <p className="text-center lg:mx-36 md:mx-12 mx-6  italic">Feel free to reach out to us for any assistance or inquiries. We look forward to hearing from you!</p>
            </div>
            <div className="flex items-center justify-center gap-1 text-xl mt-12">
                <BiPhoneCall className="text-3xl text-green-400" /> <span> +880 123456789</span>
            </div>
            <div className="flex items-center justify-center gap-1 text-xl">
                <AiTwotoneMail className="text-3xl text-red-500" /> <span> info@savelifemedicalcamp.org</span>
            </div>
            <div className="lg:flex w-full justify-evenly">
                <div className="mt-8 bg-sky-300 p-4 ">
                    <h2 className="text-2xl text-center">For General Inquiries</h2>
                    <div className="flex items-center justify-center gap-1 text-xl">
                        <BiPhoneCall className="text-3xl text-black" /> <span> +123-456-7890</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-xl">
                        <AiTwotoneMail className="text-3xl text-red-500" /> <span> contact@savelifemedicalcamp.org </span>
                    </div>
                </div>
                <div className="mt-8 bg-sky-300 p-4 ">
                    <h2 className="text-2xl text-center">For Media Inquiries</h2>
                    <div className="flex items-center justify-center gap-1 text-xl">
                        <BiPhoneCall className="text-3xl text-black" /> <span> +123-456-7980</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-xl">
                        <AiTwotoneMail className="text-3xl text-red-500" /> <span> media@savelifemedicalcamp.org  </span>
                    </div>
                </div>
                <div className="mt-8 bg-sky-300 p-4 ">
                    <h2 className="text-2xl text-center">For Volunteer Opportunities</h2>
                    <div className="flex items-center justify-center gap-1 text-xl">
                        <BiPhoneCall className="text-3xl text-black" /> <span> +123-456-5689</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-xl">
                        <AiTwotoneMail className="text-3xl text-red-500" /> <span> volunteers@slmc.org   </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;