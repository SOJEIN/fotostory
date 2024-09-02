import React from "react";
import {
  Email as EmailIcon,
  Lock as LockIcon,
  Google as GoogleIcon,
} from "@mui/icons-material";
import {
  ContainerMain,
  ContainerCustom,
  Loginheader,
  LoginLink,
  Mt2,
} from "./style/Login.styles";
import InputForm from "../../layout/inputForm/InputForm";
import { useForm, FormProvider } from "react-hook-form";
import { schema } from "./hooks/useValidatorForm";
import { yupResolver } from "@hookform/resolvers/yup";
import useLogin from "./hooks/useHandleSumit";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { ...formMethods } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
  });

  const { error, isLoading, signIn, signInWithGoogle } = useLogin();

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
            type="password"
            name="password"
            iconStart={<LockIcon />}
            iconEnd={true}
          />

          <Mt2
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            loading={isLoading}
            onClick={() => {
              formMethods.handleSubmit((e) => {
                signIn({ email: e.email, password: e.password });
              })();
            }}
          >
            Iniciar Sesión
          </Mt2>

          <Mt2
            fullWidth
            variant="outlined"
            color="secondary"
            onClick={signInWithGoogle}
            startIcon={<GoogleIcon />}
            loading={isLoading}
          >
            Iniciar Sesión con Google
          </Mt2>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <LoginLink align="center" sx={{ mt: 3 }}>
            <a href="#">¿Olvidaste tu contraseña?</a>
          </LoginLink>
          <LoginLink align="center" sx={{ mt: 2 }}>
            ¿No tienes una cuenta?{" "}
            <a onClick={() => navigate("/register")}>Registrarse</a>
          </LoginLink>
        </ContainerCustom>
      </ContainerMain>
    </FormProvider>
  );
};

export default Login;
