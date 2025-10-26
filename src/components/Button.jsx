const Button = ({ onClick, btnText, primary, secondary, tertiary }) => {
  return (
    <button
      onClick={onClick}
      //   TODO: Work on conditional styling
      style={{
        backgroundColor: primary
          ? "green"
          : secondary
          ? "purple"
          : tertiary
          ? "blue"
          : null,
      }}
      className="px-5 h-10 w-fit hover:bg-green-700 text-white text-sm font-medium rounded-lg shadow-sm transition duration-300 ease-out"
    >
      {btnText}
    </button>
  );
};

export default Button;
