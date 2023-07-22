import React from "react";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Love from "../assets/icons/love.png";
import Shoes from "../data/men-shoes-carousel.json";
import WomenShoes from "../data/women-shoes-carousel.json";

export default function Carousel({ Path }) {
	const [width, setWidth] = useState(0);
	const carousel = useRef();

	useEffect(() => {
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);

	return (
		<motion.div
			className="carousel cursor-grab overflow-hidden md:mr-[-70px] after:cursor-move md:ml-0"
			ref={carousel}
		>
			<motion.div
				className="inner-carousel flex mr-[70px]"
				drag="x"
				dragConstraints={{ right: 0, left: -width }}
			>
				{Path == "/men"
					? Shoes.map((shoes, index) => {
							return (
								<motion.div className="mr-[30px]" key={index}>
									<motion.div className="md:min-h-[400px] md:min-w-[450px] min-h-[250px] min-w-[250px] bg-[#D9D9D9] relative flex items-end justify-center">
										<div className="absolute h-[50px] w-[50px] rounded-full border-[1.5px] border-black top-5 right-5 flex items-center justify-center">
											<img src={Love} alt="" className="h-[35px] w-[35px]" />
										</div>
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
											${shoes.price}
										</div>
									</div>
								</motion.div>
							);
					  })
					: WomenShoes.map((shoes, index) => {
							return (
								<motion.div className="mr-[30px]" key={index}>
									<motion.div className="md:min-h-[400px] md:min-w-[450px] min-h-[250px] min-w-[250px] bg-[#D9D9D9] relative flex items-end justify-center">
										<div className="absolute h-[50px] w-[50px] rounded-full border-[1.5px] border-black top-5 right-5 flex items-center justify-center">
											<img src={Love} alt="" className="h-[35px] w-[35px]" />
										</div>
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
											${shoes.price}
										</div>
									</div>
								</motion.div>
							);
					  })}
			</motion.div>
		</motion.div>
	);
}
