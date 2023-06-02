"use client";
import Button from "@/components/Button";
import { useUserContext } from "@/contexts/userContext";
const GoogleLoginButton = () => {
  const { signInWithGoogle } = useUserContext();
  return (
    <Button
      bgColor="bg-white"
      textColor="text-gray-700"
      borderRound="rounded-md"
      height="h-12"
      onClick={() => signInWithGoogle()}
    >
      <div className="flex gap-4 justify-center font-medium">
        <img src="/assets/accounts/login/google_icon.svg" className="w-6 h-6" />
        구글로 로그인하기
      </div>
    </Button>
  );
};
export default GoogleLoginButton;
