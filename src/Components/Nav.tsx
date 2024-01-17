import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Nav() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="nav">
            <Contacts></Contacts>
            <button className="nav__icon" onClick={() => setShowModal(true)}>
                <i className="fa-solid fa-bars"></i>
            </button>
            <AnimatePresence>
                {showModal && (
                    <>
                        <motion.div
                            className="nav__overlay "
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowModal(false)}
                        ></motion.div>
                        <motion.div
                            className="nav__modal"
                            initial={{ transform: `translateY(-100%)` }}
                            animate={{ transform: `translateY(0%)` }}
                            exit={{ transform: `translateY(-100%)` }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="nav__modal__title">Contacts</h2>
                            <button
                                className="nav__icon"
                                onClick={() => setShowModal(false)}
                            >
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                            <Contacts></Contacts>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}

function Contacts({ className }: { className?: string }) {
    return (
        <>
            <a
                href="https://www.linkedin.com/in/rafael-lopes-frontend-developer/"
                className={`nav__link ${className}`}
                target="_Blank"
            >
                <i className="fa-brands fa-linkedin mr-2"></i>LinkedIn
            </a>
            <a
                href="https://github.com/rafa-lopes-pt"
                className={`nav__link ${className}`}
                target="_Blank"
            >
                <i className="fa-brands fa-github-square mr-2"></i>GitHub
            </a>
        </>
    );
}
