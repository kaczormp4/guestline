import { FC, useEffect, useState } from 'react';
import { BsFillStarFill, BsStar } from 'react-icons/bs';
import { BiDownArrow, BiLeftArrow, BiRightArrow, BiUpArrow } from 'react-icons/bi';
import { OfferRoomBox } from '../OfferRoomBox/OfferRoomBox';
import { useSelector } from 'react-redux';
import { selectFilter } from '../../redux/reducers/filterReducer';
import { IRoomOccupancy, OfferBoxProps, RoomData } from '../../interfaces/interfaces';
import './Offerbox.scss';
import { HandleChangeImageFc } from '../../utils/functions';

export const Offerbox: FC<OfferBoxProps> = ({ data }) => {
    const [currentImg, setCurrentImg] = useState<number>(0);
    const { adults, children } = useSelector(selectFilter);

    let starRating = [...Array(parseInt(data.starRating))].map((e, i) => <BsFillStarFill key={i} />);
    if (starRating.length < 5) {
        const emptyStars = 5 - starRating.length;
        for (let i = 0; i < emptyStars; i++) {
            starRating.push(<BsStar />)
        }
    }

    const HandleChangeImage = (diretion: string) => {
        HandleChangeImageFc(diretion, data.images.length, currentImg, setCurrentImg);
    }

    const [roomsData, setRoomsData] = useState<any>([]);

    useEffect(() => {
        fetch(`https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${data.id}`)
            .then(res => res.json())
            .then(res => {
                setRoomsData(res)
            })
    }, [])

    const [isOpen, setOpen] = useState<boolean>(true);
    const HandleCloseOpenView = () => {
        setOpen(!isOpen)
    }

    const filteredData = roomsData?.rooms?.filter(
        (room: IRoomOccupancy) => room.occupancy.maxAdults >= adults && room.occupancy.maxChildren >= children
    );

    const RoomsBoxes = filteredData?.map((room: RoomData) => <OfferRoomBox room={room} />)

    return (
        <>
            <div className="OfferboxContainer">
                <div className="OfferboxMainInfo">
                    <div className="photoBox">
                        <img src={data?.images[currentImg]?.url} alt={data.images[currentImg]?.alt} />
                        {
                            data.images.length > 1 && <>
                                <div className="leftArrow" onClick={() => HandleChangeImage('left')}><BiLeftArrow /></div>
                                <div className="rightArrow" onClick={() => HandleChangeImage('right')}><BiRightArrow /></div>
                            </>
                        }
                    </div>
                    <div className="mainInfoBox">
                        <div className="titleAndAdress">
                            <h2>{data.name}</h2>
                            <p>{data.address1}</p>
                            <p>{data.address2}</p>
                        </div>
                        <div className="starBox">
                            {starRating}
                        </div>
                    </div>
                </div>
            </div>
            {
                <div className="closedOfferRoomBoxContainer" onClick={() => HandleCloseOpenView()} >
                    {
                        RoomsBoxes?.length !== 0 && !isOpen &&
                        <div className="closedOfferFloatedInfo">
                            {RoomsBoxes?.length} offers match your filter
                        </div>
                    }
                    <div className="closedOfferRoomBoxContent">
                        {
                            RoomsBoxes?.length === 0 ? 'No matching rooms found for the filter' :
                                (isOpen ? <BiUpArrow /> : <BiDownArrow />)
                        }
                    </div>
                </div>
            }
            {isOpen && RoomsBoxes}
        </>
    )
}
