const Button = ({
  text,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
}) => {
  const base = "px-4 py-2 rounded-md font-medium transition";

  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${styles[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {text}
    </button>
  );
};

export default Button;