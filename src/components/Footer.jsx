import Logo from "../assets/logo-footer.svg"
import { FaTwitter, FaFacebookSquare, FaInstagram } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="bg-white w-full px-[3vw] py-8 flex flex-col gap-8">
            <div className="space-y-6">
                <img src={Logo} alt="logo" />
                <div className="text-dark-blue flex gap-4">
                    <FaTwitter className="w-[24px] h-[24px]" />
                    <FaFacebookSquare className="w-[24px] h-[24px]" />
                    <FaInstagram className="w-[24px] h-[24px]" />
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-0">
                <ul className="text-off-gray text-sm font-light flex flex-col justify-start gap-6">
                    <li className="font-bold text-[16px] text-dark-blue">Products</li>
                    <li>How It Works</li>
                    <li>Features</li>
                    <li>Browse Categories</li>
                    <li>Kapitify Pro <span className="hidden md:inline-block bg-dark-blue text-white text-[8px] px-3 py-0 text-light align-top rounded-2xl tracking-wider">Coming Soon</span></li>
                </ul>
                <ul className="text-off-gray text-sm font-light flex flex-col items-end md:items-start gap-6">
                    <li className="font-bold text-[16px] text-dark-blue text-end md:text-start">Support & Resources</li>
                    <li>Blog</li>
                    <li>FAQs</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
                <ul className="text-off-gray text-sm font-light flex flex-col justify-start gap-6">
                    <li className="font-bold text-[16px] text-dark-blue">Legal</li>
                    <li>Terms And Condition</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="w-full mx-auto text-center">
                <p className="font-light text-sm text-off-gray">&copy; 2022 Kapitify Labs</p>
                <p className="font-regular text-xs text-off-gray">Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;