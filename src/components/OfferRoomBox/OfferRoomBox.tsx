import { FC, useState } from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { OfferRoomBoxProps } from '../../interfaces/interfaces';
import { HandleChangeImageFc } from '../../utils/functions';
import './OfferRoomBox.scss'

export const OfferRoomBox: FC<OfferRoomBoxProps> = ({ room }) => {
    const [currentImg, setCurrentImg] = useState<number>(0);

    const HandleChangeImage = (diretion: string) => {
        HandleChangeImageFc(diretion, room.images.length, currentImg, setCurrentImg);
    }

    return (
        <div className="OfferRoomBoxContainer">
            <div className="OfferRoomBoxContent">
                <div className="ORBphotoBox">
                    <img src={room.images[currentImg]?.url} alt={room.images[currentImg]?.alt} />
                    {
                        room.images.length > 1 && <>
                            <div className="ORBleftArrow" onClick={() => HandleChangeImage('left')}><BiLeftArrow /></div>
                            <div className="ORBrightArrow" onClick={() => HandleChangeImage('right')}><BiRightArrow /></div>
                        </>
                    }
                </div>
                <div className="ORBmainInfoBox">
                    <div className="ORBtitleAndAdress">
                        <h2>{room.name}</h2>
                        <p> Bed configuration: <b>{room.bedConfiguration}</b></p>
                        <p>{room.longDescription}</p>
                    </div>
                    <div className="ORBOcupancyBox">
                        <p>Max Adults: <b>{room.occupancy.maxAdults}</b></p>
                        <p>Max Children: <b>{room.occupancy.maxChildren}</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
