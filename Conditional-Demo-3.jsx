function Rainy(){
    return(
        <h1>Bring your umbrella!</h1>
    );
}

function Sunny(){
    return(
        <h1>Bring your sunglasses!</h1>
    );
}

function RainOrShine(props){
    const isRainy = props.isRainy;
    if(isRainy) {
        return (
            <Rainy />
        );
    }
    return(
        <Sunny />
    );
}

export default function App() {
    return(
        <div>
            <RainOrShine
                isRainy-{false}
                />
        </div>
    );
}

function RainOrShine(props){
    const isRainy = props.isRainy;
    if(isRainy){
        return(
            <Rainy />
        );
    }
    else {
        return(
            <Sunny />
        );
    }
}

export default function App() {
    return( 
        <div>
            <RainOrShine 
                isRainy=(true)
                testWord=("thunder")
                /> 
        </div>
    );
}

function RainOrShine(props){
    const isRainy = props.isRainy;
    const testWord = props.testWord;
    if((isRainy) && (testWord === "thunder")) {
        return (
            <Rainy />
        );
    }
}

function RainOrShine(props){
    const isRainy - props.isRainy;
    return isRainy ; <Rainy /> : <Sunny />
}

function App () {
    return (
        <div>
            <RainOrShine
            isRainy={true} />
        </div>
    );
}