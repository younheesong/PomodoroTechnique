import GoogleLoginButton from "./components/GoogleLoginButton";

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
        <GoogleLoginButton />
      </div>
    </div>
  );
};

export default Login;
