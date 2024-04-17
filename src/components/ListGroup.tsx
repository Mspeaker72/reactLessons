import { Fragment } from "react/jsx-runtime";

function ListGroup() {
    let Languages =["Python","Typecript","Java","SQL","Javacript"]
    // Languages =[]





  return (
    <Fragment>
    <h3>Registered Programming Languages</h3>
    {Languages.length===0 && <p>You have not Registered any programming langauges!</p>}
    <ul className="list-group">
    {Languages.map(item =><li key={item}>{item}</li>)}
    </ul>
  </Fragment>
  //using div we can encapsulate entire element as react will not allow the return of multiple elements
//   fragment is used to avid adding additional elements such as div as a container
  );
}

export default ListGroup;