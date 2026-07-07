import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center container-px text-center">
      <p className="label-mono mb-4">[SYSTEM] 404 &mdash; integrity check failed</p>
      <h1 className="font-display text-5xl text-text-primary mb-4">Page not found</h1>
      <p className="text-text-muted max-w-sm mb-8">
        This route doesn&apos;t exist, or the checksum on it never verified. Let&apos;s get you back.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-teal text-on-accent font-medium px-5 py-3 rounded-full hover:bg-teal-soft transition-colors"
      >
        Back to home
      </Link>
    </main>
  );
}
