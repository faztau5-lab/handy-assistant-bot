import { Home, Building2, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Жилые интерьеры",
      description: "Кухни, шкафы, встроенная мебель для квартир и домов",
    },
    {
      icon: Building2,
      title: "Коммерческие проекты",
      description: "Офисы, бутики, рестораны, шоурумы 100-200 м²",
    },
    {
      icon: Users,
      title: "Партнёрская программа",
      description: "Выгодные условия для агентов, застройщиков и дизайнеров",
    },
    {
      icon: Award,
      title: "Премиум качество",
      description: "Материалы и фурнитура от мировых брендов",
    },
  ];

  const benefits = [
    "Доступнее местных производителей благодаря производству в Казахстане",
    "Работаем с вашими дизайн-проектами или создаём собственные",
    "Прямое сотрудничество без посредников",
    "Возможность пробного проекта для новых партнёров",
  ];

  return (
    <section id="services" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Наши услуги
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы предлагаем комплексные решения для любых проектов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Почему выгодно работать с нами
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
