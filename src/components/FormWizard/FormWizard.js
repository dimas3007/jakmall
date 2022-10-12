import styled from "styled-components";
import Button from "../Button";
import Heading from "../Heading";
import Steps from "./Steps";
import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Grid, GridItem } from "../Grid";
import { Flex } from "../Flex";
import DeliveryDetails from "./DeliveryDetails";
import ShipmentPayment from "./ShipmentPayment";
import ThankYou from "./ThankYou";

const BackArrow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-weight: 500;
  margin-bottom: 2rem;
  cursor: pointer;
  z-index: 999;
  position: relative;
`;

const Item = styled.div`
  color: ${({ theme }) => theme.dark};
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ padding }) => (padding ? padding : "1rem 0")};

  span {
    color: #2d2a40;
    font-weight: 600;
  }
`;

const ItemDetail = styled.div`
  color: ${({ theme }) => theme.dark};
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  border-top: 1px solid #cccccc;
  width: fit-content;
  line-height: 1.6;
  font-weight: 500;

  span {
    color: #1bd97b;
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const Wrap = styled.div`
  width: 100%;
`;

const FormWizard = () => {
  const [currentForm, setCurrentForm] = useState(0);
  const [isDropshiper, setIsDropshipper] = useState(false);
  const [costs, setCosts] = useState([
    {
      cost: 500000,
      name: "Cost of goods",
      visible: true,
    },
    {
      cost: 0,
      name: "Dropshipping Fee",
      visible: false,
    },
    {
      cost: 0,
      name: "shipment",
      cargo: "",
      day: "",
      visible: false,
    },
    {
      cost: 0,
      name: "payment",
      method: "",
      visible: false,
      active: false,
    },
  ]);

  const handlePayment = () => {
    if (currentForm !== 2) {
      setCurrentForm(currentForm + 1);
    }
  };

  const handleBack = () => {
    if (currentForm !== 0) {
      setCurrentForm(currentForm - 1);
    }
  };

  return (
    <Grid>
      <Steps active={currentForm} />
      <GridItem grid="1/10">
        <BackArrow onClick={handleBack}>
          <AiOutlineArrowLeft />
          Back to Cart
        </BackArrow>
        {currentForm === 0 && (
          <DeliveryDetails
            isDropshiper={isDropshiper}
            costs={costs}
            setCosts={setCosts}
            setIsDropshipper={setIsDropshipper}
          />
        )}
        {currentForm === 1 && (
          <ShipmentPayment costs={costs} setCosts={setCosts} />
        )}
        {currentForm === 2 && <ThankYou costs={costs} setCosts={setCosts} />}
      </GridItem>
      <GridItem grid="10/13" p="2rem">
        <Flex
          direction="column"
          height="100%"
          width="100%"
          justify="space-between"
        >
          <Wrap>
            <Heading>Summary</Heading>
            <Item>10 Items purchased</Item>
            {costs.map((item) => {
              return (
                item.name === "shipment" &&
                item.visible && (
                  <ItemDetail>
                    Delivery estimation
                    <span>
                      {item.day} by {item.cargo}
                    </span>
                  </ItemDetail>
                )
              );
            })}
            {costs.map((item) => {
              return (
                item.name === "payment" &&
                item.active && (
                  <ItemDetail>
                    Payment Method
                    <span>{item.method}</span>
                  </ItemDetail>
                )
              );
            })}
          </Wrap>
          <Wrap>
            {costs.map((item) => {
              return (
                item.visible && (
                  <Item padding=".5rem 0">
                    <div>
                      {item.name === "shipment" && <b>{item.cargo}</b>}{" "}
                      {item.name}
                    </div>
                    <span>{item.cost}</span>
                  </Item>
                )
              );
            })}
            <Flex items="center" justify="space-between" mt=".8rem" mb="1.4rem">
              <Heading>Total</Heading>
              <Heading>
                {costs
                  .filter(({ visible }) => visible === true)
                  .reduce((sum, item) => {
                    return sum + item.cost;
                  }, 0)}
              </Heading>
            </Flex>
            {currentForm !== 2 && (
              <Button onClick={handlePayment}>
                {currentForm === 0 && "Continue to Payment"}
                {currentForm === 1 && <>Payment with {costs[3].method}</>}
              </Button>
            )}
          </Wrap>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default FormWizard;
