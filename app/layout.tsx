import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <title>Marca7 - Patrimônio</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white text-black text-flex" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
