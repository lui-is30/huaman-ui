import { Footer } from "@huaman-ui";
import { useState } from "react";
import ComponentCodeLayout from "./ComponentsCodeLayout";

const FooterDocumentation=()=>{

    const [visible,setVisible]=useState(true);

    const JsxCode=`
    <footer className="bg-gray-900 text-white py-4">
    <div className="container mx-auto px-4 flex justify-between">
      <div>
        <h4 className="font-bold text-sm mb-2">Home</h4>
        <nav className="space-y-1">
          <a href="#" className="text-xs text-gray-400 hover:text-white block">Chi Siamo</a>
          <a href="#" className="text-xs text-gray-400 hover:text-white block">Ultime Novità</a>
        </nav>
      </div>
      <div>
        <h4 className="font-bold text-sm mb-2">Servizi</h4>
        <nav className="space-y-1">
          <a href="#" className="text-xs text-gray-400 hover:text-white block">Sviluppo Web</a>
          <a href="#" className="text-xs text-gray-400 hover:text-white block">Consulenza IT</a>
        </nav>
      </div>
      <div>
        <h4 className="font-bold text-sm mb-2">Contatti</h4>
        <nav className="space-y-1">
          <a href="#" className="text-xs text-gray-400 hover:text-white block">Supporto</a>
          <a href="#" className="text-xs text-gray-400 hover:text-white block">Invia Messaggio</a>
        </nav>
      </div>
    </div>
    <div className="text-center mt-4">
      <p className="text-xs text-gray-400">© 2025 Tutti i diritti riservati</p>
    </div>
  </footer>`;

    const HtmlCode=`
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Footer Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <footer class="bg-gray-900 text-white py-4">
    <div class="container mx-auto px-4 flex justify-between">
      <div>
        <h4 class="font-bold text-sm mb-2">Home</h4>
        <nav class="space-y-1">
          <a href="#" class="text-xs text-gray-400 hover:text-white block">Chi Siamo</a>
          <a href="#" class="text-xs text-gray-400 hover:text-white block">Ultime Novità</a>
        </nav>
      </div>
      <div>
        <h4 class="font-bold text-sm mb-2">Servizi</h4>
        <nav class="space-y-1">
          <a href="#" class="text-xs text-gray-400 hover:text-white block">Sviluppo Web</a>
          <a href="#" class="text-xs text-gray-400 hover:text-white block">Consulenza IT</a>
        </nav>
      </div>
      <div>
        <h4 class="font-bold text-sm mb-2">Contatti</h4>
        <nav class="space-y-1">
          <a href="#" class="text-xs text-gray-400 hover:text-white block">Supporto</a>
          <a href="#" class="text-xs text-gray-400 hover:text-white block">Invia Messaggio</a>
        </nav>
      </div>
    </div>
    <div class="text-center mt-4">
      <p class="text-xs text-gray-400">© 2025 Tutti i diritti riservati</p>
    </div>
  </footer>
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
    visible ? "w-[48rem] h-[48rem] bg-white" : "w-[80rem] h-[120rem] bg-black text-white"
  }`}
>
  {visible ? <Footer /> : <ComponentCodeLayout JsxCode={JsxCode} HtmlCode={HtmlCode} />}
</div>


    

    
    </>);
}

export default FooterDocumentation;