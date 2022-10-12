import React from "react";
import styled from "styled-components";
import { Flex } from "../Flex";
import Heading from "../Heading";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Wrapeer = styled.div``;

const ThankYou = ({ costs, setCosts }) => {
  const randomAlphaNumeric = (length, chars) => {
    var result = "";
    for (var i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  };

  const randomID = randomAlphaNumeric(
    5,
    "23456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ"
  );

  return (
    <Flex items="center" justify="center" height="100%">
      <Flex direction="column" gap="2rem" width="max-content" flex="none">
        <Heading>Thank You</Heading>
        <Wrapeer>
          <h4>Order ID : {randomID}</h4>
          <p>
            Your order will be delivered {costs[2].day} with {costs[2].cargo}
          </p>
        </Wrapeer>
        <Flex items="center">
          <AiOutlineArrowLeft />
          Go to homepage
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ThankYou;
