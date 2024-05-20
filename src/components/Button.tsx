export const Button = ({title}:{title:string}) =>{
    return(
      <button className='py-3 rounded-lg font-InterBold text-[1rem] text-White w-full h-fit bg-Grey 
      hover:bg-Green hover:text-black transition-all duration-300 '>
            {title}
      </button>
    )
  }