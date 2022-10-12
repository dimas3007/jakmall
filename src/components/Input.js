import styled from "styled-components";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  &:focus-within label {
    border: none;
    transform: translate(0, 12px) scale(0.8);
    color: ${({ theme }) => theme.dark};
    color: ${({ theme, status }) => status === "success" && theme.success};
    color: ${({ theme, status }) => status === "error" && theme.primary};
  }

  span {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    font-size: 0.8rem;
  }

  .filled {
    transform: translate(0, 12px) scale(0.8);
  }
`;

const Icon = styled.div`
  position: absolute;
  right: 1.6rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme, status }) => status === "success" && theme.success};
  color: ${({ theme, status }) => status === "error" && theme.primary};
`;

const Field = styled.input`
  width: 100%;
  height: 64px;
  border: none;
  padding: 24px 16px 4px 16px;
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  outline: none;
  box-shadow: none;
  transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.gray};
  border: ${({ theme, status }) =>
    status === "success" && `1px solid ${theme.success}`};
  border: ${({ theme, status }) =>
    status === "error" && `1px solid ${theme.primary}`};

  &:focus {
    box-shadow: 0 0 0 2px #79b1ff;
  }

  &:disabled {
    cursor: no-drop;
    border: 1px solid ${({ theme }) => theme.gray};
    background-color: ${({ theme }) => theme.light};

    &.box-input {
      background-color: ${({ theme }) => theme.white};
      cursor: pointer;
      color: ${({ theme }) => theme.dark};
    }
  }
`;

const FieldArea = styled.textarea`
  ${Field};
  height: 10rem;
  resize: none;
  padding: 28px 16px 4px 16px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.gray};
  border: ${({ theme, status }) =>
    status === "success" && `1px solid ${theme.success}`};
  border: ${({ theme, status }) =>
    status === "error" && `1px solid ${theme.primary}`};
  font-weight: 600;
`;

const Label = styled.label`
  position: absolute;
  pointer-events: none;
  transform: translate(0, 23px) scale(1);
  transform-origin: top left;
  transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  color: ${({ theme }) => theme.dark};
  color: ${({ theme, status }) => status === "success" && theme.success};
  color: ${({ theme, status }) => status === "error" && theme.primary};
  font-size: 16px;
  line-height: 1;
  left: 16px;
`;

export const Input = ({ label = "", value, status, boxInput, ...props }) => {
  return (
    <Wrapper status={status}>
      <Field
        value={value}
        {...props}
        type="text"
        status={status}
        className={boxInput && "box-input"}
        readOnly={boxInput && "readonly"}
      />
      <Label className={value && "filled"} status={status}>
        {label}
      </Label>
      <Icon status={status}>{status === "success" && <AiOutlineCheck />}</Icon>
      <Icon status={status}>{status === "error" && <AiOutlineClose />}</Icon>
    </Wrapper>
  );
};

export const TextArea = ({ label = "", value, status, ...props }) => {
  return (
    <Wrapper status={status}>
      <FieldArea status={status} {...props} />
      <Label status={status} className={value && "filled"}>
        {label}
      </Label>
      <Icon status={status}>{status === "success" && <AiOutlineCheck />}</Icon>
      <Icon status={status}>{status === "error" && <AiOutlineClose />}</Icon>
      <span>
        {value.length <= 120 ? 120 - value.length : 0}
        /120
      </span>
    </Wrapper>
  );
};

const CheckLabel = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  font-size: 16px;
  font-weight: 500;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ span {
      background-color: #2196f3;
    }

    &:checked ~ span::after {
      display: block;
    }
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;

    &::after {
      content: "";
      position: absolute;
      display: none;
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }

  &:hover input ~ span {
    background-color: #ccc;
  }
`;

export const Checkbox = ({ setIsDropshipper, costs, setCosts }) => {
  const isCheked = (e) => {
    setIsDropshipper(e.target.checked);
    if (e.target.checked) {
      const newCost = costs.map((item) => {
        if (item.name === "Dropshipping Fee") {
          return { ...item, cost: 9500, visible: true };
        }
        return item;
      });

      setCosts(newCost);
    } else {
      const newCost = costs.map((item) => {
        if (item.name === "Dropshipping Fee") {
          return { ...item, cost: 0, visible: false };
        }
        return item;
      });

      setCosts(newCost);
    }
  };

  return (
    <CheckLabel>
      Send as Dropshipper
      <input type="checkbox" onChange={(e) => isCheked(e)} />
      <span></span>
    </CheckLabel>
  );
};
