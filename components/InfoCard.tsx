import { config } from "process";
import React from "react";
import style from "styled-jsx/style";

interface CardProp {
	text: string;
	iconColor: string;
	icon: React.ReactNode;
	number: number;
}



const InfoCard = ({ text, number, icon, iconColor }: CardProp) => {
	return (
		<div className="w-[325px] shadow-lg p-3  border border-neutral-50 rounded-lg flex flex-col  items-center">
			<div className="flex justify-between w-full mb-4">
				<div>
					<p className="text-sm font-semibold">{text}</p>
					<p className="text-2xl pt-5  font-bold">{number}</p>
				</div>
				<div
					className="w-12 h-12 rounded-lg"
					style={{
						backgroundColor: iconColor,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					{icon}
				</div>
			</div>
		</div>
	);
};

export default InfoCard;
