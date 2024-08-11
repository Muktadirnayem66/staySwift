import { bookingModel } from "@/models/booking-model";
import { hotelModel } from "@/models/hotel-model";
import { RatingModel } from "@/models/rating-model";
import { ReviewModel } from "@/models/review-model";
import { userModel } from "@/models/user-model";
import { isDateInBetween, replaceMongoIdArray, replaceMongoIdObject } from "@/utils/data-utils";



export async function getAllHotels(destination, checkin, checkout, category){
    const regex = new RegExp(destination, "i")

    const hotelsByDestination = await hotelModel.find({city: {$regex: regex}})
    .select(["thumbNailUrl", "name", "highRate", "lowRate", "city", "propertyCategory"]).lean()

    let allHotels = hotelsByDestination

    if(category){
        const categoriesMatch = category.split("|")
       allHotels =  allHotels.filter((hotel)=>{
            return categoriesMatch.includes(hotel.propertyCategory.toString())
        })
    }
    if(checkin && checkout){
        allHotels = await Promise.all(
            allHotels.map(async(hotel)=>{
                const found = await findBooking(hotel._id, checkin, checkout)   
                                
                if(found){
                    hotel["isBooked"] = true
                }else{
                    hotel["isBooked"] = false
                }
                return hotel
            })
        )
    }

    return replaceMongoIdArray(allHotels)
}


async function findBooking(hotelId, checkin, checkout){
    const matches = await bookingModel.find({hotelId:hotelId.toString()}).lean()
    const found = matches.find((match)=>{
        return (
            isDateInBetween(checkin, match.checkin, match.checkout) || 
            isDateInBetween(checkout, match.checkin, match.checkout)
        )
    })
    return found
}


export async function getHotelById(hotelId, checkin, checkout){
    const hotel = await hotelModel.findById(hotelId).lean()
    if(checkin && checkout){
        const found = await findBooking(hotel._id, checkin, checkout)
        if(found){
            hotel["isBooked"] = true
        }else{
            hotel["isBooked"] = false
        }           
    }
    return replaceMongoIdObject(hotel)
}


export async function getAllRatingForHotel(hotelId){
    const ratings = await RatingModel.find({hotelId:hotelId}).lean()

    return replaceMongoIdArray(ratings)
}


export async function getAllReviewForHotel(hotelId){
    const reviews = await ReviewModel.find({hotelId:hotelId}).lean()
    return replaceMongoIdArray(reviews)
}


export async function getEmailByUser(email){
    const user = await userModel.find({email: email}).lean()

    return replaceMongoIdObject(user[0])

}


export async function getBookingsByUser(userId){
    const bookings = await bookingModel.find({userId: userId}).lean()
    return replaceMongoIdArray(bookings)
}