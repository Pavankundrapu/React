import {useEffect,useState} from 'react'
//used to get api data from the supplier and updating them to the data and refetching the data on change of currency using useffect.
//.then() sees than the operation gets operated after the preceding function extecution.

function useCurrencyInfo(currency){
  const [data,setdata] = useState({})
  useEffect(() => {
   fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
   .then((res)=>res.json())
   //generally api data is received in string format and we convert it into json format.
   .then((res)=>setdata(res[currency]))
    console.log(data);
  },[currency])

  return data;
  
}

export default useCurrencyInfo;