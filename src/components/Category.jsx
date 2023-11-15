import { NavLink } from "react-router-dom";

function Category() {
  return (
    <div className="container px-4 mx-auto flex items-center justify-center gap-3 my-8">
      <NavLink className="NavLink" to={"/recipes-app/cuisine/african"}>
        <h4>Thai</h4>
      </NavLink>

      <NavLink className="NavLink" to={"/recipes-app/cuisine/Mexican"}>
        <h4>Mexican</h4>
      </NavLink>

      <NavLink className="NavLink" to={"/recipes-app/cuisine/Italian"}>
        <h4>Italian</h4>
      </NavLink>

      <NavLink className="NavLink" to={"/recipes-app/cuisine/japanese"}>
        <h4>Japanese</h4>
      </NavLink>
    </div>
  );
}

export default Category;
