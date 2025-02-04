import { Header } from "@huaman-ui/header";
import { useState } from "react";
import ComponentCodeLayout from "./ComponentsCodeLayout";

const HeaderDocumentation=()=>{

    const [visible,setVisible]=useState(true);

    const JsxCode=`
    import styles from './header.module.css';
    import React, { useState } from 'react';
    
    export function Header() {
    
      const [isMenuOpen, setIsMenuOpen] = useState(false);
    
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    
    
      return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg className="fill-current h-8 w-8 mr-2" width="54" height="54"
         viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
         // <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45
         //  3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55
         // -9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15
         //  8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8
         //  0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
        <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
      </div>
        <div className="block lg:hidden">
        <button 
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400
           hover:text-white hover:border-white"
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          // <title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className={w-full $ {isMenuOpen ? 'block' : 'hidden'} lg:block flex-grow lg:flex lg:items-center
       lg:w-auto}>
        <div className="text-sm lg:flex-grow">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200
           hover:text-white mr-4">
            Docs
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200
           hover:text-white mr-4">
            Examples
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200
           hover:text-white">
            Blog
          </a>
        </div>
        <div>
          <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded
           text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4
            lg:mt-0">Download</a>
        </div>
      </div>
    </nav>
     );
    }
    
    export default Header;
    `;

    const HtmlCode=`
     <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Header Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <svg class="fill-current h-8 w-8 mr-2" width="54" height="54"
       viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45
         3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55
         -9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15
          8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.
          15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
      </svg>
      <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400
       hover:text-white hover:border-white" onclick="toggleMenu()">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
      </button>
    </div>
    <div id="menu" class="w-full hidden lg:block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200
         hover:text-white mr-4">
          Docs
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200
         hover:text-white mr-4">
          Examples
        </a>
        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200
         hover:text-white">
          Blog
        </a>
      </div>
      <div>
        <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white
         border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
         Download</a>
      </div>
    </div>
  </nav>

  <script>
    let isMenuOpen = false;

    function toggleMenu() {
      isMenuOpen = !isMenuOpen;
      const menu = document.getElementById('menu');
      if (isMenuOpen) {
        menu.classList.remove('hidden');
        menu.classList.add('block');
      } else {
        menu.classList.add('hidden');
        menu.classList.remove('block');
      }
    }
  </script>
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
      : "w-[70rem] h-[220rem] bg-black text-white overflow-x-auto"
  }`}
>
  {visible ? <Header /> : <ComponentCodeLayout JsxCode={JsxCode} HtmlCode={HtmlCode} />}
</div>



    

    
    </>);
}

export default HeaderDocumentation;