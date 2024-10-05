import { functionss, PaymentType, TransactionColumns, TransactionType } from "../columns/UserColumns";
import { DataTable } from "@/components/DataTable";
import { PaymentFilter } from "../FilterData";
import { TransactionOptions } from "../SortData";
import verify from '../../assets/images/view.png';
import { ColumnDef } from "@tanstack/react-table";

async function getData(): Promise<PaymentType[]> {
  return [
    {
      id: "124567900",
      name: "Jayden Cooper",
      image:  verify ,
      method: "Paystack",
      date: "24/4/2022",
      time: "10:24 PM",
      amount: "15,000",
      status: "Successful",
    },
    {
      id: "124567900",
      name: "Jayden Cooper",
      image:  verify ,
      method: "Paystack",
      date: "24/4/2022",
      time: "10:24 PM",
      amount: '15,000',
      status: "Failed",
    },
    {
      id: "124567900",
      name: "Jayden Cooper",
      image: verify,
      method: "Paystack",
      date: "24/4/2022",
      time: "10:24 PM",
      amount: "15,000",
      status: "Successful",
    },
    {
      id: "124567900",
      name: "Jayden Cooper",
      image: verify,
      method: "Paystack",
      date: "24/4/2022",
      time: "10:24 PM",
      amount: "15,000",
      status: "Failed",
    },
    {
      id: "124567900",
      name: "Jayden Cooper",
      image: verify,
      method: "Paystack",
      date: "24/4/2022",
      time: "10:24 PM",
      amount: "15,000",
      status: "Failed",
    },
    {
      id: "124567900",
      name: "Jayden Cooper",
      image: verify,
      method: "Paystack",
      date: "24/4/2022",
      time: "10:24 PM",
      amount: "15,000",
      status: "Successful",
    },
    {
      id: "124567900",
      name: "Jayden Cooper",
      image: verify,
      method: "Paystack",
      date: "24/4/2022",
      time: "10:24 PM",
      amount: "15,000",
      status: "Successful",
    },
    {
      id: "124567902",
      name: "Jayden Cooper",
      image: verify,
      method: "Paystack",
      date: "24/4/2022",
      time: "10:24 PM",
      amount: "15,000",
      status: "Failed",
    },
  ];
}

async function getTalent(): Promise<TransactionType[]> {
  return [
    {
      id: "124567900",
      name: "Gabriel Daramola",
      image: verify,
      bank: "Zenith",
      date: "24/4/2022",
      amount: "15,000",
      status: "Successful",
    },
    {
      id: "124567900",
      name: "Gabriel Daramola",
      image: verify,
      bank: "Zenith",
      date: "24/4/2022",
      amount: "15,000",
      status: "Failed",
    },
    {
      id: "124567900",
      name: "Gabriel Daramola",
      image: verify,
      bank: "Zenith",
      date: "24/4/2022",
      amount: "15,000",
      status: "Successful",
    },
    {
      id: "124567900",
      name: "Gabriel Daramola",
      image: verify,
      bank: "Zenith",
      date: "24/4/2022",
      amount: "15,000",
      status: "Failed",
    },
    {
      id: "124567900",
      name: "Gabriel Daramola",
      image: verify,
      bank: "Zenith",
      date: "24/4/2022",
      amount: "15,000",
      status: "Failed",
    },
    {
      id: "124567900",
      name: "Gabriel Daramola",
      image: verify,
      bank: "Zenith",
      date: "24/4/2022",
      amount: "15,000",
      status: "Successful",
    },
    {
      id: "124567900",
      name: "Gabriel Daramola",
      image: verify,
      bank: "Zenith",
      date: "24/4/2022",
      amount: "15,000",
      status: "Successful",
    },
    {
      id: "124567902",
      name: "Jayden Cooper",
      image: verify,
      bank: "Zenith",
      date: "24/4/2022",
      amount: "15,000",
      status: "Failed",
    },
  ];
}


export default async function PaymentTable() {

  const data = await getData();
  // const data = await getTalent();
  console.log(data);
  console.log("column");
  
  return (
    <div className="card my-5">
      <DataTable
        columns={TransactionColumns}
        data={data}
        title="Transactions"
        selectOptions={TransactionOptions}
        path=""
        filterType={PaymentFilter}
        isSort={true}
        isRole={true}
        isReport={true}
      />
    </div>
  );
}
