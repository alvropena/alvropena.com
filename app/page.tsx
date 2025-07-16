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
					href="https://drive.google.com/file/d/1ZOb8IoOX-QbtB7QHdqPlX-rFyr7hf_3d/view?usp=sharing"
					className="text-blue-500"
					target="_blank"
					rel="noopener noreferrer"
				>
					Download my resume
				</Link>
			</p>
			<p>
				<Link href="/projects" className="text-blue-500">
					See my projects
				</Link>
			</p>
			<p>
				<Link
					href="https://blog.alvropena.com"
					className="text-blue-500"
					target="_blank"
					rel="noopener noreferrer"
				>
					Read my blog
				</Link>
			</p>
		</div>
	);
}
