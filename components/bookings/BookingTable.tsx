// import { BookingType, BookingColumns } from "@/components/columns/UserColumns";
// import { BookingFilter } from "@/components/FilterData";
// import { DataTable } from "@/components/DataTable";

// async function getData(): Promise<BookingType[]> {
//   return [
//     {
//       id: "12456256565",
//       customer: "Justin Cooper",
//       talent: "Gabriel Daramola",
//       date: "24/4/2024",
//       time: "11:45 AM",
//       status: "Pending",
//       serviceType: "Indoor Cleaning",
//     },
//     {
//       id: "2565767900",
//       customer: "Martin Cooper",
//       talent: "Gabriel Daramola",
//       date: "24/4/2024",
//       time: "11:45 AM",
//       status: "Accepted",
//       serviceType: "Indoor Cleaning",
//     },
//     {
//       id: "8698767900",
//       customer: "Jayden Cooper",
//       talent: "Gabriel Daramola",
//       date: "24/4/2024",
//       time: "11:45 AM",
//       status: "Declined",
//       serviceType: "Indoor Cleaning",
//     },
//     {
//       id: "12456256565",
//       customer: "Justin Cooper",
//       talent: "Gabriel Daramola",
//       date: "24/4/2024",
//       time: "11:45 AM",
//       status: "Pending",
//       serviceType: "Indoor Cleaning",
//     },
//     {
//       id: "2565767900",
//       customer: "Martin Cooper",
//       talent: "Gabriel Daramola",
//       date: "24/4/2024",
//       time: "11:45 AM",
//       status: "Accepted",
//       serviceType: "Indoor Cleaning",
//     },
//     {
//       id: "8698767900",
//       customer: "Jayden Cooper",
//       talent: "Gabriel Daramola",
//       date: "24/4/2024",
//       time: "11:45 AM",
//       status: "Declined",
//       serviceType: "Indoor Cleaning",
//     },
//     // ...
//   ];
// }

// export default async function BookingTable({ isHome }) {
// 	const data = await getData();

// 	return (
//     <div className="card my-5">
//       <DataTable
//         columns={BookingColumns}
//         data={data}
//         title="Bookings"
//         type="bookings"
//         filterType={BookingFilter}
//         isSort={true}
//         isRole={false}
//       />
//     </div>
//   );
// }

import { BookingType, BookingColumns } from "@/components/columns/UserColumns";
import { DataTable } from "@/components/DataTable";
import Link from "next/link";
import { BookingOptions } from "../SortData";
import { BookingFilter } from "../FilterData";

interface MyObject {
  name: string;
  options: string[];
}

async function getData(): Promise<BookingType[]> {
  return [
    {
      id: "12456256565",
      customer: "Justin Cooper",
      talent: "Gabriel Daramola",
      date: "24/4/2024",
      time: "11:45 AM",
      status: "Pending",
      service: "Indoor Cleaning",
    },
    {
      id: "2565767900",
      customer: "Martin Cooper",
      talent: "Gabriel Daramola",
      date: "24/4/2024",
      time: "11:45 AM",
      status: "Accepted",
      service: "Indoor Cleaning",
    },
    {
      id: "8698767900",
      customer: "Jayden Cooper",
      talent: "Gabriel Daramola",
      date: "24/4/2024",
      time: "11:45 AM",
      status: "Declined",
      service: "Indoor Cleaning",
    },
    {
      id: "12456256565",
      customer: "Justin Cooper",
      talent: "Gabriel Daramola",
      date: "24/4/2024",
      time: "11:45 AM",
      status: "Pending",
      service: "Indoor Cleaning",
    },
    {
      id: "2565767900",
      customer: "Martin Cooper",
      talent: "Gabriel Daramola",
      date: "24/4/2024",
      time: "11:45 AM",
      status: "Accepted",
      service: "Indoor Cleaning",
    },
    {
      id: "8698767900",
      customer: "Jayden Cooper",
      talent: "Gabriel Daramola",
      date: "24/4/2024",
      time: "11:45 AM",
      status: "Declined",
      service: "Indoor Cleaning",
    },
    // ...
  ];
}

export default async function BookingTable({
  isHome,
  data,
}: {
  isHome: boolean;
  data: BookingType[];
}) {
  // const data = await getData();

  return (
    <div className="card my-5">
      <DataTable
        columns={BookingColumns}
        data={data}
        title="Bookings"
        selectOptions={BookingOptions}
        path="/bookings"
        filterType={BookingFilter}
        isSort={true}
        isRole={false}
        isReport={false}
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

