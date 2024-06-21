import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
  <div className="h-screen flex items-center justify-center">
    <div className="w-full max-w-[800px] mx-auto">
      <div className="h-full flex items-center justify-center">
        <SignIn />
      </div>
    </div>
  </div>
);

export default SignInPage;
