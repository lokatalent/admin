import { BookingType, BookingColumns } from "@/components/columns/UserColumns";
import { BookingFilter } from "@/components/FilterData";
import { DataTable } from "@/components/DataTable";

async function getData(): Promise<BookingType[]> {
  return [
    {
      id: "12456256565",
      customer: "Justin Cooper",
      talent: "Gabriel Daramola",
      date: "24/4/2024",
      time: "11:45 AM",
      status: "Pending",
      serviceType: "Indoor Cleaning",
    },
    {
      id: "2565767900",
      customer: "Martin Cooper",
      talent: "Gabriel Daramola",
      date: "24/4/2024",
      time: "11:45 AM",
      status: "Accepted",
      serviceType: "Indoor Cleaning",
    },
    {
      id: "8698767900",
      customer: "Jayden Cooper",
      talent: "Gabriel Daramola",
      date: "24/4/2024",
      time: "11:45 AM",
      status: "Declined",
      serviceType: "Indoor Cleaning",
    },
    {
      id: "12456256565",
      customer: "Justin Cooper",
      talent: "Gabriel Daramola",
      date: "24/4/2024",
      time: "11:45 AM",
      status: "Pending",
      serviceType: "Indoor Cleaning",
    },
    {
      id: "2565767900",
      customer: "Martin Cooper",
      talent: "Gabriel Daramola",
      date: "24/4/2024",
      time: "11:45 AM",
      status: "Accepted",
      serviceType: "Indoor Cleaning",
    },
    {
      id: "8698767900",
      customer: "Jayden Cooper",
      talent: "Gabriel Daramola",
      date: "24/4/2024",
      time: "11:45 AM",
      status: "Declined",
      serviceType: "Indoor Cleaning",
    },
    // ...
  ];
}

export default async function BookingTable({ isHome }) {
	const data = await getData();

	return (
    <div className="card my-5">
      <DataTable
        columns={BookingColumns}
        data={data}
        title="Bookings"
        type="bookings"
        filterType={BookingFilter}
        isSort={true}
        isRole={false}
      />
    </div>
  );
}
