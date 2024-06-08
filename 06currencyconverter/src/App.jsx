import { useState } from 'react'
import { InputBox } from './components/index'
import {useCurrencyInfo} from './hooks/useCurrencyInfo'

function App() {
    
  const [amount,setAmount] = useState(0);
  const [from,setFrom] = useState("usd");
  const [to,setTo] = useState("inr");
  const [convertedAmount,setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    setConvertedAmount(amount*currencyInfo[to])
  }

  return (
    <>
     <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-vector%2Fset-with-currency-symbols-icons-with-currency-signs-popular-currencies-world_820464-38.jpg%3Fw%3D360&tbnid=gtyFXz9dN4UOWM&vet=10CAQQxiAoAmoXChMI-I35hcXMhgMVAAAAAB0AAAAAEAc..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fset-with-currency-symbols-icons-with-currency-signs-popular-currencies-world_37883305.htm&docid=ZQYiaffCjVM8_M&w=360&h=180&itg=1&q=images%20for%20currency%20realted&ved=0CAQQxiAoAmoXChMI-I35hcXMhgMVAAAAAB0AAAAAEAc')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();  
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount = {amount}
                              currencyOptions = {options}
                              onCurrencyChange = {(currency)=>{
                                setAmount(amount)
                              }}
                              selectCurrency = {from}  
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick = {swap}   
                          >
                              swap 
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount = {convertedAmount}
                              currencyOptions = {options}
                              onCurrencyChange = {(currency)=>{setTo(currency)}}
                              selectCurrency = {to}
                              
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {form.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
    </>  
  );
}

export default App;