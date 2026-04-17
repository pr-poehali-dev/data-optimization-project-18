import { ShieldAlert, UserCog, Lock, BarChart2 } from "lucide-react"

const features = [
  {
    icon: ShieldAlert,
    title: "Роли и права доступа",
    description: "Три уровня: участник, модератор, администратор — каждый видит только то, что нужно.",
  },
  {
    icon: UserCog,
    title: "Управление пользователями",
    description: "Приглашайте, блокируйте и меняйте роли участников в несколько кликов.",
  },
  {
    icon: Lock,
    title: "Безопасность данных",
    description: "Надёжная защита аккаунтов и контроль доступа на каждом уровне.",
  },
  {
    icon: BarChart2,
    title: "Прозрачность действий",
    description: "История активности участников и полный контроль над командой.",
  },
]

export function FeatureSection9() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-4 md:gap-5 max-w-xl mx-auto text-center">
          <p className="text-sm md:text-base font-semibold text-muted-foreground">Возможности</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Почему выбирают TeamHub?</h2>
          <p className="text-base text-muted-foreground">
            Полный контроль над командами и ролями в одной платформе:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="flex flex-col gap-5 items-center text-center">
                <div className="flex justify-center items-center w-10 h-10 shrink-0 rounded-md bg-background border shadow-sm">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}