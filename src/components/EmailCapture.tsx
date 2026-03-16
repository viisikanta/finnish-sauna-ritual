"use client";

import { useState } from "react";

interface EmailCaptureProps {
  title?: string;
  description?: string;
  buttonText?: string;
  leadMagnet?: string;
}

export function EmailCapture({
  title = "Get Your Free Finnish Sauna Etiquette Cheat Sheet",
  description = "A printable PDF with essential sauna dos and don'ts, written by a Finn. Plus weekly sauna tips delivered to your inbox.",
  buttonText = "Send Me the Guide",
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
      <div className="bg-[var(--color-warm-50)] border border-[var(--color-warm-200)] rounded-xl p-8 text-center my-8">
        <p className="text-2xl mb-2">&#x2728;</p>
        <h3
          className="text-xl font-bold text-[var(--color-cedar)] mb-2"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Check your inbox!
        </h3>
        <p className="text-[var(--color-stone)]">
          Your free cheat sheet is on its way. Welcome to Finnish Sauna Guide.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[var(--color-warm-50)] border border-[var(--color-warm-200)] rounded-xl p-8 my-8">
      <div className="max-w-lg mx-auto text-center">
        <h3
          className="text-xl font-bold text-[var(--color-cedar)] mb-2"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {title}
        </h3>
        <p className="text-sm text-[var(--color-stone)] mb-4">{description}</p>
        <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 px-4 py-2.5 rounded-lg border border-[var(--color-warm-200)] bg-white text-sm focus:outline-none focus:border-[var(--color-lake)] focus:ring-1 focus:ring-[var(--color-lake)]"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-5 py-2.5 bg-[var(--color-lake)] text-white rounded-lg text-sm font-semibold hover:bg-[var(--color-lake-light)] transition-colors whitespace-nowrap disabled:opacity-50"
          >
            {loading ? "Sending..." : buttonText}
          </button>
        </form>
        {error && (
          <p className="text-xs text-red-500 mt-2">{error}</p>
        )}
        <p className="text-xs text-[var(--color-stone-light)] mt-3">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
