"use client";

import React, { useEffect, useState } from "react";
import { DataTable } from "@/components/DataTable";
import { HistoryColumns, HistoryType } from "../../../../components/columns/UserColumns";
import view from "../../../../assets/images/view.png";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
async function getData(): Promise<HistoryType[]> {
  return [
    {
      id: "124567900",
      image: view,
      talent: "Gabriel Daramola",
      amount: "15,000",
      type: "Indoor Cleaning",
    },
    {
      id: "124567900",
      image: view,
      talent: "Gabriel Daramola",
      amount: "15,000",
      type: "Indoor Cleaning",
    },
    {
      id: "124567900",
      image: view,
      talent: "Gabriel Daramola",
      amount: "15,000",
      type: "Indoor Cleaning",
    },
    {
      id: "124567900",
      image: view,
      talent: "Gabriel Daramola",
      amount: "15,000",
      type: "Indoor Cleaning",
    },
    {
      id: "124567900",
      image: view,
      talent: "Gabriel Daramola",
      amount: "15,000",
      type: "Indoor Cleaning",
    },
    {
      id: "124567900",
      image: view,
      talent: "Gabriel Daramola",
      amount: "15,000",
      type: "Indoor Cleaning",
    },
    {
      id: "124567900",
      image: view,
      talent: "Gabriel Daramola",
      amount: "15,000",
      type: "Indoor Cleaning",
    },
    {
      id: "124567902",
      image: view,
      talent: "Gabriel Daramola",
      amount: "15,000",
      type: "Indoor Cleaning",
    },
  ];
}

export default function History() {
  const router = useRouter();
  const [data, setData] = useState<HistoryType[]>([]);
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

        <h1 className="font-medium text-2xl">Payments</h1>
      </div>
      <div className="card my-5">
        <DataTable
          columns={HistoryColumns}
          data={data}
          title="Payout History for Talents"
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

