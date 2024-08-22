const MyImgInLine = (props) => {
  return (
    <a href={props.typee} className={"flex " + props.properties}>
      <img src={props.pict} alt="" className="mr-3 mt-1" />
      {props.content}
    </a>
  );
};

export default MyImgInLine;
