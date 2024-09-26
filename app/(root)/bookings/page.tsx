import InfoCard from "@/components/InfoCard";
import { FaRegUser } from "react-icons/fa";
import { IoMdTrendingUp, IoMdTrendingDown } from "react-icons/io";
import TalentsPerformance from "@/components/dash/TalentsPerformance";
import { Card, CardHeader } from "@/components/ui/card";
import BookingTable from "@/components/bookings/BookingTable";
import FilterDialog from '@/components/bookings/filterDialog';

export default function Booking() {
  return (
    <div className="w-full  ">
      <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 justify-between w-full py-10  ">
        <InfoCard
          text="Total Bookings"
          number={250}
          icon={<FaRegUser color="#8E11F0" />}
          iconColor="#8280FF87"
          arrow={<IoMdTrendingUp color="#00B69B" />}
          comment="Up from Yesterday"
          percent={8.5}
          percentColor="#00B69B"
        />
        <InfoCard
          text="Scheduled Bookings"
          number={100}
          icon={<FaRegUser color="#3377FF" />}
          iconColor="#3377FF87"
          arrow={<IoMdTrendingUp color="#00B69B" />}
          comment="Up from Yesterday"
          percent={8.5}
          percentColor="#00B69B"
        />
        <InfoCard
          text="Instant Bookings"
          number={150}
          icon={<FaRegUser color="#D38005" />}
          iconColor="#FFAC3399"
          arrow={<IoMdTrendingDown color="#F93C65" />}
          comment="Up from Yesterday"
          percent={8.5}
          percentColor="#F93C65"
        />
      </div>

      <div>
        <BookingTable />
        {/* <TalentsPerformance /> */}
        {/* <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
                <Card className="mx-auto">
                  <CardHeader>d</CardHeader>
                </Card>
              </div> */}
      </div>
    </div>
  );
}
