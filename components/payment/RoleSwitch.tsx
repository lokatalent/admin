import React from 'react';
import Link from "next/link";
import { Button } from '../ui/button';
// import { usePathname } from "next/navigation";



function RoleSwitch() {
    // const pathname = usePathname();
    // console.log(pathname);

    return (
      <div className="flex bg-[#E5E7EB4A] px-5 py-4">
        <div className=" ">
          <Button
            // href="/payments/customers"
            className={`px-3 py-2 rounded-md bg-primaryBlue text-white hover:text-white`}
          >
            Customers
          </Button>
        </div>
        <div className="">
          <Link
            href="/payments/talents"
            className="px-3 py-2 rounded-md text-black"
          >
            Talents
          </Link>
        </div>
      </div>
    );
}

export default RoleSwitch
// className="bg-primaryBlue px-5 py-3 text-white rounded-lg"
            // ${
            //   pathname === "/payments" || pathname === "payments/customers"
            //     ? "bg-primaryBlue text-white"
            //     : "text-black"
            // }