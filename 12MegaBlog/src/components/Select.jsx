import React,{useId} from 'react'

function Select({
    options,
    label,
    className,
    ...props
},ref) {
  const id = useId()
  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className=''></label>}
      <select 
      {...props}
      id={id}
      ref={ref}
      className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>
        {options.map?.((option)=>(
          <option key={option} value={option}>
            {option}
          </option>
        ))}
        </select>
    </div>
  )
}

//here we use condition for options as if the options is not an array then it will not show the options so we do condition for that.
//we reference it with forwardRef so that we can use it in other components.
export default React.forwardRef(Select)