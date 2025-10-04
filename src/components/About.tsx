import { CheckCircle2 } from "lucide-react";
import aboutImage from "@/assets/about-1.jpg";

export const About = () => {
  const features = [
    "Собственное производство в Казахстане",
    "Полный цикл: дизайн → производство → установка в Дубае",
    "Опыт работы с жилыми и коммерческими проектами",
    "Гарантированное качество и доставка в срок",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              О компании
            </h2>
            <p className="text-lg text-muted-foreground">
              YES! FURNITURE специализируется на производстве мебели премиум-класса 
              для требовательных клиентов в Дубае. Наше собственное производство 
              позволяет контролировать качество на каждом этапе.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={24} />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={aboutImage} 
                alt="YES! FURNITURE production" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
