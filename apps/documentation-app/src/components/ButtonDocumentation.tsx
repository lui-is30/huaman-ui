import { Button } from "@huaman-ui/button";
import { useState } from "react";
import ComponentCodeLayout from "./ComponentsCodeLayout";

const ButtonDocumentation=()=>{

    const [visible,setVisible]=useState(true);

    const JsxCode=`
    import styles from './button.module.css'; 
    export function Button() { 
    return ( 
    <button className="bg-blue-500 hover:bg-blue-700 text-white 
    font-bold py-2 px-4 rounded">Button</button> 
    );
    } 
    export default Button;`;

    const HtmlCode=`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,
     initial-scale=1.0">
    <title>Button Example</title>
    <link rel="stylesheet" href="button.module.css">
    </head>
    <body>
    <button class="bg-blue-500 hover:bg-blue-700 text-white
     font-bold py-2 px-4 rounded">
        Button
    </button>
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



<div
  className={`mx-auto p-6 rounded-lg shadow-md flex items-center justify-center ${
    visible ? "w-[48rem] h-[48rem] bg-white" : "w-[60rem] h-[60rem] bg-black text-white"
  }`}
>
  {visible ? <Button /> : <ComponentCodeLayout JsxCode={JsxCode} HtmlCode={HtmlCode} />}
</div>


    

    
    </>);
}

export default ButtonDocumentation;