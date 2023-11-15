import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function useSearched() {
  const [cuisine, setCuisine] = useState([]);
  const [total, setTotal] = useState({});
  const [number, setNumber] = useState(10);
  const param = useParams();

  const ten = () => {
    setNumber(number + 10);
  };

  const api = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${param.name}&number=${number}`
    );
    const result = await data.json();
    setCuisine(result.results);
    setTotal(result.totalResults);
  };

  useEffect(() => {
    api();
  }, [param.name, number, total]);

  return { cuisine, number, total, ten };
}

export default useSearched;
