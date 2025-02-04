import { Form } from "@huaman-ui/form";
import { useState } from "react";
import ComponentCodeLayout from "./ComponentsCodeLayout";

const FormDocumentation=()=>{

    const [visible,setVisible]=useState(true);

    const JsxCode=`
    import styles from './form.module.css';

export function Form() {
  return (
    <div className="w-full max-w-xs">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 
      text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username"
       type="text" placeholder="Username" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2
       px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="password" type="password" placeholder="******************" />
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
       rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500
       hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>
  );
}

export default Form;

    `;

    const HtmlCode=`
     <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="w-full max-w-xs">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3
         text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username" type="text" placeholder="Username" />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input class="shadow appearance-none border border-red-500 rounded w-full
         py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password" type="password" placeholder="******************" />
        <p class="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
         focus:outline-none focus:shadow-outline" type="button">
          Sign In
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
         href="#">
          Forgot Password?
        </a>
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">
      &copy;2020 Acme Corp. All rights reserved.
    </p>
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



<div
  className={`mx-auto p-6 rounded-lg shadow-md flex items-center justify-center ${
    visible
      ? "w-[48rem] h-[48rem] bg-white"
      : "w-[70rem] h-[160rem] bg-black text-white overflow-x-auto"
  }`}
>
  {visible ? <Form /> : <ComponentCodeLayout JsxCode={JsxCode} HtmlCode={HtmlCode} />}
</div>



    

    
    </>);
}

export default FormDocumentation;