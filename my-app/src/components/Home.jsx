import TypingEffect from "./TypingEffect";

const Home = () => {
    const newLine = `\n`;

    return (
        <div className="min-h-screen flex items-center">
			<div className="w-1/2 lg:m-[25vw] md:m-[18vw] sm:m-[15vw] font-serif">
                <img src={"/public/Picture.jpeg"} alt="" />
				<p>My name is Sam Durm and I aim hone my expertise in full-stack development by creating revolutionary software that benefits the lives of others. </p>
            </div>

            <div className="w-1/2">
                <h1 style={{ whiteSpace: "pre-line" }} className="typing-effect font-mono text-4xl">.Sam-Durm &#123;{newLine}&nbsp;&nbsp;&nbsp;&nbsp;
                    <TypingEffect></TypingEffect>
                {newLine}&#125;</h1>
            </div>
        </div>
    );
};

export default Home; 

// 