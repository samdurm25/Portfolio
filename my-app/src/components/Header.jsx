import Navbar from "./Navbar";

const Header = () => {
    return (
        <div className="font-sans fixed flex justify-between w-screen px-8 py-5 border-2 z-100">
            <div className="">
                <h1>Sam</h1>
                <h1>Durm</h1>
            </div>

            <Navbar></Navbar>
        </div>
    );
};

export default Header; 