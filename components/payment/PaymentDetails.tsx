import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import React from "react";

interface Details {
  id: string;
  name: string;
  image: string;
  imageLogo: string;
  bank: string;
  method: string;
  accountNumber: string;
  status: string;
  amount: string;
  date: string;
  time: string;
  role: string;
}

export default function PaymentDetails({
  id,
  name,
  image,
  imageLogo,
  bank,
  method,
  accountNumber,
  status,
  amount,
  date,
  time,
  role,
}: Details) {
  return (
    <Dialog>
      <DialogTrigger className="flex gap-2 text-blue-500">
        <Image src={imageLogo} alt="Edit Details" width={15} height={15} />
        7686755557
      </DialogTrigger>
      <DialogContent className="w-full p-[3rem] sm:max-w-[30rem] lg:max-w-[35rem]">
        <DialogHeader>
          <DialogTitle className="">Transaction Details</DialogTitle>
        </DialogHeader>
        <div>
          <div className="mb-4">
            <Image
              src={image}
              alt="Talent Images"
              className="w-[70px] h-[70px]"
            />
            <h4>{name}</h4>
            <h6 className="text-[12px]">{role}</h6>
          </div>
          <div className="grid grid-cols-3  gap-4 ">
            {bank && (
              <div>
                <h4 className="text-[12px] text-[#212121B2]">Bank</h4>
                <p className="flex items-center">{bank}</p>
              </div>
            )}
            {method && (
              <div>
                <h4 className="text-[12px] text-[#212121B2]">Payment Method</h4>
                <p className="flex items-center">{method}</p>
              </div>
            )}
            {accountNumber && (
              <div>
                <h4 className="text-[12px] text-[#212121B2]">Account Number</h4>
                <p className=" flex items-center">{accountNumber}</p>
              </div>
            )}
            <div>
              <h4 className="text-[12px] text-[#212121B2]">Amount</h4>
              <p className=" flex items-center">{amount}</p>
            </div>
            <div>
              <h4 className="text-[12px] text-[#212121B2]">Date</h4>
              <p className=" flex items-center">{date}</p>
            </div>
            <div>
              <h4 className="text-[12px] text-[#212121B2]">Time</h4>
              <p className=" flex items-center">{time}</p>
            </div>
            <div className="">
              <h4 className="text-[12px] text-[#212121B2]">Status</h4>
              <p className=" flex items-center">{status}</p>
            </div>
            <div>
              <h4 className="text-[12px] text-[#212121B2]">Transaction ID</h4>
              <p className=" flex items-center">{id}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
