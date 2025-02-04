import { Grid } from "@huaman-ui/grid";
import { useState } from "react";
import ComponentCodeLayout from "./ComponentsCodeLayout";

const GridDocumentation=()=>{

    const [visible,setVisible]=useState(true);

    const JsxCode=`
    import styles from './grid.module.css';

export function Grid() {
  return (
    <>
    <div className="flex mb-4">
      <div className="w-full bg-gray-500 h-12"></div>
    </div>
    
    
    <div className="flex mb-4">
      <div className="w-1/2 bg-gray-400 h-12"></div>
      <div className="w-1/2 bg-gray-500 h-12"></div>
    </div>
    
   
    <div className="flex mb-4">
      <div className="w-1/3 bg-gray-400 h-12"></div>
      <div className="w-1/3 bg-gray-500 h-12"></div>
      <div className="w-1/3 bg-gray-400 h-12"></div>
    </div>
    
    
    <div className="flex mb-4">
      <div className="w-1/4 bg-gray-500 h-12"></div>
      <div className="w-1/4 bg-gray-400 h-12"></div>
      <div className="w-1/4 bg-gray-500 h-12"></div>
      <div className="w-1/4 bg-gray-400 h-12"></div>
    </div>
    
    
    <div className="flex mb-4">
      <div className="w-1/5 bg-gray-500 h-12"></div>
      <div className="w-1/5 bg-gray-400 h-12"></div>
      <div className="w-1/5 bg-gray-500 h-12"></div>
      <div className="w-1/5 bg-gray-400 h-12"></div>
      <div className="w-1/5 bg-gray-500 h-12"></div>
    </div>
    
   
    <div className="flex">
      <div className="w-1/6 bg-gray-400 h-12"></div>
      <div className="w-1/6 bg-gray-500 h-12"></div>
      <div className="w-1/6 bg-gray-400 h-12"></div>
      <div className="w-1/6 bg-gray-500 h-12"></div>
      <div className="w-1/6 bg-gray-400 h-12"></div>
      <div className="w-1/6 bg-gray-500 h-12"></div>
    </div>
    </>
  );
}

export default Grid;
    `;

    const HtmlCode=`
     <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grid Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <div class="flex mb-4">
    <div class="w-full bg-gray-500 h-12"></div>
  </div>

  <div class="flex mb-4">
    <div class="w-1/2 bg-gray-400 h-12"></div>
    <div class="w-1/2 bg-gray-500 h-12"></div>
  </div>

  <div class="flex mb-4">
    <div class="w-1/3 bg-gray-400 h-12"></div>
    <div class="w-1/3 bg-gray-500 h-12"></div>
    <div class="w-1/3 bg-gray-400 h-12"></div>
  </div>

  <div class="flex mb-4">
    <div class="w-1/4 bg-gray-500 h-12"></div>
    <div class="w-1/4 bg-gray-400 h-12"></div>
    <div class="w-1/4 bg-gray-500 h-12"></div>
    <div class="w-1/4 bg-gray-400 h-12"></div>
  </div>

  <div class="flex mb-4">
    <div class="w-1/5 bg-gray-500 h-12"></div>
    <div class="w-1/5 bg-gray-400 h-12"></div>
    <div class="w-1/5 bg-gray-500 h-12"></div>
    <div class="w-1/5 bg-gray-400 h-12"></div>
    <div class="w-1/5 bg-gray-500 h-12"></div>
  </div>

  <div class="flex">
    <div class="w-1/6 bg-gray-400 h-12"></div>
    <div class="w-1/6 bg-gray-500 h-12"></div>
    <div class="w-1/6 bg-gray-400 h-12"></div>
    <div class="w-1/6 bg-gray-500 h-12"></div>
    <div class="w-1/6 bg-gray-400 h-12"></div>
    <div class="w-1/6 bg-gray-500 h-12"></div>
  </div>

  <script src="scripts.js"></script>
</body>
</html>

`;

    return(<>
    
    <h2 className="text-center font-bold capitalize text-4xl mt-[100px]">
  Documentazione Componente Button
</h2>

    <div className="flex items-center justify-center gap-4 mt-[100px] mb-4">
        <p
          className={`text-gray-700 cursor-pointer ${visible ? "font-bold" : ""}`}
          onClick={() => setVisible(true)}
        >
          Preview
        </p>
        <p
          className={`text-gray-700 cursor-pointer ${!visible ? "font-bold" : ""}`}
          onClick={() => setVisible(false)}
        >
          Code
        </p>
      </div>




{/* Riga lunga */}
<hr className="border-t border-gray-300 mb-8 w-1/2 mx-auto" />

<Grid />
<br/>
<br/>

<div
  className={`mx-auto p-6 rounded-lg shadow-md flex items-center justify-center "w-[50rem] h-[220rem] bg-black text-white overflow-x-auto"`}
>
   <ComponentCodeLayout JsxCode={JsxCode} HtmlCode={HtmlCode} />
</div>





    
    </>);
}

export default GridDocumentation;