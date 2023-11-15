// this button using to show more recipes & warnning if no more recipes to show
function Button({ ten, number, total }) {
  return (
    <button
      onClick={ten}
      className={`${
        number < total
          ? "bg-gradient-to-r from-[#494949] to-[#313131]"
          : "bg-gradient-to-r from-[#7c0000] to-[#9b0000]"
      } px-8 py-5  text-white mx-auto my-20 rounded-xl font-bold block`}
    >
      {number < total ? "Show More" : "No More Recipe"}
    </button>
  );
}

export default Button;
