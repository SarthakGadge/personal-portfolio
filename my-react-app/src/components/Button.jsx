const Button = ({text, onClick}) => {
  return (
    <button className="px-5 hover:bg-white hover:text-black bg-black py-1 text-white hover:shadow-lg rounded-full"
            onClick={onClick}>
        {text}
    </button>
        
  )
}


export default Button
