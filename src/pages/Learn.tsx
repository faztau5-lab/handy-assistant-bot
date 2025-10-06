import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Lightbulb, CheckCircle2 } from "lucide-react";
import topicsData from "@/data/topics.json";
import { useEffect } from "react";
import { Topic } from "@/types/topic";

const Learn = () => {
  const { topicId } = useParams();
  const topic = (topicsData as Topic[]).find((t) => t.id === topicId);

  useEffect(() => {
    // Trigger MathJax to render formulas
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, [topic]);

  if (!topic) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Тема не найдена</h1>
            <Link to="/explore">
              <Button>Вернуться к темам</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const levelConfig = {
    basic: { label: "Базовый", color: "bg-green-500" },
    intermediate: { label: "Средний", color: "bg-yellow-500" },
    advanced: { label: "Продвинутый", color: "bg-red-500" },
  };

  const level = levelConfig[topic.level];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/explore">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2" size={16} />
                Вернуться
              </Button>
            </Link>

            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-3 h-3 rounded-full ${level.color}`} />
                <span className="text-sm text-muted-foreground">{level.label}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{topic.title}</h1>
              <p className="text-xl text-muted-foreground mb-4">{topic.description}</p>
              <div className="flex flex-wrap gap-2">
                {topic.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Story */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="text-primary" />
                  Ситуация
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">{topic.story}</p>
              </CardContent>
            </Card>

            {/* Steps */}
            <div className="mb-6 space-y-4">
              <h2 className="text-2xl font-bold mb-4">Пошаговое рассуждение</h2>
              {topic.steps.map((step, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <CheckCircle2 className="text-primary" size={20} />
                      Шаг {index + 1}
                    </CardTitle>
                    <CardDescription className="text-base">{step.question}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm font-medium text-muted-foreground">💡 Подсказка:</p>
                      <p className="text-sm">{step.hint}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Formula */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Итоговая формула</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-lg text-center">
                  <div className="text-2xl font-mono">
                    {"$$" + topic.formula + "$$"}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interactive placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Попробуй сам!</CardTitle>
                <CardDescription>
                  Интерактивная визуализация (в разработке)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/30 p-12 rounded-lg text-center">
                  <p className="text-muted-foreground">
                    Здесь будет интерактивная визуализация: {topic.interactive.type}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Параметры: {topic.interactive.params.join(", ")}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
