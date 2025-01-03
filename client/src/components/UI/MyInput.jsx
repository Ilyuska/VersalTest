const MyInput = ({ className, ...props }) => {
  let resClassName = `border-2 rounded-xl p-3 bg-transparent text-xl cursor-pointer  ${
    className || ""
  }`;
  return <input className={resClassName} {...props} />;
};

export default MyInput;
