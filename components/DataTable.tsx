"use client";
import React, { useState } from "react";
import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
	ColumnFiltersState,
	getFilteredRowModel,
  getSortedRowModel,
	SortingState,
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
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectGroup,
} from "@/components/ui/select";
import { LiaSlidersHSolid } from "react-icons/lia";
import FilterSelect from "./FilterSelect";
import SortList from "./SortList";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  title: string;
  selectOptions: string[];
  path: string;
  filterType: any;
  onApplyFilters?: (filters: string[]) => void;
  onResetFilters?: () => void;
  selectedFilterOptions?: string[];
  onRemoveFilterOption?: (option: string) => void;
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
  selectOptions,
  path,
  filterType,
  onApplyFilters,
  onResetFilters,
  selectedFilterOptions,
  onRemoveFilterOption
}: DataTableProps<TData, TValue>) {
  console.log(selectOptions);
  const router = useRouter();
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [sorting, setSorting] = useState<SortingState>([]);
  console.log(title);
 
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    globalFilterFn: "fuzzy",
    state: {
      globalFilter,
      sorting,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    enableSortingRemoval: true,
    enableMultiSort: true,
  });

  const handleNavigate = (id: number) => {
    console.log(id);
    router.push(`${path}/${id}`);
  };

// Helper functions  
const generateFileName = (title: string, extension: string) => {
  const timestamp = new Date().toISOString().split('T')[0];
  const fileName = title.toLowerCase().replace(/\s+/g, '-');
  return `${fileName}-${timestamp}.${extension}`;
};

const downloadFile = (content: string, fileName: string, contentType: string) => {
  const blob = new Blob([content], { type: contentType });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

// Unified data preparation function
const prepareTableData = (data: any[], columns: ColumnDef<any, any>[]) => {
  // Extract headers
  const headers = columns.map(col => {
    if (typeof col.header === 'string') return col.header;
    if (col.id) return col.id;
    if (col.accessorKey) return String(col.accessorKey);
    return 'Column';
  });

  // Extract row data
  const rows = data.map(row => {
    return columns.map(col => {
      if (col.accessorKey && typeof col.accessorKey === 'string') {
        return row[col.accessorKey] || '';
      } else if (col.accessorFn) {
        return col.accessorFn(row) || '';
      }
      return '';
    });
  });

  return { headers, rows };
};

const formatForCSV = (rows: any[][]) => {
  return rows.map(row => 
    row.map(value => {
      if (typeof value === 'string' && (value.includes(',') || value.includes('"'))) {
        return `"${value.replace(/"/g, '""')}"`;
      }
      return value;
    })
  );
};

const exportData = (format: 'csv' | 'excel') => {
  const currentData = table.getFilteredRowModel().rows.map(row => row.original);
  const { headers, rows } = prepareTableData(currentData, columns);
  
  let content: string;
  let fileName: string;
  let contentType: string;
  
  if (format === 'csv') {
    const csvRows = formatForCSV(rows);
    content = [headers, ...csvRows].map(row => row.join(',')).join('\n');
    fileName = generateFileName(title, 'csv');
    contentType = 'text/csv';
  } else {
    content = [headers, ...rows].map(row => row.join('\t')).join('\n');
    fileName = generateFileName(title, 'xls');
    contentType = 'application/vnd.ms-excel';
  }
  
  downloadFile(content, fileName, contentType);
};

  return (
    <div>
      <div className="flex gap-5 justify-between">
        <div className="flex gap-4">
        <h1 className="font-medium text-2xl">{title}</h1>
        <SortList options={selectOptions} />
        </div>
        <div>
        <Select value="" onValueChange={(value) => {
            if (value === 'csv') exportData('csv');
            if (value === 'excel') exportData('excel');
          }}>
            <SelectTrigger className="px-4 py-2 bg-[#3377FF1C] hover:bg-[#3377FF3D] text-gray-700 rounded-sm transition-colors border-none shadow-none w-auto">
              Export Report
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="csv" className="cursor-pointer hover:font-bold hover:text-[#3377FF] hover:bg-[#3377FF3D] rounded-[7px]">
                  Export as CSV
                </SelectItem>
                <SelectItem value="excel" className="cursor-pointer hover:font-bold hover:text-[#3377FF] hover:bg-[#3377FF3D] rounded-[7px]">
                  Export as Excel
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          </div>
      </div>
      <div className="flex items-center py-4 gap-2">
        <Input
          placeholder="Search by order id, name of customer "
          value={globalFilter}
          onChange={(e) => table.setGlobalFilter(String(e.target.value))}
          className="max-w-full h-12"
        />
        <div className="flex gap-2">
          {/* Filter Dialog */}
          <Dialog>
            <DialogTrigger className="">
              <div
                className="w-12 h-12 rounded-lg"
                style={{
                  backgroundColor: "#fff",
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
                <FilterSelect filterType={filterType} onApplyFilters={onApplyFilters} onResetFilters={onResetFilters} selectedFilterOptions={selectedFilterOptions || []} onRemoveFilterOption={onRemoveFilterOption} />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead 
                      key={header.id}
                      className={header.column.getCanSort() ? "cursor-pointer select-none" : ""}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <div className="flex items-center gap-2">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                        {header.column.getCanSort() && (
                          <div className="flex flex-col">
                            {header.column.getIsSorted() === "asc" ? (
                              <span className="text-blue-500">↑</span>
                            ) : header.column.getIsSorted() === "desc" ? (
                              <span className="text-blue-500">↓</span>
                            ) : (
                              <span className="text-gray-400 hover:text-gray-600">↕</span>
                            )}
                          </div>
                        )}
                      </div>
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
                  onClick={() => handleNavigate(row.original.id)}
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