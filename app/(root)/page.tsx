import InfoCard from "@/components/InfoCard";
import RevenueMetrics from "@/components/RevenueMetrics";

import { FaRegUser } from "react-icons/fa";
import TalentsPerformance from "@/components/dash/TalentsPerformance"

export default function Home() {
	return (
		<div className="w-full  ">
			<div className="flex justify-between w-full py-10  ">
				<InfoCard
					text="Active Bookings"
					number={19}
					icon={<FaRegUser color="#8E11F0" />}
					iconColor="#8280FF"
				/>
				<InfoCard
					text="Total Active Users"
					number={19}
					icon={<FaRegUser color="#3377FF" />}
					iconColor="#3377FF87"
				/>
				<InfoCard
					text="New Users"
					number={19}
					icon={<FaRegUser color="#D38005" />}
					iconColor="#FFAC3399"
				/>
			</div>

			<div className="shadow-md bg-white p-10 my-4">
				<div className="flex justify-between p-4">
					<h5 className="font-medium text-2xl">Revenue Metrics</h5>

					<button className="py-2 px-4 bg-[#3377FF1C]">Download Report</button>
				</div>
				<RevenueMetrics />
			</div>

			<div>
			<TalentsPerformance/>
			</div>
		</div>
	);
}
