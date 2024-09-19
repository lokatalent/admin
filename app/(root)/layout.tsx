import { redirect } from "next/navigation";
import SideNav from "../../components/SideNav";
import "../globals.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const loggedIn = false;

	if (!loggedIn) redirect("/login");
	return (
		<div className=" main-contain mx-8">
			<div className="sidenav-container">
				<SideNav />
			</div>
			<div className="main-content  ">{children}</div>
		</div>
	);
}
