import { useFormik } from "formik";
import { Button, ScrollView, Stack, Text } from "native-base";
import { useTranslation } from "react-i18next";

import Input from "src/components/form/Input";

const CreateLog = () => {
  const { t } = useTranslation();

  const logFormik = useFormik({
    initialValues: {
      quantity: "",
      amount: "",
      createdAt: new Date(),
    },
    onSubmit: () => {},
  });

  return (
    <Stack space={8} flex={1}>
      <Input
        label={String(t("api.quantity"))}
        placeholder={String(t("field.quantity_placeholder"))}
        value={logFormik.values.quantity}
        onChangeText={logFormik.handleChange("quantity")}
        type="number"
        errorMsg={
          logFormik.touched.quantity && logFormik.errors.quantity
            ? logFormik.errors.quantity
            : ""
        }
      />
      <Input
        label={String(t("api.amount"))}
        placeholder={String(t("field.amount_placeholder"))}
        value={logFormik.values.amount}
        onChangeText={logFormik.handleChange("amount")}
        type="number"
        errorMsg={
          logFormik.touched.amount && logFormik.errors.amount
            ? logFormik.errors.amount
            : ""
        }
      />
      <Input
        label={String(t("api.created"))}
        placeholder={String(t("field.quantity_placeholder"))}
        value={String(logFormik.values.createdAt)}
        onChangeText={logFormik.handleChange("createdAt")}
        type="number"
        errorMsg={
          logFormik.touched.createdAt && logFormik.errors.createdAt
            ? String(logFormik.errors.createdAt)
            : ""
        }
      />
      <Input
        label={String(t("api.amount"))}
        placeholder={String(t("field.amount_placeholder"))}
        value={logFormik.values.amount}
        onChangeText={logFormik.handleChange("amount")}
        type="number"
        errorMsg={
          logFormik.touched.amount && logFormik.errors.amount
            ? logFormik.errors.amount
            : ""
        }
      />
      <Button onPress={() => logFormik.handleSubmit()}>
        <Text textTransform="capitalize" fontWeight="bold">
          {t("api.add_log")}
        </Text>
      </Button>
    </Stack>
  );
};
export default CreateLog;
