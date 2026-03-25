import './App.css'
import { useState } from "react";
import "./App.css";

function App() {

  return (
    <div className="app">
      <h1>Flash Cards</h1>

      <FlashCard
        question="Who?"
        answer="Remy"
      />

      <FlashCard
        question="What?"
        answer="Coding"
      />

      <FlashCard
        question="Where?"
        answer="Everywhere"
      />

    </div>
  );
}

function FlashCard(props) {
  const [open, setOpen] = useState(false);

  return (
    <div 
    className="card"
    onClick={() => setOpen (!open)}
    >
      <h2>{props.question}</h2>

      {open && <p>{props.answer}</p>}
      
    </div>
  );

}

//   const [isVisible, setIsVisible] = useState(false);

//   return (
//     <div
//       className="card"
//       onClick={() => setIsVisible(!isVisible)}
//     >
//       <h2>{props.question}</h2>
//       <p hidden={!isVisible}>{props.answer}</p>
//     </div>
//   );
// }

export default App


//  let welcomeText = "Sup";`

{/* <p>{welcomeText}</p> */}