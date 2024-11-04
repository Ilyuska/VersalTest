const MyButton = ({ children, click, ...props }) => {
  const buttonClick = (e) => {
    e.preventDefault();
    click();
  };

  return (
    <button
      {...props}
      onClick={buttonClick}
      className="w-11/12 bg-mainGreen text-white  rounded-xl hover:scale-95"
    >
      {children}
    </button>
  );
};

export default MyButton;
