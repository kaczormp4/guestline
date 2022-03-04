import { FC } from 'react'
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/reducers/filterReducer';
import { decreaseCount, increaseCount, setStars } from '../../redux/actions/filterActions';
import ReactStars from "react-rating-stars-component";
import './Filters.scss';

export const Filters: FC = () => {
    const { stars, adults, children } = useSelector(selectFilter);
    const dispatch = useDispatch();

    const setStarsCartHandleClick = (newRating: number) => {
        dispatch(setStars(newRating));
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
            <div className="MobileStars">
                <p>Stars:</p>
                <div className="FilterStars">
                    <ReactStars
                        value={stars}
                        count={5}
                        onChange={setStarsCartHandleClick}
                        activeColor="#ffd700" />
                </div>
            </div>
            <div className="MobileNumberOfPeople">
                <p>Number of people:</p>
                <div className="FilterAdults">
                    <span>Adults:</span>
                    <div className="ButtonsBox">
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
                    <div className="ButtonsBox">
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
        </div>
    )
}
