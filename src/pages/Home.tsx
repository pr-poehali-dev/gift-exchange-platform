import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: "ShieldCheck",
      title: "Полная анонимность",
      description: "Никто не узнает, кто выбрал подарок, пока вы сами не захотите раскрыться"
    },
    {
      icon: "Lock",
      title: "Защита данных",
      description: "Ваши личные данные надёжно защищены и недоступны другим участникам"
    },
    {
      icon: "BadgeCheck",
      title: "Верификация",
      description: "Все участники проходят проверку для безопасного обмена"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground">
              Обменивайтесь подарками <br />
              <span className="text-primary">анонимно</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Создайте незабываемый опыт обмена подарками с близкими. 
              Полная анонимность, безопасность и радость сюрпризов.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Link to="/catalog">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Gift" size={20} className="mr-2" />
                  Начать обмен
                </Button>
              </Link>
              <Link to="/rules">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Как это работает
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={feature.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-heading text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Готовы подарить радость?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Присоединяйтесь к тысячам людей, которые уже создают особенные моменты
          </p>
          <Link to="/catalog">
            <Button size="lg" className="text-lg px-12">
              Выбрать подарок
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
