import React from "react";

import Detail from "../../../../components/Details";

const BookingDetails = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <Detail
        status={"Pending"}
        customer="Alice Cooper"
        talent="Brownish Time"
        date="10/10/2010"
        time="09:20 AM"
        address="Address - 15, aasherifa road, eleyele, Ile-Ife"
        serviceType="Instant Booking"
        bookingType="Instant Booking"
        amount="100 000"
        name="Bookings Details"
      />
    </div>
  );
};

export default BookingDetails;
