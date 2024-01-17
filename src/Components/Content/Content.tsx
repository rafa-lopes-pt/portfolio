import { useState } from "react";
import Landing from "./Landing";
import Projects from "./Projects";

export enum SCREEN_STATE {
    HOME = "Back",
    PROJECTS = "Projects",
    ABOUT = "About Me",
}

export default function Content() {
    const [screenState, setScreenState] = useState(SCREEN_STATE.HOME);

    return (
        <main>
            <Landing screenState={screenState}></Landing>
            <Projects
                show={screenState === SCREEN_STATE.PROJECTS ? 1 : 0}
            ></Projects>
            <BtnGroup
                screenState={screenState}
                handleScreenChange={setScreenState}
            ></BtnGroup>
        </main>
    );
}
function BtnGroup({
    handleScreenChange,
    screenState,
}: {
    handleScreenChange: Function;
    screenState: SCREEN_STATE;
}) {
    const aboutCondition =
        screenState === SCREEN_STATE.HOME
            ? SCREEN_STATE.ABOUT
            : SCREEN_STATE.HOME;

    const projectsCondition =
        screenState === SCREEN_STATE.HOME || screenState === SCREEN_STATE.ABOUT
            ? SCREEN_STATE.PROJECTS
            : "";

    return (
        <div
            className={`
            navigation-btns
            navigation-btns--${
                screenState !== SCREEN_STATE.HOME ? "row" : "col"
            }
            `}
        >
            <button
                className="btn"
                onClick={() => handleScreenChange(aboutCondition)}
            >
                {aboutCondition}
            </button>
            {projectsCondition && (
                <button
                    className="btn"
                    onClick={() => handleScreenChange(projectsCondition)}
                >
                    {projectsCondition}
                </button>
            )}
            <a
                className="btn"
                href="./Rafael-Lopes-Frontend-Developer-CV.pdf"
                download="./Rafael-Lopes-Frontend-Developer-CV.pdf"
            >
                Download CV{" "}
                <i className="ml-1 text-c1 fa-solid fa-download"></i>
            </a>
        </div>
    );
}
