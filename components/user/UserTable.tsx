"use client"

import { useState, useEffect, useMemo } from "react";

import { UserType, UserColumns } from "@/components/Columns";
import { DataTable } from "@/components/DataTable";
import { UserFilter } from "../FilterData";
import { UserOptions } from "../SortData";


async function getData(): Promise<UserType[]> {
  return [
    {
      id: "1",
      name: "Justin Cooper",
      image: "@/assets/images/verify.png",
      email: "Jaydencooper@gmail.com",
      type: "Talent",
      phone: "070123456789",
      status: "Active",
    },
    {
      id: "2",
      name: "Martin Cooper",
      image: "@/assets/images/verify.png",
      email: "Jaydencooper@gmail.com",
      type: "Customer",
      phone: "070123456789",
      status: "Deleted",
    },
    {
      id: "3",
      name: "Jayden Cooper",
      image: "@/assets/images/verify.png",
      email: "Jaydencooper@gmail.com",
      type: "Talent",
      phone: "070123456789",
      status: "Suspended",
    },
    {
      id: "4",
      name: "Justin Cooper",
      image: "@/assets/images/verify.png",
      email: "Jaydencooper@gmail.com",
      type: "Talent",
      phone: "070123456789",
      status: "Active",
    },
    {
      id: "5",
      name: "Martin Cooper",
      image: "@/assets/images/verify.png",
      email: "Jaydencooper@gmail.com",
      type: "Customer",
      phone: "070123456789",
      status: "Deleted",
    },
    {
      id: "6",
      name: "Jayden Cooper",
      image: "@/assets/images/verify.png",
      email: "Jaydencooper@gmail.com",
      type: "Talent",
      phone: "070123456789",
      status: "Suspended",
    },
    {
      id: "7",
      name: "Justin Cooper",
      image: "@/assets/images/verify.png",
      email: "Jaydencooper@gmail.com",
      type: "Talent",
      phone: "070123456789",
      status: "Active",
    },
    {
      id: "8",
      name: "Martin Cooper",
      image: "@/assets/images/verify.png",
      email: "Jaydencooper@gmail.com",
      type: "Customer",
      phone: "070123456789",
      status: "Deleted",
    },
    {
      id: "9",
      name: "Jayden Cooper",
      image: "@/assets/images/verify.png",
      email: "Jaydencooper@gmail.com",
      type: "Talent",
      phone: "070123456789",
      status: "Suspended",
    },
    {
      id: "10",
      name: "Justin Cooper",
      image: "@/assets/images/verify.png",
      email: "Jaydencooper@gmail.com",
      type: "Talent",
      phone: "070123456789",
      status: "Active",
    },
    {
      id: "11",
      name: "Martin Cooper",
      image: "@/assets/images/verify.png",
      email: "Jaydencooper@gmail.com",
      type: "Customer",
      phone: "070123456789",
      status: "Deleted",
    },
    {
      id: "12",
      name: "Jayden Cooper",
      image: "@/assets/images/verify.png",
      email: "Jaydencooper@gmail.com",
      type: "Talent",
      phone: "070123456789",
      status: "Suspended",
    },
  ];
}

interface FilterState {
  role: string[];
  status: string[];
}

export default function UserTable() {
  // const data = await getData();

  const [data, setData] = useState<UserType[]>([]);
  const [appliedFilters, setAppliedFilters] = useState<FilterState>({
    role: [],
    status: []
  });
  const [selectedFilterOptions, setSelectedFilterOptions] = useState<string[]>([]);


  // Filter the data based on applied filters
  const filteredData = useMemo(() => {
    if (appliedFilters.role.length === 0 && appliedFilters.status.length === 0) {
      return data;
    }

    return data.filter((user) => {
      const roleMatch = appliedFilters.role.length === 0 || appliedFilters.role.includes(user.type);
      const statusMatch = appliedFilters.status.length === 0 || appliedFilters.status.includes(user.status);
      
      return roleMatch && statusMatch;
    });
  }, [data, appliedFilters]);

  // Handle filter application from FilterSelect component
  const handleApplyFilters = (selectedFilters: string[]) => {
    const newFilters: FilterState = {
      role: [],
      status: []
    };

    // Map the selected filters to their respective categories
    selectedFilters.forEach(filter => {
      // Check if it's a role filter
      if (["Customer", "Talent"].includes(filter)) {
        newFilters.role.push(filter);
      }
      // Check if it's a status filter
      if (["Active", "Suspended", "Deleted"].includes(filter)) {
        newFilters.status.push(filter);
      }
    });

    setAppliedFilters(newFilters);
    setSelectedFilterOptions(selectedFilters);
  };

  // Handle filter reset
  const handleResetFilters = () => {
    setAppliedFilters({
      role: [],
      status: []
    });
    setSelectedFilterOptions([]);
  };

  const handleRemoveFilterOption = (optionToRemove: string) => {
    const updatedOptions = selectedFilterOptions.filter(option => option !== optionToRemove);
    handleApplyFilters(updatedOptions);
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const userData = await getData();
        setData(userData);
      } catch (error) {
        console.error('Failed to load user data:', error);
      }
    };
    
    loadData();
  }, []);

  return (
    <div className="card my-5">
      <DataTable
        columns={UserColumns}
        data={filteredData}
        title="User List"
        selectOptions={UserOptions}
        path="/users"
        filterType={UserFilter}
        onApplyFilters={handleApplyFilters}
        onResetFilters={handleResetFilters}
        selectedFilterOptions={selectedFilterOptions}
        onRemoveFilterOption={handleRemoveFilterOption}
      />
    </div>
  );
}
