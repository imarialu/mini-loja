import { FaStar } from 'react-icons/fa';

function Rating({rating}){
    return (
        <div className='container-rating'>
            {Array.from({ length: 5 }, (_, i) => (
                <FaStar key={i} style={{ color: i < rating ? "#ece489ff" : "#ccc" }}/>
            ))}
        </div>
    )
}

export default Rating