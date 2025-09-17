import { FaStar } from 'react-icons/fa';
import style from './Rating.module.css'

function Rating({rating}){
    return (
        <div className={style.ratingContainer}>
            {Array.from({ length: 5 }, (_, i) => (
                <FaStar key={i} style={{ color: i < rating ? "#ece489ff" : "#ccc" }}/>
            ))}
        </div>
    )
}

export default Rating