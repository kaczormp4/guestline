import { FC, useEffect, useState } from 'react';
import { BsFillStarFill, BsStar } from 'react-icons/bs';
import './Offerbox.scss';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { OfferRoomBox } from '../OfferRoomBox/OfferRoomBox';

interface OfferBoxProps {
    data: {
        id: string,
        name: string,
        address1: string,
        address2?: string,
        starRating: string,
        images: { url: string, alt?: string }[]
    }
}
export const Offerbox: FC<OfferBoxProps> = ({ data }) => {
    const [currentImg, setCurrentImg] = useState<number>(0)

    let starRating = [...Array(parseInt(data.starRating))].map((e, i) => <BsFillStarFill key={i} />);
    if (starRating.length < 5) {
        const emptyStars = 5 - starRating.length;
        for (let i = 0; i < emptyStars; i++) {
            starRating.push(<BsStar />)
        }
    }

    const HandleChangeImage = (diretion: string) => {
        if (data.images.length > 1) {
            if (diretion === 'left') {
                if (currentImg === 0) {
                    setCurrentImg(data.images.length - 1)
                }
                else {
                    setCurrentImg(currentImg - 1)
                }
            } else if (diretion === 'right') {
                if (currentImg === data.images.length - 1) {
                    setCurrentImg(0)
                }
                else {
                    setCurrentImg(currentImg + 1)
                }
            }
        }
    }
    const [roomsData, setRoomsData] = useState<any>([]);

    useEffect(() => {
        fetch(`https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${data.id}`)
            .then(res => res.json())
            .then(res => {
                setRoomsData(res)
            })
    }, [])
    console.log('roomsData', roomsData)

    return (
        <>
            <div className="OfferboxContainer">
                <div className="OfferboxMainInfo">
                    <div className="photoBox">
                        <img src={data.images[currentImg].url} alt={data.images[currentImg].alt} />
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
                roomsData?.rooms?.map((room: any) => <OfferRoomBox room={room} />)
            }
        </>
    )
}
