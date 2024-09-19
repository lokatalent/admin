import React from "react";
import AuthForm from "@/components/auth/AuthForm";

const Login = () => {
	return (
		<section className="flex-center size-full max-sm:px-6 py-14">
			<AuthForm type="log-in" />
		</section>
	);
};

export default Login;
