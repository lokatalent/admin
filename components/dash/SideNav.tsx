"use client";
import Link from "next/link";
import {
	IoGridOutline,
	IoReceiptOutline,
	IoWalletOutline,
	IoPieChartOutline,
	IoSettingsOutline,
} from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { RiExchange2Line } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
	{
		id: 1,
		name: "Overview",
		icon: <IoGridOutline />,
		link: "/",
	},
	{
		id: 2,
		name: "Users",
		icon: <FaRegUser />,
		link: "/users",
	},
	{
		id: 3,
		name: "Bookings",
		icon: <IoReceiptOutline />,
		link: "/bookings",
	},
	{
		id: 4,
		name: "Payments",
		icon: <IoWalletOutline />,
		link: "/payments",
	},
];

const SideNav = () => {
	const pathname = usePathname();

	return (
		<div className="bg-primaryBlue w-[200px] h-screen fixed text-white p-8 flex-col justify-between hidden md:flex">
			<div>
				<Link href="/">
					<span className="text-lg font-bold text-white">LokaTalent</span>
				</Link>

				<div className="flex flex-col space-y-7 mt-6">
					{links.map((link) => (
						<Link
							href={link.link}
							key={link.id}
							className={`${
								(pathname === "/" && link.link === "/") ||
								(link.link !== "/" && pathname.startsWith(link.link))
									? "bg-white/30"
									: ""
							} text-white flex space-x-3 items-center font-semibold p-3 hover:p-3 focus:p-3 hover:bg-white/30 focus:bg-white/30 rounded-lg`}
						>
							{link.icon}
							<p>{link.name}</p>
						</Link>
					))}
				</div>
			</div>

			<div>
				<div className="flex space-x-3 items-center font-semibold p-3 hover:p-3 focus:p-3 hover:bg-white/30 focus:bg-white/30 rounded-lg">
					<IoSettingsOutline /> <p>Settings</p>
				</div>
				<div className="items-center font-semibold  hover:p-3 focus:p-3 hover:bg-white/30 focus:bg-white/30 rounded-lg">
					Gabriel Daramola
				</div>
			</div>
		</div>
	);
};

export default SideNav;
