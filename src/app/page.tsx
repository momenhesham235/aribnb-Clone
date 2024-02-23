import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Banner from "@/components/Home/Banner";
import Explore from "@/components/Home/Explore";
import GreatestOutdoor from "@/components/Home/GreatestOutdoor";
import Live from "@/components/Home/Live";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Explore />
        <Live />
        <GreatestOutdoor />
      </main>
      <Footer />
    </>
  );
}
