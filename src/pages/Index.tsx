import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedTopics } from "@/components/FeaturedTopics";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedTopics />
    </div>
  );
};

export default Index;
