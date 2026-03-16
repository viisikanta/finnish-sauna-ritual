import Link from "next/link";

interface ContentCardProps {
  title: string;
  description: string;
  href: string;
  emoji?: string;
  tag?: string;
}

export function ContentCard({
  title,
  description,
  href,
  tag,
}: ContentCardProps) {
  return (
    <Link
      href={href}
      className="block p-6 border-t-2 border-t-[var(--color-birch)] hover:bg-[var(--color-linen-dark)] transition-colors group"
    >
      {tag && (
        <span className="text-[10px] font-medium text-[var(--color-birch)] uppercase tracking-[0.1em]">
          {tag}
        </span>
      )}
      <h3
        className="text-lg mt-1 text-[var(--color-foreground)] group-hover:text-[var(--color-foreground)] transition-colors"
        style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
      >
        {title}
      </h3>
      <p className="text-[13px] text-[var(--color-stone)] mt-2 leading-relaxed">
        {description}
      </p>
      <span className="inline-block mt-3 text-[13px] text-[var(--color-lake)] group-hover:underline">
        Read more
      </span>
    </Link>
  );
}
