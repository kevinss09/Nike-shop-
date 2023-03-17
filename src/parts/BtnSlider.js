import React from "react";
import leftArrow from "../assets/icons/left-arrow.png";
import rightArrow from "../assets/icons/right-arrow.png";

export default function BtnSlider({ direction, moveSlide }) {
	console.log(direction, moveSlide);
	return (
		<button
			onClick={moveSlide}
			className={
				direction === "next"
					? "w-[60px] h-[60px] rounded-full bg-[#f1f1f1] border border-black absolute flex items-center justify-center cursor-pointer top-1/2 right-5 translate-btnSlider"
					: "w-[60px] h-[60px] rounded-full bg-[#f1f1f1] border border-black absolute flex items-center justify-center cursor-pointer top-1/2 left-5 translate-btnSlider"
			}
		>
			<img
				src={direction === "next" ? rightArrow : leftArrow}
				alt=""
				className="w-[25px] h-[25px] pointer-events-none"
			/>
		</button>
	);
}
