import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa6";


const Team_Member_Card = () => {
    return (
        <div>
            <div className="">
                <img src="https://ecomall-be87.kxcdn.com/ecomall/wp-content/uploads/2021/04/team-1.jpg" alt="" className="rounded-md transform transition-transform duration-300 ease-in-out hover:scale-105 " />
            </div>
            <div className="text-center space-y-2 mt-2">
                <h3 className="text-2xl font-semibold">John Hossain</h3>
                <span className="text-gray-300">CEO & Founder</span>
                <div className="flex items-center justify-center gap-5">
                <FaFacebook/>
                <FaTwitter/>
                <FaInstagram/>
                <FaPinterest/>
                </div>
            </div>
        </div>
    );
};

export default Team_Member_Card;