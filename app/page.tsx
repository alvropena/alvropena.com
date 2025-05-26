import Link from "next/link";

export default function Home() {
	return (
		<div className="max-w-sm flex flex-col gap-4">
			<h1 className="text-2xl">Alvaro Peña</h1>
			<p>
				I&apos;m a self-taught Software Engineer. Currently, I&apos;m interning
				at{" "}
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

			<p>
				Previously, I worked at{" "}
				<Link
					href="https://www.linkedin.com/company/onley-ai/"
					className="text-blue-500"
					target="_blank"
					rel="noopener noreferrer"
				>
					Onley AI
				</Link>
				. And before that, I worked at{" "}
				<Link
					href="https://www.linkedin.com/company/elevalabs/"
					className="text-blue-500"
					target="_blank"
					rel="noopener noreferrer"
				>
					Eleva Labs
				</Link>
				.
			</p>

			<p>
				I graduated from{" "}
				<Link
					href="https://www.csueastbay.edu/"
					className="text-blue-500"
					target="_blank"
					rel="noopener noreferrer"
				>
					California State University, East Bay
				</Link>
				{", "}with a B.S. in Economics.
			</p>

			<p>In 2024, I migrated to the US from Peru.</p>

			<p>
				<Link
					href="https://drive.google.com/file/d/1zYUmIjZYaW450Pq-U6HxoqtIBEuUg5j1/view?usp=sharing"
					className="text-blue-500 inline-flex items-center gap-1"
					target="_blank"
					rel="noopener noreferrer"
				>
					Download my resume
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="inline-block"
						aria-hidden="true"
					>
						<title>External link</title>
						<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
						<polyline points="15 3 21 3 21 9" />
						<line x1="10" y1="14" x2="21" y2="3" />
					</svg>
				</Link>
			</p>
			<p>
				<Link
					href="/projects"
					className="text-blue-500 inline-flex items-center gap-1"
				>
					See my projects
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="inline-block"
						aria-hidden="true"
					>
						<title>External link</title>
						<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
						<polyline points="15 3 21 3 21 9" />
						<line x1="10" y1="14" x2="21" y2="3" />
					</svg>
				</Link>
			</p>
			<p>
				<Link
					href="https://alvropena.posthaven.com"
					className="text-blue-500 inline-flex items-center gap-1"
					target="_blank"
					rel="noopener noreferrer"
				>
					Read my blog
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="inline-block"
						aria-hidden="true"
					>
						<title>External link</title>
						<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
						<polyline points="15 3 21 3 21 9" />
						<line x1="10" y1="14" x2="21" y2="3" />
					</svg>
				</Link>
			</p>
		</div>
	);
}
