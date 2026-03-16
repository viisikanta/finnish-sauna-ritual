"use client";

import { useState } from "react";

interface EmailCaptureProps {
  title?: string;
  description?: string;
  buttonText?: string;
  leadMagnet?: string;
}

export function EmailCapture({
  title = "The Finnish Sauna Ritual",
  description = "A considered guide to the Finnish sauna ritual. Delivered to your inbox.",
  buttonText = "Receive the Guide",
  leadMagnet = "etiquette-cheat-sheet",
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, leadMagnet }),
      });

      if (!res.ok) throw new Error("Failed to subscribe");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="border-t border-b border-[var(--color-steam)] py-12 text-center my-12">
        <p
          className="text-xl text-[var(--color-foreground)]"
          style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
        >
          Welcome. Check your inbox.
        </p>
      </div>
    );
  }

  return (
    <div className="border-t border-b border-[var(--color-steam)] py-12 my-12">
      <div className="max-w-lg mx-auto text-center">
        <h3
          className="text-2xl text-[var(--color-foreground)] mb-3"
          style={{ fontFamily: "var(--font-serif)", fontWeight: 300 }}
        >
          {title}
        </h3>
        <p className="text-sm text-[var(--color-stone)] mb-6">{description}</p>
        <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 px-4 py-2.5 border border-[var(--color-steam)] bg-white text-sm focus:outline-none focus:border-[var(--color-birch)]"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-5 py-2.5 bg-[var(--color-birch)] text-white text-[11px] font-medium uppercase tracking-[0.08em] hover:opacity-90 transition-opacity whitespace-nowrap disabled:opacity-50"
          >
            {loading ? "Sending..." : buttonText}
          </button>
        </form>
        {error && (
          <p className="text-xs text-red-500 mt-2">{error}</p>
        )}
      </div>
    </div>
  );
}
