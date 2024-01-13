import "./button.css";

const Button = ({ Text, onClick, Type = "button" }) => {
  return (
    <button type={Type} onClick={onClick}>
      {Text}
    </button>
  );
};

export default Button;
