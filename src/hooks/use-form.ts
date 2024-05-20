import { useState } from "react";

export default function useForm<T>(initialValues: T): {
  formData: T;
  onChangeForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onResetForm: () => void;
} {
  const [formData, setFormData] = useState(initialValues);

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onResetForm = () => {
    setFormData(initialValues);
  };

  return {
    formData,
    onChangeForm,
    onResetForm,
  };
}
