import { Layout } from "common/components/layout";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ weight: "500", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout lang="en" fontFamily={dmSans.style.fontFamily}>
      {children}
    </Layout>
  );
}
