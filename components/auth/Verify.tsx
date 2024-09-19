"use client";
import React, { useState } from "react";
import Image from "next/image";
import emailImage from "@/assets/images/verify.png";
import phoneImage from "@/assets/images/phone.png";
import InputOTPDemo from "@/components/auth/InputOTP";
import { Button } from "../ui/button";
const Verify = () => {
	const [value, setValue] = useState("");
	const [isEmail, setIsEmail] = useState(true);
	return (
		<div className="w-10/12 mx-auto flex flex-col items-center justify-center p-14">
			<Image
				src={isEmail ? emailImage : phoneImage}
				width={194}
				height={194}
				alt="mail icon"
			/>

			<p className="font-bold text-textColor text-3xl py-3">
				{" "}
				{isEmail ? "Email verification" : "Phone Number Verification"}
			</p>
			<p className="text-textColor pb-5">
				{isEmail
					? "Enter the six digit code we sent to your email address to verify your account"
					: "Enter the six digit code we sent to your phone number to verify your account"}
			</p>

			<InputOTPDemo
				value={value}
				setValue={setValue}
			/>

			<div className="flex space-x-5 my-14">
				<Button onClick={() => setIsEmail(!isEmail)}>
					{isEmail ? "Verify Phone Number Instead" : "Verify Email Instead"}
				</Button>
				<Button onClick={() => console.log(value)}>Verify Email</Button>
			</div>
		</div>
	);
};

export default Verify;
