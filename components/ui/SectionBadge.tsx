interface SectionBadgeProps {
  children: string;
}

export default function SectionBadge({ children }: SectionBadgeProps) {
  return (
    <div className="inline-block mb-4">
      <span className="text-primary text-xs font-medium uppercase tracking-wider border border-primary/30 rounded-full px-4 py-1.5">
        {children}
      </span>
    </div>
  );
}