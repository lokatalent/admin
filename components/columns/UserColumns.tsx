"use client";
import { ColumnDef } from "@tanstack/react-table";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { TbCurrencyNaira } from "react-icons/tb";
import PaymentDetails from "../payment/PaymentDetails";
export type BookingType = {
  id: string;
  customer: string;
  talent: string;
  date: string;
  time: string;
  status: "Pending" | "Accepted" | "Declined";
};
export type TransactionType = {
  id: string;
  name: string;
  paymentMethod: string;
  amount: string;
  time: string;
  status: "Pending" | "Accepted" | "Declined";
};
export type UserType = {
  id: string;
  name: string; // any
  image: string;
  email: string;
  type: string;
  phone: string;
  status: "Active" | "Deleted" | "Suspended";
};
export type PaymentType = {    
  id: string;
  name: string;
  image: string;
  method: string;
  bank: string;
  amount: string;
  date: string;
  status: "Pending" | "Successful" | "Failed";
};
export type HistoryType = {
  id: string;
  talent: string;
  image: string | StaticImageData;
  type: string;
  amount: string;
};
export type PayoutType = {
  image: string | StaticImageData;
  id: string;
  amount: string;
  bank: string;
  date: string;
  time: string;
  status: "Successful" | "Failed";
  accountNumber: string;
  role: string;
  name: string;
};
export const BookingColumns: ColumnDef<BookingType>[] = [
  {
    accessorKey: "id",
    header: "Booking ID",
  },
  {
    accessorKey: "customer",
    header: "Customer",
  },
  {
    accessorKey: "talent",
    header: "Talent",
  },

  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "time",
    header: "Time",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: string = row.getValue("status");

      return (
        <div className="flex items-center">
          <p
            className={`px-2 py-2 flex items-center justify-center w-[122px] rounded-md text-sm font-medium ${
              status === "Accepted"
                ? "bg-accept "
                : status === "Pending"
                ? "bg-yellow "
                : "bg-red-100 "
            }`}
          >
            {status}
          </p>
        </div>
      );
    },
  },
];
export const TransactionColumns: ColumnDef<PaymentType>[] = [
  {
    accessorKey: "id",
    header: "Transaction ID",
    cell: ({ row }) => {
      const nameData = row.original; // The whole row's data
      // console.log(nameData);
      return (
        <div className="flex items-center space-x-2">
          {/* <Link
            href={`/payments/history/${nameData.id}`}
            className="flex items-center gap-2"
          >
            <Image
              src={nameData.image.src}
              alt="Edit Details"
              width={15}
              height={15}
            />
            <p className="text-blue-500">{nameData.id}</p>
          </Link> */}
          <PaymentDetails
            id={nameData.id}
            name={nameData.name}
            image={nameData.image}
            imageLogo={nameData.image.src}
            bank={nameData.bank}
            method={nameData.method}
            accountNumber={nameData.accountNumber}
            status={nameData.status}
            amount={nameData.amount}
            date={nameData.date}
            time={nameData.time}
            role={nameData.role}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const nameData = row.original; // The whole row's data
      return (
        <div className="flex items-center space-x-2">
          <TbCurrencyNaira fontSize={"1.2rem"} />
          {nameData.amount}
        </div>
      );
    },
  },

  {
    accessorKey: "method",
    header: "Payment Method",
  },
  // {
  //   accessorKey: "bank",
  //   header: "Bank Name",
  // },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: string = row.getValue("status");

      return (
        <div className="flex items-center">
          <p
            className={`px-2 py-2 flex items-center justify-center w-[122px] rounded-md text-sm font-medium ${
              status === "Successful"
                ? "bg-[#AAFFE5]"
                : status === "Pending"
                ? "bg-yellow "
                : "bg-[#FFD4D8]"
            }`}
          >
            {status}
          </p>
        </div>
      );
    },
  },
];
// export const functionss = () => {
//   return [
//       {
//     accessorKey: "name",
//     header: "Name",
//   },
//   ]
// }
// console.log(TransactionColumns)

export const UserColumns: ColumnDef<UserType>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const nameData = row.original; // The whole row's data
      return (
        <div className="flex items-center space-x-2">
          <Link href={`/users/${nameData.id}`}>
            <p className="text-blue-500">{nameData.name}</p>
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },

  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: string = row.getValue("status");

      return (
        <div className="flex items-center">
          <p
            className={`px-2 py-2 flex items-center justify-center w-[122px] rounded-md text-sm font-medium ${
              status === "Active"
                ? "bg-accept "
                : status === "Suspended"
                ? "bg-yellow "
                : "bg-red-100 "
            }`}
          >
            {status}
          </p>
        </div>
      );
    },
  },
];
export const HistoryColumns: ColumnDef<HistoryType>[] = [
  {
    accessorKey: "id",
    header: "Transaction ID",
    cell: ({ row }) => {
      const nameData = row.original; // The whole row's data

      return (
        <div className="flex items-center space-x-2">
          <Link
            href={`/payments/history/${nameData.id}`}
            className="flex items-center gap-2"
          >
            <Image
              src={nameData.image.src}
              alt="Edit Details"
              width={15}
              height={15}
            />
            <p className="text-blue-500">{nameData.id}</p>
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: "talent",
    header: "Talent",
  },

  {
    accessorKey: "type",
    header: "Service Type",
  },
  {
    accessorKey: "amount",
    header: "Total Amount Earned",
    cell: ({ row }) => {
      const nameData = row.original; // The whole row's data
      return (
        <div className="flex items-center space-x-2">
          <TbCurrencyNaira fontSize={"1.2rem"} />
          {nameData.amount}
        </div>
      );
    },
  },
];
export const PayoutColumns: ColumnDef<PayoutType>[] = [
  {
    accessorKey: "id",
    header: "Payment ID",
    cell: ({ row }) => {
      const nameData = row.original; // The whole row's data
      console.log(nameData);
      return (
        <div className="flex items-center space-x-2">
          {/* <Link
            href={`/payments/history/${nameData.id}`}
            className="flex items-center gap-2"
          >
            <Image
              src={nameData.image.src}
              alt="Edit Details"
              width={15}
              height={15}
            />
            <p className="text-blue-500">{nameData.id}</p>
          </Link> */}
          <PaymentDetails
            id={nameData.id}
            name={nameData.name}
            image={nameData.image}
            imageLogo={nameData.image.src}
            bank={nameData.bank}
            accountNumber={nameData.accountNumber}
            status={nameData.status}
            amount={nameData.amount}
            date={nameData.date}
            time={nameData.time}
            role={nameData.role}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const nameData = row.original; // The whole row's data
      return (
        <div className="flex items-center space-x-2">
          <TbCurrencyNaira fontSize={"1.2rem"} />
          {nameData.amount}
        </div>
      );
    },
  },
  {
    accessorKey: "bank",
    header: "Bank",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "time",
    header: "Time",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: string = row.getValue("status");

      return (
        <div className="flex items-center">
          <p
            className={`px-2 py-2 flex items-center justify-center w-[122px] rounded-md text-sm font-medium ${
              status === "Successful"
                ? "bg-[#AAFFE5]"
                : status === "Failed"
                ? "bg-[#ffd4d8]"
                : null
            }`}
          >
            {status}
          </p>
        </div>
      );
    },
  },
];





