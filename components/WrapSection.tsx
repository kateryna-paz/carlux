function WrapSection({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section
      className={`
        relative w-full
        gradient-bg
        mt-[94px]
        text-white flex flex-col items-center justify-center
        px-6 md:px-10 lg:px-12 pt-9 pb-9
        overflow-y-auto md:overflow-hidden 
        
      `}
    >
      {children}
    </section>
  );
}

export default WrapSection;
