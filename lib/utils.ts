import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const authFormSchema = (type: string) =>
	z.object({
		email: z.string().email(),
		password: z.string().min(8),
		role:type==="log-in"? z.enum().optional() : z.enum(['Super Admin', 'Customer Support'])
	});
