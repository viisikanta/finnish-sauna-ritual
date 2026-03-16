interface AffiliateCardProps {
  name: string;
  description: string;
  price: string;
  rating?: string;
  features: string[];
  affiliateUrl: string;
  badge?: string;
}

export function AffiliateCard({
  name,
  description,
  price,
  rating,
  features,
  affiliateUrl,
  badge,
}: AffiliateCardProps) {
  return (
    <div className="border border-[var(--color-steam)] rounded-sm p-6 bg-white hover:bg-[var(--color-warm-50)] transition-colors relative">
      {badge && (
        <span className="absolute -top-3 left-4 border border-[var(--color-birch)] text-[var(--color-birch)] text-[10px] font-medium uppercase tracking-[0.08em] px-3 py-0.5 bg-white">
          {badge}
        </span>
      )}
      <div className="mb-3">
        <h3 className="text-base font-normal text-[var(--color-foreground)]">
          {name}
        </h3>
        {rating && (
          <span className="text-sm text-[var(--color-stone-light)]">{rating}</span>
        )}
      </div>
      <p className="text-sm text-[var(--color-stone)] mb-4">{description}</p>
      <ul className="text-sm space-y-1 mb-4">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-[var(--color-stone)]">
            <span className="text-[var(--color-stone-light)]">&mdash;</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--color-steam)]">
        <span className="text-base font-normal text-[var(--color-birch)]">
          {price}
        </span>
        <a
          href={affiliateUrl}
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          className="affiliate-link text-[12px] font-medium uppercase tracking-[0.06em] text-[var(--color-foreground)] hover:text-[var(--color-birch)] transition-colors"
        >
          Check Price
        </a>
      </div>
    </div>
  );
}
