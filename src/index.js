import React from 'react';
import ReactDOM from 'react-dom/client';

function add(x,y){
    return x+y ;
}
function MyComponent(){
    const link = "https://www.youtube.com/@ChandarPatidar ";
    return <a href={link}> Click Me </a>;
  /*  const name = "chandan patidar "
    const x = 2+3 ;
    return <h2> Hello { add(10,5)} </h2> ;*/
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyComponent/>);