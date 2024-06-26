import Link from "next/link";
import { Container } from "@/components/Container";

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-accent dark:hover:text-accent"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
        <Container className="">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/projects">Projects</NavLink>
            </div>
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              &copy; {new Date().getFullYear()} Shirley Wang. All rights
              reserved.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
