import { useEffect, useState } from "react";

export const useScrollSpy = (ids, offset = 100) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      ids.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - offset;
          if (window.scrollY >= top) {
            current = id;
          }
        }
      });
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids, offset]);

  return activeId;
};
