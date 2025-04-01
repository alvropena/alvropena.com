import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-4 max-w-2xl text-center">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
        Alvaro Peña
      </h1>

      <div className="flex gap-4 mt-2">
        <Link
          href="https://alvropena.beehiiv.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:underline hover:underline-offset-4"
        >
          Blog
        </Link>
        <Link
          href="/projects"
          className="text-sm hover:underline hover:underline-offset-4"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="text-sm hover:underline hover:underline-offset-4"
        >
          Contact
        </Link>
      </div>
    </main>
  );
}
