import { UserProvider } from "@/contexts/userContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <UserProvider>{children}</UserProvider>;
}
