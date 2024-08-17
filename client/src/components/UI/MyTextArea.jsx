const MyTextArea = (props) => {
  return (
    <textarea
      className="w-11/12 h-64 border-2 rounded-xl border-white p-3 bg-transparent text-white  mx-[4%] my-3 text-xl"
      {...props}
    />
  );
};

export default MyTextArea;
