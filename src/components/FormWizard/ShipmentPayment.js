import { Flex } from "../Flex";
import { Input } from "../Input";
import Heading from "../Heading";
import { useState } from "react";

const ShipmentPayment = ({ costs, setCosts }) => {
  const defaultShipment = [
    {
      name: "GO-SEND",
      price: 15000,
      day: "Today",
      active: false,
    },
    {
      name: "JNE",
      day: "2 Days",
      price: 9000,
      active: false,
    },
    {
      name: "Personal Courier",
      price: 29000,
      day: "1 Day",
      active: false,
    },
  ];

  const defaultPayment = [
    {
      name: "e-Wallet",
      balance: 15000000,
      active: false,
    },
    {
      name: "Bank Transfer",
      balance: "",
      active: false,
    },
    {
      name: "Virtual Account",
      balance: "",
      active: false,
    },
  ];

  const [shipmentData, setShipmentData] = useState(defaultShipment);
  const [paymentData, setPaymentData] = useState(defaultPayment);

  const handleShipment = (name, price, day) => {
    setShipmentData(defaultShipment);
    const newShipment = defaultShipment.map((item) => {
      if (item.name === name) {
        return { ...item, active: true };
      }
      return item;
    });

    setShipmentData(newShipment);

    const newCost = costs.map((item) => {
      if (item.name === "shipment") {
        return { ...item, cost: price, day, cargo: name, visible: true };
      }
      return item;
    });

    setCosts(newCost);
  };

  const handlePayment = (name) => {
    setPaymentData(defaultPayment);
    const newPayment = defaultPayment.map((item) => {
      if (item.name === name) {
        return { ...item, active: true };
      }
      return item;
    });

    setPaymentData(newPayment);

    const newCost = costs.map((item) => {
      if (item.name === "payment") {
        return { ...item, method: name, active: true };
      }
      return item;
    });

    setCosts(newCost);
  };

  return (
    <>
      <Flex items="center">
        <Heading>Shipment</Heading>
      </Flex>
      <Flex gap="2rem">
        {shipmentData.map((item) => (
          <Input
            label={item.name}
            value={item.price}
            onClick={() => handleShipment(item.name, item.price, item.day)}
            status={item.active && "success"}
            boxInput
          />
        ))}
      </Flex>
      <Flex items="center">
        <Heading>Payment</Heading>
      </Flex>
      <Flex gap="2rem">
        {paymentData.map((item) => (
          <Input
            label={item.name}
            value={item.balance}
            onClick={() => handlePayment(item.name)}
            status={item.active && "success"}
            boxInput
          />
        ))}
      </Flex>
    </>
  );
};

export default ShipmentPayment;
