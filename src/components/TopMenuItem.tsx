import Link from "next/link"

export default function TopMenuItem({ title, pageRef }: any) {
  return (
    <Link href={pageRef}>
        {title}
    </Link>
  )
}