import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Profile = () => {
  const wishlist = [
    { id: 1, name: "Беспроводные наушники", status: "active", emoji: "🎧" },
    { id: 2, name: "Книга-бестселлер", status: "reserved", emoji: "📚" },
    { id: 3, name: "Ароматическая свеча", status: "active", emoji: "🕯️" }
  ];

  const myGifts = [
    { id: 1, recipient: "Анонимный получатель #234", status: "sent", emoji: "🎁" },
    { id: 2, recipient: "Анонимный получатель #567", status: "preparing", emoji: "🎁" }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-6 mb-6">
            <Avatar className="w-24 h-24">
              <AvatarFallback className="text-3xl bg-primary text-primary-foreground">
                <Icon name="User" size={40} />
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-4xl font-heading font-bold mb-2">Анонимный участник</h1>
              <p className="text-muted-foreground flex items-center gap-2">
                <Icon name="ShieldCheck" size={18} />
                ID: #user12345
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="animate-scale-in">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="font-heading text-2xl">Список желаний</CardTitle>
                  <CardDescription className="text-base">
                    Подарки, которые вы хотите получить
                  </CardDescription>
                </div>
                <Button>
                  <Icon name="Plus" size={18} className="mr-2" />
                  Добавить
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {wishlist.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{item.emoji}</span>
                      <div>
                        <p className="font-medium">{item.name}</p>
                        {item.status === "reserved" && (
                          <Badge variant="secondary" className="mt-1">
                            <Icon name="Lock" size={12} className="mr-1" />
                            Зарезервировано
                          </Badge>
                        )}
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Icon name="Trash2" size={18} />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="animate-scale-in" style={{ animationDelay: '100ms' }}>
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Мои подарки</CardTitle>
              <CardDescription className="text-base">
                Подарки, которые вы отправили
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {myGifts.map((gift) => (
                  <div key={gift.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{gift.emoji}</span>
                      <div>
                        <p className="font-medium">{gift.recipient}</p>
                        <Badge 
                          variant={gift.status === "sent" ? "default" : "secondary"}
                          className="mt-1"
                        >
                          {gift.status === "sent" ? "Отправлено" : "Готовится"}
                        </Badge>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Детали
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Separator />

          <Card className="border-destructive/50 animate-scale-in" style={{ animationDelay: '200ms' }}>
            <CardHeader>
              <CardTitle className="font-heading text-xl flex items-center gap-2">
                <Icon name="Settings" size={20} />
                Настройки
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Icon name="Bell" size={18} className="mr-2" />
                Уведомления
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Icon name="Lock" size={18} className="mr-2" />
                Приватность
              </Button>
              <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive">
                <Icon name="LogOut" size={18} className="mr-2" />
                Выйти
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
