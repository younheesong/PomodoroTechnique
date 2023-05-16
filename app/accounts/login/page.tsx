import Button from "@/components/Button";

const Login = () => {
  return (
    <div className="mx-auto px-10 w-full max-w-sm space-y-10">
      <div>
        <h2 className="mt-24 text-center text-3xl font-bold leading-9 tracking-tight text-white">
          간편하게 구글로
          <br /> 로그인하세요!
        </h2>
      </div>
      <div className="flex w-full">
        <Button
          bgColor="bg-white"
          textColor="text-gray-700"
          borderRound="rounded-md"
          height="h-12"
        >
          <div className="flex gap-4 justify-center font-medium">
            <img
              src="/assets/accounts/login/google_icon.svg"
              className="w-6 h-6"
            />
            구글로 로그인하기
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Login;
