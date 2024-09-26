import React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";

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
			</div>
		</div>
	);
};

export default UserDetails;
