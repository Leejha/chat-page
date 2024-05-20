export default function useLoginValidation() {
  const onCheckEmail = (email: string): boolean => {
    const emailRegex =
      // eslint-disable-next-line no-useless-escape
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    /**
     * @describe 이메일 유무 검사
     */
    if (email === "") {
      alert("이메일을 입력해주세요.");
      return false;
    }

    /**
     * @describe 이메일 형식 검사
     */
    if (!emailRegex.test(email)) {
      alert("이메일 형식이 올바르지 않아요.");
      return false;
    }
    return true;
  };

  const onCheckPassword = (password: string): boolean => {
    const passwordRegex = /^[A-Za-z0-9]{6,}$/;

    /**
     * @describe 비밀번호 유무 검사
     */
    if (password === "") {
      alert("비밀번호를 입력해주세요.");
    }

    /**
     * @describe 영문 대소문자 및 숫자, 6자 이상인지 검사
     */
    if (!passwordRegex.test(password)) {
      alert("비밀번호는 영문 대소문자 및 숫자만 입력 가능하며 6자 이상입니다.");
      return false;
    }

    return true;
  };

  const onFormValidation = (email: string, password: string) => {
    return onCheckEmail(email) ? onCheckPassword(password) : false;
  };

  return {
    onFormValidation,
  };
}
