function Greeting() {
    return (
      <h1> Hello! I am a standard function. </h1>
  
    );
  }
  
  const ArrowGreeting = () => (
    <h1> Hello! I am an arrow function. </h1>
  );
  
  function ShinyButton() {
  
    const handleClick = () => {
      alert ("You Clicked Me!");
    }
  
    return (
      <button onClick = {handleClick}>
        Click this Button! 
        </button>
    );
  }
  
  export default ShinyButton;

  function GreetFriend(props) {
    return (
        <h1> Hello, {props.name}!</h1>
    );
  }

  function Greeting() {
    return (
        <>
         <GreetFriend 
            name="Willow"
         />
        </>
    );
  }

  export default Greeting;

  function GreetFriend(name) {
    return(
        <h1> Hello, {name}!</h1>
    );
  }

  function Greeting(){
    return(
        <>
            <GreetFriend
                name="Willow" />
        </>
    );
  }

  export default Greeting; 

