import "./globals.css";
import Header from "./header";
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
        <Header />

        <div className="grid grid-cols-12">
          <div className="col-span-0 md:col-span-2">
            <Sidebar />
          </div>
          <div className="col-span-12 md:col-span-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
