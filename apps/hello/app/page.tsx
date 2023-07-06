import { ProfilePage } from "common/components/profile-page";
import { type Metadata } from "next";
import { usernameWithAtSign } from "common/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL("https://hello.chibicode.com"),
  title: usernameWithAtSign,
  description: "Shu Uesugi / 上杉周作",
  openGraph: {
    title: usernameWithAtSign,
    description: "Shu Uesugi / 上杉周作",
    url: "https://hello.chibicode.com",
    siteName: usernameWithAtSign,
  },
  alternates: {
    canonical: "/",
  },
  twitter: {
    site: usernameWithAtSign,
    card: "summary_large_image",
  },
};

function ButtonLink({
  label,
  href,
  children,
  ja,
}: {
  label: string;
  href: string;
  children: React.ReactNode;
  ja?: boolean;
}) {
  const lang = ja ? "ja" : undefined;
  return (
    <div className="flex flex-col items-center gap-3">
      <a
        className="h-12 items-center border-green-950 dark:border-green-50 border-2 rounded-full inline-flex justify-center w-48 hover:bg-yellow-200 hover:text-yellow-950 hover:border-yellow-950 dark:hover:bg-yellow-900 dark:hover:text-yellow-100 dark:hover:border-yellow-100 transition-colors focus:ring-offset-2 focus:ring-2 focus:ring-green-950 dark:focus:ring-green-50 outline-0 ring-offset-green-100 dark:ring-offset-green-950 text-lg"
        href={href}
        lang={lang}
      >
        {children}
      </a>
      <span lang={lang} className="text-md">
        {label}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <ProfilePage title={usernameWithAtSign}>
      <div className="flex flex-col items-center gap-10 mt-10">
        <ButtonLink label="Shu Uesugi" href="https://chibicode.com">
          🇺🇸 English →
        </ButtonLink>
        <ButtonLink label="上杉周作" ja href="https://jp.chibicode.com">
          🇯🇵 日本語 →
        </ButtonLink>
      </div>
    </ProfilePage>
  );
}
