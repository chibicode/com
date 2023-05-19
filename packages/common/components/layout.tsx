import "./globals.css";

export function Layout({
  children,
  lang,
  fontFamily,
}: {
  lang: string;
  children: React.ReactNode;
  fontFamily: string;
}) {
  return (
    <html
      lang={lang}
      className="bg-green-100 h-full dark:bg-green-950 transition-colors"
    >
      <body
        style={{
          fontFamily,
        }}
        className={`font-medium transition-colors bg-green-100 dark:bg-green-950 text-green-950 dark:text-green-50 min-h-full flex flex-col`}
      >
        <main className="flex grow flex-col items-center py-12 justify-center px-6">
          {children}
        </main>
      </body>
    </html>
  );
}
