export default function Badge({
  children,
  color,
}: {
  children: string;
  color: string;
}) {
  const COLORS: { [key: string]: string } = {
    red: "bg-red-50 text-red-700 ring-red-600/10",
    green: "bg-green-50 text-green-700 ring-green-600/20",
    blue: "bg-blue-50 text-blue-700 ring-blue-700/10",
  };

  return (
    <span
      className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-md ring-1 ring-inset ${COLORS[color]}`}
    >
      {children}
    </span>
  );
}
