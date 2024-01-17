import { AnimatePresence, motion } from "framer-motion";
import { SCREEN_STATE } from "./Content";

type MAIN_COMPONENT_PROPS = {
    screenState: SCREEN_STATE;
};

export default function Landing({ screenState }: MAIN_COMPONENT_PROPS) {
    return (
        <>
            <Photo screenState={screenState}></Photo>
            <Text screenState={screenState}></Text>
            <About screenState={screenState}></About>
            <Stack screenState={screenState}></Stack>
        </>
    );
}

function Photo({ screenState }: MAIN_COMPONENT_PROPS) {
    const supportHover = matchMedia("(hover:hover").matches;
    const isPortrait = matchMedia("(orientation:portrait)").matches;

    const desktopAnimation = {
        left: `15%`,
        transform: `translate(-50%, -50%) scale(85%)`,
    };
    const mobilePortraitAnimation = {
        top: `12.5%`,
        left: `75%`,
        transform: `translate(-50%, -50%) scale(75%)`,
    };
    const mobileAnimation = isPortrait
        ? mobilePortraitAnimation
        : desktopAnimation;

    const animation = supportHover ? desktopAnimation : mobileAnimation;

    //============== ELIPSIS ANIMATION
    const elipsis1Angle = screenState === SCREEN_STATE.HOME ? 55 : 120;
    const elipsis2Angle = screenState === SCREEN_STATE.HOME ? 30 : -20;

    return (
        <AnimatePresence>
            {screenState !== SCREEN_STATE.PROJECTS && (
                <motion.div
                    className="photo-container"
                    animate={
                        screenState === SCREEN_STATE.ABOUT ? animation : {}
                    }
                    exit={{
                        opacity: 0,
                        transform: " translate(-50%, -50%) scale(0.1)",
                    }}
                    transition={{ duration: 0.65 }}
                >
                    <motion.div
                        initial={{
                            transform: `translate(-55%,-45%)`,
                        }}
                        animate={{
                            transform: `translate(-55%,-45%) rotateZ(${elipsis1Angle}deg)`,
                        }}
                        transition={{ duration: 0.75 }}
                        className="photo-container__elipsis photo-container__elipsis--1"
                    ></motion.div>
                    <div className="photo-container__shape photo-container__shape--1"></div>
                    <motion.div
                        initial={{
                            transform: `translate(-55%,-45%)`,
                        }}
                        animate={{
                            transform: `translate(-50%,-50%) rotateZ(${elipsis2Angle}deg)`,
                        }}
                        transition={{ duration: 0.75 }}
                        className="photo-container__elipsis photo-container__elipsis--2"
                    ></motion.div>
                    <div className="photo-container__shape photo-container__shape--2"></div>
                    <img
                        // src="photo.jpg"
                        alt="Profile Photo"
                        className="photo-container__photo"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
function Text({ screenState }: MAIN_COMPONENT_PROPS) {
    const supportHover = matchMedia("(hover:hover").matches;
    const isPortrait = matchMedia("(orientation:portrait)").matches;

    const desktopAnimation = {
        opacity: 1,
        top: `25%`,
        left: `50%`,
        width: `90%`,
    };
    const mobilePortraitAnimation = {
        top: `16%`,
        left: `30%`,
        transform: `translate(-50%, -50%) scale(75%)`,
    };
    const mobileAnimation = isPortrait
        ? mobilePortraitAnimation
        : desktopAnimation;
    const animation = supportHover ? desktopAnimation : mobileAnimation;

    return (
        <AnimatePresence>
            {screenState !== SCREEN_STATE.PROJECTS && (
                <motion.div
                    className="landing-header"
                    animate={
                        screenState === SCREEN_STATE.ABOUT ? animation : {}
                    }
                    exit={{
                        opacity: 0,
                        transform: " translate(-50%, -50%) scale(0.1)",
                    }}
                    transition={{ duration: 0.75 }}
                >
                    <h1>
                        {screenState === SCREEN_STATE.HOME && (
                            <span>Hi, I'm </span>
                        )}
                        <span
                            data-break={
                                screenState === SCREEN_STATE.HOME ? "0" : "1"
                            }
                        >
                            Rafael Lopes
                        </span>
                    </h1>
                    <motion.h2
                        initial={{ opacity: 0, y: -20, rotateX: 60 }}
                        animate={
                            screenState === SCREEN_STATE.HOME
                                ? { opacity: 1, y: 0, rotateX: 0 }
                                : {}
                        }
                        exit={{
                            opacity: 0,
                            y: -20,
                            rotateX: 60,
                        }}
                    >
                        I'm a front-end developer based in Portugal
                    </motion.h2>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
function About({ screenState }: MAIN_COMPONENT_PROPS) {
    const supportHover = matchMedia("(hover:hover").matches;
    const isPortrait = matchMedia("(orientation:portrait)").matches;

    const desktopAnimation = {
        opacity: 1,
    };
    const mobilePortraitAnimation = {
        opacity: 1,
        top: `45%`,
    };
    const mobileAnimation = isPortrait
        ? mobilePortraitAnimation
        : desktopAnimation;
    const animation = supportHover ? desktopAnimation : mobileAnimation;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={screenState === SCREEN_STATE.ABOUT ? animation : {}}
            exit={{
                opacity: 0,
                transform: " translate(-50%, -50%) scale(0.1)",
            }}
            className="about-text"
        >
            <p>
                Hey there! I'm Rafael, a 23-year-old Portuguese frontend
                developer with a love for crafting beautiful digital landscapes
                using modern tools such as React and Sass.
            </p>
            <p>
                From fixing stuff in my shop, to crafting seamless user
                interfaces, my passion lies in turning ideas into reality. My
                journey in frontend development is more than just lines of code;
                it's an exploration of creativity, problem-solving, and making
                technology seamlessly blend with the user's world.
            </p>
            <p>
                Let's build something extraordinary together — where code meets
                creativity, and interfaces come to life!
            </p>
        </motion.div>
    );
}
function Stack({ screenState }: MAIN_COMPONENT_PROPS) {
    return (
        <AnimatePresence>
            {screenState === SCREEN_STATE.ABOUT && (
                <motion.div
                    className="tech-stack__wrapper"
                    initial={{
                        opacity: 0,
                        transform: " translate(-50%, -50%) scale(0.1)",
                    }}
                    animate={{
                        opacity: 1,
                        transform: " translate(-50%, -50%) scale(1)",
                    }}
                    exit={{
                        opacity: 0,
                        transform: " translate(-50%, -50%) scale(0.1)",
                    }}
                    transition={{
                        delay: 0.15,
                        ease: "easeOut",
                        duration: 0.5,
                    }}
                >
                    <div className="tech-stack">
                        <div className="tech-stack__item ">
                            <img src="./icons/React.png" alt="" />
                            <img src="./icons/Redux.png" alt="" />
                            <img src="./icons/React Router.png" alt="" />
                        </div>
                        <div className="tech-stack__item ">
                            <img src="./icons/HTML.png" alt="" />
                            <img src="./icons/CSS.png" alt="" />
                            <img src="./icons/JavaScript.png" alt="" />
                        </div>
                        <div className="tech-stack__item ">
                            <img src="./icons/NPM.png" alt="" />
                            <img src="./icons/API2.png" alt="" />
                            <img src="./icons/Git.png" alt="" />
                        </div>
                        <div className="tech-stack__item ">
                            <img src="./icons/Sass.png" alt="" />
                            <img src="./icons/Bootstrap.png" alt="" />
                            <img src="./icons/Tailwind CSS.png" alt="" />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
