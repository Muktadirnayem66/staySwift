import Link from "next/link";
import HotelRating from "./HotelRating";
import HotelReviewNumber from "./HotelReviewNumber";


const HotelSummaryInfo = ({fromListPage, hotelInfo, checkin, checkout}) => {
   
  let params = ""
  if(checkin && checkout){
    params = `?checkin=${checkin}&checkout=${checkout}`
  }
    return (
        <>
        <div className={fromListPage ? "flex-1" : "flex-1 container"}>
          <h2 className={fromListPage ? "font-bold text-lg" : "font-bold text-2xl"}>{hotelInfo?.name}</h2>
          <p>📍 {hotelInfo?.city}</p>
          <div className="flex gap-2 items-center my-4">
            
            <HotelRating id={hotelInfo?.id}/>
            <HotelReviewNumber id={hotelInfo?.id} />
            {hotelInfo?.isBooked && <span className=" font-bold">Sold Out</span>}
          </div>
          <div>
            <span className="bg-yellow-300 p-1 rounded-md">{hotelInfo?.propertyCategory} Star Property</span>
            </div>
        </div>
  
        <div className="flex flex-col gap-2 items-end justify-center">
          <h2 className="text-2xl font-bold text-right">${Math.floor((hotelInfo?.highRate + hotelInfo?.lowRate)/2)} night</h2>
          <p className=" text-right">Per Night for 1 Rooms</p>
          {
            fromListPage ? (<Link href={`/hotels/${hotelInfo?.id}${params}`} className="btn-primary ">Details</Link>) : 
            (<Link href={hotelInfo?.isBooked ? "#" : `/hotels/${hotelInfo?.id}/payment${params}`} className={hotelInfo?.isBooked ? "btn-disabled":"btn-primary"}>Book</Link>)
          }
        </div>
      </>
    );
};

export default HotelSummaryInfo;