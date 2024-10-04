import React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import booker from "@/assets/images/gabriel.png";

const UserDetailsCard: React.FC = () => {
	return (
		<div>
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
						<p className="mt-2 flex items-center">Jan-02-2023 09:20:52 AM</p>
					</div>
					<div>
						<h4 className="text-[12px] text-[#212121B2]">LAST LOGIN</h4>
						<p className="mt-2 flex items-center">
							40 mins ago (Jan-31-2023 09:20:52 AM)
						</p>
					</div>
				</div>

				<Button className="px-4 py-3 flex items-center justify-center  rounded-md text-sm font-medium bg-primaryBlue">
					Update Profile Details
				</Button>
			</div>
		</div>
	);
};

export default UserDetailsCard;
