import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="pr-5 font-sans"> 
            <ul className="menu flex justify-between gap-8">
                <li className="hover:cursor-pointer text-2xl relative after:absolute after:w-full after:h-[2px] after:bg-white after:bottom-0 after:left-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100">
                    <Link
                        to="home"
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass="active"
                        offset={-72}
                        className=""
                    >
                        Home
                    </Link>
                </li>
                <li className="hover:cursor-pointer text-2xl relative after:absolute after:w-full after:h-[2px] after:bg-white after:bottom-0 after:left-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100">
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass="active"
                        offset={-72}
                        className=""
                    >
                        About
                    </Link>
                </li>
                <li className="hover:cursor-pointer text-2xl relative after:absolute after:w-full after:h-[2px] after:bg-white after:bottom-0 after:left-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100">
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass="active"
                        offset={-72}
                        className=""
                    >
                        Projects
                    </Link>
                </li>
                <li className="hover:cursor-pointer text-2xl relative after:absolute after:w-full after:h-[2px] after:bg-white after:bottom-0 after:left-0 after:scale-x-0 after:origin-left after:transition-transform after:duration-500 hover:after:scale-x-100">
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass="active"
                        offset={-72}
                        className=""
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
