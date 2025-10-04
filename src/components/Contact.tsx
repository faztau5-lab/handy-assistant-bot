import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено",
      description: "Мы свяжемся с вами в ближайшее время!",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Телефон",
      content: "+971 XX XXX XXXX",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@yesfurniture.ae",
    },
    {
      icon: MapPin,
      title: "Адрес",
      content: "Dubai, UAE",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Готовы обсудить ваш проект? Мы всегда на связи
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Контактная информация
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <p className="text-muted-foreground">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-lg">
              <h4 className="font-semibold text-foreground mb-4">Рабочие часы</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Понедельник - Пятница: 9:00 - 18:00</p>
                <p>Суббота: 10:00 - 16:00</p>
                <p>Воскресенье: Выходной</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-2xl shadow-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Имя
              </label>
              <Input id="name" placeholder="Ваше имя" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <Input id="email" type="email" placeholder="your@email.com" required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Телефон
              </label>
              <Input id="phone" type="tel" placeholder="+971..." />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Сообщение
              </label>
              <Textarea id="message" placeholder="Расскажите о вашем проекте..." rows={4} required />
            </div>
            <Button type="submit" className="w-full" size="lg">
              Отправить сообщение
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
