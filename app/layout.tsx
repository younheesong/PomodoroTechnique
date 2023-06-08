import "./globals.css";
import Header from "./header";
import { Providers } from "./providers";
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
      <Providers>
        <body className="bg-zinc-900  min-h-screen">
          <div className="min-h-screen">
            <Header />
            <div className="flex">{children}</div>
          </div>
        </body>
      </Providers>
    </html>
  );
}
