import { Link } from "react-scroll";

const Header = () => {
	return (
		<div className="flex justify-between">
			<div className="h-screen font-sans">
				<h1>Sam</h1>
				<h1>Durm</h1>
			</div>

			<ul className="flex-col">
				<Link spy={true} smooth={true} to="Home">
					<li>Home</li>
				</Link>
				<Link spy={true} smooth={true} to="About">
					<li>About</li>
				</Link>
				<Link spy={true} smooth={true} to="Projects">
					<li>Projects</li>
				</Link>
				<Link spy={true} smooth={true} to="Contact">
					<li>Contact</li>
				</Link>
			</ul>
		</div>
	);
};

export default Header; 