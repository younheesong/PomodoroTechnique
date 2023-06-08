const MenuSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="hidden md:flex flex-grow flex-row overflow-y-auto relative">
      {children}
    </div>
  );
};
export default MenuSection;
