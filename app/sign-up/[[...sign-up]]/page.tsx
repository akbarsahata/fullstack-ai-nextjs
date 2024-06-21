import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => (
  <div className="h-screen flex items-center justify-center">
    <div className="w-full max-w-[800px] mx-auto">
      <div className="h-full flex items-center justify-center">
        <SignUp />
      </div>
    </div>
  </div>
);

export default SignUpPage;
