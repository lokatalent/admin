"use client";
import React from "react";
import {
	UserBookingType,
	UserBookingColumns,
} from "@/components/columns/UserColumns";
import { BookingFilter } from "@/components/FilterData";
import DataTable from "@/components/DataTable";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import Details from "@/components/Details";
async function getData(): Promise<UserBookingType[]> {
	return [
		{
			id: "12456256565",
			location: "Justin Cooper",
			talent: "Gabriel Daramola",
			date: "24/4/2024",
			time: "11:45 AM",
			status: "Pending",
		},
		{
			id: "2565767900",
			location: "Martin Cooper",
			talent: "Gabriel Daramola",
			date: "24/4/2024",
			time: "11:45 AM",
			status: "Accepted",
		},
		{
			id: "8698767900",
			location: "Jayden Cooper",
			talent: "Gabriel Daramola",
			date: "24/4/2024",
			time: "11:45 AM",
			status: "Declined",
		},
		{
			id: "12456256565",
			location: "Justin Cooper",
			talent: "Gabriel Daramola",
			date: "24/4/2024",
			time: "11:45 AM",
			status: "Pending",
		},
		{
			id: "2565767900",
			location: "Martin Cooper",
			talent: "Gabriel Daramola",
			date: "24/4/2024",
			time: "11:45 AM",
			status: "Accepted",
		},
		{
			id: "8698767900",
			location: "Jayden Cooper",
			talent: "Gabriel Daramola",
			date: "24/4/2024",
			time: "11:45 AM",
			status: "Declined",
		},
		// ...
	];
}
export default async function UserBookings() {
	const data = await getData();

	

	return (
		<div className="py-14">
			<div className="flex flex-row space-x-3 items-center">
				<Link href="/users">
					<a>
						<IoIosArrowRoundBack size={24} />
					</a>
				</Link>
				<h2 className="text-2xl font-semibold">User Details</h2>
			</div>

			<div className="card my-5">
				<DataTable
					columns={UserBookingColumns}
					data={data}
					title="Bookings"
					type="bookings"
					filterType={BookingFilter}
				/>
			</div>
		</div>
	);
}
