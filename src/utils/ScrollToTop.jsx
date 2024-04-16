import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const treshHoldPosition = 150;

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setShowArrow(scrollPosition > treshHoldPosition);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    showArrow && (
      <div
        onClick={() => scrollTo("nav-bar")}
        className='fixed bottom-20 -right-2 bg-stone-300 py-[12px] px-[18px] z-50  mx-5 cursor-pointer rounded-full text-white'
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    )
  );
};

export default ScrollToTop;
