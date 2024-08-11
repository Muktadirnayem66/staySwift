import BookingCard from "./BookingCard";

const PastBooking = ({ bookings }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">🕛️ Past Bookings</h2>

      {bookings &&
        bookings.length > 0 &&
        bookings.map((booking) => (
          <div key={booking?.id} className="bg-[#F6F3E9] p-4 rounded-md">
            <BookingCard
              hotelId={booking.hotelId}
              checkin={booking.checkin}
              checkout={booking.checkout}
            />
          </div>
        ))}
    </div>
  );
};

export default PastBooking;
