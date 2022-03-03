import { FC } from 'react'
import './Filters.scss';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/reducers/filterReducer';
import { decreaseCount, increaseCount, setStars } from '../../redux/actions/filterActions';
import ReactStars from "react-rating-stars-component";

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
            <div className="mobileStars">
                <p>Stars:</p>
                <div className="FilterStars">
                    <ReactStars
                        value={stars}
                        count={5}
                        onChange={setStarsCartHandleClick}
                        activeColor="#ffd700" />
                </div>
            </div>
            <div className="mobileNumberOfPeople">
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
        </div>
    )
}
