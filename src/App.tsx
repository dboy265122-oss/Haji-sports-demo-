import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FeatureStrip } from "./components/FeatureStrip";
import { Categories } from "./components/Categories";
import { OfferBanner } from "./components/OfferBanner";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Brands } from "./components/Brands";
import { LatestArrivals } from "./components/LatestArrivals";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { About } from "./components/About";
import { CustomTeamOrders } from "./components/CustomTeamOrders";
import { StoreExperience } from "./components/StoreExperience";
import { Reviews } from "./components/Reviews";
import { Gallery } from "./components/Gallery";
import { Faq } from "./components/Faq";
import { SportsTips } from "./components/SportsTips";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingWidgets } from "./components/FloatingWidgets";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeatureStrip />
        <Categories />
        <OfferBanner />
        <FeaturedProducts />
        <Brands />
        <LatestArrivals />
        <WhyChooseUs />
        <About />
        <CustomTeamOrders />
        <StoreExperience />
        <Reviews />
        <Gallery />
        <SportsTips />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  );
}
