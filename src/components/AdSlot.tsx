export function AdSlot({ label = "Advertisement" }: { label?: string }) {
  return (
    <div className="ad-slot">
      <p>{label}</p>
      <p className="text-xs mt-1">
        {/* Replace with Ezoic/Mediavine/AdSense code */}
        Ad placeholder &mdash; connect ad network in production
      </p>
    </div>
  );
}
