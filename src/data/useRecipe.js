import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function useRecipe() {
  const [cuisine, setCuisine] = useState({});
  const param = useParams();

  const api = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${param.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const result = await data.json();
    setCuisine(result);
  };

  useEffect(() => {
    api();
  }, [param.name]);

  return { cuisine };
}

export default useRecipe;
