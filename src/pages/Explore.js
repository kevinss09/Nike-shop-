import React from "react";
import { motion } from "framer-motion";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import Shoes from "../data/men-shoes-carousel.json";
import Carousel from "../parts/Carousel";
import { useState, useRef, useEffect } from "react";

export default function Explore() {
	const [height, setHeight] = useState(0);
	const item = useRef();

	useEffect(() => {
		setHeight(item.current.scrollHeight - item.current.offsetHeight);
	}, []);

	return (
		<section className="Explore min-h-screen md:px-[70px]">
			<Header />
			<div className="bg-[#FAFAFA] h-[60px] md:mx-[-70px]"></div>
			<h2 className="font-semibold text-4xl mt-10 md:mt-20 tracking-wide md:text-left text-center">
				Nike shoes
			</h2>
			<div className="mt-[50px] Explore-Content md:gap-[50px] overflow-hidden md:mb-0 mb-20 md:mx-0 mx-5">
				<div className="scroll col-span-1 flex flex-row md:flex-col overflow-scroll w-auto whitespace-nowrap md:mb-0 mb-7">
					<h3 className="font-medium md:font-normal md:my-0 my-3 text-lg md:mx-0 mx-3">
						Air Jordan 1 High
					</h3>
					<h3 className="md:mt-3 font-medium md:font-normal md:my-0 my-3 text-lg md:mx-0 mx-3">
						Air Jordan 1 Mid
					</h3>
					<h3 className="md:mt-3 font-medium md:font-normal md:my-0 my-3 text-lg md:mx-0 mx-3">
						Air Jordan 1 Low
					</h3>
					<h3 className="md:mt-3 font-medium md:font-normal md:my-0 my-3 text-lg md:mx-0 mx-3">
						Air Force 1
					</h3>
					<h3 className="md:mt-3 font-medium md:font-normal md:my-0 my-3 text-lg md:mx-0 mx-3">
						Dunk
					</h3>
					<h3 className="md:mt-3 font-medium md:font-normal md:my-0 my-3 text-lg md:mx-0 mx-3">
						Air Max
					</h3>
					<h3 className="md:mt-3 font-medium md:font-normal md:my-0 my-3 text-lg md:mx-0 mx-3">
						Blazer
					</h3>
					<h3 className="md:mt-3 font-medium md:font-normal md:my-0 my-3 text-lg md:mx-0 mx-3">
						Pegasus
					</h3>
					<h3 className="md:mt-3 font-medium md:font-normal md:my-0 my-3 text-lg md:mx-0 mx-3">
						Mercurial
					</h3>
				</div>
				<div className="col-span-1 w-full">
					<div className="h-[1000px] overflow-hidden overflow-y-scroll grid md:grid-cols-3 grid-cols-2 gap-[30px]">
						{Shoes.map((shoes, index) => {
							return (
								<motion.div className="" key={index} ref={item}>
									<motion.div
										className="md:min-h-[340px] md:min-w-[340px] bg-[#D9D9D9] relative flex items-end justify-center"
										drag="x"
										dragConstraints={{ right: 0, left: -height }}
									>
										<img
											src={shoes.image}
											alt="Shoes-1"
											className="bg-cover bg-no-repeat mb-10"
										/>
									</motion.div>
									<div className="mt-[30px] w-full flex md:flex-row flex-col">
										<div className="left md:w-1/2">
											<h1 className="font-bold text-sm md:text-base tracking-wider">
												{shoes.name}
											</h1>
											<h3 className="text-[#70706F] font-semibold tracking-wide mt-2 md:mt-[5px] text-sm">
												{shoes.gender}
											</h3>
										</div>
										<div className="right md:w-1/2 font-bold text-xl md:text-right md:mt-0 mt-2 mr-1">
											${shoes.price}
										</div>
									</div>
								</motion.div>
							);
						})}
						{Shoes.map((shoes, index) => {
							return (
								<motion.div className="" key={index} ref={item}>
									<motion.div
										className="md:min-h-[340px] md:min-w-[340px] bg-[#D9D9D9] relative flex items-end justify-center"
										drag="x"
										dragConstraints={{ right: 0, left: -height }}
									>
										<img
											src={shoes.image}
											alt="Shoes-1"
											className="bg-cover bg-no-repeat mb-10"
										/>
									</motion.div>
									<div className="mt-[30px] w-full flex md:flex-row flex-col">
										<div className="left md:w-1/2">
											<h1 className="font-bold text-sm md:text-base tracking-wider">
												{shoes.name}
											</h1>
											<h3 className="text-[#70706F] font-semibold tracking-wide mt-2 md:mt-[5px] text-sm">
												{shoes.gender}
											</h3>
										</div>
										<div className="right md:w-1/2 font-bold text-xl md:text-right md:mt-0 mt-2 mr-1">
											{shoes.price}
										</div>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>
			<Footer />
		</section>
	);
}
