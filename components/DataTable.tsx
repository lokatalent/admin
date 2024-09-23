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

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	title: string;
}
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
			<div>
				<h1 className="font-medium text-2xl">{title}</h1>
				
			</div>
			<div className="flex items-center py-4">
				<Input
					placeholder="Search by order id, name of customer "
					value={globalFilter}
					onChange={(e) => table.setGlobalFilter(String(e.target.value))}
					className="max-w-full"
				/>
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
