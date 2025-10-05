import { Home, Building2, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Interiors",
      description: "Kitchens, wardrobes, and built-in furniture for apartments and houses",
    },
    {
      icon: Building2,
      title: "Commercial Projects",
      description: "Offices, boutiques, restaurants, and showrooms from 100–200 m²",
    },
    {
      icon: Users,
      title: "Partnership Program",
      description: "Attractive conditions for agents, developers, and designers",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Materials and fittings from world-renowned brands",
    },
  ];

  const benefits = [
    "More affordable than local manufacturers thanks to production in Kazakhstan",
    "We work with your design projects or create our own concepts",
    "Direct collaboration without intermediaries",
    "Opportunity for a trial project for new partners",
  ];

  return (
    <section id="services" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive solutions for any type of project
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
            Why It’s Profitable to Work With Us
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