import { useState, useEffect } from "react";

function usePopular() {
  const [pop, setPop] = useState([]);
  const [num, setNum] = useState(3);

  const resize = () => {
    if (window.innerWidth < 767) {
      setNum(1);
    } else if (window.innerWidth < 1023) {
      setNum(3);
    } else {
      setNum(4);
    }
  };
  window.addEventListener("resize", resize);
  const check = localStorage.getItem("popular");

  const api = async () => {
    if (check) {
      setPop(JSON.parse(check));
    } else {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const result = await data.json();

      localStorage.setItem("popular", JSON.stringify(result.recipes));
      setPop(result.recipes);
    }
  };

  useEffect(() => {
    api();
    resize();
  }, []);

  return { pop, num };
}

export default usePopular;
