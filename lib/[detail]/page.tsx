"use client";

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectGroup,
  SelectValue,
} from "@/components/ui/select";

import { useRouter, useSearchParams } from "next/navigation";


import booker from "../../../../assets/images/gabriel.png";
import bookee from "../../../../assets/images/jayden.png";
import Image from "next/image";
import { TbCurrencyNaira } from "react-icons/tb";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Contact from "@/components/bookings/ContactDialog";
import { BiMessageAltDots } from "react-icons/bi";
import { PiPhoneCall } from "react-icons/pi";
// import ContactDialog from "@/components/bookings/ContactDialog";

// console.log(booker);

export default function Detail() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [data, setData] = useState();
  const [status, setStatus] = useState("");

  const encodedData = searchParams.get("data");
  const decodedData = JSON.parse(decodeURIComponent(encodedData));

  console.log(decodedData);

  function makeDetails(data: string) {
    console.log(data);
    setStatus(data);
  }

  

  return (
    <div>
      <div>
        <div className="flex gap-3 items-center">
          <FaArrowLeft size={24} onClick={() => router.back()} />

          <h1 className="font-medium text-2xl">Booking Detail</h1>
        </div>
      </div>
      <div className="card my-5 flex flex-col gap-12">
        <div
          className={`px-2 py-2 flex items-center  gap-2 justify-center w-[90px] rounded-md text-sm font-medium bg-[#FFAC321] rounded-3xl ${
            decodedData.status === "Accepted" || status === "Complete"
              ? "bg-accept "
              : decodedData.status === "Pending" || status === "Pending"
              ? "bg-yellow "
              : "bg-red-100 "
          }`}
        >
          <div className={`h-[7px] w-[7px] rounded-[100%] bg-primary `}></div>
          {status ? status : decodedData.status}
        </div>
        <div className="flex justify-between mt-8">
          <div className="flex items-center gap-[1.5rem]">
            <div className="flex gap-[1.5rem] items-center">
              <div className="w-[90px] h-[90px]">
                <Image
                  src={booker}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4>{decodedData.customer}</h4>
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-[7px] w-[7px] rounded-[100%] bg-[#115F04]"></div>
                  Customer
                </div>
              </div>
            </div>
            <div className="w-[100px] h-[1px] bg-red-500"></div>
            <div className="flex gap-[1.5rem] items-center">
              <div className="w-[90px] h-[90px]">
                <Image
                  src={bookee}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4>{decodedData.talent}</h4>
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-[7px] w-[7px] rounded-[100%] bg-[#115F04]"></div>
                  Talent
                </div>
              </div>
            </div>
          </div>
          <div>
            <Select onValueChange={makeDetails}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Update Booking Status" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    value="Complete"
                    className="bold leading-none text-violet11 hover:font-bold hover:text-[#3377FF] hover:bg-[#3377FF3D] rounded-[7px] flex items-center h-[35px]"
                  >
                    Mark as Complete
                  </SelectItem>
                  <SelectItem
                    value="Pending"
                    className="bold leading-none text-violet11 hover:font-bold hover:text-[#3377FF] hover:bg-[#3377FF3D] rounded-[7px] flex items-center h-[35px]"
                  >
                    Mark as Pending
                  </SelectItem>
                  <SelectItem
                    value="Progress"
                    className="bold leading-none text-violet11 hover:font-bold hover:text-[#3377FF] hover:bg-[#3377FF3D] rounded-[7px] flex items-center h-[35px]"
                  >
                    Mark as in Progress
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-1">
          <div>
            <h4 className="text-[12px] text-[#212121B2]">Booking Type</h4>
            <p className="mt-2 flex items-center">Scheduled Booking</p>
          </div>
          <div>
            <h4 className="text-[12px] text-[#212121B2]">Start Date</h4>
            <p className="mt-2 flex items-center">{decodedData.date}</p>
          </div>
          <div>
            <h4 className="text-[12px] text-[#212121B2]">End Date</h4>
            <p className="mt-2 flex items-center">{decodedData.date}</p>
          </div>
          <div>
            <h4 className="text-[12px] text-[#212121B2]">Location</h4>
            <p className="mt-2 flex items-center">
              Address - 15, aasherifa road, eleyele, Ile-Ife
            </p>
          </div>
          <div className="">
            <h4 className="text-[12px] text-[#212121B2]">Service Type</h4>
            <p className="mt-2 flex items-center">Indoor Cleaning Service</p>
          </div>
          <div>
            <h4 className="text-[12px] text-[#212121B2]">Start Time</h4>
            <p className="mt-2 flex items-center">{decodedData.time}</p>
          </div>
          <div>
            <h4 className="text-[12px] text-[#212121B2]">End Time</h4>
            <p className="mt-2 flex items-center">{decodedData.time}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div>
            <h4 className="text-[12px]">Amount</h4>
            <p className="mt-3 flex items-center text-4xl text-[#DF8600] font-bold">
              <TbCurrencyNaira size={"2.25rem"} />
              100,000
            </p>
          </div>
          <div className="bg-primaryBlue p-6 text-white rounded-md">
            <div className="flex gap-2 items-center">
              <h4 className="text-[12px] text-[hsla(0,0%,100%,0.62)]">
                Payment Status
              </h4>
              <IoCheckmarkCircle size={30} />
            </div>
            <p className="mt-3 text-[16px] ">In Escrow</p>
            <p className="flex items-center text-[12px]">
              (Funds will be held with the lorem ipsum lorem ipsum)
            </p>
          </div>
        </div>

        <div className=" flex">
          {/* <ContactDialog customerName={decodedData.customer} talentName={decodedData.talent} customerImage={bookee} talentImage={booker} /> */}
        </div>  
      </div>
    </div>
  );
}
