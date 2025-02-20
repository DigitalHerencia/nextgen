// Typography Components

export function TypographyH1({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h1 className={ `scroll-m-20 text-5xl font-extrabold  ${ className }` }>
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={ `scroll-m-20 font-bold text-3xl ${ className }` }>
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={ `scroll-m-20 font-semibold text-2xl ${ className }` }>
      {children}
    </h3>
  );
}

export function TypographyH4({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h4 className={ `scroll-m-20 text-xl font-semibold ${ className }` }>
      {children}
    </h4>
  );
}

export function TypographyP({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={ ` text-base [&:not(:first-child)]:mt-1 ${ className }` }>
      {children}
    </p>
  );
}

export function TypographyBlockquote({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <blockquote className={`mt-6 border-l-2 pl-6 italic ${className}`}>
      {children}
    </blockquote>
  );
}

export function TypographyTable({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`my-6 w-full overflow-y-auto ${className}`}>
      {children}
    </div>
  );
}

export function TypographyList({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <ul className={`my-6 ml-6 list-disc [&>li]:mt-2 ${className}`}>
      {children}
    </ul>
  );
}

export function TypographyInlineCode({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <code className={`relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold ${className}`}>
      {children}
    </code>
  );
}

export function TypographyLead({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-xl text-muted-foreground ${className}`}>
      {children}
    </p>
  );
}

export function TypographyLarge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`text-lg font-semibold ${className}`}>
      {children}
    </div>
  );
}

export function TypographySmall({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <small className={`text-sm font-medium leading-none ${className}`}>
      {children}
    </small>
  );
}

export function TypographyMuted({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-sm text-muted-foreground ${className}`}>
      {children}
    </p>
  );
}


