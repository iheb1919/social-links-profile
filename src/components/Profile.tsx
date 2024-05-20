import { AvatarImage } from "./AvatarImage"
import { ButtonList } from "./ButtonList"
import { ProfileDetails } from "./ProfileDetails"

export const Profile = ()=>{
    return(
      <div className='py-5 px-5  w-full   sm:w-[450px] h-fit gap-7  bg-DarkGrey rounded-lg flex flex-col justify-between items-center'>
        <AvatarImage/>
        <ProfileDetails/>
        <ButtonList/>
         
        </div>
    )
  }