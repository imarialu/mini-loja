import { FaStar } from 'react-icons/fa';

function Rating({rating}){
    return (
        <div className='flex gap-[0.2rem] mt-[0.6rem] mb-[1rem]'>
            {Array.from({ length: 5 }, (_, i) => (
                <FaStar key={i} style={{ color: i < rating ? "#ece489ff" : "#ccc" }}/>
            ))}
        </div>
    )
}

export default Rating