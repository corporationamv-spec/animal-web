document.addEventListener('DOMContentLoaded', () => {
  const langToggle = document.getElementById('langToggle');
  let currentLang = 'ru';

  const translations = {
    en: {
      'nav-brand':'Expert Animal Web','nav-home':'Home','nav-services':'Services','nav-process':'Process','nav-portfolio':'Portfolio','nav-contact':'Contact',
      'hero-title':'Expert websites for veterinary clinics and specialists','hero-subtitle':'We create professional turnkey websites for veterinarians and animal psychologists','hero-btn':'Order Website',
      'services-title':'Our Services','service-turnkey-title':'Turnkey Website','service-turnkey-text':'Website creation from design to launch.','service-form-title':'Booking Form','service-form-text':'Online booking for new clients.',
      'process-title':'Our Process','step-discussion-title':'Discussion','step-discussion-text':'We start by understanding your goals and tasks.','step-design-title':'Design & Development','step-design-text':'We create the design and code the website.','step-launch-title':'Launch','step-launch-text':'We publish the website and connect forms.',
      'portfolio-title':'Project Examples','portfolio-clinic-title':'Veterinary Clinic "Healthy Tail"','portfolio-clinic-text':'Corporate website with online booking and service descriptions.','portfolio-psych-title':'Animal Psychologist Consultations','portfolio-psych-text':'Landing page for a private specialist with booking form and blog.',
      'contact-title':'Leave a Request','contact-name':'Name','contact-email':'Email','contact-message':'Message','contact-btn':'Send'
    },
    ru: {
      'nav-brand':'Expert Animal Web','nav-home':'Главная','nav-services':'Услуги','nav-process':'Как мы работаем','nav-portfolio':'Портфолио','nav-contact':'Контакты',
      'hero-title':'Экспертные сайты для ветеринарных клиник и специалистов','hero-subtitle':'Создаём профессиональные сайты под ключ для ветеринаров и зоопсихологов','hero-btn':'Заказать сайт',
      'services-title':'Наши услуги','service-turnkey-title':'Сайт под ключ','service-turnkey-text':'Создание сайта от дизайна до запуска.','service-form-title':'Форма записи','service-form-text':'Онлайн-заявки для новых клиентов.',
      'process-title':'Наш процесс работы','step-discussion-title':'Обсуждение','step-discussion-text':'Сначала изучаем ваши задачи и цели.','step-design-title':'Дизайн и разработка','step-design-text':'Создаём дизайн и программируем сайт.','step-launch-title':'Запуск','step-launch-text':'Публикуем сайт и подключаем формы.',
      'portfolio-title':'Примеры проектов','portfolio-clinic-title':'Ветеринарная клиника «Здоровый Хвост»','portfolio-clinic-text':'Корпоративный сайт с онлайн-записью и описанием услуг.','portfolio-psych-title':'Консультации зоопсихолога','portfolio-psych-text':'Лендинг для частного специалиста с формой записи и блогом.',
      'contact-title':'Оставьте заявку','contact-name':'Имя','contact-email':'Email','contact-message':'Сообщение','contact-btn':'Отправить'
    }
  };

  if(!langToggle) return;

  langToggle.addEventListener('click',()=>{
    currentLang = currentLang==='ru'?'en':'ru';
    langToggle.textContent = currentLang==='ru'?'EN':'RU';

    document.querySelectorAll('[data-translate-key]').forEach(el=>{
      const key = el.getAttribute('data-translate-key');
      if(translations[currentLang][key]){
        el.textContent = translations[currentLang][key];
      }
    });
  });
});
