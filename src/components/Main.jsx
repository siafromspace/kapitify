import Speed from "../assets/speed.svg"
import Trust from "../assets/trust.svg"
import Availability from "../assets/availability.svg"
import Email from "../assets/email.svg"
import Phone from "../assets/phone.svg"
import Background from "../assets/bg-desktop.svg"
import { HiArrowNarrowRight } from "react-icons/hi"

const Main = () => {
    return (
        <main className="w-full space-y-12 pb-12 px-6 sm:px-12 relative">
            <div className="py-8 sm:py-12 w-full mt-0">
                <img src={Background} alt="background" className="absolute top-0 -mt-1 md:-mt-4 lg:-mt-16 xl:-mt-24 bottom-8 w-full -mx-6 sm:-mx-12 " />
                <p className="contact w-full text-dark-blue -mt-4 sm:-mt-0 text-3xl font-bold text-center z-20 absolute left-1/2 -translate-x-1/2">Contact Us</p>
            </div>
            <div className="flex flex-col w-full items-center gap-[76px]">
                <div className="w-full space-y-4 flex flex-col items-start md:items-center z-50 md:mt-12">
                    <h1 className="block md:hidden text-black text-[25px] font-bold ">Need help?</h1>
                    <p className="text-600 text-black text-lg font-medium text-start md:text-[25px] md:font-semibold md:text-center max-w-[566px]">Efficient customer service to ensure the quality of our service.</p>
                </div>
                <div className="bg-light-blue w-full justify-center md:max-w-[837px] md:h-[278px] flex items-center py-12 md:py-0 px-[36px] rounded-xl gap-4">
                    <div className="flex flex-col gap-12 md:gap-0 md:flex-row md:justify-between md:items-start">
                        <div className="container">
                            <span className="bg-white rounded-full p-2">
                                <img src={Speed} alt="speed" />
                            </span>
                            <p className="heading">Speed</p>
                            <p className="text">Fast as lightning, we will answer you within a day</p>
                        </div>
                        <div className="container">
                            <span className="bg-white rounded-full p-2">
                                <img src={Trust} alt="trust" />
                            </span>
                            <p className="heading">Trust</p>
                            <p className="text">We are committed to finding you the ideal swapper</p>
                        </div>
                        <div className="container">
                            <span className="bg-white rounded-full p-2">
                                <img src={Availability} alt="availability" />
                            </span>
                            <p className="heading">Availability</p>
                            <p className="text">We are available 24/7</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-[837px] flex flex-col items-start mx-auto gap-8">
                <div className="flex flex-col md:flex-row gap-4 md:items-center">

                    <img src={Phone} alt="phone" className="w-[107px] h-[107px]" />

                    <div>
                        <h3 className="font-semibold text-lg text-black">Let's chat by email</h3>
                        <p className="font-medium text-sm text-black">For general inquiries, partnerhip enquiries or media enquiries, send an email and we will be in touch as soon as possible.</p>
                        <a href="/" className="font-semibold text-sm text-dark-blue flex items-center gap-2"><span className="inline"><HiArrowNarrowRight /></span>Send an email</a>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:items-center">

                    <img src={Email} alt="email" className="w-[107px] h-[107px]" />

                    <div>
                        <h3 className="font-semibold text-lg text-black">Customer Support</h3>
                        <p className="font-medium text-sm text-black">Have questions, complaints or feature requests? Click to open a live chat and speak with one of our agents.</p>
                        <a href="/" className="font-semibold text-sm text-dark-blue flex items-center gap-2"><span className="inline"><HiArrowNarrowRight /></span>Open live chat</a>
                    </div>
                </div>
            </div>
            <div className="max-w-[837px] flex flex-col items-center justify-center gap-2 h-[298px] mx-auto bg-dark-blue rounded-2xl p-4">
                <h2 className="font-semibold text-[20px] text-white text-center">Start swapping with kapitify</h2>
                <p className="font-medium text-sm text-white text-center">Create a free account in less than 5 minutes and start swapping!</p>
                <button className="w-[220px] mt-16 md:mt-4 bg-white text-dark-blue font-[16px] font-medium py-2 rounded-lg">Sign up for free</button>
            </div>
        </main>
    );
}

export default Main;