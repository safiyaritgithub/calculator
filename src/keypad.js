function Keypad({handleClick,calculate,handleClear}){
return(
  <div className="keypad">
 <div>
<button onClick={
  ()=>{
    handleClick("7")
  }}
 className="w-[80px] h-20 bg-gray-100 hover:bg-[#ccc] text-lg cursor-pointer border ">7</button>
<button onClick={
  ()=>{
    handleClick("8")
  }} className="w-[80px] h-20 bg-gray-100 hover:bg-[#d9d9d9] text-lg cursor-pointer  border ">8</button>
<button onClick={
  ()=>{
    handleClick("9")
  }} className="w-[80px] h-20 bg-gray-100 hover:bg-[#d9d9d9] text-lg cursor-pointer border  ">9</button>
<button onClick={
  ()=>{
    handleClick("/")
  }} className=" operator w-[80px] h-20 bg-gray-100 hover:bg-[#c7790f] text-2xl cursor-pointer border"style={{ background: 'orange',color:'#ccc' }}>/</button>
 </div>

 <div>
<button onClick={
  ()=>{
    handleClick("4")
  }} className="w-[80px] h-20 bg-gray-100 hover:bg-[#d9d9d9] text-lg cursor-pointer border">4</button>
<button onClick={
  ()=>{
    handleClick("5")
  }} className="w-[80px] h-20 bg-gray-100 hover:bg-[#d9d9d9] text-lg cursor-pointer  border ">5</button>
<button onClick={
  ()=>{
    handleClick("6")
  }} className="w-[80px] h-20 bg-gray-100 hover:bg-[#d9d9d9] text-lg cursor-pointer border  ">6</button>
<button onClick={
  ()=>{
    handleClick("*")
  }} className=" operator w-[80px] h-20 bg-gray-100 hover:bg-[#c7790f] text-2xl cursor-pointer border" style={{ background: 'orange',color:'#ccc' }}>*</button>
 </div>

 <div>
<button onClick={
  ()=>{
    handleClick("1")
  }} className="w-[80px] h-20 bg-gray-100 hover:bg-[#d9d9d9] text-lg cursor-pointer border">1</button>
<button onClick={
  ()=>{
    handleClick("2")
  }} className="w-[80px] h-20 bg-gray-100 hover:bg-[#d9d9d9] text-lg cursor-pointer  border ">2</button>
<button onClick={
  ()=>{
    handleClick("3")
  }} className="w-[80px] h-20 bg-gray-100 hover:bg-[#d9d9d9] text-lg cursor-pointer border  ">3</button>
<button onClick={
  ()=>{
    handleClick("-")
  }} className=" operator w-[80px] h-20 bg-gray-100 hover:bg-[#c7790f] text-2xl cursor-pointer border" style={{ background: 'orange',color:'#ccc' }}>-</button>
 </div>

 <div>
<button onClick={
  ()=>{
    handleClick("0")
  }} className="w-[80px] h-20 bg-gray-100 hover:bg-[#d9d9d9] text-lg cursor-pointer border">0</button>
<button  className=" fun-key w-[80px] h-20 bg-gray-100 hover:bg-[#aba9a9] text-lg cursor-pointer border" style={{ background: '#c9c8cc' }} onClick={
  ()=>{
    calculate()
  }}>=</button>
<button  className="fun-key  w-[80px] h-20 bg-gray-100 hover:bg-[#aba9a9] text-lg cursor-pointer border" style={{ background: '#c9c8cc' }} onClick={
  ()=>{
    handleClear()
  }}
>C</button>
<button onClick={
  ()=>{
    handleClick("+")
  }}
   className=" operator w-[80px] h-20 bg-gray-100 hover:bg-[#c7790f] text-2xl cursor-pointer border" style={{ background: 'orange',color:'#ccc' }}>+</button>
 </div>


</div>
)


}
export default Keypad