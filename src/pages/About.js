import React from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import NikeStore from "../assets/images/nike-store.jpg";
import About1Img from "../assets/images/About1-img.png";
import About2Img from "../assets/images/About2-img.png";
import About3Img from "../assets/images/About3-img.png";
import About4Img from "../assets/images/About4-img.png";

export default function About() {
	return (
		<section className="About min-h-screen md:px-[70px]">
			<Header />
			<div className="bg-[#FAFAFA] h-[60px] mx-[-70px]"></div>
			<div className="mx-[-70px]">
				<img src={NikeStore} alt="" className="bg-cover bg-no-repeat" />
			</div>
			<div className="mt-[100px] md:mx-0 mx-5 md:mb-0 mb-40">
				<div className="w-full flex md:flex-row flex-col">
					<div className="left md:w-1/2 ">
						<img
							src={About1Img}
							alt=""
							className="bg-cover bg-no-repeat w-full md:h-[550px]"
						/>
					</div>
					<div className="right md:w-1/2 flex justify-start items-center flex-col md:pl-10">
						<h1 className="font-bold md:text-5xl text-4xl md:text-left text-center tracking-wider leading-tight mt-10 md:mt-0">
							STORIES OF ADIDAS SINCE 1949
						</h1>
						<h4 className="font-light text-sm tracking-wider leading-loose mt-8 md:text-left text-center">
							Sport keeps us fit. Keeps you mindful. Brings us together. Through
							sport we have the power to change lives. Whether it is through
							stories of inspiring athletes. Helping you to get up and get
							moving. Sportswear featuring the latest technologies, to up your
							performance. Beat your PB. adidas offers a home to the runner, the
							basketball player, the soccer kid, the fitness enthusiast. The
							weekend hiker that loves to escape the city. The yoga teacher that
							spreads the moves. The 3-Stripes are seen in the music scene. On
							stage, at festivals. Our sports clothing keeps you focused before
							that whistle blows. During the race. And at the finish lines.
							We’re here to support creators. Improve their game. Their lives.
							And change the world.
						</h4>
					</div>
				</div>
				<div className="w-full flex md:flex-row-reverse flex-col mt-[100px]">
					<div className="left md:w-1/2 md:pl-10">
						<img
							src={About2Img}
							alt=""
							className="bg-cover bg-no-repeat w-full md:h-[550px]"
						/>
					</div>
					<div className="right md:w-1/2">
						<h1 className="font-bold md:text-5xl text-4xl tracking-wider md:text-left text-center leading-tight mt-10 md:mt-0">
							STYLES AND SPORTSWEAR
						</h1>
						<h4 className="font-light text-sm tracking-wider leading-loose mt-8 md:text-left text-center">
							Adidas is about more than sportswear and workout clothes. We
							partner with the best in the industry to co-create. This way we
							offer our fans the sports apparel and style that match their
							athletic needs, while keeping sustainability in mind. We’re here
							to support creators. Improve their game. Create change. And we
							think about the impact we have on our world.
						</h4>
					</div>
				</div>
				<div className="w-full flex md:flex-row flex-col mt-[100px]">
					<div className="left md:w-1/2 ">
						<img
							src={About3Img}
							alt=""
							className="bg-cover bg-no-repeat w-full md:h-[550px]"
						/>
					</div>
					<div className="right md:w-1/2 flex justify-start items-center flex-col md:pl-10">
						<h1 className="font-bold md:text-5xl text-4xl md:text-left text-center tracking-wider leading-tight mt-10 md:mt-0">
							WORKOUT CLOTHES FOR ANY SPORT
						</h1>
						<h4 className="font-light text-sm tracking-wider leading-loose mt-8 md:text-left text-center">
							Adidas designs for and with athletes of all kinds. Creators, who
							love to change the game. Challenge conventions. Break the rules
							and define new ones. Then break them again. We supply teams and
							individuals with athletic clothing pre-match. To stay focussed. We
							design sports apparel that get you to the finish line. To win the
							match. We support women, with bras and tights made for purpose.
							From low to high support. Maximum comfort. We design, innovate and
							itterate. Testing new technologies in action. On the pitch, the
							tracks, the court, the pool. Retro workout clothes inspire new
							streetwear essentials. Like NMD, Ozweego and our Firebird
							tracksuits. Classic sports models are brought back to life. Like
							Stan Smith. And Superstar. Now seen on the streets and the stages.
						</h4>
					</div>
				</div>
				<div className="w-full flex md:flex-row-reverse flex-col mt-[100px]">
					<div className="left md:w-1/2 md:pl-10">
						<img
							src={About4Img}
							alt=""
							className="bg-cover bg-no-repeat w-full md:h-[550px]"
						/>
					</div>
					<div className="right md:w-1/2">
						<h1 className="font-bold md:text-5xl text-4xl tracking-wider md:text-left text-center leading-tight mt-10 md:mt-0">
							CONSTANTLY CHANGING TREND
						</h1>
						<h4 className="font-light text-sm tracking-wider leading-loose mt-8 md:text-left text-center">
							Through our collections we blur the borders between high fashion
							and high performance. Like our adidas by Stella McCartney athletic
							clothing collection – designed to look the part inside and outside
							of the gym. Or some of our adidas Originals lifestyle pieces, that
							can be worn as sportswear too. Our lives are constantly changing.
							Becoming more and more versatile. And adidas designs with that in
							mind.
						</h4>
					</div>
				</div>
			</div>
			<Footer />
		</section>
	);
}
