import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const integrations = [
    { name: "Slack", icon: "MessageCircle", color: "bg-purple-100" },
    { name: "Google Sheets", icon: "FileSpreadsheet", color: "bg-green-100" },
    { name: "Gmail", icon: "Mail", color: "bg-red-100" },
    { name: "Telegram", icon: "Send", color: "bg-blue-100" },
    { name: "GitHub", icon: "Github", color: "bg-gray-100" },
    { name: "Notion", icon: "BookOpen", color: "bg-yellow-100" },
    { name: "Discord", icon: "Users", color: "bg-indigo-100" },
    { name: "Trello", icon: "Kanban", color: "bg-orange-100" }
  ];

  const features = [
    {
      title: "Визуальный редактор",
      description: "Создавайте автоматизации с помощью удобного drag-and-drop интерфейса",
      icon: "Workflow"
    },
    {
      title: "500+ интеграций",
      description: "Подключайте любые сервисы и приложения одним кликом",
      icon: "Plug"
    },
    {
      title: "Безопасность",
      description: "Ваши данные защищены современными методами шифрования",
      icon: "Shield"
    },
    {
      title: "Масштабируемость",
      description: "От простых задач до сложных корпоративных процессов",
      icon: "TrendingUp"
    }
  ];

  const workflows = [
    {
      title: "Автоматизация продаж",
      description: "Создавайте лиды из форм, отправляйте в CRM и уведомляйте команду в Slack",
      steps: ["Форма на сайте", "CRM система", "Slack команда"],
      color: "border-primary"
    },
    {
      title: "Обработка заявок",
      description: "Получайте заявки из разных источников и автоматически распределяйте их",
      steps: ["Email/Форма", "База данных", "Уведомления"],
      color: "border-secondary"
    },
    {
      title: "Синхронизация данных",
      description: "Синхронизируйте данные между различными сервисами в реальном времени",
      steps: ["Источник данных", "Обработка", "Целевые системы"],
      color: "border-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={18} className="text-white" />
              </div>
              <span className="text-xl font-heading font-bold">Procly</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <div className="relative group">
                <button className="flex items-center text-gray-600 hover:text-gray-900">
                  Продукт
                  <Icon name="ChevronDown" size={16} className="ml-1" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <a href="#overview" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50">
                      <Icon name="Eye" size={16} className="mr-3" />
                      Обзор
                    </a>
                    <a href="#templates" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50">
                      <Icon name="FileTemplate" size={16} className="mr-3" />
                      Шаблоны
                    </a>
                    <a href="#ai" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50">
                      <Icon name="Brain" size={16} className="mr-3" />
                      ИИ
                    </a>
                    <a href="#integrations" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50">
                      <Icon name="Plug" size={16} className="mr-3" />
                      Интеграции
                    </a>
                  </div>
                </div>
              </div>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Тарифы</a>
              <a href="#docs" className="text-gray-600 hover:text-gray-900">Документация</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Войти</Button>
            <Button className="bg-primary hover:bg-primary/90">Начать бесплатно</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl font-heading font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Автоматизируйте рутину. 
            <br />Сосредоточьтесь на важном.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Procly — это платформа для создания автоматизаций между любыми сервисами 
            без программирования. Экономьте часы ежедневно.
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="Play" className="mr-2" size={20} />
              Попробовать бесплатно
            </Button>
            <Button size="lg" variant="outline">
              <Icon name="Video" className="mr-2" size={20} />
              Посмотреть демо
            </Button>
          </div>
          
          {/* Hero Visual */}
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Новое письмо Gmail</h3>
                    <p className="text-sm text-gray-600">Триггер</p>
                  </div>
                </div>
                <Icon name="ArrowRight" className="text-gray-400" size={24} />
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <Icon name="FileSpreadsheet" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Добавить в таблицу</h3>
                    <p className="text-sm text-gray-600">Действие</p>
                  </div>
                </div>
                <Icon name="ArrowRight" className="text-gray-400" size={24} />
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Icon name="MessageCircle" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Уведомить в Slack</h3>
                    <p className="text-sm text-gray-600">Действие</p>
                  </div>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800 border-green-200">
                <Icon name="CheckCircle" className="mr-1" size={14} />
                Автоматизация активна
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-heading font-bold text-primary mb-2">500+</div>
              <p className="text-gray-600">Интеграций с сервисами</p>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-secondary mb-2">10M+</div>
              <p className="text-gray-600">Выполненных автоматизаций</p>
            </div>
            <div>
              <div className="text-4xl font-heading font-bold text-primary mb-2">50K+</div>
              <p className="text-gray-600">Довольных пользователей</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Почему выбирают Procly?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мощная платформа с простым интерфейсом для создания любых автоматизаций
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={feature.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg font-heading">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Интеграции с любимыми сервисами</h2>
            <p className="text-gray-600">Подключайте любые приложения и создавайте мощные автоматизации</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white rounded-lg p-4 flex flex-col items-center hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 ${integration.color} rounded-lg flex items-center justify-center mb-2`}>
                  <Icon name={integration.icon} size={24} className="text-gray-700" />
                </div>
                <span className="text-sm font-medium text-center">{integration.name}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" size="lg">
              Посмотреть все интеграции
              <Icon name="ExternalLink" className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Workflow Examples */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">Примеры автоматизаций</h2>
            <p className="text-gray-600">Вдохновляйтесь готовыми решениями для вашего бизнеса</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workflows.map((workflow, index) => (
              <Card key={index} className={`border-2 ${workflow.color} hover:shadow-lg transition-shadow`}>
                <CardHeader>
                  <CardTitle className="font-heading">{workflow.title}</CardTitle>
                  <CardDescription>{workflow.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 mb-4">
                    {workflow.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center">
                        <div className="bg-gray-100 rounded-lg px-3 py-1 text-sm font-medium">
                          {step}
                        </div>
                        {stepIndex < workflow.steps.length - 1 && (
                          <Icon name="ArrowRight" className="text-gray-400 mx-2" size={16} />
                        )}
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary">
                    Создать автоматизацию
                    <Icon name="ArrowRight" className="ml-2" size={14} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Готовы автоматизировать свой бизнес?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Присоединяйтесь к тысячам компаний, которые уже экономят время с Procly
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" variant="secondary">
              Начать бесплатно
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={18} className="text-white" />
                </div>
                <span className="text-xl font-heading font-bold">Procly</span>
              </div>
              <p className="text-gray-400 text-sm">
                Автоматизируйте рутину и сосредоточьтесь на важном
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Продукт</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Возможности</a></li>
                <li><a href="#" className="hover:text-white">Интеграции</a></li>
                <li><a href="#" className="hover:text-white">Тарифы</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Ресурсы</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Документация</a></li>
                <li><a href="#" className="hover:text-white">Блог</a></li>
                <li><a href="#" className="hover:text-white">Поддержка</a></li>
                <li><a href="#" className="hover:text-white">Статус</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">О нас</a></li>
                <li><a href="#" className="hover:text-white">Карьера</a></li>
                <li><a href="#" className="hover:text-white">Конфиденциальность</a></li>
                <li><a href="#" className="hover:text-white">Условия</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Procly. Все права защищены.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}