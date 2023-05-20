import { ExternalLink } from "./external-link";

interface DescriptionListItemProps {
  label: string;
  href: string;
  linkText: React.ReactNode;
}

function DescriptionListItem({
  label,
  href,
  linkText,
}: DescriptionListItemProps) {
  return (
    <>
      <dt className="mt-10 mb-3 bg-green-200 dark:bg-green-900 rounded-full inline-flex items-center px-4 py-0.5">
        {label}
      </dt>
      <dd className="text-lg">
        <ExternalLink href={href}>{linkText}</ExternalLink>
      </dd>
    </>
  );
}

export function Profile({
  bio,
  descriptionList,
  ja,
}: {
  bio: React.ReactNode;
  descriptionList: DescriptionListItemProps[];
  ja?: boolean;
}) {
  return (
    <div className="flex flex-col items-center max-w-md">
      <p className={`text-lg ${ja ? "leading-loose" : "leading-relaxed"}`}>
        {bio}
      </p>
      <dl className="text-md leading-relaxed flex flex-col items-center">
        {descriptionList.map((item) => (
          <DescriptionListItem {...item} key={item.label} />
        ))}
      </dl>
    </div>
  );
}
