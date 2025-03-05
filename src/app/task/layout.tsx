import Navbar from '@/components/Navbar'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main id='main--task'>
        {children}
      </main>
    </>
  )
}
