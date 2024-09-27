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
    role:
      type === "log-in"
        ? z.enum().optional()
        : z.enum(["Super Admin", "Customer Support"]),
  });

function processArrays(oldArray, newArray, newValue) {
  let found = false;
  // console.log('oldArray');
  // console.log(oldArray);
  // console.log('oldArray');
  oldArray.forEach((item) => {
    const index = newArray.indexOf(item);
    if (index !== -1) {
      newArray.splice(index, 1);
      newArray.push(newValue);
      console.log(`Removed ${item} from newArray and added ${newValue}`);
      found = true;
    }
  });
  if (!found) {
    newArray.push(newValue);
    console.log(`No matching item found. Added ${newValue} to newArray.`);
  }
  // console.log("Final newArray:", newArray);
  // setSelectedOptions(newArray);
  return newArray;
}
