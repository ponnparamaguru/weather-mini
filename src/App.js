import { useState } from "react";

const App = () => {
  const [val, setVal] = useState("Summer","Winter","Rainy")
  return (
   <div className={`${val.charAt(0).toUpperCase() + val.slice(1)} bg`}>
      <div className="py-10">
      <input  value={val} onChange = {(e)=>setVal(e.target.value)} 
      class="placeholder:text-slate-400 block bg-sky-300 w-full rounded-3xl py-2 pl-6 pr-3 capitalize
      shadow-lg focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm md:bg-center bg-transparent" 
      placeholder="Search for Season..." type="text" name="search"/>
      </div>
    </div>
  );
}

export default App;