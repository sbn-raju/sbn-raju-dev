interface Props {
  index: string;
  title: string;
  subtitle?: string;
}

export const SectionHeading = ({ index, title, subtitle }: Props) => (
  <div className="reveal mb-12 md:mb-16">
    <div className="flex items-center gap-4 mb-4">
      <span className="font-mono text-primary text-sm">{index}.</span>
      <h2 className="font-mono text-2xl md:text-4xl font-bold text-foreground whitespace-nowrap">
        {title}
      </h2>
      <div className="h-px bg-border flex-1 max-w-xs" />
    </div>
    {subtitle && <p className="text-muted-foreground max-w-2xl ml-8">{subtitle}</p>}
  </div>
);
