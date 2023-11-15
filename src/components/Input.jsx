import { FaSearch } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
// import { useParams } from "react-router-dom";

function Input() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef();
  // const params = useParams();
  const location = useLocation();
  const submit = (e) => {
    e.preventDefault();

    if (search === "") {
      navigate("/recipes-app/");
    } else {
      setSearch(e.target.value);
      navigate("/recipes-app/searched/" + search);
      setSearch("");
    }
  };

  useEffect(() => {
    inputRef.current.value = "";
  }, [location /* params */]);

  return (
    <div className="container mx-auto px-4">
      <form onSubmit={(e) => submit(e)} className="relative w-9/12 mx-auto">
        <input
          ref={inputRef}
          // value={search}
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gradient-to-br from-[#494949] to-[#313131] focus:outline-none rounded-xl text-white py-4 px-12 w-full"
        />
        <Link
          to={
            search === "" ? "/recipes-app/" : "/recipes-app/searched/" + search
          }
          className="absolute right-0 top-1/2 translate-y-[-50%] px-4 h-full text-white flex items-center justify-center"
        >
          <FaSearch />
        </Link>
      </form>
    </div>
  );
}

export default Input;
