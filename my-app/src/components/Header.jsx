import Navbar from "./Navbar";

const Header = () => {
    return (
        <div className="fixed flex justify-between w-screen px-8 py-5 z-50">
            <div className="text-lg font-serif">
                <h1>Sam Durm</h1>
            </div>

            <Navbar></Navbar>
        </div>
    );
};

export default Header; 