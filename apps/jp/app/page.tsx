import { Profile } from "common/components/profile";
import { ProfilePage } from "common/components/profile-page";
import { ExternalLink } from "common/components/external-link";
import { usernameWithAtSign, email } from "common/lib/constants";
import { type Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://jp.chibicode.com"),
  title: "上杉周作",
  description: usernameWithAtSign,
  openGraph: {
    title: "上杉周作",
    description: usernameWithAtSign,
    url: "https://jp.chibicode.com",
    siteName: usernameWithAtSign,
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
    site: usernameWithAtSign,
    card: "summary_large_image",
  },
};

export default function Home() {
  return (
    <ProfilePage title="上杉周作">
      <div className="flex flex-col items-center gap-10 mt-8 max-w-md">
        <Profile
          ja
          bio={
            <>
              <ExternalLink href="https://vercel.com">Vercel</ExternalLink>
              社のエンジニア。日経BP『
              <ExternalLink href="https://www.amazon.co.jp/FACTFULNESS-%E3%83%95%E3%82%A1%E3%82%AF%E3%83%88%E3%83%95%E3%83%AB%E3%83%8D%E3%82%B9-10%E3%81%AE%E6%80%9D%E3%81%84%E8%BE%BC%E3%81%BF%E3%82%92%E4%B9%97%E3%82%8A%E8%B6%8A%E3%81%88%E3%80%81%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E5%9F%BA%E3%81%AB%E4%B8%96%E7%95%8C%E3%82%92%E6%AD%A3%E3%81%97%E3%81%8F%E8%A6%8B%E3%82%8B%E7%BF%92%E6%85%A3-%E3%83%8F%E3%83%B3%E3%82%B9%E3%83%BB%E3%83%AD%E3%82%B9%E3%83%AA%E3%83%B3%E3%82%B0/dp/4822289605">
                FACTFULNESS(ファクトフルネス)
              </ExternalLink>
              』 共訳者 (関連記事は
              <ExternalLink href="https://note.com/chibicode">
                こちら
              </ExternalLink>
              )。代表作は『
              <ExternalLink href="https://yj.chibicode.com/">
                コンピュータサイエンスと魔法のYコンビネータ
              </ExternalLink>
              』。米国在住。
            </>
          }
          descriptionList={[
            {
              label: "💌 メール",
              href: `mailto:${email}`,
              linkText: email,
            },
            {
              label: "🧵 Threads",
              href: "https://www.threads.net/@chibicode",
              linkText: usernameWithAtSign,
            },
            {
              label: "🐦 Twitter",
              href: "https://twitter.com/chibicode",
              linkText: usernameWithAtSign,
            },
            {
              label: "👀 ソースコード",
              href: "https://github.com/chibicode/com",
              linkText: "github.com/chibicode/com",
            },
            {
              label: "🇺🇸 英語サイト",
              href: "https://chibicode.com",
              linkText: "chibicode.com",
            },
          ]}
        />
      </div>
    </ProfilePage>
  );
}
