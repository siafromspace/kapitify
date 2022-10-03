import Menu from "../assets/hamburger.svg"
import Logo from "../assets/logo.svg"
import Search from "../assets/search.svg"
import User from "../assets/user.svg"
import Chat from "../assets/chat.svg"
import Interest from "../assets/interest.svg"

const Header = () => {
    return (
        <header className="bg-white px-4 sm:px-8 py-4 flex justify-between items-center fixed w-full z-50 shadow-lg">

            <img src={Menu} alt="menu" className="cursor-pointer responsive w-auto md:w-[3%]" />

            <img src={Logo} alt="logo" className="responsive w-auto md:w-[12%]" />

            <p className="block md:hidden font-semibold text-lg">Join</p>

            <div className="hidden md:flex relative justify-center w-[343px]">
                <span className="bg-dark-blue p-2 rounded-md -mr-2 z-10">
                    <img src={Search} alt="search" />
                </span>
                <input type="text" placeholder="Find Item" className="border border-light-gray placeholder:text-dark-gray placeholder:text-sm placeholder:font-light px-4 focus:outline-none rounded-md w-full" />
            </div>
            <div className="gap-2 text-[1.5vw] font-regular hidden md:flex">
                <img src={User} alt="user" />
                <p>Accounts</p>
            </div>
            <div className="gap-2 relative text-[1.5vw] font-regular hidden md:flex">
                <span className="absolute h-[13px] flex items-center bg-red text-white rounded-md px-1 pt-1 -top-2 lg:-top-0 left-2 text-[7.22px]">99</span>
                <img src={Chat} alt="chat" />
                <p>Chat</p>
            </div>
            <div className="gap-2 text-[1.5vw] font-regular hidden md:flex">
                <img src={Interest} alt="interest" />
                <p>My Interest</p>
            </div>
        </header>
    );
}

export default Header;