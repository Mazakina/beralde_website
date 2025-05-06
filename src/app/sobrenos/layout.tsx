export default function AboutUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main
        className={` w-full overflow-x-hidden  antialiased`}
      >
        {children}
      </main>
  );
}
