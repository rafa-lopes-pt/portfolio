import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Loader from "../Loader";
enum PROJECT_TAGS_ENUM {
    tailwind = "Tailwind CSS",
    js = "JavaScript",
    ts = "TypeScript",
    react = "React",
    router = "React Router",
    redux = "React Redux",
    html = "HTML5",
    bootstrap = "Bootstrap",
    sass = "Sass",
}
type ProjectType = {
    title: string;
    descp: string;
    link: string;
    tags: PROJECT_TAGS_ENUM[];
};
const projects: ProjectType[] = [
    {
        title: "Natours Landing Page",
        descp: "A Landing page for a companny offering nature tours for adventurous people",
        link: "https://magical-truffle-675b98.netlify.app/",
        tags: [PROJECT_TAGS_ENUM.sass],
    },
    {
        title: "Nexter Landing Page",
        descp: "A landing page for a property management & real estate firm",
        link: "https://coruscating-salamander-4bf6f9.netlify.app/",
        tags: [PROJECT_TAGS_ENUM.sass],
    },
    {
        title: "Trillo Landing Page",
        descp: "A landing page for a travel agency's services, regarding fligths and accomodation",
        link: "https://splendid-kringle-52d9a6.netlify.app/",
        tags: [PROJECT_TAGS_ENUM.sass],
    },
    {
        title: "Manage Landing Page",
        descp: "A landing page for online productivity tool for software developer teams",
        link: "https://tailwind-crash-course.netlify.app/",
        tags: [PROJECT_TAGS_ENUM.tailwind],
    },
    {
        title: "Digital Clock Animation",
        descp: "A Digital/Analog clock with complex color and motion animations",
        link: "https://rj-digital-clock.netlify.app/",
        tags: [PROJECT_TAGS_ENUM.sass, PROJECT_TAGS_ENUM.js],
    },
    {
        title: "Polyrythmic Animation",
        descp: "A visual representation of a polyrythm that resets every 7.5 minutes",
        link: "https://polyrythmic-animation.netlify.app/",
        tags: [PROJECT_TAGS_ENUM.sass, PROJECT_TAGS_ENUM.js],
    },
];
export default function Projects({ show }: { show: 1 | 0 }) {
    const handleNavigation = (link: string) => {
        window.open(link, "_Blank");
    };
    return (
        <AnimatePresence>
            {show && (
                <div id="projects-section">
                    <header className="flex items-center ">
                        <h1 className="text-[2rem] font-bold text-center w-full">
                            Relevant Projects
                        </h1>
                    </header>
                    <main className="projects-container">
                        {projects.map((el, i) => (
                            <div
                                className="project"
                                onClick={() => handleNavigation(el.link)}
                                key={"Project-thumbnail-" + i}
                            >
                                <div className="project__thumbnail">
                                    <ProjectThumbnail project={el} />
                                </div>

                                <div className="project__text">
                                    <h3 className="project__text__title">
                                        {el.title}
                                    </h3>
                                    <p className="project__text__descp">
                                        {el.descp}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </main>
                </div>
            )}
        </AnimatePresence>
    );
}

function ProjectThumbnail({ project }: { project: ProjectType }) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {isLoading && <Loader></Loader>}
            <iframe
                onLoad={(e) => {
                    //@ts-ignore
                    e.target.style.opacity = 1;
                    setIsLoading(false);
                }}
                style={{
                    opacity: 0,
                    border: "none",
                }}
                src={project.link}
                className={isLoading ? "loading" : ""}
            ></iframe>
        </>
    );
}
