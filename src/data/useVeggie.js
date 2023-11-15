import { useState, useEffect } from "react";

function useVeggie() {
  const [veg, setVeg] = useState([]);
  const [num, setNum] = useState(3);

  const resize = () => {
    if (window.innerWidth < 767) {
      setNum(1);
    } else if (window.innerWidth < 1023) {
      setNum(2);
    } else {
      setNum(3);
    }
  };
  window.addEventListener("resize", resize);
  const check = localStorage.getItem("vegetarian");

  const api = async () => {
    if (check) {
      setVeg(JSON.parse(check));
    } else {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const result = await data.json();

      localStorage.setItem("vegetarian", JSON.stringify(result.recipes));
      setVeg(result.recipes);
    }
  };

  useEffect(() => {
    api();
    resize();
  }, []);

  return { veg, num };
}

export default useVeggie;
