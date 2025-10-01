export type project = {
  "image": string
  "title": string
  "link": string
  "group"?: boolean
  "description": string
};

export type skill = {
  "title": string
  "imageSrc"?: string
}

export const projects: Array<project> = [
    {image: "projects/1.png", title: "React + Express + mySQL", link: "https://github.com/MA-Silent/FlexIntro/", description: "A simple website made wtih React for the frontend and ExpressJS + mySQL for the backend, that allows the user to drag the images on the page to another snap point"},
    {image: "projects/2.png", title: "Portfolio", link: "https://github.com/MA-Silent/Portfolio", description: "This website made for me to get a job"},
    {image: "projects/4.png", title: "ExpressJs API + mySQL", link: "https://github.com/MA-Silent/FLEX-expressjs-Api/", description: "An express API that connects to a mySQL database"},
    {image: "projects/3.png", title: "React Basics", link: "https://github.com/MA-Silent/M8-React/", description:"Hello World"},
    {image: "logos/DiscordJS.png", title: "Discord.js Bot", link:"https://github.com/Ben200002/Discord.js", description: "A Discord bot made with the Discord.js library that i made because i wanted to challenge my javascript skill"}
]

export const skills: Array<skill> = [
    {title: "Linux", imageSrc: "logos/linuxlogo.svg"},
    {title: "NodeJS", imageSrc: "logos/nodelogo.svg"},
    {title: "React", imageSrc: "logos/reactlogo.png"},
    {title: "mySQL", imageSrc: "logos/mySQLlogo.svg"},
    {title: "C#", imageSrc: "logos/cslogo.svg"},
    {title: "Typescript", imageSrc: "logos/tslogo.svg"},
    {title: "Javascript", imageSrc: "logos/jslogo.svg"},
    {title: "Vite", imageSrc: "logos/vitelogo.svg"},
    {title: "Python", imageSrc: "logos/pythonlogo.svg"},
    {title: "Git", imageSrc: "logos/gitlogo.svg"},
    {title: "ExpressJS", imageSrc: "logos/expresslogo.svg"},
    {title: "Tailwind CSS", imageSrc: "logos/tailwindlogo.svg"},
    {title: "Docker CLI", imageSrc: "logos/dockerlogo.svg"},
    {title: "HTML", imageSrc: "logos/htmllogo.svg"},
    {title: "CSS", imageSrc: "logos/csslogo.svg"},
];

export const AboutText: string = `My name is Ben Ruitenbeek, and I’m a 17-year-old Dutch software developer. I’m currently in my third year of MBO at Mediacollege Amsterdam, studying Software Development. I discovered programming when I was 13, and since then I’ve been focused on improving my skills and learning as much as I can. Skipping a grade allowed me to move through my studies faster and dedicate more time to developing practical and efficient software solutions. \n\n Outside of school, I like to relax while keeping an eye on the projects I’m currently working on. Whenever I spot a problem, I make sure to fix it as quickly as possible. This approach has helped me stay engaged with my work and continually improve my skills. In the future, I would like to continue my studies in Cyber Security, where I hope to apply my technical skills to build secure and reliable systems.`;
