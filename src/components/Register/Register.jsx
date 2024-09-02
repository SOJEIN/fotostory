import React from "react";
import { Email as EmailIcon, Lock as LockIcon } from "@mui/icons-material";
import {
  ContainerMain,
  ContainerCustom,
  Loginheader,
  Mt2,
} from "../Login/style/Login.styles";
import InputForm from "../../layout/inputForm/InputForm";
import { useForm, FormProvider } from "react-hook-form";
import { schema } from "../Login/hooks/useValidatorForm";
import { yupResolver } from "@hookform/resolvers/yup";
import useRegister from "../Register/hooks/useCreateSumit";
import useGlobalStore from "../../store/store";

const Register = () => {
  const { ...formMethods } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
  });

  const { error, isLoading: Loading, signUp } = useRegister();
  const user = useGlobalStore((state) => state.auth);

  return (
    <FormProvider {...formMethods}>
      <ContainerMain>
        <ContainerCustom maxWidth="xs">
          <Loginheader variant="h4">FotoStory</Loginheader>
          <InputForm
            label="Correo"
            type="email"
            name="email"
            iconStart={<EmailIcon />}
          />
          <InputForm
            label="Contraseña"
            type={"password"}
            iconStart={<LockIcon />}
            name="password"
            iconEnd={true}
          />

          <Mt2
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            loading={Loading}
            onClick={() => {
              formMethods.handleSubmit((e) => {
                signUp({ email: e.email, password: e.password });
              })();
            }}
          >
            Registrarse
          </Mt2>
        </ContainerCustom>
      </ContainerMain>
    </FormProvider>
  );
};

export default Register;
