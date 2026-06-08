import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import ExploreProducts from "./components/ExploreProducts";
import BlogMedia from "./components/BlogMedia";
import StayInformed from "./components/StayInformed";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSlider />
      <ExploreProducts />
      <BlogMedia />
      <StayInformed />
      <Footer />
    </div>
  );
}
