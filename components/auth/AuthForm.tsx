"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import CustomInput from "../CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { log } from "console";

export default function AuthForm({ type }: { type: string }) {
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const formSchema = authFormSchema(type);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
			role: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		setLoading(true);
	console.log()
		// type === "log-in" ? console.log('mama') : router.push("/signup/verify-email");
		setLoading(false);
	}

	return (
		<div className="w-8/12 mx-auto">
			<div className="text-center">
				<h1 className="font-bold text-4xl text-textColor py-4">LokaTalent</h1>
				<p>{type === "log-in" ? "Login to your account" : "Sign up"}</p>
			</div>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8"
				>
					<CustomInput
						control={form.control}
						input="email"
						label="Email"
						placeholder=" "
					/>
					<CustomInput
						control={form.control}
						input="password"
						label="Password"
						placeholder=" "
					/>

					{type === "sign-up" && (
						<FormField
							control={form.control}
							name="role"
							render={({ field }) => (
								<FormItem className="form-item">
									<FormLabel className="form-label">Role</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger className="input-class">
												<SelectValue />
											</SelectTrigger>
										</FormControl>
										<SelectContent className="w-52 flex justify-end">
											<SelectItem value="Super Admin">Super Admin</SelectItem>
											<SelectItem value="Customer Support">
												Customer Support
											</SelectItem>
										</SelectContent>
									</Select>

									<FormMessage className="form-message" />
								</FormItem>
							)}
						/>
					)}

					<div className="flex flex-col gap-4 w-11/12 mx-auto">
						<Button
							type="submit"
							disabled={loading}
							className="p-8 bg-primaryBlue hover:bg-[#3568D4] text-white text-lg"
						>
							{loading ? (
								<>
									<Loader2
										className="animate-spin"
										size={20}
									/>{" "}
									&nbsp; Loading
								</>
							) : type === "log-in" ? (
								"Login"
							) : (
								"Sign Up"
							)}
						</Button>
					</div>
				</form>
			</Form>

			<footer className="flex justify-center gap-2 mt-4">
				<p className="text-sm font-normal text-gray-600">
					{type === "log-in"
						? "Dont have an account?"
						: "Already have an account?"}
				</p>
				<Link
					href={type === "log-in" ? "/signup" : "/login"}
					className="text-primaryBlue text-sm"
				>
					{type === "log-in" ? " Sign Up" : " Log In"}
				</Link>
			</footer>
		</div>
	);
}
