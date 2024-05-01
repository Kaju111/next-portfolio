/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

*/

export const projectsData = [
  {
    id: 1,
    name: "E-COMMERCE WEB",
    description:
      "Built a Node.js-powered e-commerce platform featuring user authentication, product management, and secure payment integration via Stripe. Included an exclusive admin dashboard for streamlined product and order management.",
    date: "2023-08-15",
    demoLink: "https://server-frontend.vercel.app/",
  },
  {
    id: 2,
    name: "DRAWING",
    description:
      "Developed a drawing website using React with features like drawing tools, shapes, text, undo/redo, and local storage integration. Continuing to enhance functionality for better user experience.",
    date: "2024-01-20",
    demoLink: "https://blank-eight.vercel.app/",
  },
  {
    id: 3,
    name: "SOCIAL MEDIA",
    description:
      "Developed a MERN stack social media platform with Cloudinary integration for photo upload/delete. Features include login, logout, create account, comment management, follow/unfollow, user profiles.",
    date: "2023-04-10",
    demoLink:
      "https://www.linkedin.com/posts/kaju-saikia-2706422a9_tech-react-node-mongo-express-cloudinary-activity-7167053279770624000-jOHR?utm_source=share&utm_medium=member_desktop",
  },
  {
    id: 4,
    name: "DASHBOARD",
    description:
      "Simple e-com dashboard app Orders, Employees, Customers, Calender, Kanban, Editor, Color-Picker all sites available and Dark mode feafures.",
    date: "2023-01-30",
    demoLink: "https://shoppy-dashboard-seven.vercel.app/",
  },
  {
    id: 5,
    name: "CLONE",
    description: "A landing page for a chai walla",
    date: "2022-07-12",
    demoLink: "https://mbachaiwala-psi.vercel.app/",
  },
  {
    id: 6,
    name: "NIKE STORE",
    description: "A landing page for a Shose company",
    date: "2023-2-01",
    demoLink: "https://nike-store-saikiakaju275-gmailcom.vercel.app/",
  },
  {
    id: 7,
    name: "PORTFOLIO",
    description: "My old portfolio",
    date: "2023-06-18",
    demoLink: "https://kaju.vercel.app/",
  },
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://github.com/Kaju111",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/kaju-saikia-2706422a9/",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "X",
    link: "https://twitter.com/KajuSaikia99107",
    icon: "twitter",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];
