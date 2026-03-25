import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  )
}