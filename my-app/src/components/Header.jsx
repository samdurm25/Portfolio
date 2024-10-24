import Navbar from "./Navbar";

const Header = () => {
    return (
        <div className="font-sans fixed flex justify-between w-screen px-8 py-5 m border-2 z-100">
            <div className="text-lg font-serif">
                <h1>Sam Durm</h1>
            </div>

            <Navbar></Navbar>
        </div>
    );
};

export default Header; 