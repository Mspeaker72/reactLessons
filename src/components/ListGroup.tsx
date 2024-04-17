import { Fragment } from "react/jsx-runtime";
import {  useState } from "react";

// {items:[],heading:string}
interface Props{
  Languages: string[];
  heading:string;
  //set that a function attribute that return nothing will be used 
  onSelectedItem:(item:string)=> void
}



function ListGroup({Languages,heading,onSelectedItem}:Props) {
 
  // handler can be replace current on click 
  // const EventHandler = (event:MouseEvent)=> console.log(event);

  //SelectedIndex: This is the state variable that holds the current value of the selected index. It's initialized with -1.
  // SetIndex: This is the function that you can use to update the value of SelectedIndex. When you call SetIndex(newValue), SelectedIndex will be updated with newValue, and the component will re-render.
  const[SelectedIndex,SetIndex]=useState(-1);
  


  // Languages =[]

  return (
    <Fragment>
      <h3>{heading}</h3>
      {Languages.length === 0 && (
        <p>You have not Registered any programming langauges!</p>
      )}
      <ul className="list-group">
        {/* becareful with mutiple functions within bracer */}
        {Languages.map((item ,index) => (
          <li className={SelectedIndex===index ?  "list-group-item active" : "list-group-item"} 
          onClick={()=>{SetIndex(index);
            onSelectedItem(item);
          }}
          // create lambda like function execute on clikc  ()=>...etc , onClick={()=>console.log("you pressed "+item)} 
          key={item}>
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
    //using div we can encapsulate entire element as react will not allow the return of multiple elements
    //   fragment is used to avid adding additional elements such as div as a container
  );
}

export default ListGroup;
