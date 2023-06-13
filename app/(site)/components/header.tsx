"use client";
import Button from "@/components/Button";
import SidebarDialog from "./SidebarDialog";
import SidebarToggleButton from "./SidebarToggleButton";
import Sidebar from "./sidebar";
import Link from "next/link";
import { useUserContext } from "@/contexts/userContext";
import Menu from "./Menu";

const Header = () => {
  const { user, loading, signOut } = useUserContext();
  return (
    <div className="sticky shadow-zinc-500/10 shadow-xl top-0 z-40 flex items-center gap-x-6 bg-zinc-900 px-4 py-4 sm:px-6">
      <SidebarToggleButton />
      <SidebarDialog>
        <Sidebar />
      </SidebarDialog>
      <Link href="/">
        <div className="relative hidden md:flex justify-center items-center top-1/2 left-0   text-sm font-semibold leading-6 text-white">
          Pomodoro
        </div>
      </Link>
      <Menu />
      <Link href="/">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:hidden text-sm font-semibold leading-6 text-white">
          Pomodoro
        </div>
      </Link>
      <div className="absolute right-0">
        {loading ? (
          <></>
        ) : user?._id ? (
          <span className="px-4 text-white text-sm tracking-tight">
            {user?.username} 님
            {/* <Button
              bgColor="bg-white"
              textColor="text-zinc-900"
              borderRound="rounded-md"
              onClick={() => signOut()}
            >
              로그아웃
            </Button> */}
          </span>
        ) : (
          <Link href="/accounts/login">
            <Button
              bgColor="bg-white"
              textColor="text-zinc-900"
              borderRound="rounded-md"
            >
              <span className="px-4 text-sm tracking-tight">로그인</span>
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Header;
