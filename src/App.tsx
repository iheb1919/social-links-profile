
import './App.css'
import img from './assets/images/avatar-jessica.jpeg'
function App() {

  return (
    <main className='bg-OffBlack w-[100dvw] h-[100dvh] 
    px-5 py-10
    flex justify-center items-center'>
      <Profile/>
    </main>
  )
}

export default App
export const Profile = ()=>{
  return(
    <div className='py-5 px-5  w-full   sm:w-[450px] h-fit gap-7  bg-DarkGrey rounded-lg flex flex-col justify-between items-center'>
      <AvatarImage/>
      <ProfileDetails/>
      <ButtonList/>
       
      </div>
  )
}
export const listBtn = [
  "GitHub",
  "Frontend Mentor",
  "LinkedIn",
  "Twitter",
  "Instagram"
]
export const ProfileDetails = () =>{
  return(
    <div className='flex justify-center items-center flex-col gap-2 '>
          <h1 className='text-white font-InterBold text-[1.8rem] text-center'> Jessica Randall</h1>
          <h3 className='text-Green font-InterBold text-[1.1rem] text-center'> London, United Kingdom</h3>
          <span className='text-white text-[1rem] text-center font-InterRegular' > "Front-end developer and avid reader."</span>
        </div>
  )
}
export const AvatarImage =()=>{
  return(
    <img
    className="inline-block h-[8rem] w-[8rem] rounded-full ring-0 ring-white"
    src={img}
    alt="avatar image"
  />
  )
}
export const ButtonList=() =>{

return(
  <div className='  flex gap-4 flex-col justify-center items-center w-full'>
 {
  listBtn.map((btn,i)=>{
    return <Button title={btn} key={i} />
  })
 }
  </div>
)

}
export const Button = ({title}:{title:string}) =>{
  return(
    <button className='py-3 rounded-lg font-InterBold text-[1rem] text-White w-full h-fit bg-Grey hover:bg-Greenhover:text-black transition-all duration-300 '>
          {title}
    </button>
  )
}