import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import Rules from "./components/Rules";
import Contractid from "./components/Contractid";
import reactDom from "react-dom";

// import Contract from './components/contract';

// const firstComponent = () => {
//   return (
//     <div className="div3">
//       <h1>hii</h1>

//        </div>
//   );
// }

// const secondComponent = () => {
//   return(
//     <div className="div1">

//     <Contractid/>
//      </div>
//   );
// }
// const thirdComponent = () => {
//   return (<div className="div4">
//     <Rules2/>

//     </div>
//   );
// }
// const fourcomponent = () => {
//   return <div>Four Component</div>;
// };

// const finalComponent = () => {
//   return <div>Final Component</div>;
// };
function App() {
  const compo = useSelector((state) => state.component);
  const dispatch = useDispatch();

  const [steps, setSteps] = useState();

  const [activeStep, setActiveStep] = useState(compo);

  // const handleNext = () => {

  //   if (steps[steps.length - 1].key === activeStep.key) {
  //     alert("You have completed all steps.");
  //     return;
  //   }

  //   const index = steps.findIndex((x) => x.key === activeStep.key);
  //   setSteps((prevStep) =>
  //     prevStep.map((x) => {
  //       if (x.key === activeStep.key) x.isDone = true;
  //       return x;
  //     })
  //   );
  //   setActiveStep(steps[index + 1]);
  // };

  // const handleBack = () => {
  //   const index = steps.findIndex((x) => x.key === activeStep.key);
  //   if (index === 0) return;

  //   setSteps((prevStep) =>
  //     prevStep.map((x) => {
  //       if (x.key === activeStep.key) x.isDone = false;
  //       return x;
  //     })
  //   );
  //   setActiveStep(steps[index - 1]);
  // };

  return (
    <div className="App">
      <div className="box" style={{ backgroundColor: "white" }}>
        <div className="steps">
          <ul className="nav">

            <li className={compo.component===1||compo.component===2||compo.component===3||compo.component===4||compo.component===5?"stepbg-active":"stepbg"}>
              <div> 
                Step 1
                <br />
                <span>first</span>
              </div>
            </li>{" "}


            <li className={compo.component===2||compo.component===3||compo.component===4||compo.component===5?"stepbg-active":"stepbg"}style={{ }}>
              <div>
                Step 2
                <br />
                <span>Contract Id</span>
              </div>
            </li>{" "}

            <li className={compo.component===3||compo.component===4||compo.component===5?"stepbg-active":"stepbg"}>
              <div>
                Step 3
                <br />
                <span>Rule</span>
              </div>
            </li>{" "}
            <li className={compo.component===4||compo.component===5?"stepbg-active":"stepbg"}>
              <div>
                Step 4
                <br />
                <span>four</span>
              </div>
            </li>{" "}
            <li className={compo.component===5?"stepbg-active":"stepbg"}>
              <div>
                Step 5
                <br />
                <span>fifth</span>
              </div>
            </li>
          </ul>
        </div>
      
         
       
        <div className="step-component">
          {compo.component === 1 && (
            <div>
              <h1>1 component</h1>
              <button
                onClick={() =>
                  dispatch({
                    type: "next_component",
                    payload: {
                      key: "secondStep",
                      label: "second step ",
                      isDone: true,
                      component: 2,
                    },
                  })
                }
              >
                next
              </button>
            </div>
          )}
          {compo.component === 2 && (
            <div>
              <Contractid />

            </div>
          )}
          {compo.component === 3 && (
            <div>
              <Rules/>

            </div>
          )}
          {compo.component === 4 && (
            <div>
              <h1>4 component</h1>
              
              <button
                onClick={() =>
                  dispatch({
                    type: "next_component",
                    payload: {
                      key: "thirdStep",
                      label: "thid step ",
                      isDone: true,
                      component: 3,
                    },
                  })
                }
              >
                Back
              </button>

              <button
                onClick={() =>
                  dispatch({
                    type: "next_component",
                    payload: {
                      key: "fifthStep",
                      label: "fifth step ",
                      isDone: true,
                      component: 5,
                    },
                  })
                }
              >
                next
              </button>
            </div>
          )}
          {compo.component === 5 && (
            <div>
              <h1>5 component</h1>
              <button
                onClick={() =>
                  dispatch({
                    type: "next_component",
                    payload: {
                      key: "thirdStep",
                      label: "thid step ",
                      isDone: true,
                      component: 3,
                    },
                  })
                }
              >
                Back
              </button>
              <button
                onClick={() =>alert("completed")
                }
              >
                next
              </button>
            </div>
          )}
        </div>
        {/* <div className="btn-component">
    
          <input
            type="button"
            value="Back"
            onClick={handleBack}
            disabled={steps[0].key === activeStep.key}
          />
          <input
            type="button"
            value={
              steps[steps.length - 1].key !== activeStep.key ? "Next" : "Submit"
            }
            onClick={handleNext}
          /> 
          </div>*/}
      </div>
      
    </div>
  );
}

export default App;
