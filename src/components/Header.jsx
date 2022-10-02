import Menu from "../assets/hamburger.svg"
import Logo from "../assets/logo.svg"
import Search from "../assets/search.svg"
import User from "../assets/user.svg"
import Chat from "../assets/chat.svg"
import Interest from "../assets/interest.svg"

const Header = () => {
    return (
        <header className="bg-white px-4 sm:px-8 py-4 flex justify-between items-center relative z-50">
            <div className="flex justify-between items-center w-full md:w-auto md:gap-4">
                <img src={Menu} alt="menu" className="cursor-pointer" />
                <img src={Logo} alt="logo" />
                <p className="block md:hidden font-semibold text-lg">Join</p>
            </div>
            <div className="hidden md:flex relative flex-grow justify-center">
                <span className="bg-dark-blue p-2 rounded-md -mr-2 z-10">
                    <img src={Search} alt="search" />
                </span>
                <input type="text" placeholder="Find Item" className="border border-light-gray placeholder:text-dark-gray placeholder:text-sm placeholder:font-light px-4 focus:outline-none rounded-md w-7/12" />
            </div>
            <div className="hidden md:flex items-center justify-between gap-4 text-sm font-medium">
                <div className="flex gap-2">
                    <img src={User} alt="user" />
                    <p>Accounts</p>
                </div>
                <div className="flex gap-2 relative">
                    <span className="absolute bg-red text-white rounded-lg px-1 -top-2 left-2 text-xs">99</span>
                    <img src={Chat} alt="chat" />
                    <p>Chat</p>
                </div>
                <div className="flex gap-2">
                    <img src={Interest} alt="interest" />
                    <p>My Interest</p>
                </div>
            </div>
        </header>
    );
}

export default Header;