import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center px-4">
      <div className="max-w-sm flex flex-col gap-4">
        <p className="text-lg">
          Hi! I&apos;m Alvaro, a self-taught Software Engineer and Economics
          student at{" "}
          <Link
            href="https://www.csueastbay.edu/"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cal State East Bay
          </Link>
          .
        </p>
        <p className="text-lg">
          This summer, I&apos;m interning as a Full Stack Software Engineer at{" "}
          <Link
            href="https://www.linkedin.com/company/favapp/"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Favorited
          </Link>
          .
        </p>
        <p className="text-lg">
          Previously, I was the Lead Frontend Engineer at{" "}
          <Link
            href="https://www.linkedin.com/company/onley-ai/"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Onley AI
          </Link>
          . And before that, I was a Junior Frontend Engineer at{" "}
          <Link
            href="https://www.linkedin.com/company/eleva-labs/"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Eleva Labs
          </Link>
          .
        </p>
        <p className="text-lg">
          I was born in Peru and migrated to the US in 2024 after transferring
          from{" "}
          <Link
            href="https://www.up.edu.pe/"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Universidad del Pacífico
          </Link>{" "}
          to{" "}
          <Link
            href="https://www.csueastbay.edu/"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cal State East Bay
          </Link>
          .
        </p>
        <p className="text-lg">
          I&apos;m currently teaching myself physics, marketing, and poker.
        </p>
        <p className="text-lg">
          <Link
            href="https://drive.google.com/file/d/1zYUmIjZYaW450Pq-U6HxoqtIBEuUg5j1/view?usp=sharing"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download my resume
          </Link>
        </p>
        <p className="text-lg">
          <Link href="/projects" className="text-blue-500">
            See my projects
          </Link>
        </p>
        <p className="text-lg">
          <Link
            href="https://alvropena.posthaven.com"
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read my blog
          </Link>
        </p>
      </div>
    </div>
  );
}
