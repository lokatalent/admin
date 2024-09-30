import { UserType, UserColumns } from "@/components/Columns";
import { DataTable } from "@/components/DataTable";

async function getData(): Promise<UserType[]> {
  return [
    {
      id: "1",
      name: "Justin Cooper",
      image: "@/assets/images/verify.png",
      email: "Jaydencooper@gmail.com",
      type: "Talent",
      phone: "070123456789",
      status: "Active",
    },
    {
      id: "2",
      name: "Martin Cooper",
      image: "@/assets/images/verify.png",
      email: "Jaydencooper@gmail.com",
      type: "Customer",
      phone: "070123456789",
      status: "Deleted",
    },
    {
      id: "3",
      name: "Jayden Cooper",
      image: "@/assets/images/verify.png",
      email: "Jaydencooper@gmail.com",
      type: "Talent",
      phone: "070123456789",
      status: "Suspended",
    },
    {
      id: "4",
      name: "Justin Cooper",
      image: "@/assets/images/verify.png",
      email: "Jaydencooper@gmail.com",
      type: "Talent",
      phone: "070123456789",
      status: "Active",
    },
    {
      id: "5",
      name: "Martin Cooper",
      image: "@/assets/images/verify.png",
      email: "Jaydencooper@gmail.com",
      type: "Customer",
      phone: "070123456789",
      status: "Deleted",
    },
    {
      id: "6",
      name: "Jayden Cooper",
      image: "@/assets/images/verify.png",
      email: "Jaydencooper@gmail.com",
      type: "Talent",
      phone: "070123456789",
      status: "Suspended",
    },
    {
      id: "7",
      name: "Justin Cooper",
      image: "@/assets/images/verify.png",
      email: "Jaydencooper@gmail.com",
      type: "Talent",
      phone: "070123456789",
      status: "Active",
    },
    {
      id: "8",
      name: "Martin Cooper",
      image: "@/assets/images/verify.png",
      email: "Jaydencooper@gmail.com",
      type: "Customer",
      phone: "070123456789",
      status: "Deleted",
    },
    {
      id: "9",
      name: "Jayden Cooper",
      image: "@/assets/images/verify.png",
      email: "Jaydencooper@gmail.com",
      type: "Talent",
      phone: "070123456789",
      status: "Suspended",
    },
    {
      id: "10",
      name: "Justin Cooper",
      image: "@/assets/images/verify.png",
      email: "Jaydencooper@gmail.com",
      type: "Talent",
      phone: "070123456789",
      status: "Active",
    },
    {
      id: "11",
      name: "Martin Cooper",
      image: "@/assets/images/verify.png",
      email: "Jaydencooper@gmail.com",
      type: "Customer",
      phone: "070123456789",
      status: "Deleted",
    },
    {
      id: "12",
      name: "Jayden Cooper",
      image: "@/assets/images/verify.png",
      email: "Jaydencooper@gmail.com",
      type: "Talent",
      phone: "070123456789",
      status: "Suspended",
    },
  ];
}
const options = ["Sign up date", "No of bookings", "Service Rating"];

const filterData = [
  {
    name: "Account Status",
    options: ["Active", "Suspended", "Delected"],
  },
  {
    name: "Location",
    options: ["Eleyele", "Mayfair"],
  },
  {
    name: "Role",
    options: ["Customer", "Talent"],
  },
];

export default async function UserTable() {
  const data = await getData();

  return (
    <div className="card my-5">
      <DataTable
        columns={UserColumns}
        data={data}
        title="User List"
        selectOptions={options}
			  path="/users"
			  filterList={filterData}
      />
    </div>
  );
}
