import { Navbar } from '@/components';

export default function PublicLayout ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hello world</span>
        { children }
      </main>
    </>
  )
}