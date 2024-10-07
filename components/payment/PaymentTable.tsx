import { PaymentType, TransationColumns } from "@/components/columns/Columns";
import { DataTable } from "@/components/DataTable";
import { PaymentFilter } from "../FilterData";
import { TransactionOptions} from "../SortData";
import verify from '../../assets/images/view.png';

async function getData(): Promise<PaymentType[]> {
  return [
    {
      id: "124567900",
      name: "Jayden Cooper",
      image:  verify ,
      method: "Paystack",
      date: "24/4/2022",
      amount: "15,000",
      status: "Successful",
    },
    {
      id: "124567900",
      name: "Jayden Cooper",
      image:  verify ,
      method: "Paystack",
      date: "24/4/2022",
      amount: '15,000',
      status: "Failed",
    },
    {
      id: "124567900",
      name: "Jayden Cooper",
      image: verify,
      method: "Paystack",
      date: "24/4/2022",
      amount: "15,000",
      status: "Successful",
    },
    {
      id: "124567900",
      name: "Jayden Cooper",
      image: verify,
      method: "Paystack",
      date: "24/4/2022",
      amount: "15,000",
      status: "Failed",
    },
    {
      id: "124567900",
      name: "Jayden Cooper",
      image: verify,
      method: "Paystack",
      date: "24/4/2022",
      amount: "15,000",
      status: "Failed",
    },
    {
      id: "124567900",
      name: "Jayden Cooper",
      image: verify,
      method: "Paystack",
      date: "24/4/2022",
      amount: "15,000",
      status: "Successful",
    },
    {
      id: "124567900",
      name: "Jayden Cooper",
      image: verify,
      method: "Paystack",
      date: "24/4/2022",
      amount: "15,000",
      status: "Successful",
    },
    {
      id: "124567902",
      name: "Jayden Cooper",
      image: verify,
      method: "Paystack",
      date: "24/4/2022",
      amount: "15,000",
      status: "Failed",
    },
  ];
}

async function getTalent(): Promise<PaymentType[]> {
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

//   const data = [
//     {
//       id: "124567900",
//       name: "Gabriel Daramola",
//       image: "verify",
//       bank: "Zenith",
//       date: "24/4/2022",
//       amount: "15,000",
//       status: "Successful",
//     },
//     {
//       id: "124567900",
//       name: "Gabriel Daramola",
//       image: "verify",
//       bank: "Zenith",
//       date: "24/4/2022",
//       amount: "15,000",
//       status: "Failed",
//     },
//     {
//       id: "124567900",
//       name: "Gabriel Daramola",
//       image: "verify",
//       bank: "Zenith",
//       date: "24/4/2022",
//       amount: "15,000",
//       status: "Successful",
//     },
//     {
//       id: "124567900",
//       name: "Gabriel Daramola",
//       image: "verify",
//       bank: "Zenith",
//       date: "24/4/2022",
//       amount: "15,000",
//       status: "Failed",
//     },
//     {
//       id: "124567900",
//       name: "Gabriel Daramola",
//       image: "verify",
//       bank: "Zenith",
//       date: "24/4/2022",
//       amount: "15,000",
//       status: "Failed",
//     },
//     {
//       id: "124567900",
//       name: "Gabriel Daramola",
//       image: "verify",
//       bank: "Zenith",
//       date: "24/4/2022",
//       amount: "15,000",
//       status: "Successful",
//     },
//     {
//       id: "124567900",
//       name: "Gabriel Daramola",
//       image: "verify",
//       bank: "Zenith",
//       date: "24/4/2022",
//       amount: "15,000",
//       status: "Successful",
//     },
//     {
//       id: "124567902",
//       name: "Jayden Cooper",
//       image: "verify",
//       bank: "Zenith",
//       date: "24/4/2022",
//       amount: "15,000",
//       status: "Failed",
//     },
//   ];

// const New = TransactionColumns2(data);
//   console.log(New);

export default async function PaymentTable() {
  const data = await getData();
  
  return (
    <div className="card my-5">
      <DataTable
        columns={TransationColumns}
        data={data}
        title="Transactions"
        selectOptions={TransactionOptions}
        path="/paymentaddsds/"
        filterType={PaymentFilter}
        isSort={true}
        isRole={true}
        isReport={true}
      />
    </div>
  );
}
