import InfoCard from "@/components/InfoCard";
import RevenueMetrics from "@/components/RevenueMetrics";

import { FaRegUser } from "react-icons/fa";
import TalentsPerformance from "@/components/dash/TalentsPerformance";
import BookingTable from "@/components/dash/BookingTable";
import TransactionTable from "@/components/dash/TransactionTable";
import { IoMdTrendingUp, IoMdTrendingDown } from "react-icons/io";

export default function Home() {
	return (
		<div className="w-full  ">
			<div className="flex flex-col md:flex-row space-y-3 md:space-y-0 justify-between w-full py-10  ">
				<InfoCard
					text="Active Bookings"
					number={19}
					icon={<FaRegUser color="#8E11F0" />}
					iconColor="#8280FF87"
					arrow={<IoMdTrendingUp color="#00B69B" />}
					comment="Up from Yesterday"
					percent={8.5}
					percentColor="#00B69B"
				/>
				<InfoCard
					text="Total Active Users"
					number={19}
					icon={<FaRegUser color="#3377FF" />}
					iconColor="#3377FF87"
					arrow={<IoMdTrendingUp color="#00B69B" />}
					comment="Up from Yesterday"
					percent={8.5}
					percentColor="#00B69B"
				/>
				<InfoCard
					text="New Users"
					number={19}
					icon={<FaRegUser color="#D38005" />}
					iconColor="#FFAC3399"
					arrow={<IoMdTrendingUp color="#00B69B" />}
					comment="Up from Yesterday"
					percent={8.5}
					percentColor="#00B69B"
				/>
			</div>

			<div>
				<BookingTable isHome={true} />
			</div>
			<div>
				<TransactionTable />
			</div>
		</div>
	);
}
