"use client";
import React, { useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnFiltersState,
  getFilteredRowModel,
  FilterFn,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { rankItem } from "@tanstack/match-sorter-utils";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LiaSlidersHSolid } from "react-icons/lia";
import FilterSelect from "./bookings/FilterSelect";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  title: string;
}

interface AboutPageQuery {
  name: string;
  age: string;
}

interface GlobalFilter {
  globalFilter: any;
}
const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({ itemRank });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

export function DataTable<TData, TValue>({
  columns,
  data,
  title,
}: DataTableProps<TData, TValue>) {
  const router = useRouter();
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    filterFns: {
      fuzzy: fuzzyFilter, //define as a filter function that can be used in column definitions
    },
    globalFilterFn: "fuzzy",
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
  });

  const handleNavigate = (data: object) => {
    console.log(data);
    const encodedData = encodeURIComponent(JSON.stringify(data));
    //    router.push(`/about?${queryString}`);
    router.push(`/bookings/34?data=${encodedData}`);
  };



  return (
    <div>
      <div>
        <h1 className="font-medium text-2xl">{title}</h1>
      </div>
      <div className="flex items-center py-4 gap-2">
        <Input
          placeholder="Search by order id, name of customer "
          value={globalFilter}
          onChange={(e) => table.setGlobalFilter(String(e.target.value))}
          className="max-w-full h-12"
        />

        <Dialog>
          <DialogTrigger className="">
            <div
              className="w-12 h-12 rounded-lg"
              style={{
                backgroundColor: "#Fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderColor: "#E5E7EB",
                borderWidth: "1px",
              }}
            >
              <LiaSlidersHSolid size={24} />
            </div>
          </DialogTrigger>
          <DialogContent className="w-full p-[3rem] py-[2rem] max-w-[26rem]">
            <DialogHeader>
              <DialogTitle className="text-center">Filters</DialogTitle>
            </DialogHeader>
            <div className="w-full gap-6 flex flex-col gap-[2rem]">
              
              <FilterSelect />
              
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  onClick={() => handleNavigate(row.original)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default DataTable;
