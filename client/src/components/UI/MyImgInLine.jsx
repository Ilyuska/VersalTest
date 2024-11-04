const MyImgInLine = (props) => {
  return (
    <a
      href={props.typee}
      target="_blank"
      className={"flex " + props.properties}
    >
      <img src={props.pict} alt="" className="mr-3 mt-1" />
      {props.content}
    </a>
  );
};

export default MyImgInLine;
