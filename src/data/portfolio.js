export const personal = {
  name: 'Tom Nguyen',
  title: 'Full-Stack Developer',
  location: 'Houston, TX',
  email: 'tom.nguyen.nht@gmail.com',
  phone: '832-359-6679',
  bio: 'Full-stack developer with a strong computer science foundation from Cal State LA. Experienced building web applications with Django, the MEAN stack, and Java Spring. Passionate about clean code, AI integration, and crafting experiences that solve real problems.',
  linkedin: 'https://www.linkedin.com/in/tomnguyen103/',
  github: 'https://github.com/tomnguyen103',
  // Place your resume PDF at public/resume.pdf to enable the download button
  resumePdf: '/resume.pdf',
}

export const skills = [
  { category: 'Frontend',   items: ['JavaScript', 'React', 'HTML / CSS', 'TypeScript'] },
  { category: 'Backend',    items: ['Node.js', 'Python', 'Java', 'Django'] },
  { category: 'Frameworks', items: ['MEAN Stack', 'Java Spring', 'Express.js'] },
  { category: 'Databases',  items: ['MySQL', 'MongoDB', 'SQLite'] },
]

export const education = [
  {
    school: 'California State University, Los Angeles',
    degree: 'B.S. Computer Science',
    startYear: 2016,
    endYear: 2019,
  },
]

// Add your work history here. Example entry shape:
// {
//   company: 'Acme Corp',
//   role: 'Software Engineer',
//   startDate: 'Jan 2020',
//   endDate: 'Present',
//   bullets: ['Built X', 'Reduced Y by 30%'],
// }
export const experience = []

export const projects = [
  {
    id: 1,
    name: 'AI Flappy Bird',
    description:
      'Evolved a classic Flappy Bird clone into an AI agent that teaches itself to play using Reinforcement Learning and a Neural Network — no human input required.',
    image: 'https://i.imgur.com/2DPQAnN.png',
    tags: ['Python', 'Neural Network', 'Reinforcement Learning', 'AI/ML'],
    github: 'https://github.com/tomnguyen103/AI_Flappy_Bird',
    demo: 'http://bird.tomnguyen.me/',
  },
  {
    id: 2,
    name: 'Paint HTML App',
    description:
      'Browser-based drawing tool built on HTML Canvas supporting freehand draw, lines, rectangles, and a full color picker — no libraries, pure DOM.',
    image: 'https://i.imgur.com/uw70rQj.png',
    tags: ['JavaScript', 'HTML Canvas', 'CSS', 'DOM API'],
    github: 'https://github.com/tomnguyen103/Paint_HTML_app',
    demo: 'http://paint.tomnguyen.me/',
  },
  {
    id: 3,
    name: 'School Library Platform',
    description:
      'Full-stack library management system where registered students can browse the catalog and check out books. Role-based auth with Django and Bootstrap.',
    image: 'https://i.imgur.com/APQz8BH.png',
    tags: ['Python', 'Django', 'Bootstrap', 'SQLite'],
    github: 'https://github.com/tomnguyen103/Project1',
    demo: 'http://library.tomnguyen.me/',
  },
]
