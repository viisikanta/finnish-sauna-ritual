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
    <div className="border border-[var(--color-steam)] rounded-lg p-6 bg-white hover:shadow-md transition-shadow relative">
      {badge && (
        <span className="absolute -top-3 left-4 bg-[var(--color-lake)] text-white text-xs font-bold px-3 py-1 rounded-full">
          {badge}
        </span>
      )}
      <div className="mb-3">
        <h3 className="text-lg font-bold text-[var(--color-foreground)]">
          {name}
        </h3>
        {rating && (
          <span className="text-sm text-[var(--color-warm-500)]">{rating}</span>
        )}
      </div>
      <p className="text-sm text-[var(--color-stone)] mb-4">{description}</p>
      <ul className="text-sm space-y-1 mb-4">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-[var(--color-forest)] mt-0.5">&#10003;</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--color-steam)]">
        <span className="text-lg font-bold text-[var(--color-cedar)]">
          {price}
        </span>
        <a
          href={affiliateUrl}
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          className="affiliate-link text-sm"
        >
          Check Price &rarr;
        </a>
      </div>
    </div>
  );
}
