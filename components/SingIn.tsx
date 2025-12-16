import { SignInButton } from "@clerk/nextjs";

const SingIn = () => {
  return (
    <SignInButton mode="modal">
      <button
        className="text-sm font-semibold hover:text-pink-300 
        hoverEffect text-white hover:cursor-pointer"
      >
        Login
      </button>
    </SignInButton>
  );
};
export default SingIn;
