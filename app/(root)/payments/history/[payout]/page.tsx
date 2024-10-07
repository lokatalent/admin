"use client";

import React, { useEffect, useState } from "react";
import { DataTable } from "@/components/DataTable";
import { PayoutColumns, PayoutType } from "@/components/Columns";
import view from "../../../../../assets/images/view.png";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Gabriel from '../../../../../assets/images/gabriel.png';
import { FaArrowLeft } from "react-icons/fa";
import InfoCard from "../../../../../components/InfoCard";
import { IoMdTrendingUp } from "react-icons/io";
import { IoMdWallet } from "react-icons/io";
import { TbReceipt } from "react-icons/tb";
async function getData(): Promise<PayoutType[]> {
  return [
    {
      id: "124567900",
      image: view,
      date: "24/4/2024",
      amount: "15,000",
      bank: "Zenith Bank",
      time: "11:15 AM",
      status: "Successful",
    },
    {
      id: "124567900",
      image: view,
      date: "24/4/2024",
      amount: "15,000",
      bank: "Zenith Bank",
      time: "11:15 AM",
      status: "Failed",
    },
    {
      id: "124567900",
      image: view,
      date: "24/4/2024",
      amount: "15,000",
      bank: "Zenith Bank",
      time: "11:15 AM",
      status: "Successful",
    },
    {
      id: "124567900",
      image: view,
      date: "24/4/2024",
      amount: "15,000",
      bank: "Zenith Bank",
      time: "11:15 AM",
      status: "Failed",
    },
    {
      id: "124567900",
      image: view,
      date: "24/4/2024",
      amount: "15,000",
      bank: "Zenith Bank",
      time: "11:15 AM",
      status: "Failed",
    },
    {
      id: "124567900",
      image: view,
      date: "24/4/2024",
      amount: "15,000",
      bank: "Zenith Bank",
      time: "11:15 AM",
      status: "Successful",
    },
    {
      id: "124567900",
      image: view,
      date: "24/4/2024",
      amount: "15,000",
      bank: "Zenith Bank",
      time: "11:15 AM",
      status: "Successful",
    },
    {
      id: "124567902",
      image: view,
      date: "24/4/2024",
      amount: "15,000",
      bank: "Zenith Bank",
      time: "11:15 AM",
      status: "Failed",
    },
  ];
}

export default function Payout() {
  const router = useRouter();
  // State typed as an array of PayoutType
  const [data, setData] = useState<PayoutType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };

    fetchData();
  }, []); 

  return (
    <div className="mt-4">
      <div className="flex gap-3 items-center">
        <FaArrowLeft size={24} onClick={() => router.back()} />

        <h1 className="font-medium text-2xl">Payouts History for Talents</h1>
      </div>
      <div className="card my-5">
        <div className="flex gap-4 items-center">
          <div>
            <div className="flex gap-[0.5rem] items-center w-full">
              <div className="w-[90px] h-[90px]">
                <Image
                  src={Gabriel}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4>Gabriel Daramola</h4>
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-[7px] w-[7px] rounded-[100%] bg-[#115F04]"></div>
                  <p className="text-[11px]">Indoor Service Cleaning</p>
                </div>
              </div>
            </div>
          </div>
          <InfoCard
            text="Total Commission Earned"
            number="120,000"
            icon={<IoMdWallet color="#7141FA" />}
            iconColor="hsla(241, 100%, 75%, 1)"
            arrow={<IoMdTrendingUp color="#00B69B" />}
            comment="Up from Yesterday"
            percent={8.5}
            percentColor="#00B69B"
          />
          <InfoCard
            text="Total Bookings"
            number="45000"
            icon={<TbReceipt color="#8E11F0" />}
            iconColor="hsla(274, 97%, 59%, 0.76)"
            arrow={<IoMdTrendingUp color="#00B69B" />}
            comment="Up from Yesterday"
            percent={8.5}
            percentColor="#00B69B"
          />
        </div>

        <DataTable
          columns={PayoutColumns}
          data={data}
          title="Payout History"
          selectOptions={[]}
          path="/payments/history"
          filterType={[]}
          isSort={false}
          isRole={false}
          isReport={false}
        />
      </div>
    </div>
  );
}
