const SidebarSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-grow flex-col overflow-y-auto relative">
      <nav className="mt-5 flex-1 space-y-1 px-2 pb-4">{children}</nav>
    </div>
  );
};
export default SidebarSection;
