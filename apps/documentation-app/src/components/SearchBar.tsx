import { Searchbar } from "@huaman-ui/searchbar";
import { useState } from "react";
import ComponentCodeLayout from "./ComponentsCodeLayout";

const SearchBarDocumentation=()=>{

    const [visible,setVisible]=useState(true);

    const JsxCode=`
    import styles from './searchbar.module.css';

export function Searchbar() {
  return (
    <div className="flex rounded-md border-2 border-blue-500 overflow-hidden
     max-w-md mx-auto font-[sans-serif]">
      <input type="email" placeholder="Search Something..."
        className="w-full outline-none bg-white text-gray-600 text-sm px-4
         py-3" />
      <button type='button' className="flex items-center justify-center
       bg-[#007bff] px-5">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904"
        //  width="16px" className="fill-white">
          <path
            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142
             18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423
              0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049
               51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498
                0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0
                 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693
                  147.38 15 117.689 15 81.193z">
          </path>
        </svg>
      </button>
    </div>
  );
}

export default Searchbar;
    `;

    const HtmlCode=`
     <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Searchbar Example</title>
  <!-- Include the Tailwind CSS via CDN for styling -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>

  <div class="flex rounded-md border-2 border-blue-500 overflow-hidden
   max-w-md mx-auto font-[sans-serif]">
    <input type="email" placeholder="Search Something..." class="w-full
     outline-none bg-white text-gray-600 text-sm px-4 py-3" />
    <button type="button" class="flex items-center justify-center bg-[#007bff]
     px-5">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904"
      //  width="16px" class="fill-white">
        <path
          d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142
           18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423
            0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049
             51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498
              7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497
               0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693
                147.38 15 117.689 15 81.193z">
        </path>
      </svg>
    </button>
  </div>

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
      : "w-[70rem] h-[120rem] bg-black text-white overflow-x-auto"
  }`}
>
  {visible ? <Searchbar /> : <ComponentCodeLayout JsxCode={JsxCode} HtmlCode={HtmlCode} />}
</div>



    

    
    </>);
}

export default SearchBarDocumentation;