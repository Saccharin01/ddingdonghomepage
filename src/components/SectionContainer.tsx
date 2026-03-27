type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionContainer({
  children,
  className = "",
}: SectionContainerProps) {
  return (
    <div
      className={`
        mx-auto w-full max-w-7xl
        px-6 lg:px-16
        fhd:max-w-[1600px] fhd:px-24
        ${className}
      `}
    >
      {children}
    </div>
  );
}