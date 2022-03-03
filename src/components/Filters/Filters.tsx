import { FC } from 'react'
import './Filters.scss';
import { BsFillStarFill, BsStar } from 'react-icons/bs';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/reducers/filterReducer';
import { decreaseCount, increaseCount, setStars } from '../../redux/actions/filterActions';

export const Filters: FC = () => {
    const { stars, adults, children } = useSelector(selectFilter);
    const dispatch = useDispatch();

    const setStarsCartHandleClick = () => {
        dispatch(setStars(3));
    };

    const increaseHandleClick = (type: string) => {
        dispatch(increaseCount(type));
    }

    const decreaseHandleClick = (type: string) => {
        dispatch(decreaseCount(type));
    }
    return (
        <div className="FilterContainer">
            <span className="Title">Filters</span>
            <p>Stars:</p>
            <div className="FilterStars">
                {/* <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill /> */}
                <BsStar />
                <BsStar />
                <BsStar />
                <BsStar />
                <BsStar onClick={setStarsCartHandleClick} />
            </div>
            <p>Number of people:</p>
            <div className="FilterAdults">
                <span>Adults:</span>
                <div className="buttonsBox">
                    {
                        adults === 0 ?
                            <AiOutlineMinusSquare className="disabled" />
                            : <AiOutlineMinusSquare onClick={() => decreaseHandleClick('adults')} />
                    }
                    {adults}
                    <AiOutlinePlusSquare onClick={() => increaseHandleClick('adults')} />
                </div>
            </div>
            <div className="FilterChildren">
                <span>Children:</span>
                <div className="buttonsBox">
                    {
                        children === 0 ?
                            <AiOutlineMinusSquare className="disabled" />
                            : <AiOutlineMinusSquare onClick={() => decreaseHandleClick('children')} />
                    }
                    {children}
                    <AiOutlinePlusSquare onClick={() => increaseHandleClick('children')} />
                </div>
            </div>
        </div>
    )
}
