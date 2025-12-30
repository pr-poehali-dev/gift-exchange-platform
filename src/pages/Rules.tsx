import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Rules = () => {
  const steps = [
    {
      icon: "UserPlus",
      title: "Регистрация",
      description: "Создайте анонимный профиль без раскрытия личных данных"
    },
    {
      icon: "List",
      title: "Список желаний",
      description: "Добавьте подарки, которые хотели бы получить"
    },
    {
      icon: "Users",
      title: "Присоединитесь к группе",
      description: "Создайте или вступите в группу с друзьями и близкими"
    },
    {
      icon: "Gift",
      title: "Выбор подарка",
      description: "Система анонимно распределит участников для обмена"
    },
    {
      icon: "Package",
      title: "Отправка",
      description: "Выберите и отправьте подарок вашему получателю"
    },
    {
      icon: "PartyPopper",
      title: "Получение",
      description: "Получите свой сюрприз и поблагодарите отправителя"
    }
  ];

  const faqs = [
    {
      question: "Как работает анонимность?",
      answer: "Мы используем уникальные идентификаторы вместо имён. Ваши личные данные никогда не показываются другим участникам, пока вы сами не решите раскрыться после получения подарка."
    },
    {
      question: "Какие данные вы храните?",
      answer: "Мы храним только минимально необходимую информацию: анонимный ID, список желаний и историю обменов. Все данные защищены шифрованием и доступны только вам."
    },
    {
      question: "Могу ли я узнать, кто мой получатель?",
      answer: "Нет, это нарушило бы принцип анонимности. Вы узнаете только список желаний получателя, чтобы выбрать подходящий подарок."
    },
    {
      question: "Что если подарок не понравится?",
      answer: "Все участники составляют список желаний, поэтому вероятность получить желаемый подарок очень высока. Также работает система рейтингов для мотивации качественного выбора."
    },
    {
      question: "Как происходит верификация?",
      answer: "Мы проверяем активность участников и их историю обменов. Новые пользователи начинают с базового уровня доверия, который повышается после успешных обменов."
    },
    {
      question: "Сколько это стоит?",
      answer: "Регистрация и использование платформы бесплатны. Вы оплачиваете только стоимость выбранного подарка и доставку."
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-heading font-bold mb-4">Как это работает</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Простые шаги к незабываемому обмену подарками
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-lg transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardHeader>
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={step.icon} className="text-primary" size={28} />
                </div>
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <CardTitle className="font-heading text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="animate-scale-in" style={{ animationDelay: '300ms' }}>
          <CardHeader>
            <CardTitle className="font-heading text-3xl text-center">Часто задаваемые вопросы</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <div className="mt-12 p-8 bg-primary/5 rounded-lg text-center animate-fade-in">
          <Icon name="ShieldCheck" size={48} className="mx-auto mb-4 text-primary" />
          <h3 className="text-2xl font-heading font-bold mb-2">Ваша безопасность — наш приоритет</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Мы используем современные технологии шифрования и защиты данных, 
            чтобы ваш опыт обмена подарками был не только приятным, но и полностью безопасным.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rules;
