import { Layout } from "common/components/layout";
import { DM_Sans, Zen_Maru_Gothic } from "next/font/google";

const dmSans = DM_Sans({ weight: "500", subsets: ["latin"] });
const zenMaruGothic = Zen_Maru_Gothic({
  weight: "500",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout
      lang="ja"
      fontFamily={`${dmSans.style.fontFamily}, ${zenMaruGothic.style.fontFamily}`}
    >
      {children}
    </Layout>
  );
}
