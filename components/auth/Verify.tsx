"use client";
import React, { useState } from "react";
import Image from "next/image";
import emailImage from "@/assets/images/verify.png";
import phoneImage from "@/assets/images/phone.png";
import InputOTPDemo from "@/components/auth/InputOTP";
import { Button } from "@/components/ui/button";
import SuccessScreen from "@/components/SuccessScreen";
import { useRouter } from "next/navigation";

const Verify = () => {
	const router = useRouter();
	const [value, setValue] = useState("");
	const [isEmail, setIsEmail] = useState(true);
	const [isSuccess, setIsSuccess] = useState(false);

	const handleVerify = () => {
		setIsSuccess(true);
	};
	return (
		<div>
			<div
				className={`${
					isSuccess ? "hidden" : "block"
				} w-10/12 mx-auto flex flex-col items-center justify-center p-14`}
			>
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
					<Button
						onClick={() => setIsEmail(!isEmail)}
						className="btnTwo hover:bg-primaryBlue hover:text-bgWhite "
					>
						{isEmail ? "Verify Phone Number Instead" : "Verify Email Instead"}
					</Button>
					<Button
						onClick={handleVerify}
						className="btnOne hover:bg-bgWhite hover:text-primaryBlue"
					>
						{isEmail ? "Verify  Email " : "Verify "}
					</Button>
				</div>

				<div>
					<p className="font-bold">
						Didn’t get a code?{" "}
						<span className="text-primaryBlue"> Resend Code</span>
					</p>
				</div>
			</div>

			<div className={`${isSuccess ? "block" : "hidden"}`}>
				<SuccessScreen
					head={isEmail ? "Email Verified" : "Phone Number Verified"}
					content="Your details as a Super Admin has been verified and you can now proceed to the dashboard"
					btn="Proceed to Dashboard"
					onClick={() => router.push("/")}
				/>
			</div>
		</div>
	);
};

export default Verify;
