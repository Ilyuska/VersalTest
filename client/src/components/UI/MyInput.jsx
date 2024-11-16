const MyInput = ({ className, ...props }) => {
  let resClassName = `border-2 rounded-xl border-white p-3 bg-transparent  w-11/12 mx-[4%] text-xl cursor-pointer  ${
    className || ""
  }`;
  return <input className={resClassName} {...props} />;
};

export default MyInput;
