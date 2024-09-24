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
  equalsString,
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
import { TiArrowSortedDown } from "react-icons/ti";
import { IoMdTrendingUp } from "react-icons/io";
import { IoOptionsOutline } from "react-icons/io5";
import SelectDemo from "./bookings/Select";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  title: string;
}

const datass = [
  { label: "New bookings", value: "New bookings" },
  { label: "Upcoming bookings", value: "Upcoming bookings" },
  { label: "Instant Bookings", value: "Instant Bookings" },
  { label: "Schedule Bookings", value: "Schedule Bookings" },
];


interface GlobalFilter {
  globalFilter: any;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  title,
}: DataTableProps<TData, TValue>) {
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: equalsString,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
  });



  return (
    <div>
      <div className="flex items-center gap-4">
        <h1 className="font-medium text-2xl">{title}</h1>
        <div className="flex text-sm gap-2 items-center">
          <p className="text-[#6B7280]">Sort by:</p>
          {/* <p>All</p> */}
          <span>
            {/* <TiArrowSortedDown size={20} color="#374151" /> */}
            <SelectDemo
              options={datass}
              label="bookings type"
              placeholder="All "
            />
          </span>
        </div>
      </div>
      <div className="flex items-center py-4 gap-4">
        <Input
          placeholder="Search by order id, name of customer "
          value={globalFilter}
          onChange={(e) => table.setGlobalFilter(String(e.target.value))}
          className="max-w-full h-12 pl-4"
        />
        <div
          className="w-12 h-12 rounded-lg"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderColor: "#E5E7EB",
            borderWidth: "1px",
          }}
        >
          <IoOptionsOutline color="#000" />
        </div>
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
