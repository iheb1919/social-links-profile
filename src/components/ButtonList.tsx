import { Button } from "./Button"
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
    export const listBtn = [
        "GitHub",
        "Frontend Mentor",
        "LinkedIn",
        "Twitter",
        "Instagram"
      ]