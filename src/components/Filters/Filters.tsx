import { FC } from 'react'
import './Filters.scss';
import { BsFillStarFill, BsPlusSquare } from 'react-icons/bs';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';

export const Filters: FC = () => {
    return (
        <div className="FilterContainer">
            <span className="Title">Filters</span>
            <p>Stars:</p>
            <div className="FilterStars">
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
            </div>
            <p>Number of people:</p>
            <div className="FilterAdults">
                <span>Adults:</span><div className="buttonsBox"><AiOutlineMinusSquare /> 2 <AiOutlinePlusSquare /></div>
            </div>
            <div className="FilterChildren">
                <span>Children:</span><div className="buttonsBox"><AiOutlineMinusSquare /> 2 <AiOutlinePlusSquare /></div>
            </div>
        </div>
    )
}
