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
  emoji,
  tag,
}: ContentCardProps) {
  return (
    <Link
      href={href}
      className="block border border-[var(--color-steam)] rounded-lg p-6 bg-white hover:shadow-md hover:border-[var(--color-warm-300)] transition-all group"
    >
      {emoji && <span className="text-3xl mb-3 block">{emoji}</span>}
      {tag && (
        <span className="text-xs font-medium text-[var(--color-lake)] uppercase tracking-wide">
          {tag}
        </span>
      )}
      <h3 className="text-lg font-bold mt-1 group-hover:text-[var(--color-cedar)] transition-colors">
        {title}
      </h3>
      <p className="text-sm text-[var(--color-stone)] mt-2 leading-relaxed">
        {description}
      </p>
      <span className="inline-block mt-3 text-sm font-medium text-[var(--color-lake)] group-hover:underline">
        Read more &rarr;
      </span>
    </Link>
  );
}
