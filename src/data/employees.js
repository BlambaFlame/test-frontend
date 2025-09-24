export let employees = [
  {
    id: 1,
    firstName: "Иван",
    lastName: "Петров",
    position: "Frontend разработчик",
    department: "IT",
    email: "ivan.petrov@company.com",
    phone: "+79991234567",
    salary: 120000,
    hireDate: "2022-01-15",
    skills: ["JavaScript", "React", "TypeScript", "HTML", "CSS", "Redux"],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&1"
  },
  {
    id: 2,
    firstName: "Мария",
    lastName: "Сидорова",
    position: "UI/UX дизайнер",
    department: "Дизайн",
    email: "maria.sidorova@company.com",
    phone: "+79999876543",
    salary: 90000,
    hireDate: "2021-08-20",
    skills: ["Figma", "Photoshop", "Illustrator", "UI/UX", "Прототипирование", "Adobe XD"],
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face&2"
  },
  {
    id: 3,
    firstName: "Алексей",
    lastName: "Иванов",
    position: "Backend разработчик",
    department: "IT",
    email: "alexey.ivanov@company.com",
    phone: "+79994561234",
    salary: 130000,
    hireDate: "2020-03-10",
    skills: ["Node.js", "Python", "PostgreSQL", "Docker", "Redis", "MongoDB"],
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&3"
  },
  {
    id: 4,
    firstName: "Екатерина",
    lastName: "Смирнова",
    position: "Менеджер проектов",
    department: "Управление",
    email: "ekaterina.smirnova@company.com",
    phone: "+79997894561",
    salary: 110000,
    hireDate: "2019-11-05",
    skills: ["Agile", "Scrum", "Управление командой", "Планирование", "Аналитика", "Jira"],
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face&4"
  },
  {
    id: 5,
    firstName: "Дмитрий",
    lastName: "Кузнецов",
    position: "DevOps инженер",
    department: "IT",
    email: "dmitry.kuznetsov@company.com",
    phone: "+79993216549",
    salary: 140000,
    hireDate: "2021-06-15",
    skills: ["AWS", "Kubernetes", "CI/CD", "Terraform", "Linux", "Ansible"],
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&5"
  },
  {
    id: 6,
    firstName: "Анна",
    lastName: "Попова",
    position: "Маркетолог",
    department: "Маркетинг",
    email: "anna.popova@company.com",
    phone: "+79996543218",
    salary: 85000,
    hireDate: "2022-09-01",
    skills: ["SMM", "Аналитика", "Копирайтинг", "SEO", "Google Analytics", "Контекстная реклама"],
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&6"
  },
  {
    id: 7,
    firstName: "Сергей",
    lastName: "Васильев",
    position: "Тестировщик",
    department: "QA",
    email: "sergey.vasilyev@company.com",
    phone: "+79991122334",
    salary: 80000,
    hireDate: "2023-01-20",
    skills: ["Manual Testing", "Automation", "Selenium", "Jira", "Test Cases", "Postman"],
    avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face&7"
  },
  {
    id: 8,
    firstName: "Ольга",
    lastName: "Новикова",
    position: "Аналитик данных",
    department: "Аналитика",
    email: "olga.novikova@company.com",
    phone: "+79994455667",
    salary: 95000,
    hireDate: "2020-07-12",
    skills: ["SQL", "Python", "Tableau", "Статистика", "Machine Learning", "Excel"],
    avatar: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=150&h=150&fit=crop&crop=face&8"
  },
  {
    id: 9,
    firstName: "Михаил",
    lastName: "Федоров",
    position: "Fullstack разработчик",
    department: "IT",
    email: "mikhail.fedorov@company.com",
    phone: "+79997778899",
    salary: 135000,
    hireDate: "2021-03-22",
    skills: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "GraphQL"],
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face&9"
  },
  {
    id: 10,
    firstName: "Алина",
    lastName: "Козлова",
    position: "Графический дизайнер",
    department: "Дизайн",
    email: "alina.kozlova@company.com",
    phone: "+79995556677",
    salary: 75000,
    hireDate: "2023-03-10",
    skills: ["Illustrator", "Photoshop", "InDesign", "Брендинг", "Типографика", "CorelDRAW"],
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face&10"
  },
  {
    id: 11,
    firstName: "Артем",
    lastName: "Орлов",
    position: "Системный администратор",
    department: "IT",
    email: "artem.orlov@company.com",
    phone: "+79993334455",
    salary: 95000,
    hireDate: "2018-09-15",
    skills: ["Windows Server", "Linux", "Сети", "Active Directory", "VMware", "Резервное копирование"],
    avatar: "https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?w=150&h=150&fit=crop&crop=face&11"
  },
  {
    id: 12,
    firstName: "Виктория",
    lastName: "Лебедева",
    position: "HR-менеджер",
    department: "HR",
    email: "viktorija.lebedeva@company.com",
    phone: "+79992223344",
    salary: 70000,
    hireDate: "2022-05-18",
    skills: ["Рекрутинг", "Адаптация", "Оценка персонала", "Тренинги", "1C:Зарплата", "Трудовое право"],
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face&12"
  },
  {
    id: 13,
    firstName: "Павел",
    lastName: "Соколов",
    position: "Android разработчик",
    department: "Мобильная разработка",
    email: "pavel.sokolov@company.com",
    phone: "+79998887766",
    salary: 115000,
    hireDate: "2020-11-30",
    skills: ["Kotlin", "Java", "Android SDK", "Room", "Retrofit", "Firebase"],
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face&13"
  },
  {
    id: 14,
    firstName: "Дарья",
    lastName: "Волкова",
    position: "iOS разработчик",
    department: "Мобильная разработка",
    email: "daria.volkova@company.com",
    phone: "+79996665544",
    salary: 118000,
    hireDate: "2021-07-25",
    skills: ["Swift", "UIKit", "SwiftUI", "Core Data", "Alamofire", "Combine"],
    avatar: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=150&h=150&fit=crop&crop=face&14"
  },
  {
    id: 15,
    firstName: "Роман",
    lastName: "Павлов",
    position: "Бизнес-аналитик",
    department: "Аналитика",
    email: "roman.pavlov@company.com",
    phone: "+79994443322",
    salary: 105000,
    hireDate: "2019-04-12",
    skills: ["BPMN", "UML", "User Stories", "Requirement Analysis", "Confluence", "MS Visio"],
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face&15"
  },
  {
    id: 16,
    firstName: "Елена",
    lastName: "Семенова",
    position: "Контент-менеджер",
    department: "Маркетинг",
    email: "elena.semenova@company.com",
    phone: "+79991112233",
    salary: 65000,
    hireDate: "2023-02-14",
    skills: ["Копирайтинг", "Редактирование", "WordPress", "SEO", "Соцсети", "Аналитика контента"],
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face&16"
  },
  {
    id: 17,
    firstName: "Андрей",
    lastName: "Голубев",
    position: "Технический писатель",
    department: "Документация",
    email: "andrey.golubev@company.com",
    phone: "+79993331122",
    salary: 85000,
    hireDate: "2022-08-08",
    skills: ["Техническая документация", "API Docs", "Markdown", "Git", "Swagger", "MadCap Flare"],
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=150&h=150&fit=crop&crop=face&17"
  },
  {
    id: 18,
    firstName: "Ирина",
    lastName: "Зайцева",
    position: "Бухгалтер",
    department: "Финансы",
    email: "irina.zaytseva@company.com",
    phone: "+79997771122",
    salary: 80000,
    hireDate: "2017-12-01",
    skills: ["1C:Бухгалтерия", "Налоговый учет", "Отчетность", "МСФО", "ЭДО", "Кассовые операции"],
    avatar: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face&18"
  },
  {
    id: 19,
    firstName: "Константин",
    lastName: "Егоров",
    position: "Team Lead",
    department: "IT",
    email: "konstantin.egorov@company.com",
    salary: 180000,
    phone: "+79998889900",
    hireDate: "2016-05-20",
    skills: ["Управление командой", "Code Review", "Архитектура", "Agile", "Mentoring", "Project Management"],
    avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&crop=face&19"
  },
  {
    id: 20,
    firstName: "Наталья",
    lastName: "Романова",
    position: "Product Manager",
    department: "Управление продуктом",
    email: "natalia.romanova@company.com",
    phone: "+79990001122",
    salary: 125000,
    hireDate: "2020-01-10",
    skills: ["Product Strategy", "Roadmapping", "A/B Testing", "User Research", "Analytics", "Prioritization"],
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face&20"
  },
  {
    id: 21,
    firstName: "Владимир",
    lastName: "Комаров",
    position: "Security Engineer",
    department: "Безопасность",
    email: "vladimir.komarov@company.com",
    phone: "+79995550011",
    salary: 145000,
    hireDate: "2019-08-15",
    skills: ["Pentesting", "OWASP", "SIEM", "Cryptography", "Network Security", "Incident Response"],
    avatar: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=150&h=150&fit=crop&crop=face&21"
  },
  {
    id: 22,
    firstName: "Светлана",
    lastName: "Ильина",
    position: "QA Lead",
    department: "QA",
    email: "svetlana.ilina@company.com",
    phone: "+79994440055",
    salary: 110000,
    hireDate: "2018-03-22",
    skills: ["Test Strategy", "Team Management", "Automation", "Performance Testing", "QA Processes", "Metrics"],
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=face&22"
  },
  {
    id: 23,
    firstName: "Григорий",
    lastName: "Тихонов",
    position: "Data Scientist",
    department: "Аналитика",
    email: "grigory.tikhonov@company.com",
    phone: "+79993330044",
    salary: 135000,
    hireDate: "2021-09-05",
    skills: ["Python", "Machine Learning", "TensorFlow", "Pandas", "SQL", "Data Visualization"],
    avatar: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=150&h=150&fit=crop&crop=face&23"
  },
  {
    id: 24,
    firstName: "Юлия",
    lastName: "Фролова",
    position: "Frontend Team Lead",
    department: "IT",
    email: "yulia.frolova@company.com",
    phone: "+79992220033",
    salary: 160000,
    hireDate: "2017-11-18",
    skills: ["React", "TypeScript", "Team Leadership", "Architecture", "Code Review", "Mentoring"],
    avatar: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=150&h=150&fit=crop&crop=face&24"
  }
];


let nextId = 25;

export const addEmployee = (employee) => {
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(employee.firstName + ' ' + employee.lastName)}&background=667eea&color=fff&size=150&bold=true&font-size=0.8`;
  
  const newEmployee = {
    ...employee,
    id: nextId++,
    skills: employee.skills.split(',').map(skill => skill.trim()),
    salary: parseInt(employee.salary),
    avatar: avatarUrl
  };
  employees.push(newEmployee);
  return newEmployee;
};

export const updateEmployee = (id, updatedData) => {
  const index = employees.findIndex(emp => emp.id === id);
  if (index !== -1) {
    employees[index] = { ...employees[index], ...updatedData };
    return employees[index];
  }
  return null;
};

export const deleteEmployee = (id) => {
  employees = employees.filter(emp => emp.id !== id);
};