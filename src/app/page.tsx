import MainPage from "@/components/MainPage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * 
 * @returns 
 */

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      {/*  */}
      <Header />
      {/*  */}
      <MainPage />
      {/*  */}
      <Footer />
    </div>
  );
}
