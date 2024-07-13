import React,{useId} from 'react'

const Input = React.forwardRef(function Input({
  label,
  type = "text",
  className = '',
  ...props
},ref)
{   
    const id = useId()
    return(
      <div className='w-full'>
        {label && <label 
        className='block mb-1'
        htmlFor = {id}>
          {label}
        </label>}
        <input 
        type={type} 
        className={`${className} px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full`}
        ref={ref}
        id={id}
        {...props}
        />
      </div>
    )
})
//in input we are using forwardRef to pass ref to input element
//here ref is passed as second argument to Input function to refer to input element
export default Input