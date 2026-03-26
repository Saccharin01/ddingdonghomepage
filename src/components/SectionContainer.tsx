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
      className={`max-w-7xl fhd:max-w-[1600px] mx-auto px-6 md:px-20 fhd:px-32 ${className}`}
    >
      {children}
    </div>
  );
}