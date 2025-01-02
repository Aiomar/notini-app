interface LinkProps {
  children: React.ReactNode;
  title: string;
  href: string;
  isActive: boolean;
  location: string;
  onUpdateLocation: (newLocation: string) => void;
}

export default function Link({
  title,
  href,
  isActive,
  location,
  onUpdateLocation,
  children,
}: LinkProps) {
  return (
    <a
      title={title}
      href={href}
      className={
        isActive
          ? "block py-2 px-3 rounded md:bg-transparent text-blue-500 md:p-0"
          : "block py-2 px-3 text-white rounded md:bg-transparent md:hover:text-blue-500 md:p-0"
      }
      onClick={() => onUpdateLocation(location)}
    >
      {children}
    </a>
  );
}
