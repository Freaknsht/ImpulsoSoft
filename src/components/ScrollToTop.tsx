import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Small timeout to ensure the DOM is ready after a potential navigation
            const scrollTimeout = setTimeout(() => {
                const element = document.getElementById(hash.slice(1));
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
            return () => clearTimeout(scrollTimeout);
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
