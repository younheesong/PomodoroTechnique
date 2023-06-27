import RoadmapSubMenu from "./components/RoadmapSubMenu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-zinc-900 w-full">
      <RoadmapSubMenu />

      {children}
    </div>
  );
}
