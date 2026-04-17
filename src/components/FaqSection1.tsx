import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "Какие роли есть в TeamHub?",
    answer: "Три роли: Участник — базовый доступ к командным материалам; Модератор — может управлять участниками; Администратор — полный контроль над командой, ролями и настройками.",
  },
  {
    question: "Как пригласить нового участника в команду?",
    answer: "Администратор отправляет приглашение по email. Участник регистрируется, и ему автоматически присваивается нужная роль.",
  },
  {
    question: "Можно ли изменить роль участника после регистрации?",
    answer: "Да, администратор может изменить роль любого участника в любой момент прямо в панели управления командой.",
  },
  {
    question: "Безопасно ли хранить данные сотрудников в TeamHub?",
    answer: "Да, все данные надёжно защищены. Каждый участник видит только то, что соответствует его уровню доступа.",
  },
]

export function FaqSection1() {
  return (
    <section className="bg-background py-16 md:py-24" aria-labelledby="faq-heading">
      <div className="max-w-2xl gap-12 mx-auto px-6 flex flex-col">
        <div className="flex flex-col text-center gap-5">
          <p className="text-sm md:text-base text-muted-foreground font-semibold">Вопросы</p>
          <h1 id="faq-heading" className="text-3xl md:text-4xl font-bold text-foreground">
            Есть вопросы? У нас есть ответы.
          </h1>
          <p className="text-muted-foreground">
            Мы собрали самую важную информацию, чтобы помочь вам. Не нашли ответ?{" "}
            <a href="#" className="text-primary underline">
              Свяжитесь с нами.
            </a>
          </p>
        </div>

        <Accordion type="single" collapsible defaultValue="item-1" aria-label="Часто задаваемые вопросы">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-base font-medium text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="bg-muted/60 w-full rounded-xl p-6 md:p-8 flex flex-col items-center gap-6">
          <div className="flex flex-col text-center gap-2">
            <h2 className="text-2xl font-bold text-foreground">Остались вопросы?</h2>
            <p className="text-base text-muted-foreground">
              Нужна помощь или консультация? Наша команда всегда готова помочь!
            </p>
          </div>
          <Button aria-label="Связаться с поддержкой">Написать нам</Button>
        </div>
      </div>
    </section>
  )
}