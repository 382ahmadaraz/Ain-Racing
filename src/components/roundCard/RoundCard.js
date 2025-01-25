
export default function RoundCard(props) {
  return (
    <div className="border-r border-Red h-[65%] text-center pr-3 pl-2 italic">
      <p className="text-4xl font-bold mt-9">Round 1</p>
      <img src={props.track} alt='roundImg' className="my-5 h-[140px]"/>
      <p className="text-2xl font-bold">UEA RMC</p>
      <p className="text-2xl font-bold">2024-25 Rx</p>
    </div>
  )
}
