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
		<section className="Explore min-h-screen px-[70px]">
			<Header />
			<div className="bg-[#FAFAFA] h-[60px] mx-[-70px]"></div>
			<h2 className="font-semibold text-4xl mt-20 tracking-wide">Nike shoes</h2>
			<div className="mt-[50px] Explore-Content gap-[50px]">
				<div className="col-span-1 flex flex-col">
					<h3 className="font-normal text-lg">Air Jordan 1 High</h3>
					<h3 className="mt-3 font-normal text-lg">Air Jordan 1 Mid</h3>
					<h3 className="mt-3 font-normal text-lg">Air Jordan 1 Low</h3>
					<h3 className="mt-3 font-normal text-lg">Air Force 1</h3>
					<h3 className="mt-3 font-normal text-lg">Dunk</h3>
					<h3 className="mt-3 font-normal text-lg">Air Max</h3>
					<h3 className="mt-3 font-normal text-lg">Blazer</h3>
					<h3 className="mt-3 font-normal text-lg">Pegasus</h3>
					<h3 className="mt-3 font-normal text-lg">Mercurial</h3>
				</div>
				<div className="col-span-1 w-full">
					<div className="h-[1000px] overflow-hidden overflow-y-scroll grid grid-cols-3 gap-[30px]">
						{Shoes.map((shoes, index) => {
							return (
								<motion.div className="" key={index} ref={item}>
									<motion.div
										className="min-h-[340px] min-w-[340px] bg-[#D9D9D9] relative flex items-end justify-center"
										drag="x"
										dragConstraints={{ right: 0, left: -height }}
									>
										<img
											src={shoes.image}
											alt="Shoes-1"
											className="bg-cover bg-no-repeat mb-10"
										/>
									</motion.div>
									<div className="mt-[30px] w-full flex flex-row">
										<div className="left w-1/2">
											<h1 className="font-bold text-base tracking-wider">
												{shoes.name}
											</h1>
											<h3 className="text-[#70706F] font-semibold tracking-wide mt-[5px] text-sm">
												{shoes.gender}
											</h3>
										</div>
										<div className="right w-1/2 font-bold text-xl text-right mr-1">
											{shoes.price}
										</div>
									</div>
								</motion.div>
							);
						})}
						{Shoes.map((shoes, index) => {
							return (
								<motion.div className="" key={index} ref={item}>
									<motion.div
										className="min-h-[340px] min-w-[340px] bg-[#D9D9D9] relative flex items-end justify-center"
										drag="x"
										dragConstraints={{ right: 0, left: -height }}
									>
										<img
											src={shoes.image}
											alt="Shoes-1"
											className="bg-cover bg-no-repeat mb-10"
										/>
									</motion.div>
									<div className="mt-[30px] w-full flex flex-row">
										<div className="left w-1/2">
											<h1 className="font-bold text-base tracking-wider">
												{shoes.name}
											</h1>
											<h3 className="text-[#70706F] font-semibold tracking-wide mt-[5px] text-sm">
												{shoes.gender}
											</h3>
										</div>
										<div className="right w-1/2 font-bold text-xl text-right mr-1">
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
