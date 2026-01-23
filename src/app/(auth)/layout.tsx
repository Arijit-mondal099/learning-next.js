"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const links = [
    { url: "/login", label: "Login" },
    { url: "/register", label: "Register" },
  ];

  return (
    <div>
      <div>
        {links.map((link) => {
          const isActive = pathname === link.url || pathname.startsWith(link.url) && link.url !== "/";

          return (
            <Link
              href={link.url}
              key={link.label}
              style={isActive ? { background: "yellow" } : { background: "red" }}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <h1>Auth Area</h1>
      {children}
    </div>
  );
}