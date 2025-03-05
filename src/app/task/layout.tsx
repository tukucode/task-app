import Navbar from '@/components/Navbar'
import Container from '@/components/Container'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main>
        <Container className='py-4'>
          {children}
        </Container>
      </main>
    </>
  )
}
