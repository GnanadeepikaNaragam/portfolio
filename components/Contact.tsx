"use client";

import { useState } from "react";
import { Copy, Check, Github, Linkedin, Mail, Send } from "lucide-react";
import { profile } from "@/lib/data";
import { ScrollReveal } from "./ScrollReveal";

// Replace with your own Formspree form ID: https://formspree.io/forms
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  async function copyEmail() {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contact" className="container-px py-28 border-t border-border">
      <div className="max-w-content mx-auto grid lg:grid-cols-[0.45fr_0.55fr] gap-16">
        <ScrollReveal>
          <p className="label-mono mb-4">07 &mdash; Contact</p>
          <h2 className="font-display text-3xl sm:text-4xl text-text-primary mb-6">
            Open to full-time roles. Let&apos;s talk.
          </h2>
          <p className="text-text-muted leading-relaxed max-w-sm mb-8">
            The fastest way to reach me is email. I typically reply within a day.
          </p>

          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 font-mono text-sm text-text-primary border border-border rounded-full px-4 py-2.5 hover:border-teal/50 hover:text-teal transition-colors mb-8"
          >
            {copied ? <Check size={15} className="text-teal" /> : <Copy size={15} />}
            {profile.email}
          </button>

          <div className="flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="h-10 w-10 flex items-center justify-center rounded-full border border-border hover:border-teal/50 hover:text-teal transition-colors"
            >
              <Github size={17} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="h-10 w-10 flex items-center justify-center rounded-full border border-border hover:border-teal/50 hover:text-teal transition-colors"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="h-10 w-10 flex items-center justify-center rounded-full border border-border hover:border-teal/50 hover:text-teal transition-colors"
            >
              <Mail size={17} />
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form onSubmit={handleSubmit} className="card-surface rounded-2xl p-7 sm:p-8 space-y-5">
            <div>
              <label htmlFor="name" className="label-mono block mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-sm text-text-primary focus:border-teal/60 transition-colors outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="label-mono block mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-sm text-text-primary focus:border-teal/60 transition-colors outline-none"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="label-mono block mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-sm text-text-primary focus:border-teal/60 transition-colors outline-none resize-none"
                placeholder="What are you hiring for?"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full inline-flex items-center justify-center gap-2 bg-teal text-on-accent font-medium px-5 py-3 rounded-full hover:bg-teal-soft transition-colors disabled:opacity-60"
            >
              <Send size={16} />
              {status === "sending" ? "Sending\u2026" : "Send message"}
            </button>
            {status === "sent" && (
              <p className="text-sm text-teal font-mono" role="status">
                Message sent \u2014 thank you.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-amber font-mono" role="alert">
                Something went wrong. Email me directly instead.
              </p>
            )}
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
