export default function About({ id }: { id: string }) {

    return (
        <section className="h-screen items-end flex snap-start md:snap-center" id={id}>
            <div className="flex flex-col md:flex-row rounded p-5 gap-5 h-screen overflow-auto md:pb-2 md:items-end">
                <AboutStack />
            </div>
        </section>
    )
}


function AboutBlock({ children, title, iconSrc }: React.PropsWithChildren & { title: string } & { iconSrc: string }) {
    return (
        <div className="h-40 bg-slate-600 w-full rounded p-2 overflow-auto flex flex-col">
            <div className="flex justify-between">
                <h2 className="text-green-500 text-xl">{title}</h2>
                <img src={iconSrc} alt="icon" className="h-8 w-auto" />
            </div>
            <div className="h-full pr-8">
                {children}
            </div>
        </div>
    )
}

function PersonAbout() {
    return (
        <section className="flex flex-1 flex-col snap-center md:snap-align-none md:h-full justify-center items-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3m972e8FEvBi7ETC03avlJcZDg8nT9dWLSw&s" alt="profilePicture" className="h-80 w-80 rounded-full" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor quasi, suscipit cupiditate voluptatem totam, esse sunt impedit nesciunt, ullam officiis labore perspiciatis commodi mollitia adipisci molestiae similique laboriosam facilis minus!</p>
        </section>
    )

}

function AboutStack() {
    if (window.innerWidth <= 768) {
        return (
            <>
                <section className="flex flex-col gap-5 flex-1">
                    <AboutBlock title="Arch Linux" iconSrc="archlogo.svg"><p>I use Arch Linux because I appreciate its minimal default setup, which allows me to keep my system clean and efficient. When I need additional software, I can reliably find it through the AUR or the official repositories, giving me both flexibility and control over my environment.</p></AboutBlock>
                    <AboutBlock title="Typescript" iconSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"><p>My preferred programming language is TypeScript, which I use most often because of its strong type system and advanced IntelliSense. It makes my code feel more structured and helps me write cleaner, more reliable projects.</p></AboutBlock>
                    <AboutBlock title="React" iconSrc="https://images.seeklogo.com/logo-png/50/2/react-logo-png_seeklogo-507247.png"><p>I enjoy working with React because it provides a clear and flexible way to build interactive applications. Its component-based approach makes organizing projects easier and gives me the chance to learn modern front-end practices.</p></AboutBlock>
                    <AboutBlock title="Vite" iconSrc="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"><p>I like using Vite because it makes setting up projects simple and gives me a fast development environment. It reduces unnecessary setup work and lets me focus more on building and experimenting with new ideas.</p></AboutBlock>
                    <AboutBlock title="Node Package Manager" iconSrc="npmlogo.svg"><p>I use npm mainly because of its huge library of packages that work well with TypeScript and React. It makes development smoother and gives me the flexibility to explore different tools and features in my projects.</p></AboutBlock>
                </section>
                <PersonAbout />
            </>
        )
    } else {
        return (
            <section className="grid grid-cols-2 gap-5 overflow-auto">
                <section className="flex flex-col gap-5 flex-1">
                    <AboutBlock title="Arch Linux" iconSrc="archlogo.svg"><p>I use Arch Linux because I appreciate its minimal default setup, which allows me to keep my system clean and efficient. When I need additional software, I can reliably find it through the AUR or the official repositories, giving me both flexibility and control over my environment.</p></AboutBlock>
                    <AboutBlock title="Typescript" iconSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"><p>My preferred programming language is TypeScript, which I use most often because of its strong type system and advanced IntelliSense. It makes my code feel more structured and helps me write cleaner, more reliable projects.</p></AboutBlock>
                    <AboutBlock title="React" iconSrc="https://images.seeklogo.com/logo-png/50/2/react-logo-png_seeklogo-507247.png"><p>I enjoy working with React because it provides a clear and flexible way to build interactive applications. Its component-based approach makes organizing projects easier and gives me the chance to learn modern front-end practices.</p></AboutBlock>
                    <AboutBlock title="Vite" iconSrc="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"><p>I like using Vite because it makes setting up projects simple and gives me a fast development environment. It reduces unnecessary setup work and lets me focus more on building and experimenting with new ideas.</p></AboutBlock>
                    <AboutBlock title="Node Package Manager" iconSrc="npmlogo.svg"><p>I use npm mainly because of its huge library of packages that work well with TypeScript and React. It makes development smoother and gives me the flexibility to explore different tools and features in my projects.</p></AboutBlock>
                </section>
                <PersonAbout />
            </section>
        )
    }
}