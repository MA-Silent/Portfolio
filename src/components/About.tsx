export default function About({id}: {id:string}) {

    return (
        <section className="h-screen items-end flex snap-center" id={id}>
            <div className="flex flex-col md:flex-row rounded p-5 gap-5">
            <section className="flex flex-col gap-5 flex-1">
                <AboutBlock title="Hello World!" iconSrc=""><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quam et odio. Laudantium voluptatum quasi facilis eum consequuntur distinctio mollitia. Voluptatem autem officia quam ullam quia aspernatur enim repudiandae id.</p></AboutBlock>
                <AboutBlock title="Hello World!" iconSrc=""><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quam et odio. Laudantium voluptatum quasi facilis eum consequuntur distinctio mollitia. Voluptatem autem officia quam ullam quia aspernatur enim repudiandae id.</p></AboutBlock>
                <AboutBlock title="Hello World!" iconSrc=""><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quam et odio. Laudantium voluptatum quasi facilis eum consequuntur distinctio mollitia. Voluptatem autem officia quam ullam quia aspernatur enim repudiandae id.</p></AboutBlock>
                <AboutBlock title="Hello World!" iconSrc=""><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quam et odio. Laudantium voluptatum quasi facilis eum consequuntur distinctio mollitia. Voluptatem autem officia quam ullam quia aspernatur enim repudiandae id.</p></AboutBlock>
                <AboutBlock title="Hello World!" iconSrc=""><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quam et odio. Laudantium voluptatum quasi facilis eum consequuntur distinctio mollitia. Voluptatem autem officia quam ullam quia aspernatur enim repudiandae id.</p></AboutBlock>
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
        <div className="h-40 bg-slate-600 w-full rounded p-2 overflow-auto">
            <div className="flex justify-between">
                <h2 className="text-green-500 text-xl">{title}</h2>
                <img src={iconSrc} alt="icon" />
            </div>
            {children}
        </div>
    )
}