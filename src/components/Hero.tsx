import { Button } from "@/components/ui/button";
import heroImage1 from "@/assets/hero-1.jpg";
import heroImage2 from "@/assets/hero-2.jpg";
import heroImage3 from "@/assets/hero-3.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-secondary/30">
      <div className="absolute inset-0 grid grid-cols-3 gap-4 p-4 opacity-20">
        <img src={heroImage1} alt="" className="w-full h-full object-cover rounded-lg" />
        <img src={heroImage2} alt="" className="w-full h-full object-cover rounded-lg" />
        <img src={heroImage3} alt="" className="w-full h-full object-cover rounded-lg" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-fade-in">
            YES! FURNITURE
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-muted-foreground animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Мебель на заказ для интерьеров Дубая
          </p>
          <p className="text-lg md:text-xl mb-8 text-primary font-semibold animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Built for You.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" onClick={() => scrollToSection("portfolio")} className="text-lg">
              Наши проекты
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")} className="text-lg">
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
