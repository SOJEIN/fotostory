import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Debe ingresar un correo valido")
    .required("Campo obligatorio"),
  password: yup.string().required("Campo obligatorio"),
});
