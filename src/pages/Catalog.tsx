import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface Gift {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  emoji: string;
}

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const gifts: Gift[] = [
    {
      id: 1,
      name: "Беспроводные наушники",
      category: "Электроника",
      price: "5 000 ₽",
      description: "Качественный звук и комфорт на весь день",
      emoji: "🎧"
    },
    {
      id: 2,
      name: "Набор для кофе",
      category: "Для дома",
      price: "3 500 ₽",
      description: "Всё необходимое для идеального кофе",
      emoji: "☕"
    },
    {
      id: 3,
      name: "Книга-бестселлер",
      category: "Книги",
      price: "1 200 ₽",
      description: "Увлекательное чтение на любой вкус",
      emoji: "📚"
    },
    {
      id: 4,
      name: "Умная колонка",
      category: "Электроника",
      price: "7 000 ₽",
      description: "Голосовой помощник для вашего дома",
      emoji: "🔊"
    },
    {
      id: 5,
      name: "Ароматическая свеча",
      category: "Для дома",
      price: "1 800 ₽",
      description: "Создайте уютную атмосферу",
      emoji: "🕯️"
    },
    {
      id: 6,
      name: "Фитнес-браслет",
      category: "Спорт",
      price: "4 500 ₽",
      description: "Следите за здоровьем каждый день",
      emoji: "⌚"
    }
  ];

  const filteredGifts = gifts.filter(gift =>
    gift.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    gift.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-5xl font-heading font-bold mb-4">Каталог подарков</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Выберите идеальный подарок для своих близких
          </p>
          
          <div className="relative max-w-md">
            <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              type="text"
              placeholder="Поиск по названию или категории..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGifts.map((gift, index) => (
            <Card 
              key={gift.id} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardHeader>
                <div className="text-6xl mb-4">{gift.emoji}</div>
                <div className="flex items-start justify-between">
                  <CardTitle className="font-heading text-xl">{gift.name}</CardTitle>
                  <Badge variant="secondary" className="ml-2">{gift.category}</Badge>
                </div>
                <CardDescription className="text-base pt-2">
                  {gift.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-heading font-semibold text-primary">
                  {gift.price}
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Icon name="Gift" size={18} className="mr-2" />
                  Выбрать подарок
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredGifts.length === 0 && (
          <div className="text-center py-12">
            <Icon name="SearchX" size={64} className="mx-auto text-muted-foreground mb-4" />
            <p className="text-xl text-muted-foreground">
              Подарки не найдены. Попробуйте изменить запрос.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
