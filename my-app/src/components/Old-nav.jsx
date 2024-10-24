import { Link } from 'react-scroll'; 

const Navbar = () => {
    return (
        <nav className="pr-5">
            <ul className="menu flex justify-between gap-8">
                <li className="hover:cursor-pointer text-xl font-serif">
                    <Link to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li className="hover:cursor-pointer text-xl font-serif">
                    <Link to="about" smooth={true} duration={500}>About</Link>
                </li>
                <li className="hover:cursor-pointer text-xl font-serif">
                    <Link to="projects" smooth={true} duration={500}>Projects</Link>
                </li>
                <li className="hover:cursor-pointer text-xl font-serif">
                    <Link to="contact" smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
}; 

export default Navbar; 