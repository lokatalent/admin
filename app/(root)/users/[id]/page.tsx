"use client";
import React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { IoIosArrowRoundBack } from "react-icons/io";
import booker from "@/assets/images/gabriel.png";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaRegUser } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { IoReceiptOutline, IoWalletOutline } from "react-icons/io5";
import UserDetailsCard from "@/components/user/UserDetailsCard";
import { useRouter } from "next/navigation";

interface UserDetailsProps {
	params: {
		id: string;
	};
}


const UserDetails: React.FC<UserDetailsProps> = ({ params }) => {
	const router = useRouter();

	return (
		<div className="py-14">
			<div className="flex flex-row space-x-3 items-center">
				<Link href="/users">
					<IoIosArrowRoundBack size={24} />
				</Link>
				<p className="text-2xl font-semibold">User Details</p>
			</div>
			
			<UserDetailsCard />

			<div
				className="card2 my-5"
				
			>
				<div className="flex space-x-3 items-center">
					<div className="w-12 h-12 rounded-lg bg-orange-300 flex items-center justify-center">
						<IoReceiptOutline color="#fff" />
					</div>
					<p> Bookings</p>
				</div>
			</div>
			<div className="card2 my-5">
				<div className="flex space-x-3 items-center">
					<div className="w-12 h-12 rounded-lg bg-orange-300 flex items-center justify-center">
						<IoIosTimer
							color="#fff"
							size={25}
						/>
					</div>

					<p> User Activities</p>
				</div>
			</div>
			<div className="card2 my-5">
				<div className="flex space-x-3 items-center">
					<div className="w-12 h-12 rounded-lg bg-orange-300 flex items-center justify-center">
						<IoWalletOutline color="#fff" />
					</div>

					<p> Transactions</p>
				</div>
			</div>
		</div>
	);
};

export default UserDetails;
