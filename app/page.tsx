import Categories from "@/components/layout/home-component/Categories";
import Courses from "@/components/layout/home-component/Courses";
import CTASection from "@/components/layout/home-component/CTASection";
import Footer from "@/components/layout/home-component/Footer";
import Hero from "@/components/layout/home-component/Hero";
import Navbar from "@/components/layout/home-component/Navbar";
import SearchBar from "@/components/layout/home-component/SearchBar";
import Testimonials from "@/components/layout/home-component/Testimonials";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen w-full max-w-[1980px] mx-auto">
      <Navbar />
      <Hero />

      <SearchBar value={undefined} onChange={undefined} />
      <Categories />
      <Courses />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
