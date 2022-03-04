export type HotelData = {
    id: string,
    name: string,
    address1: string,
    address2?: string,
    starRating: string,
    images: { url?: string, alt?: string }[]
}

export type RoomData = {
    name: string,
    bedConfiguration: string,
    longDescription: string,
    images: { url: string, alt?: string }[],
    occupancy: { maxAdults: number, maxChildren: number }
}


export interface OfferBoxProps {
    data: HotelData
}
export interface OfferRoomBoxProps {
    room: RoomData
}

export interface IRoomOccupancy {
    occupancy: {
        maxAdults: number,
        maxChildren: number
    }
}
