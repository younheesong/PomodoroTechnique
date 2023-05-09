import "./globals.css";
import Sidebar from "./sidebar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="bg-zinc-900  min-h-screen">
        <div className="flex min-h-screen">
          <div className="w-[200px]">
            <Sidebar />
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
