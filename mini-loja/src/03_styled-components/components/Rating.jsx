import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';

const RatingContainer = styled.div `
    display: flex;
    gap: 0.2rem;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
`

function Rating({rating}){
    return (
        <RatingContainer>
            {Array.from({ length: 5 }, (_, i) => (
                <FaStar key={i} style={{ color: i < rating ? "#ece489ff" : "#ccc" }}/>
            ))}
        </RatingContainer>
    )
}

export default Rating