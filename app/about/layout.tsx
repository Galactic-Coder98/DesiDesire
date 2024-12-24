export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-full flex flex-col items-center justify-center">
      <div className="w-full h-full text-center justify-center">
        {children}
      </div>
    </section>
  );
}
