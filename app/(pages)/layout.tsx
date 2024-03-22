export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="md:pb-12 pb-8">{children}</div>;
}
