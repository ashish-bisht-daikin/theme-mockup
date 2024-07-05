
const CommonButton = ({text,className="", bgColor="gray", color="white", onClick=()=>{}}) => {
  const props = {
    onClick,
    style: { 
      backgroundColor: bgColor, 
      color
    },
    className
  }
  return (
    <button {...props}>{text}</button>
  )
}

export default CommonButton