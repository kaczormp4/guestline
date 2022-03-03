import { FC } from 'react'
import './OfferRoomBox.scss'

interface OfferRoomBoxProps {
    room: {
        name: string,
        bedConfiguration: string,
        longDescription: string,
        images: { url: string, alt?: string }[]
    }
}

export const OfferRoomBox: FC<OfferRoomBoxProps> = ({ room }) => {

    return (
        <div className="OfferRoomBoxContainer">
            <div className="OfferRoomBoxContent">
                <div className="ORBphotoBox">
                    <img src={room.images[0]?.url} alt={room.images[0]?.alt} />
                </div>
                <div className="ORBmainInfoBox">
                    <div className="ORBtitleAndAdress">
                        <h2>{room.name}</h2>
                        <p> Bed configuration: <b>{room.bedConfiguration}</b></p>
                        <p>{room.longDescription}</p>
                    </div>
                    <div className="ORBstarBox">
                        {'starRating'}
                    </div>
                </div>
            </div>
        </div>
    )
}
