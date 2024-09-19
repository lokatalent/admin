import Link from "next/link";
import {
	IoGridOutline,
	IoReceiptOutline,
	IoWalletOutline,
	IoPieChartOutline,
} from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { RiExchange2Line } from "react-icons/ri";

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
		link: "",
	},
	{
		id: 4,
		name: "Payments",
		icon: <IoWalletOutline />,
		link: "",
	},
	{
		id: 5,
		name: "Disputes",
		icon: <RiExchange2Line />,
		link: "",
	},
	{
		id: 6,
		name: "Analytics",
		icon: <IoPieChartOutline className="rotate-90" />,
		link: "",
	},
];
const SideNav = () => {
	return (
		<div className="bg-primaryBlue h-screen fixed text-white p-8 flex flex-col justify-between ">
			<div>
				<Link href="/">
					<span className="text-lg font-bold text-white">LokaTalent</span>
				</Link>

				<div className="flex flex-col space-y-7 mt-6 ">
					{links.map((link) => {
						return (
							<Link
								href={link.link}
								key={link.id}
								className="flex space-x-3 items-center font-semibold p-3 hover:p-3 focus:p-3 hover:bg-white/30 focus:bg-white/30 rounded-lg"
							>
								{link.icon}
								<p>{link.name}</p>
							</Link>
						);
					})}
				</div>
			</div>

			<div>
				<div>settings</div>
				<div>name mame</div>
			</div>
		</div>
	);
};

export default SideNav;
