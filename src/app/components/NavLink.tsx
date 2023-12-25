import Link from 'next/link';



interface LabelProps {
  href: string;
  children: React.ReactNode;
}
export function NavLink({ href, children }:LabelProps) {
  return (
    <Link href={href} legacyBehavior>
      <a className="inline-block font-body  rounded-sm px-2 py-1 text-md text-gray-500 ">
        {children}
      </a>
    </Link>
  );
}
