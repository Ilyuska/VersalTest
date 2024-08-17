const MyButton = ({ children, click, ...props }) => {
  const buttonClick = (e) => {
    e.preventDefault();
    click();
  };

  return (
    <button
      {...props}
      onClick={buttonClick}
      className="h-[10%] w-[80%] bg-mainGreen text-white  rounded-xl hover:scale-110"
    >
      {children}
    </button>
  );
};

export default MyButton;
