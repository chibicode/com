import { Profile } from "common/components/profile";
import { ProfilePage } from "common/components/profile-page";
import { ExternalLink } from "common/components/external-link";
import { username, email } from "common/lib/constants";
import { type Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://chibicode.com"),
  title: "Shu Uesugi",
  description: username,
  openGraph: {
    title: "Shu Uesugi",
    description: username,
    url: "https://chibicode.com",
    siteName: username,
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "https://chibicode.com",
      ja: "https://jp.chibicode.com",
      "x-default": "https://chibicode.com",
    },
  },
  twitter: {
    site: username,
    card: "summary_large_image",
  },
};

export default function Home() {
  return (
    <ProfilePage title="Shu Uesugi">
      <div className="flex flex-col items-center gap-10 mt-8 max-w-md">
        <Profile
          bio={
            <>
              Software Engineer at{" "}
              <ExternalLink href="https://vercel.com">Vercel</ExternalLink>.
              Co-translator (EN → JP), “
              <ExternalLink href="https://www.gapminder.org/factfulness-book/">
                Factfulness
              </ExternalLink>
              ” by Hans Rosling, et al.
            </>
          }
          descriptionList={[
            {
              label: "💌 Email",
              href: `mailto:${email}`,
              linkText: email,
            },
            {
              label: "🧵 Threads",
              href: "https://www.threads.net/@chibicode",
              linkText: username,
            },
            {
              label: "🐦 Twitter",
              href: "https://twitter.com/chibicode",
              linkText: username,
            },
            {
              label: "👀 Source",
              href: "https://github.com/chibicode/com",
              linkText: "github.com/chibicode/com",
            },
            {
              label: "🇯🇵 Japanese Site",
              href: "https://jp.chibicode.com",
              linkText: "jp.chibicode.com",
            },
          ]}
        />
      </div>
    </ProfilePage>
  );
}
