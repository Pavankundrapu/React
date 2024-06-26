import { useState , useCallback ,useEffect ,useRef} from 'react'


function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed,setnumberAllowed] = useState(false);
  const [characterAllowed,setCharacterAllowed] = useState(false);
  const [password,setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  //used for memorizing the function to run again
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(characterAllowed) str+="!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    for(let i = 1;i<=length;i++)
      {
        pass+=str[Math.floor(str.length*Math.random()+1)]
      }

    setPassword(pass);
  },[length,numberAllowed,characterAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
   //to select the text area
    passwordRef.current?.select();
    //to select only a part of our required input
    /*passwordRef.current?.setSelectionRange(0,999);*/
    window.navigator.clipboard.writeText(password)
  },[[password]])
  
//used for to run if change persists in the following dependencies  
useEffect(()=>{
  passwordGenerator()
},[length,numberAllowed,characterAllowed,passwordGenerator])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 ">
      <h1 className='text-center text-white text-xl my-3'>Password Generator</h1>
     <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input 
      className='outline-none w-full py-1 px-3'
      type='text'
      value={password}
      placeholder='password'
      readOnly
      ref={passwordRef}
       />
     <button
     onClick={copyPasswordToClipboard} 
     className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-green-700 '>
      Copy
    </button>

     </div>
     <div className='flex text-sm gap-x-2'>
      <div className="flex items-center gap-x-1">
        <input
         type="range"
         min={6}
         max={100}
         value={length}
         className='cursor-pointer'
         onChange={(e)=>{setLength(e.target.value)}}
        />
        <label>Length : {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange={()=>{setnumberAllowed((prev)=>!prev);
        }}/>
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={characterAllowed}
        id='characterInput'
        onChange={()=>{setCharacterAllowed((prev)=>!prev);
          //here is reverses our character from true to false and vice versacd
        }}/>
        <label htmlFor="characterInput">Characters</label>
      </div>
     </div>
    </div>
    </>
  )
}

export default App
