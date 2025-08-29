<section className="py-16 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Left Column - Information */}
      <div className="space-y-8">
        {/* How it works */}
        <Card className="tech-card">
          <CardHeader>
            <CardTitle className="flex items-center text-xl text-neural-800">
              <Clock className="w-6 h-6 text-tech-600 mr-3" />
              Как это работает
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              {
                icon: User,
                title: "Регистрация",
                desc: "Заполните простую форму за 30 секунд",
              },
              {
                icon: Users,
                title: "Опрос команды",
                desc: "Отправьте ссылку 1-3 сотрудникам",
              },
              {
                icon: BarChart3,
                title: "ИИ-анализ",
                desc: "Система автоматически обработает данные",
              },
              {
                icon: FileText,
                title: "Получение отчета",
                desc: "PDF-отчет придет на вашу почту",
              },
            ].map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-tech rounded-lg flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-neural-800 mb-1">
                    {step.title}
                  </h4>
                  <p className="text-neural-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* What you get */}
        <Card className="tech-card">
          <CardHeader>
            <CardTitle className="flex items-center text-xl text-neural-800">
              <Target className="w-6 h-6 text-tech-600 mr-3" />
              Что вы получите
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                "Личные резервы и ресурсы",
                "Управление командой и мотивации",
                "Психологический климат команды",
                // "Рекомендации по оптимизации",
                "Уровень стратегического мышления",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-tech-600 flex-shrink-0" />
                  <span className="text-neural-700">{benefit}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Trust indicators */}
        <div className="bg-tech-50 rounded-lg p-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-tech-600">5 мин</div>
              <div className="text-sm text-neural-600">на заполнение</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-tech-600">100%</div>
              <div className="text-sm text-neural-600">бесплатно</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-tech-600">0</div>
              <div className="text-sm text-neural-600">обязательств</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Registration Form */}
      <div className="sticky top-24">
        <Card className="tech-card border-tech-200 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-neural-800 mb-2">
              Получить ссылку на аудит
            </CardTitle>
            <p className="text-neural-600">
              Заполните форму и получите персональную ссылку для вашей команды
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-neural-700">
                    Ваше имя *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-neural-400" />
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="pl-10"
                      placeholder="Абылай Хабиболла"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company" className="text-neural-700">
                    Ваша Компания *
                  </Label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 w-5 h-5 text-neural-400" />
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="pl-10"
                      placeholder="ООО Инновации"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-neural-700">
                    Ваш рабочий Email (сюда придет отчет) *
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-neural-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="pl-10"
                      placeholder="ivan@company.ru"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-neural-700">
                    Ваш Телефон
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-neural-400" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="pl-10"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="privacy"
                  checked={formData.agreeToPrivacy}
                  onCheckedChange={handleCheckboxChange}
                  className="mt-1"
                />
                <Label
                  htmlFor="privacy"
                  className="text-sm text-neural-600 leading-relaxed"
                >
                  Я согласен с политикой конфиденциальности и обработкой
                  персональных данных
                </Label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-tech hover:shadow-lg transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Отправка..."
                ) : (
                  <>
                    Получить ссылку на аудит
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</section>;
