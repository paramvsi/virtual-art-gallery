import AboutUs from "@/components/about/Aboutus";
import FeaturedArtworks from "@/components/featured-artworks/FeaturedArtworks";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/home/Hero";
import NavigationBar from "@/components/home/NavigationBar";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import Testimonials from "@/components/testimonials/Testmonials";

const IndexPage = () => {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <AboutUs />

      <FeaturedArtworks />

      <section className="how-it-works">
        <HowItWorks />
      </section>

      <section className="testimonials">
        <Testimonials />
      </section>

      <Footer />
    </div>
  );
};

export default IndexPage;
