import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";
function App(){

  // let Languages = ["Python", "Typecript", "Java", "SQL", "Javacript"];

  // const handleSelectedItem = (item:string)=> {console.log(item)}

  // return <ListGroup Languages={Languages} 
  // heading="Registered Programming Languages" 
  // onSelectedItem={handleSelectedItem}>
  // </ListGroup>

  return <div><Button text="confirm" color="success" onClick={()=> console.log("pressed")}></Button></div>
}

export default App;