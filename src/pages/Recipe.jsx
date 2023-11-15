import { useState } from "react";
import useRecipe from "../data/useRecipe";

function Recipe() {
  const [active, setActive] = useState("instructions");
  const { cuisine } = useRecipe();
  return (
    <section className="pb-16 ">
      <div className="container mx-auto px-4 flex gap-10 flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold mb-8">{cuisine.title}</h1>
          <img src={cuisine.image} alt="" />
        </div>

        <div className="w-full md:w-1/2">
          <div className="flex justify-center md:justify-start gap-5 mb-5">
            <button
              className={`${
                active === "instructions"
                  ? "active"
                  : "bg-gradient-to-r from-[#494949] to-[#313131] text-white "
              } py-3 px-5 rounded-md `}
              onClick={() => {
                setActive("instructions");
              }}
            >
              Instructions
            </button>
            <button
              className={`${
                active === "ingredients"
                  ? "active"
                  : "bg-gradient-to-r from-[#494949] to-[#313131] text-white "
              } py-3 px-5 rounded-md`}
              onClick={() => {
                setActive("ingredients");
              }}
            >
              Ingredients
            </button>
          </div>

          {active === "instructions" && (
            <div className="">
              <h3 dangerouslySetInnerHTML={{ __html: cuisine.summary }}></h3>
              <h3
                dangerouslySetInnerHTML={{ __html: cuisine.instructions }}
              ></h3>
            </div>
          )}

          {active === "ingredients" && (
            <ul>
              {cuisine.extendedIngredients.map((orgi, ind) => {
                return <li key={ind}>{orgi.original}</li>;
              })}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

export default Recipe;
