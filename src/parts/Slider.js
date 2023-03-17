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
		<div className="container-slider w-1/2 relative overflow-hidden shadow-md">
			{dataSlider.map((shoes, index) => {
				return (
					<div
						key={shoes.id}
						className={
							slideIndex === index + 1
								? "slide w-full h-full absolute opacity-1 ease-in-out "
								: "slide w-full h-full absolute opacity-0 ease-in-out"
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
			<BtnSlider moveSlide={nextSlide} direction={"next"} />
			<BtnSlider moveSlide={prevSlide} direction={"prev"} />
		</div>
	);
}
