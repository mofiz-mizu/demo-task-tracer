import React from "react";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  // const onClick =({title}) => {
  //     console.log('click')
  // }
  return (
    <div className="header">
      
      <h1>{title}</h1>
      
      {/* <button className='btn'>Add</button> */}
      {/* <Button color='green' text='Add'  onClick={onAdd}  /> */}
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracers",
};

export default Header;
