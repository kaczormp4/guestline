import { FC, useState } from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import './OfferRoomBox.scss'

interface OfferRoomBoxProps {
    room: {
        name: string,
        bedConfiguration: string,
        longDescription: string,
        images: { url: string, alt?: string }[],
        occupancy: { maxAdults: number, maxChildren: number }
    }
}

export const OfferRoomBox: FC<OfferRoomBoxProps> = ({ room }) => {
    const [currentImg, setCurrentImg] = useState<number>(0);

    const HandleChangeImage = (diretion: string) => {
        if (room.images.length > 1) {
            if (diretion === 'left') {
                if (currentImg === 0) {
                    setCurrentImg(room.images.length - 1)
                }
                else {
                    setCurrentImg(currentImg - 1)
                }
            } else if (diretion === 'right') {
                if (currentImg === room.images.length - 1) {
                    setCurrentImg(0)
                }
                else {
                    setCurrentImg(currentImg + 1)
                }
            }
        }
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
