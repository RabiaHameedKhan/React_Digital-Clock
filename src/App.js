import React, { useState } from "react";

//...........Hooks Basic...............

// const App = ()=>{

//     // const [state]= useState;
//     const [count, setCount]= useState(0);

//     const IncNum=()=> {
//         setCount(count + 1);
//     };
   
    



//     return(

//         <>
//         <h1>You have clicked {count} times.</h1>
//         <div className="container">
//         <button onClick={IncNum}>Click Here!</button>
//         </div>

//         </>
//     );
// };


//............Digital Clock....................

const App= () => {

    let time= new Date().toLocaleTimeString();

    const [currtime, setcurrtime]= useState(time);

    const Updatetime= ()=>{
        time= new Date().toLocaleTimeString();
        setcurrtime(time);
    }
   
    setInterval(Updatetime, 1000);

    return(
        <>
        <h1>
            DIGITAL CLOCK
        </h1>
        <div className="container">
        <h1>{currtime}</h1>
        </div>
        </>
    )

}

export default App;