import { Input, Checkbox, TextArea } from "../Input";
import Heading from "../Heading";
import { Flex } from "../Flex";
import { useForm, Controller } from "react-hook-form";

const DeliveryDetails = ({
  isDropshiper,
  setIsDropshipper,
  costs,
  setCosts,
}) => {
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    defaultValues: {
      email: "",
      phone: "",
      address: "",
      dropshipperName: "",
      dropshipperPhone: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Flex items="center" justify="space-between">
        <Heading>Delivery Details</Heading>
        <Checkbox
          setIsDropshipper={setIsDropshipper}
          costs={costs}
          setCosts={setCosts}
        />
      </Flex>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap="2rem" justify="space-between">
          <Flex direction="column" gap="1.8rem">
            <Controller
              name="email"
              control={control}
              rules={{
                required: true,
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              }}
              render={({ field }) => (
                <Input
                  label="Email"
                  {...field}
                  status={errors.email ? "error" : "success"}
                />
              )}
            />
            <Controller
              name="phone"
              control={control}
              rules={{
                required: true,
                minLength: 6,
                maxLength: 30,
                pattern:
                  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
              }}
              render={({ field }) => (
                <Input
                  label="Phone Number"
                  {...field}
                  status={errors.phone ? "error" : "success"}
                />
              )}
            />
            <Controller
              name="address"
              control={control}
              rules={{ required: true, maxLength: 120 }}
              render={({ field }) => (
                <TextArea
                  label="Delivery Address"
                  {...field}
                  status={errors.address ? "error" : "success"}
                />
              )}
            />
          </Flex>
          <Flex direction="column" gap="1.8rem">
            <Controller
              name="dropshipperName"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <Input
                  label="Dropshipper Name"
                  {...field}
                  disabled={!isDropshiper && "disabled"}
                  status={errors.phone ? "error" : "success"}
                />
              )}
            />
            <Controller
              name="dropshipperPhone"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <Input
                  label="Phone Number"
                  disabled={!isDropshiper && "disabled"}
                  {...field}
                  status={errors.phone ? "error" : "success"}
                />
              )}
            />
          </Flex>
        </Flex>
        <button>submit</button>
      </form>
    </>
  );
};

export default DeliveryDetails;
