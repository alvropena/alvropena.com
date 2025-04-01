export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <main className="flex flex-col items-center gap-4 max-w-2xl text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Alvaro Peña
        </h1>
       
        <div className="flex gap-4 mt-2">
          <a
            href="/blog"
            className="text-sm hover:underline hover:underline-offset-4"
          >
            Blog
          </a>
          <a
            href="/projects"
            className="text-sm hover:underline hover:underline-offset-4"
          >
            Projects
          </a>
          <a
            href="mailto:contact@alvropena.com"
            className="text-sm hover:underline hover:underline-offset-4"
          >
            Contact
          </a>
        </div>
      </main>
      
      <footer className="absolute bottom-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Alvaro Peña
      </footer>
    </div>
  );
}
