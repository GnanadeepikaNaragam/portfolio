import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="container-px py-10 border-t border-border">
      <div className="max-w-content mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-dim font-mono">
        <span>&copy; {new Date().getFullYear()} {profile.name}</span>
        <span>{profile.location}</span>
        <span>Built with Next.js &middot; Designed from scratch</span>
      </div>
    </footer>
  );
}
