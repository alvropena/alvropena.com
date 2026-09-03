import Link from "next/link";

export default function Home() {
	return (
		<div className="max-w-sm flex flex-col gap-4">
			<h1 className="text-2xl">Alvaro Peña</h1>
			<p>Los Angeles, California</p>
			<p>
				I&apos;m the founder of GetMyPermit, a DMV permit test app
				that helps Gen Z study for their driver&apos;s exam.
				We&apos;ve grown to 100K+ users and $20k+ MRR since
				launching in early 2025. You can{" "}
				<Link
					href="https://apps.apple.com/us/app/getmypermit-dmv-permit-test/id6754830799"
					className="text-blue-500"
					target="_blank"
					rel="noopener noreferrer"
				>
					download it on the App Store
				</Link>
				.
			</p>

			<p>
				I&apos;m currently working on my next project, a
				marketplace for UGC creators in LatAm.
			</p>

			<p>
				I&apos;m a co-founder at{" "}
				<Link
					href="https://buya.app"
					className="text-blue-500"
					target="_blank"
					rel="noopener noreferrer"
				>
					buya.app
				</Link>
				{", "}feel free to take a look.
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
