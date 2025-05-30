import React, { useState, useEffect } from "react";
import {
	Select,
	SelectContent,
	SelectTrigger,
	SelectItem,
	SelectGroup,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { IoClose } from "react-icons/io5";

export type BookingType = {
	name: string;
	options: string[];
};

interface FilterSelectProps {
	filterType: any[];
	onApplyFilters?: (filters: string[]) => void;
	onResetFilters?: () => void;
	selectedFilterOptions: string[];
	onRemoveFilterOption?: (option: string) => void;
}

function FilterSelect({ filterType, onApplyFilters, onResetFilters, selectedFilterOptions, onRemoveFilterOption }: FilterSelectProps) {
	const [localSelectedOptions, setLocalSelectedOptions] = useState<string[]>(selectedFilterOptions);

	// Update local state when props change
	useEffect(() => {
		setLocalSelectedOptions(selectedFilterOptions);
	}, [selectedFilterOptions]);


	// Helper function to handle selecting values (allows multiple selections)
	const handleValueChange = (value: string, filterArray: string[]) => {
		console.log("Filter array:", filterArray);
		console.log("Selected value:", value);
		
		setLocalSelectedOptions((prevSelectedOptions) => {
			const newSelectedOptions = [...prevSelectedOptions];
			
			// Check if this specific value is already selected
			const isAlreadySelected = newSelectedOptions.includes(value);
			
			if (!isAlreadySelected) {
				// Add the new option (no toggle behavior - only add)
				newSelectedOptions.push(value);
				console.log(`Added ${value} to filters`);
			}
			
			return newSelectedOptions;
		});
	};
	// Helper function to remove an option from selectedOptions
	const handleRemoveOption = (value: string) => {
		setLocalSelectedOptions((prevSelectedOptions) => {
			return prevSelectedOptions.filter((option) => option !== value);
		});
		
		// Also call the parent's remove function
		if (onRemoveFilterOption) {
			onRemoveFilterOption(value);
		}
	};

	// Handle applying filters
	const handleApplyFilters = () => {
		if (onApplyFilters) {
			onApplyFilters(localSelectedOptions);
		}
	};

	// Handle reset filters
	const handleResetFilters = () => {
		setLocalSelectedOptions([]);
		if (onResetFilters) {
			onResetFilters();
		}
	};


	return (
		<div className="w-full gap-6 flex flex-col gap-[2rem]">
			{/* Applied Filters Section */}
			<div>
				<div className="flex justify-between items-center">
					<p>Applied filters</p>
					<Button
						variant="ghost"
						className="text-primaryBlue"
						onClick={handleResetFilters}
					>
						Reset
					</Button>
				</div>
				<div className="flex items-center gap-3 flex-wrap">
					{localSelectedOptions.map((name, index) => (
						<Button
							key={index}
							className="bg-primaryBlue px-3 py-3 text-white rounded-sm flex items-center gap-3 self-center w-max"
							onClick={() => handleRemoveOption(name)}
						>
							{name}
							<IoClose color="white" />
						</Button>
					))}
				</div>
			</div>

			{/* Filters Section */}
			<div>
				{filterType.map((select, index) => (
					<div
						className="flex justify-between items-center w-full text-left mb-4"
						key={index}
					>
						<div>
							<input 
								type="checkbox" 
								checked={localSelectedOptions.some(option => select.options.includes(option))}
								readOnly
							/>
							<span className="text-gray-700 ml-3">{select.name}</span>
						</div>
						<div>
							<Select
								onValueChange={(value) =>
									handleValueChange(value, select.options)
								}
								value="" // Always reset to empty after selection
							>
								<SelectTrigger className="w-min focus:outline-none border-none shadow-none">
									{(() => {
										const selectedFromCategory = localSelectedOptions.filter(opt => select.options.includes(opt));
										if (selectedFromCategory.length === 0) return "Select...";
										if (selectedFromCategory.length === 1) return selectedFromCategory[0];
										return `${selectedFromCategory.length} selected`;
									})()}
								</SelectTrigger>
								<SelectContent>
									<SelectGroup key={index}>
										{select.options.map((option, optionIndex) => {
											const isSelected = localSelectedOptions.includes(option);
											return (
												<SelectItem
													key={optionIndex}
													value={option}
													disabled={isSelected}
													className={`bold leading-none hover:font-bold hover:text-[#3377FF] hover:bg-[#3377FF3D] rounded-[7px] flex items-center h-[35px] ${
														isSelected ? 'bg-[#3377FF3D] text-[#3377FF] font-bold opacity-50' : 'text-violet11'
													}`}
												>
													{isSelected ? '✓ ' : ''}{option}
												</SelectItem>
											);
										})}
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
					</div>
				))}
			</div>

			{/* Apply Button */}
			<Button
				className="bg-primaryBlue px-6 py-5 text-white rounded-sm self-center w-48"
				disabled={localSelectedOptions.length === 0}
				onClick={handleApplyFilters}
			>
				Apply
			</Button>
		</div>
	);
}

export default FilterSelect;