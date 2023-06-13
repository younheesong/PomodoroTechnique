export default function PostRoadmapLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex-1 space-y-12 mx-auto max-w-[640px]">
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="mt-10">{children}</div>
    </section>
  );
}
