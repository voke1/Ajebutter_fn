/* eslint-disable react/prop-types */
import React from "react";
import Steps from "./components/Steps";
import StepsState from "./context/stepsState";
import Shipping from "./components/BookAppointment";
import Payments from "./components/Payments";
import Confirmation from "./components/Confirmation";

const BookingScene = ({ navigation, route }) => {
  const routes = [
    {
      title: "Book Appointment",
      component: () => <Shipping route={route} navigation={navigation} />,
    },
    {
      title: "Payment",
      component: () => <Payments route={route} navigation={navigation} />,
    },
    {
      title: "Finished",
      component: () => (
        <Confirmation route={route} navigation={navigation} />
      ),
    },
  ];
  return (
    <StepsState>
      <Steps routes={routes} navigation={navigation} />
    </StepsState>
  );
};

export default BookingScene;
