function Skeleton(){

    return(
        <>
             <div className="w-[200px] flex items-center flex-col rounded-[15px] shadow-[1px_1px_6px] shadow-(--shadow) shadow-md">
                <div className='w-[150px] h-[190px] mt-[2rem] rounded-[15px] bg-(--bg-skeleton)'></div>
                <div className='w-[150px] mt-[1rem]'> 
                    <div className='w-[150px] h-[1rem] rounded-[20px] bg-(--bg-skeleton)'></div>
                    <div className='w-[100px] h-[1rem] mt-[0.6rem] mb-[1rem] rounded-[20px] bg-(--bg-skeleton)'></div> 
                    <div className='w-[150px] h-[2rem] mt-[2.2rem] mb-[1.5rem] rounded-[15px] bg-(--bg-skeleton)'></div>
                </div> 
            </div>
        </>
    )
}

export default Skeleton