import React from "react";

const Formochka = (props) => {
  return (
    <div className="flex flex-col w-full rounded-lg  bg-slate-300 pb-3">
      <img src={props.pict} alt={props.post} className="rounded-t-lg " />
      <div className="text-lg font-semibold px-4 md:px-1 lg:px-3">
        {props.name}
      </div>
      <div className="px-4 md:px-1 lg:px-3">{props.post}</div>
      <a className="px-4 md:px-1 lg:px-3" href={`tel:${props.phone}`}>
        {props.phone}
      </a>
    </div>
  );
};

export default Formochka;
