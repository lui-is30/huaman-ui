type ComponentCodeLayoutProps={
    JsxCode:string;
    HtmlCode:string;
}

const ComponentCodeLayout=({JsxCode,HtmlCode}:ComponentCodeLayoutProps)=>{

    const copyToClipboard = (text:string) => {
        navigator.clipboard.writeText(text).then(() => {
          alert("Testo copiato negli appunti!");
        }).catch((error) => {
          console.error("Errore durante la copia:", error);
        });
      };


    return(<div>
        
        <div className="w-full bg-blue-900 text-white p-4 flex justify-between items-center">
  <h3 className="text-xl font-bold">JSX Code</h3>
  
  {/* Posizionamento "Copia" a destra */}
  <span className="text-sm cursor-pointer "  onClick={() => copyToClipboard(JsxCode)}>
    Copia
  </span>
</div>

<pre className="bg-gray-800 text-white p-4 mt-4 rounded">{JsxCode}</pre>

<div className="w-full bg-blue-900 text-white p-4 mt-4 flex justify-between items-center">
  <h3 className="text-xl font-bold">HTML Code</h3>
  
  {/* Posizionamento "Copia" a destra */}
  <span className="text-sm cursor-pointer "  onClick={() => copyToClipboard(HtmlCode)}>
    Copia
  </span>
</div>

<pre className="bg-gray-800 text-white p-4 mt-4 rounded">{HtmlCode}</pre>


      </div>
    );
}

export default ComponentCodeLayout;




  
  