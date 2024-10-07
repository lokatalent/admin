import React from "react";
import InfoCard from "../InfoCard";
import { FaRegUser } from "react-icons/fa";
import { IoMdTrendingUp } from "react-icons/io";
import PaymentTable from "./PaymentTable";
import { PiClockCountdown } from "react-icons/pi";
import { RiArrowRightSFill } from "react-icons/ri";
import Link from "next/link";

const Payments = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 w-full py-10 gap-6 ">
        <InfoCard
          text="Total Commission Earned"
          number="120,000"
          icon={<FaRegUser color="#7141FA" />}
          iconColor="hsla(241,100%,75%,1)"
          arrow={<IoMdTrendingUp color="#00B69B" />}
          comment="Up from Yesterday"
          percent={8.5}
          percentColor="#00B69B"
        />
        <InfoCard
          text="Total Payouts"
          number="45000"
          icon={<FaRegUser color="hsla(220,100%,60%,1)" />}
          iconColor="hsla(220,100%,60%,0.59)"
          arrow={<IoMdTrendingUp color="#00B69B" />}
          comment="Up from Yesterday"
          percent={8.5}
          percentColor="#00B69B"
        />
      </div>
      <div>
        <PaymentTable />
      </div>
      <div>
        <div className="card2 my-5 flex justify-between items-center">
          <div className="flex space-x-3 items-center">
            <div className="w-12 h-12 rounded-lg bg-orange-300 flex items-center justify-center">
              <PiClockCountdown color="#fff" />
            </div>

            <Link href="/payments/history" className="font-bold"> Talents Payout History</Link>
          </div>
          <div>
            <RiArrowRightSFill color="#3A3541DE" size={25}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
