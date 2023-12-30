import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">Hello world</span>
      <Link href={'/about'}>About</Link>
    </main>
  )
}
