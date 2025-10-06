import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Mail, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              О проекте TFMath
            </h1>

            <div className="mb-12 text-center">
              <p className="text-xl text-muted-foreground italic">
                "Не учи готовые формулы и решения — пойми идею, из которой они появились."
              </p>
            </div>

            {/* Mission */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="text-primary" />
                  Миссия TFMath
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg">
                  TFMath — это образовательная платформа, которая учит <strong>понимать</strong> математику,
                  а не заучивать формулы. Мы верим, что любой человек может почувствовать красоту
                  математических идей, если объяснить их через логику, визуализацию и рассуждения.
                </p>
                <p className="text-lg">
                  Каждая тема на TFMath представлена как история: от практической задачи до вывода формулы.
                  Вы не просто увидите ответ — вы пройдёте путь его открытия.
                </p>
              </CardContent>
            </Card>

            {/* Story */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="text-primary" />
                  Как появилась идея
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg">
                  Многие из нас сталкивались с тем, что математика в школе казалась набором непонятных формул.
                  "Запомни это", "выучи то" — но никто не объяснял, <em>откуда</em> это всё взялось.
                </p>
                <p className="text-lg">
                  TFMath создан, чтобы изменить это. Мы показываем, что за каждой формулой стоит простая
                  и понятная идея. И когда ты понимаешь идею — формула становится очевидной.
                </p>
              </CardContent>
            </Card>

            {/* Audience */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="text-primary" />
                  Для кого этот проект
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <strong>Ученики и студенты</strong> — если хочешь не просто сдать экзамен,
                      а по-настоящему понять математику
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <strong>Преподаватели</strong> — используйте TFMath как дополнительный материал
                      для объяснения сложных тем
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <strong>Самоучки</strong> — те, кто хочет вернуться к математике и понять её заново,
                      без зубрёжки
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <strong>Любознательные люди</strong> — просто интересно, как устроена математика
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="text-primary" />
                  Контакты
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-lg">
                  Есть вопросы, идеи или предложения? Свяжитесь с нами:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>📧 Email: hello@tfmath.com</li>
                  <li>💬 Telegram: @tfmath</li>
                  <li>🐙 GitHub: github.com/tfmath</li>
                </ul>
              </CardContent>
            </Card>

            <div className="mt-12 text-center">
              <p className="text-xl font-semibold gradient-text">
                TFMath — Think it. Feel it. Understand it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
