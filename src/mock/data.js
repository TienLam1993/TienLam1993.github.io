import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Lam Nguyen | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'My portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is ',
  name: 'Lam Nguyen',
  subtitle: "I'm a back-end developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'After graduating from Hanoi University of Science and Technology in 2016, I started my career as an Electrical Engineer.',
  paragraphTwo:
    'During that time, I used to program microprocessors and PLCs. Things changed when I got a project with SCADA systems.\n I switched to programming in high-level languages like C# and Python. I got to the world of OOP, Git, Docker... and I loved it.',
  paragraphThree: "Nowadays, I've completely changed my focus to software engineering. I'm on my way to becoming a full-time backend developer.",
  resume:
    'https://images.vietnamworks.com/resumes_sentdirectly/resume/5328/4225328/90/b776ab9a-e89d-4043-bf30-810999c0af5a.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'todo.jpg',
    title: 'To-do App with Django and React',
    info: 'A CRUD app help you to manage your to-do list.',
    info2: 'It uses Django REST framework in the back-end and React in front-end.',
    url: 'https://lamgihomnay.herokuapp.com/',
    repo: 'https://github.com/TienLam1993/Todo-django-react', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'network.jpg',
    title: 'Simple social network with Django',
    info: 'This app is a project on Harvard’s CS50W course. It is a simple clone of Twitter.',
    info2: 'It uses Django in the back-end and JavaScripts, Bootstrap in the front-end.',
    url: 'https://mycs50network.herokuapp.com/',
    repo: 'https://github.com/TienLam1993/django-network', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'stock.jpg',
    title: 'Simple Stock trading app with Flask',
    info: 'This app is a project on Harvard’s CS50 course. It is a psuedo stock trading app. New user will have 10000$ to practice.',
    info2: 'It uses Flask in the back-end and JavaScript, Bootstrap in the front-end.',
    url: 'https://mycs50financeapp.herokuapp.com/',
    repo: 'https://github.com/TienLam1993/CS50X-finance', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Interested in doing a project together?',
  btn: 'Email me!',
  email: 'tien.lam.130293@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/lam-nguyen-a421b019a/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/TienLam1993',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
