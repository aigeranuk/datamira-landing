import { BarChart2, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <BarChart2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold font-display text-xl">DataSkills</span>
            </div>
            <p className="text-background/60 leading-relaxed max-w-sm">
             Интенсив по аналитике данных за 1 месяц — чтобы закрепить базовые навыки и научиться применять их на практике. нлайн курс анали.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold font-display mb-4">Курсы</h4>
            <ul className="space-y-3 text-background/60">
              <li><a href="#" className="hover:text-primary transition-colors">Аналитик данных</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">SQL с нуля</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Python для анализа</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Power BI</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold font-display mb-4">Контакты</h4>
            <ul className="space-y-3 text-background/60">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+77472829389" className="hover:text-primary transition-colors">8 747 282-93-89</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:akosechka@gmail.com" className="hover:text-primary transition-colors">akosechka@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span> Алматы,</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/40">
            © 2025 DataSkills. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm text-background/40">
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary transition-colors">Оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, BarChart2 } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("signup-form")?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Преимущества", href: "#benefits" },
    { label: "Программа", href: "#program" },
    { label: "Для кого", href: "#audience" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className={cn(
            "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
            isScrolled ? "bg-primary" : "bg-primary"
          )}>
            <BarChart2 className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className={cn(
            "font-bold font-display text-xl transition-colors",
            isScrolled ? "text-foreground" : "text-hero-foreground"
          )}>
            DataSkills
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isScrolled ? "text-muted-foreground" : "text-hero-muted"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button onClick={scrollToForm} variant={isScrolled ? "default" : "hero"}>
            Записаться
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "md:hidden p-2 rounded-lg transition-colors",
            isScrolled ? "text-foreground" : "text-hero-foreground"
          )}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 overflow-hidden",
        isMobileMenuOpen ? "max-h-80" : "max-h-0"
      )}>
        <nav className="container py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-3 px-4 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button onClick={scrollToForm} className="mt-2">
            Записаться на курс
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;



import { CheckCircle2 } from "lucide-react";

const audiences = [
  {
    title: "Новички в IT",
    age: "18–25 лет",
    description: "Ищете первую профессию в технологиях? Начните с аналитики — это отличный старт в IT без программирования.",
    points: ["Не требуется опыт", "Понятная программа", "Помощь с первой работой"],
  },
  {
    title: "Специалисты на перепутье",
    age: "25–35 лет",
    description: "Чувствуете стагнацию? Аналитика данных — востребованная профессия с высоким потолком роста.",
    points: ["Быстрая смена карьеры", "Применим ваш опыт", "Рост зарплаты"],
  },
  {
    title: "Менеджеры",
    age: "25–40 лет",
    description: "Project, Product или Marketing managers — усильте свои компетенции навыками работы с данными.",
    points: ["Принятие решений на данных", "Конкурентное преимущество", "Рост в должности"],
  },
  {
    title: "Смена профессии",
    age: "30–45 лет",
    description: "Работаете в образовании, HR, логистике или банке? Переходите в IT без потери опыта.",
    points: ["Гибкий график обучения", "Понятный путь перехода", "Поддержка куратора"],
  },
];

const AudienceSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Целевая аудитория</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 mb-4">
            Для кого этот курс
          </h2>
          <p className="text-muted-foreground text-lg">
            Программа адаптирована под разный бэкграунд и опыт
          </p>
        </div>

        {/* Audience Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold font-display">{audience.title}</h3>
                  <span className="text-sm text-primary font-medium">{audience.age}</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  Подходит
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{audience.description}</p>
              <ul className="space-y-2">
                {audience.points.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;


import { BookOpen, Users, Briefcase, Award, Clock, MessageCircle } from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "От нуля до профи",
    description: "Плавный старт от Google-таблиц до Python, SQL и Power BI — без предварительной подготовки",
  },
  {
    icon: Users,
    title: "Небольшие группы",
    description: "До 20 человек в группе — каждый получает персональное внимание куратора",
  },
  {
    icon: Briefcase,
    title: "Реальные проекты",
    description: "14 проектов для портфолио на основе данных реальных компаний",
  },
  {
    icon: Award,
    title: "Сертификат",
    description: "Диплом о профессиональной переподготовке государственного образца",
  },
  {
    icon: Clock,
    title: "Гибкий график",
    description: "Учитесь 2 часа в день в удобное время — совмещайте с работой",
  },
  {
    icon: MessageCircle,
    title: "Поддержка 24/7",
    description: "Личный куратор ответит на вопросы и поможет с домашними заданиями",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Преимущества</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-muted-foreground text-lg">
            Комплексный подход к обучению, который даёт результат
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 card-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-display mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;



import { Button } from "@/components/ui/button";
import { ChevronRight, BarChart3, TrendingUp, Database } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("signup-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-section">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-hero/95 via-hero/80 to-hero/60" />
      
      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">Старт курса — январь 2025</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground mb-6 font-display leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Курс <span className="gradient-text">«Аналитик данных»</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-hero-muted mb-8 leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Освойте профессию с нуля за 6 месяцев. От Google-таблиц до Python и Power BI — получите все навыки для работы junior-аналитиком.
          </p>

          {/* Features list */}
          <ul className="space-y-3 mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {[
              "14 реальных проектов в портфолио",
              "Личный куратор и обратная связь",
              "Помощь с трудоустройством",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-hero-foreground/90">
                <ChevronRight className="w-5 h-5 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="lg" onClick={scrollToForm}>
              Записаться на курс
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="lg">
              Скачать программу
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-10 border-t border-hero-foreground/10 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            {[
              { icon: BarChart3, value: "87%", label: "выпускников находят работу" },
              { icon: TrendingUp, value: "120K ₽", label: "средняя зарплата выпускника" },
              { icon: Database, value: "2500+", label: "успешных выпускников" },
            ].map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <stat.icon className="w-6 h-6 text-primary mb-2 mx-auto sm:mx-0" />
                <div className="text-2xl md:text-3xl font-bold text-hero-foreground font-display">{stat.value}</div>
                <div className="text-sm text-hero-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const modules = [
  {
    number: "01",
    title: "Основы аналитики",
    duration: "3 недели",
    topics: ["Введение в Data Analytics", "Google Sheets & Excel продвинутый", "Основы статистики", "Визуализация данных"],
  },
  {
    number: "02",
    title: "SQL и базы данных",
    duration: "4 недели",
    topics: ["Основы SQL", "Сложные запросы и JOIN", "Оптимизация запросов", "Работа с PostgreSQL"],
  },
  {
    number: "03",
    title: "Python для анализа",
    duration: "5 недель",
    topics: ["Основы Python", "Pandas и NumPy", "Matplotlib и Seaborn", "Автоматизация отчётов"],
  },
  {
    number: "04",
    title: "Power BI & Tableau",
    duration: "4 недели",
    topics: ["Основы Power BI", "Создание дашбордов", "DAX формулы", "Публикация отчётов"],
  },
  {
    number: "05",
    title: "Проекты и карьера",
    duration: "4 недели",
    topics: ["Финальные проекты", "Составление портфолио", "Подготовка к собеседованию", "Трудоустройство"],
  },
];

const ProgramSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Программа</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 mb-4">
            Чему вы научитесь
          </h2>
          <p className="text-muted-foreground text-lg">
            5 модулей, 20 недель интенсивного обучения
          </p>
        </div>

        {/* Modules Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {modules.map((module, index) => (
            <div
              key={index}
              className={cn(
                "rounded-2xl border transition-all duration-300 overflow-hidden",
                openIndex === index 
                  ? "border-primary/30 bg-card shadow-lg" 
                  : "border-border bg-card/50 hover:border-border/80"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-primary/30 font-display">{module.number}</span>
                  <div>
                    <h3 className="text-lg font-semibold font-display">{module.title}</h3>
                    <span className="text-sm text-muted-foreground">{module.duration}</span>
                  </div>
                </div>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 text-muted-foreground transition-transform duration-300",
                    openIndex === index && "rotate-180 text-primary"
                  )}
                />
              </button>
              
              <div className={cn(
                "grid transition-all duration-300",
                openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}>
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 pt-2">
                    <div className="grid sm:grid-cols-2 gap-3">
                      {module.topics.map((topic, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {topic}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const SignupSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 24 часов",
    });
    
    setFormData({ name: "", phone: "", email: "" });
    setIsLoading(false);
  };

  return (
    <section id="signup-form" className="py-20 md:py-28 hero-section relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Info */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Запись на курс</span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-hero-foreground mt-3 mb-6">
              Начните карьеру в аналитике данных
            </h2>
            <p className="text-hero-muted text-lg mb-8 leading-relaxed">
              Оставьте заявку и получите бесплатную консультацию. Мы расскажем о программе и поможем выбрать удобный формат обучения.
            </p>

            <div className="space-y-4">
              {[
                "Бесплатная консультация с экспертом",
                "Индивидуальный план обучения",
                "Рассрочка до 24 месяцев",
                "Гарантия возврата в первые 2 недели",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-hero-foreground/90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-card rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold font-display mb-2">Оставить заявку</h3>
            <p className="text-muted-foreground mb-6">Заполните форму и мы свяжемся с вами</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Ваше имя
                </label>
                <Input
                  id="name"
                  placeholder="Введите имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Телефон
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@mail.ru"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Отправка...
                  </>
                ) : (
                  "Отправить заявку"
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с{" "}
                <a href="#" className="text-primary hover:underline">
                  политикой конфиденциальности
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;

