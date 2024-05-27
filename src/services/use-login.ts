import { useForm, useLoginValidation } from "../hooks";

import { LoginRequest, PATH, loginAPI, userStorage } from "../lib";

export default function useLogin() {
  const { formData, onChangeForm } = useForm<LoginRequest>({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const { onFormValidation } = useLoginValidation();

  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (onFormValidation(email, password)) {
      try {
        const response = await loginAPI(formData);
        userStorage.set(response);

        window.location.replace(PATH.CHAT_PAGE);
      } catch (error: unknown) {
        if (error instanceof Error) {
          alert(`에러가 발생했습니다. ${error.message}`);
        }
      }
    }
  };

  return { email, password, onLogin, onChangeForm };
}
