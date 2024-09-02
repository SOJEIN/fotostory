import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { TextFielCustom } from "../inputForm/styles/InputForm.styles.js";

const InputForm = ({
  name,
  label,
  rules,
  type = "text",
  iconStart,
  iconEnd,
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextFielCustom
      label={label}
      type={type === "password" && showPassword ? "text" : type}
      error={!!errors[name]}
      fullWidth
      helperText={errors[name]?.message}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {iconStart && iconStart}
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            {iconEnd && type === "password" && (
              <IconButton onClick={togglePasswordVisibility} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            )}
          </InputAdornment>
        ),
      }}
      {...register(name, rules)}
      {...rest}
    />
  );
};

export default InputForm;
