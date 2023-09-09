import React, { useState } from "react";
import dataSlider from "../data/shoes-home.json";
import BtnSlider from "./BtnSlider";

export default function Slider() {
	const [slideIndex, setSlideIndex] = useState(1);

	const nextSlide = () => {
		if (slideIndex !== 4) {
			setSlideIndex(slideIndex + 1);
		} else {
			setSlideIndex(1);
		}
	};

	const prevSlide = () => {
		if (slideIndex !== 1) {
			setSlideIndex(slideIndex - 1);
		} else {
			setSlideIndex(4);
		}
	};

	const moveDot = (index) => {
		setSlideIndex(index);
	};

	return (
		<div className="container-slider md:w-1/2 overflow-hidden shadow-md md:relative flex items-center justify-center  md:mt-0 mt-[7.5rem] w-full">
			{dataSlider.map((shoes, index) => {
				return (
					<div
						key={shoes.id}
						className={
							slideIndex === index + 1
								? "slide md:w-3/4 md:h-full absolute opacity-1 ease-in-out w-[250px] h-[200px]"
								: "slide md:w-3/4 md:h-full absolute opacity-0 ease-in-out w-[250px] h-[200px]"
						}
					>
						<img
							src={shoes.img}
							alt=""
							className="w-full h-full object-cover"
						/>
					</div>
				);
			})}
			<div className="absolute flex justify-between w-full">
				<BtnSlider moveSlide={nextSlide} direction={"next"} />
				<BtnSlider moveSlide={prevSlide} direction={"prev"} />
			</div>
		</div>
	);
}
