"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogOverlay,
	DialogDescription,
	DialogFooter,
	DialogClose,
} from "@/components/ui/dialog";
import { FaEllipsisV, FaPlus } from "react-icons/fa";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const services = [
	{
		id: 1,
		service: "Indoor Cleaning services",
	},
	{
		id: 2,
		service: "Driving",
	},
	{
		id: 3,
		service: "Solar panel installation",
	},
	{
		id: 4,
		service: "Electrical Services",
	},
	{
		id: 5,
		service: "Indoor Cleaning services",
	},
	{
		id: 6,
		service: "Driving",
	},
	{
		id: 7,
		service: "Solar panel installation",
	},
	{
		id: 8,
		service: "Electrical Services",
	},
];

const SettingsPage = () => {
	const [open, setOpen] = useState(false);
	const [addCat, setAddCat] = useState(false);

	const handleOpenDialog = () => {
		window.alert("This is a basic alert!");
		setOpen(true);
	};

	const AddCategory = () => {
		return (
			<Dialog >
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Are you sure?</DialogTitle>
						<DialogDescription>
							Do you want to delete the entry? Deleting this entry cannot be
							undone.
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<DialogClose asChild>
							<Button variant="outline">Cancel</Button>
						</DialogClose>
						<Button>Delete</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		);
	};

	return (
		<div className="l">
			<Tabs
				defaultValue="service"
				className="my-14"
			>
				<TabsList className="grid w-[400px] grid-cols-2">
					<TabsTrigger value="service">Service Category</TabsTrigger>
					<TabsTrigger value="pricing">Pricing and Commission</TabsTrigger>
				</TabsList>

				<TabsContent
					value="service"
					className="mt-8"
				>
					<Card className="p-5 ">
						<CardContent>
							<div className="flex justify-between my-5">
								<p className="text-primaryBlue font-bold  ">
									Service Category Management
								</p>
								<div className="bg-primaryBlue/30 px-5 py-1 rounded-full" onClick={()=>setAddCat(true)}>
									<FaPlus />
								</div>
							</div>

							<Table>
								<TableBody>
									{services.map((item) => (
										<TableRow
											key={item.id}
											className="border-0 "
										>
											<TableCell className="p-4">{item.service}</TableCell>
											<TableCell className="p-4 flex justify-end">
												<DropdownMenu>
													<DropdownMenuTrigger>
														<FaEllipsisV />
													</DropdownMenuTrigger>
													<DropdownMenuContent className="w-42">
														<DropdownMenuItem
															onSelect={(e) => e.preventDefault()}
														>
															<EditCategory />
														</DropdownMenuItem>
														<DropdownMenuItem
															onSelect={(e) => e.preventDefault()}
														>
															<RemoveCategory/>
														</DropdownMenuItem>
													</DropdownMenuContent>
												</DropdownMenu>
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</CardContent>
					</Card>
					<Dialog open={addCat} onOpenChange={addCat?setAddCat:setAddCat}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Are you sure?</DialogTitle>
						<DialogDescription>
							Do you want to delete the entry? Deleting this entry cannot be
							undone.
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<DialogClose asChild>
							<Button variant="outline">Cancel</Button>
						</DialogClose>
						<Button>Delete</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
				</TabsContent>
				<TabsContent value="pricing">
					<p>mama</p>
				</TabsContent>
			</Tabs>
		</div>
	);
};


const RemoveCategory = () => {
	return (
		<Dialog >
			<DialogTrigger className="w-full hover:bg-primaryBlue/30 py-1 px-3 rounded-md text-start hover:text-primaryBlue">
				Remove Category
			</DialogTrigger>
			<DialogContent className="flex flex-col   w-8/12">
				<DialogHeader className="py-8">
					<DialogTitle>Are you sure you want to remove this category?</DialogTitle>
					<DialogDescription className="py-4">
						Removing this category means that lorem ipsun dolor 
						Removing this category means that lorem ipsun dolor 
						Removing this category means that lorem ipsun dolor 
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<DialogClose asChild>
						<Button className="btnTwo">Cancel</Button>
					</DialogClose>
					<Button className="btnOne">Remove</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
const EditCategory = () => {
	return (
		<Dialog>
			<DialogTrigger className="w-full hover:bg-primaryBlue/30 py-1 px-3 rounded-md text-start hover:text-primaryBlue">
				Edit
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you sure?</DialogTitle>
					<DialogDescription>
						Do you want to delete the entry? Deleting this entry cannot be
						undone.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant="outline">Cancel</Button>
					</DialogClose>
					<Button>Delete</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};


export default SettingsPage;
