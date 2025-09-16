export default function About({ id }: { id: string }) {

    return (
        <section className="h-screen items-end flex snap-center" id={id}>
            <div className="flex flex-col md:flex-row rounded p-5 gap-5">
                <section className="flex flex-col gap-5 flex-1">
                    <AboutBlock title="Typescript" iconSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"><p>My preferred programming language is TypeScript, which I use most frequently due to its strong type system and advanced IntelliSense support.</p></AboutBlock>
                    <AboutBlock title="React" iconSrc="https://images.seeklogo.com/logo-png/50/2/react-logo-png_seeklogo-507247.png"><p>My preferred front-end framework is React, which I use extensively for building interactive and user-friendly web applications.</p></AboutBlock>
                    <AboutBlock title="Vite" iconSrc="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg"><p>I like using Vite because it makes setting up projects simple and gives me a fast development environment.</p></AboutBlock>
                    <AboutBlock title="Arch Linux" iconSrc="archlogo.svg"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quam et odio. Laudantium voluptatum quasi facilis eum consequuntur distinctio mollitia. Voluptatem autem officia quam ullam quia aspernatur enim repudiandae id.</p></AboutBlock>
                    <AboutBlock title="Node Package Manager" iconSrc="npmlogo.svg"><p>I use npm primarily for its vast library of packages, which integrate seamlessly with TypeScript and React, making development more efficient and flexible.</p></AboutBlock>
                </section>
                <section className="flex-1 snap-center md:snap-align-none md:h-full">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor quasi, suscipit cupiditate voluptatem totam, esse sunt impedit nesciunt, ullam officiis labore perspiciatis commodi mollitia adipisci molestiae similique laboriosam facilis minus!</p>
                </section>
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