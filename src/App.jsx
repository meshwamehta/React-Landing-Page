import headerImg from './assets/react-core-concepts.png';
import { Coreconcept } from './data';
var AdjectiveArray=["Fundamental", "Core", "Crucial"];
var Element=[];
function getRandomInt(max){
  return Math.floor(Math.random()*(max+1));
}


function Header(){
  return (
    <header>
      <img src={headerImg} alt="Stylized atom" />
      <h1>React Essentials...</h1>
      <p>
        {AdjectiveArray[getRandomInt(2)]} React concepts you will need for almost any app you are
        going to build!
      </p>
   </header>
   
  );

}

  

function Sections(props){
 return(
    <li>
    <img src={props.image} alt={props.title} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </li>
  
  
  );
}
 
 
function App() {
  return (
    <div>
      <Header />
      <section id='core-concepts'>
        <h2>Core Concepts</h2>
        <ul>         
          <Sections 
          image={Coreconcept[0].image}
          title={Coreconcept[0].title}
          description={Coreconcept[0].description}/>
          <Sections {...Coreconcept[1]}/>
          <Sections {...Coreconcept[2]} />
          <Sections {...Coreconcept[3]} />
        </ul>
      </section>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
