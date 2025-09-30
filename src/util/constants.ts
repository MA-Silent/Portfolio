export type project = {
  "image": string
  "title": string
  "link": string
};

export type skill = {
  "title": string
  "image"?: string
}

export const projects: Array<project> = [
    {image: "projects/1.png", title: "React + Express + mySQL", link: "https://github.com/MA-Silent/FlexIntro/"},
    {image: "projects/2.png", title: "ExpressJs API + mySQL", link: "https://github.com/MA-Silent/FLEX-expressjs-Api/"},
    {image: "projects/3.png", title: "React Basics", link: "https://github.com/MA-Silent/M8-React/"},
       
]

export const skills: Array<skill> = [
    {title: "Linux", image: "https://www.svgrepo.com/show/452054/linux.svg"},
    {title: "NodeJS", image: "https://www.svgrepo.com/show/354119/nodejs-icon.svg"},
    {title: "React", image: "logos/reactlogo.png"},
    {title: "mySQL", image: "https://www.svgrepo.com/show/473731/mysql.svg"},
    {title: "C#", image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg"},
    {title: "Typescript", image: "logos/tslogo.svg"},
    {title: "Javascript", image: "logos/jslogo.svg"},
    {title: "Vite", image: "logos/vitelogo.svg"},
    {title: "Git", image: "https://www.svgrepo.com/show/303548/git-icon-logo.svg"},
    {title: "ExpressJS", image: "logos/expresslogo.svg"},
    {title: "Tailwind CSS", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"},
    {title: "Docker CLI", image: "https://www.svgrepo.com/show/331370/docker.svg"},
    {title: "HTML", image: "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg"},
    {title: "CSS", image: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"},
];

export const AboutText: string = `My name is Ben Ruitenbeek, and I’m a 17-year-old Dutch software developer. I’m currently in my third year of MBO at Mediacollege Amsterdam, studying Software Development. I discovered programming when I was 13, and since then I’ve been focused on improving my skills and learning as much as I can. Skipping a grade allowed me to move through my studies faster and dedicate more time to developing practical and efficient software solutions. \n\n Outside of school, I like to relax while keeping an eye on the projects I’m currently working on. Whenever I spot a problem, I make sure to fix it as quickly as possible. This approach has helped me stay engaged with my work and continually improve my skills. In the future, I would like to continue my studies in Cyber Security, where I hope to apply my technical skills to build secure and reliable systems.`;
