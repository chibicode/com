import profilePic from "./chibicode.jpg";
import Image from "next/image";

export function ProfilePage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Image
        priority
        src={profilePic}
        alt="@chibicode"
        width={200}
        height={200}
        className="rounded-full mb-6"
      />
      <h1 className="text-4xl">{title}</h1>
      {children}
    </>
  );
}
