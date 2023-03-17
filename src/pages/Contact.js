import React from "react";
import Header from "../parts/Header";
import NikeContact from "../assets/images/nike-contact.png";
import Footer from "../parts/Footer";

export default function Contact() {
	return (
		<section className="Contact min-h-screen px-[70px]">
			<Header />
			<div className="bg-[#FAFAFA] h-[60px] mx-[-70px]"></div>
			<div className="mt-20 flex items-center justify-center flex-col">
				<img src={NikeContact} alt="" className="h-[200px] w-[200px]" />
				<form noValidate>
					<div className="flex flex-col mb-[30px]">
						<label
							htmlFor="username"
							className="font-medium text-lg tracking-wider text-center mb-5"
						>
							Username
						</label>
						<input
							type="text"
							name="username"
							placeholder="Username"
							className="w-[450px] h-[50px] border-2 border-black placeholder:font-light placeholder:text-[#636363] placeholder:pl-5 placeholder:tracking-wider"
						/>
					</div>
					<div className="flex flex-col mb-[30px]">
						<label
							htmlFor="email"
							className="font-medium text-lg tracking-wider text-center mb-5"
						>
							Email
						</label>
						<input
							type="text"
							name="email"
							placeholder="Email"
							className="w-[450px] h-[50px] border-2 border-black placeholder:font-light placeholder:text-[#636363] placeholder:pl-5 placeholder:tracking-wider"
						/>
					</div>
					<div className="flex flex-col mb-[30px]">
						<label
							htmlFor="password"
							className="font-medium text-lg tracking-wider text-center mb-5"
						>
							Password
						</label>
						<input
							type="text"
							name="password"
							placeholder="Password"
							className="w-[450px] h-[50px] border-2 border-black placeholder:font-light placeholder:text-[#636363] placeholder:pl-5 placeholder:tracking-wider"
						/>
					</div>
					<div className="flex flex-row w-full justify-between mb-[30px]">
						<div className="flex flex-row">
							<input type="checkbox" className="mr-[15px]" />
							<h5 className="font-extralight text-black tracking-wide text-sm">
								Keep me Signed in
							</h5>
						</div>
						<h5 className="text-sm font-medium text-[#B5B5B5] tracking-wide">
							Forgot your password?
						</h5>
					</div>
					<div className="w-full text-center tracking-widest font-light text-[#B4B4B4]">
						By logging in, you agree to Nike's Privacy <br />
						policy and Terms of Use
					</div>
					<div className="mt-10">
						<button className="w-[450px] h-[60px] text-center text-white bg-[#3e3d3d] tracking-wider font-medium text-xl">
							SIGN IN
						</button>
					</div>
				</form>
			</div>
			<Footer />
		</section>
	);
}
