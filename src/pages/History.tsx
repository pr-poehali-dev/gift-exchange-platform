import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const History = () => {
  const receivedGifts = [
    {
      id: 1,
      name: "Беспроводные наушники",
      emoji: "🎧",
      date: "15 декабря 2024",
      status: "delivered",
      from: "Анонимный даритель #892",
      rating: 5
    },
    {
      id: 2,
      name: "Набор для кофе",
      emoji: "☕",
      date: "1 ноября 2024",
      status: "delivered",
      from: "Анонимный даритель #234",
      rating: 5
    },
    {
      id: 3,
      name: "Книга-бестселлер",
      emoji: "📚",
      date: "20 сентября 2024",
      status: "delivered",
      from: "Анонимный даритель #567",
      rating: 4
    }
  ];

  const sentGifts = [
    {
      id: 1,
      name: "Умная колонка",
      emoji: "🔊",
      date: "10 декабря 2024",
      status: "delivered",
      to: "Анонимный получатель #445"
    },
    {
      id: 2,
      name: "Фитнес-браслет",
      emoji: "⌚",
      date: "5 октября 2024",
      status: "delivered",
      to: "Анонимный получатель #778"
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Icon
            key={i}
            name="Star"
            size={16}
            className={i < rating ? "fill-primary text-primary" : "text-muted"}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl font-heading font-bold mb-4">История обменов</h1>
          <p className="text-xl text-muted-foreground">
            Все ваши подарки в одном месте
          </p>
        </div>

        <Tabs defaultValue="received" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger value="received" className="text-base">
              <Icon name="Gift" size={18} className="mr-2" />
              Полученные
            </TabsTrigger>
            <TabsTrigger value="sent" className="text-base">
              <Icon name="Send" size={18} className="mr-2" />
              Отправленные
            </TabsTrigger>
          </TabsList>

          <TabsContent value="received" className="space-y-4">
            {receivedGifts.map((gift, index) => (
              <Card 
                key={gift.id} 
                className="animate-scale-in hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{gift.emoji}</span>
                      <div>
                        <CardTitle className="font-heading text-xl mb-1">{gift.name}</CardTitle>
                        <CardDescription className="text-base">
                          От: {gift.from}
                        </CardDescription>
                        <div className="flex items-center gap-2 mt-2">
                          {renderStars(gift.rating)}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="mb-2">
                        <Icon name="Check" size={14} className="mr-1" />
                        Доставлено
                      </Badge>
                      <p className="text-sm text-muted-foreground">{gift.date}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Icon name="MessageCircle" size={16} className="mr-2" />
                      Написать благодарность
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Eye" size={16} className="mr-2" />
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="sent" className="space-y-4">
            {sentGifts.map((gift, index) => (
              <Card 
                key={gift.id} 
                className="animate-scale-in hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{gift.emoji}</span>
                      <div>
                        <CardTitle className="font-heading text-xl mb-1">{gift.name}</CardTitle>
                        <CardDescription className="text-base">
                          Для: {gift.to}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className="mb-2">
                        <Icon name="Check" size={14} className="mr-1" />
                        Доставлено
                      </Badge>
                      <p className="text-sm text-muted-foreground">{gift.date}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm">
                    <Icon name="Eye" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        <Card className="mt-8 bg-muted/50 animate-fade-in">
          <CardHeader>
            <CardTitle className="font-heading text-2xl flex items-center gap-2">
              <Icon name="TrendingUp" size={24} />
              Статистика
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-4xl font-heading font-bold text-primary mb-2">
                  {receivedGifts.length}
                </p>
                <p className="text-muted-foreground">Получено подарков</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-heading font-bold text-primary mb-2">
                  {sentGifts.length}
                </p>
                <p className="text-muted-foreground">Отправлено подарков</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-heading font-bold text-primary mb-2">
                  4.7
                </p>
                <p className="text-muted-foreground">Средний рейтинг</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default History;
