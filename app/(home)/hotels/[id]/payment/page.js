import { auth } from "@/auth";
import PaymentForm from "@/components/payment/PaymentForm";
import { getEmailByUser, getHotelById } from "@/database/queries";
import { getDayDifference } from "@/utils/data-utils";
import { redirect } from "next/navigation";

const PaymentPage = async ({
  params: { id },
  searchParams: { checkin, checkout },
}) => {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  const loggedInUser = await getEmailByUser(session?.user?.email);
  const hotelInfo = await getHotelById(id, checkin, checkout);

  const hasCheckinCheckout = checkin && checkout;
  let cost = (hotelInfo?.highRate + hotelInfo?.lowRate) / 2;
  if (hasCheckinCheckout) {
    const days = getDayDifference(checkin, checkout);
    cost = days * cost;
  }
  return (
    <section className="container">
      <div className="p-6 rounded-lg max-w-xl mx-auto my-12 mt-[100px]">
        <h2 className="font-bold text-2xl">Payment Details</h2>
        <p className="text-gray-600 text-sm">
          You have picked <b>{hotelInfo?.name}</b> and total price is
          <b> $ {cost} </b> for{" "}
          {hasCheckinCheckout && `${getDayDifference(checkin, checkout)}`}{" "}
          day(s)
        </p>
        <PaymentForm
          hotelInfo={hotelInfo}
          loggedInUser={loggedInUser}
          checkin={checkin}
          checkout={checkout}
        />
      </div>
    </section>
  );
};

export default PaymentPage;
