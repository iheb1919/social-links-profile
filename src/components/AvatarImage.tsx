import img from './assets/images/avatar-jessica.jpeg'

export const AvatarImage =()=>{
    return(
      <img
      className="inline-block h-[8rem] w-[8rem] rounded-full ring-0 ring-white"
      src={img}
      alt="avatar image"
    />
    )
  }