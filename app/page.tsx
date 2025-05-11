import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen min-w-full items-center justify-center">
      <div className="max-w-sm flex flex-col gap-4">
        <div className="flex flex-row gap-4 justify-start mb-2">
          {/* Twitter (X) */}
          <a href="https://x.com/alvropenaa" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.53 2.477h3.19l-7.01 8.01 8.24 11.036h-6.47l-5.06-6.77-5.8 6.77H1.44l7.48-8.73L1 2.477h6.61l4.54 6.09 5.38-6.09zm-1.12 16.13h1.77L6.6 4.13H4.71l11.7 14.477z"/>
            </svg>
          </a>
          {/* LinkedIn */}
          <a href="https://linkedin.com/in/alvropena" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/>
            </svg>
          </a>
          {/* GitHub */}
          <a href="https://github.com/alvropena" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
        </div>
        <p className="text-lg">
          Hi! I'm Alvaro, a self-taught Software Engineer and Economics student
          at Cal State East Bay.
        </p>
        <p className="text-lg">
          This summer, I'm interning as a Full Stack Software Engineer at{" "}
          <a
            href="https://www.linkedin.com/company/favorited/"
            className="text-blue-500"
          >
            Favorited
          </a>
          .
        </p>
        <p className="text-lg">
          Previously, I was the Lead Frontend Engineer at{" "}
          <a
            href="https://www.linkedin.com/company/onley-ai/"
            className="text-blue-500"
          >
            Onley AI
          </a>
          . And before that, I was a Junior Frontend Engineer at{" "}
          <a
            href="https://www.linkedin.com/company/eleva-labs/"
            className="text-blue-500"
          >
            Eleva Labs
          </a>
          .
        </p>
        <p className="text-lg">
          I was born in Peru and migrated to the US in 2024 after transferring
          from Universidad del Pacífico to Cal State East Bay.
        </p>
        <p className="text-lg">
          I'm currently teaching myself physics, marketing, and poker.
        </p>
        <p className="text-lg">
          <Link href="https://drive.google.com/file/d/1zYUmIjZYaW450Pq-U6HxoqtIBEuUg5j1/view?usp=sharing" className="text-blue-500" target="_blank" rel="noopener noreferrer">
            Download my resume
          </Link>
        </p>
        <p className="text-lg">
          <Link href="/projects" className="text-blue-500">
            See my projects
          </Link>
        </p>
        <p className="text-lg">
          <Link href="https://alvropena.posthaven.com" className="text-blue-500" target="_blank" rel="noopener noreferrer">
            Read my blog
          </Link>
        </p>
      </div>
    </div>
  );
}
