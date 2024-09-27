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

const UserDetails = ({ params }: { params: { id: string } }) => {
	return (
		<div className="py-14">
			<div className="flex flex-row space-x-3 items-center">
				<Link href="/users">
					<IoIosArrowRoundBack size={24} />
				</Link>
				<p className="text-2xl font-semibold">User Details</p>
			</div>
			<div className="card my-5">
				<div className="flex flex-col space-y-6 md:flex-row md:space-y-0 justify-between">
					<div className="bg-yellow/50 px-4 py-2 rounded-full max-w-[300px]">
						<p className="text-center">Customer</p>
					</div>

					<Select>
						<SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Update User Status" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="suspend">Suspend</SelectItem>
							<SelectItem value="delete">Delete</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div className="flex gap-[1.5rem] items-center my-8">
					<div className="w-[90px] h-[90px]">
						<Image
							src={booker}
							alt=""
							className="w-full h-full object-cover"
						/>
					</div>
					<div>
						<h4>James Scott</h4>
						<div className="mt-3 flex items-center gap-2">
							<div className="h-[7px] w-[7px] rounded-[100%] bg-[#115F04]"></div>
							Active
						</div>
					</div>
				</div>

				<div className="flex space-x-12 my-8">
					<div>
						<h4 className="text-[12px] text-[#212121B2]">EMAIL</h4>
						<p className="mt-2 flex items-center">jamesscott@gmail.com</p>
					</div>
					<div>
						<h4 className="text-[12px] text-[#212121B2]">COUNTRY</h4>
						<p className="mt-2 flex items-center">Nigeria</p>
					</div>
					<div>
						<h4 className="text-[12px] text-[#212121B2]">PHONE</h4>
						<p className="mt-2 flex items-center">0803128736</p>
					</div>
					<div></div>
				</div>
				<div className="flex space-x-12 my-8">
					<div>
						<h4 className="text-[12px] text-[#212121B2]">REGISTRATION DATE</h4>
						<p className="mt-2 flex items-center">jamesscott@gmail.com</p>
					</div>
					<div>
						<h4 className="text-[12px] text-[#212121B2]">LAST LOGIN</h4>
						<p className="mt-2 flex items-center">Nigeria</p>
					</div>
				</div>

				<Button className="px-4 py-3 flex items-center justify-center  rounded-md text-sm font-medium bg-primaryBlue">
					Update Profile Details
				</Button>
			</div>

			<div className="card2 my-5">Bookings</div>
			<div className="card2 my-5">User Activities</div>
			<div className="card2 my-5">Transactions</div>
		</div>
	);
};

export default UserDetails;
