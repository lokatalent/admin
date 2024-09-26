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

	return (
		<div>
			<div>
				<h1 className="font-medium text-2xl">{title}</h1>
			</div>
			<div className="flex space-x-3 items-center py-4">
				<Input
					placeholder="Search by order id, name of customer "
					value={globalFilter}
					onChange={(e) => table.setGlobalFilter(String(e.target.value))}
					className="max-w-full p-5"
				/>
				<div className="p-2 shadow-sm bg-white border-2 border-gray-200">
					<svg
						width="34"
						height="23"
						viewBox="0 0 34 23"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M33 4.00581H11M7 4.00581H1M33 18.9897H11M7 18.9897H1M23 11.4978H1M33 11.4978H27M9 1.00903C9.53043 1.00903 10.0391 1.1669 10.4142 1.4479C10.7893 1.7289 11 2.11002 11 2.50742V5.5042C11 5.9016 10.7893 6.28272 10.4142 6.56372C10.0391 6.84472 9.53043 7.00259 9 7.00259C8.46957 7.00259 7.96086 6.84472 7.58579 6.56372C7.21071 6.28272 7 5.9016 7 5.5042V2.50742C7 2.11002 7.21071 1.7289 7.58579 1.4479C7.96086 1.1669 8.46957 1.00903 9 1.00903ZM9 15.9929C9.53043 15.9929 10.0391 16.1508 10.4142 16.4318C10.7893 16.7128 11 17.0939 11 17.4913V20.4881C11 20.8855 10.7893 21.2666 10.4142 21.5476C10.0391 21.8286 9.53043 21.9865 9 21.9865C8.46957 21.9865 7.96086 21.8286 7.58579 21.5476C7.21071 21.2666 7 20.8855 7 20.4881V17.4913C7 17.0939 7.21071 16.7128 7.58579 16.4318C7.96086 16.1508 8.46957 15.9929 9 15.9929ZM25 8.50098C25.5304 8.50098 26.0391 8.65884 26.4142 8.93985C26.7893 9.22085 27 9.60197 27 9.99937V12.9961C27 13.3935 26.7893 13.7747 26.4142 14.0557C26.0391 14.3367 25.5304 14.4945 25 14.4945C24.4696 14.4945 23.9609 14.3367 23.5858 14.0557C23.2107 13.7747 23 13.3935 23 12.9961V9.99937C23 9.60197 23.2107 9.22085 23.5858 8.93985C23.9609 8.65884 24.4696 8.50098 25 8.50098Z"
							stroke="black"
							stroke-width="1.18519"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
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
														header.getContext(),
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
												cell.getContext(),
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
