import "../globals.css";
import Header from "./components/header";
import { Providers } from "./providers";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <Providers>
        <body className="bg-zinc-900  min-h-screen">
          <div className="min-h-screen">
            <Header />
            <div className="flex bg-zinc-900">{children}</div>
          </div>
        </body>
      </Providers>
    </html>
  );
}
