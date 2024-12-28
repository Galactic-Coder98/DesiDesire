export default function ItemLayout({
    children,
} : {
    children: React.ReactNode;
}) {
    return (
        <section className="flex flex-col gap-4">
            <div className="inline-block justify-center">
                {children}
            </div>
        </section>
    );
}