 
export default function LiveBtn(props) {
  return (
      <div className="flex items-center bg-Red rounded-md  h-fit font-bold cursor-pointer text-white text-3xl italic">
        <img src={props.live} alt='live'/>
        <p className="px-7">{props.title}</p>
    </div>
  )
}
