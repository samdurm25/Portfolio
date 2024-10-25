import Navbar from "./Navbar";

const Header = () => {
    return (
        <div className="fixed flex justify-between items-center w-screen px-8 py-5 z-50">
            <div>
                <img className="w-[92px] h-[92px]" src={"public/logo.svg"} alt="" />
            </div>

            <Navbar></Navbar>
        </div>
    );
};

export default Header; 