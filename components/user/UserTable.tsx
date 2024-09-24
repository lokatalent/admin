import { UserType, UserColumns } from "@/components/Columns";
import { DataTable } from "@/components/DataTable";
import { log } from "console";
import Link from "next/link";

async function getData(): Promise<UserType[]> {
	return [
		{
			
			name: "Justin Cooper",
            image:'@/assets/images/verify.png',
			email: "Jaydencooper@gmail.com",
			type: "Talent",
			phone: "070123456789",
			status: "Active",
		},
		{
			name: "Martin Cooper",
            image:'@/assets/images/verify.png',
			email: "Jaydencooper@gmail.com",
			type: "Customer",
			phone: "070123456789",
			status: "Deleted",
		},
		{
			name: "Jayden Cooper",
            image:'@/assets/images/verify.png',
			email: "Jaydencooper@gmail.com",
			type: "Talent",
			phone: "070123456789",
			status: "Suspended",
		},
	
	];
}

export default async function UserTable() {
	const data = await getData();

	return (
		<div className="card my-5">
			<DataTable
				columns={UserColumns}
				data={data}
				title="User List"
			/>
		</div>
	);
}
