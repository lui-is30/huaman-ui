const GetStartedDocumentation=()=>{

    let install='npm install @huaman-ui/core';
    let importComponent='import Button from "@huaman-ui/core"';

    const copyToClipboard = (text:string) => {
        navigator.clipboard.writeText(text).then(() => {
          alert("Testo copiato negli appunti!");
        }).catch((error) => {
          console.error("Errore durante la copia:", error);
        });
      };

    return(<>
        <h2 className="text-center font-bold text-4xl mt-[100px]">
            Get Started
        </h2>

        <div className="w-full max-w-4xl mx-auto mt-10 bg-black p-6 rounded-lg">
  {/* Titolo principale */}
  <h2 className="text-center font-bold text-3xl text-white mb-6">Installation</h2>

  {/* Primo rettangolo */}
  <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
    <div className="flex justify-between items-center mb-2">
      <p className="text-sm font-semibold text-gray-700">Install the library by running</p>
      <button className="text-blue-500 text-sm font-semibold" onClick={()=>copyToClipboard(install)}>Copia</button>
    </div>
    <div className="bg-white p-4 rounded-md shadow-sm border border-gray-300 h-16 flex items-center">
      <code className="text-gray-800">{install}</code>
    </div>
  </div>

  {/* Secondo rettangolo */}
  <div className="bg-gray-100 p-4 rounded-lg shadow-md">
    <div className="flex justify-between items-center mb-2">
      <p className="text-sm font-semibold text-gray-700">The import components as needed</p>
      <button className="text-blue-500 text-sm font-semibold" onClick={()=>copyToClipboard(importComponent)}>Copia</button>
    </div>
    <div className="bg-white p-4 rounded-md shadow-sm border border-gray-300 h-16 flex items-center">
      <code className="text-gray-800">{importComponent}</code>
    </div>
  </div>
</div>



    </>)

}

export default GetStartedDocumentation;