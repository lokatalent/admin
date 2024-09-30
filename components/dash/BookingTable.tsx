import { BookingType, BookingColumns } from "@/components/Columns";
import { DataTable } from "@/components/DataTable";
import Link from "next/link";

async function getData(): Promise<BookingType[]> {
	return [

		{
			id: "12456256565",
			customer: "Justin Cooper",
			talent: "Gabriel Daramola",
			date: "24/4/2024",
			time: "11:45 AM",
			status: "Pending",
		},
		{
			id: "2565767900",
			customer: "Martin Cooper",
			talent: "Gabriel Daramola",
			date: "24/4/2024",
			time: "11:45 AM",
			status: "Accepted",
		},
		{
			id: "8698767900",
			customer: "Jayden Cooper",
			talent: "Gabriel Daramola",
			date: "24/4/2024",
			time: "11:45 AM",
			status: "Declined",
		},
		{
			id: "12456256565",
			customer: "Justin Cooper",
			talent: "Gabriel Daramola",
			date: "24/4/2024",
			time: "11:45 AM",
			status: "Pending",
		},
		{
			id: "2565767900",
			customer: "Martin Cooper",
			talent: "Gabriel Daramola",
			date: "24/4/2024",
			time: "11:45 AM",
			status: "Accepted",
		},
		{
			id: "8698767900",
			customer: "Jayden Cooper",
			talent: "Gabriel Daramola",
			date: "24/4/2024",
			time: "11:45 AM",
			status: "Declined",
		},
		// ...
	];
}

const getSelect = [
  {
    name: "Booking Type",
    options: ["Instant Booking", "Scheduled Booking"],
  },
  {
    name: "Status",
    options: ["Pending", "In Progress", "Completed", "Cancelled"],
  },
  {
    name: "Service Type",
    options: [
      "Driving",
      "Indoor Cleaning",
      "Solar Installation",
      "Electrical Cleaning",
    ],
  },
  {
    name: "Role",
    options: ["Customer", "Talent"],
  },
];

const options = [
  "New Bookings",
  "Upcoming Bookings",
  "Instant Bookings",
  "Schedule Bookings",
];



export default async function BookingTable({ isHome , data }) {
	// const data = await getData();

	return (
    <div className="card my-5">
      <DataTable
        columns={BookingColumns}
        data={data}
        title="Bookings"
        selectOptions={options}
				path='/bookings'
				filterList={getSelect}
      />

      {isHome && (
        <div className=" my-8 flex justify-center items-center">
          <Link
            href="/bookings"
            className="bg-primaryBlue px-5 py-3 text-white rounded-lg"
          >
            View All Bookings
          </Link>
        </div>
      )}
    </div>
  );

}
