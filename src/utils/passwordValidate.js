const validatePassword = (password, setErrors) => {
  const errorMessages = [];
  const validations = [
    {
      test: /[A-Z]/,
      message: "Password must include at least one uppercase letter.",
    },
    {
      test: /[a-z]/,
      message: "Password must include at least one lowercase letter.",
    },
    {
      test: /\d/,
      message: "Password must include at least one number.",
    },
    {
      test: /[@$!%*?&#]/,
      message:
        "Password must include at least one special character (@, $, !, %, *, ?, &, or #).",
    },
    {
      test: /^.{8,}$/,
      message: "Password must be at least 8 characters long.",
    },
  ];

  validations.forEach(({ test, message }) => {
    if (!test.test(password)) {
      errorMessages.push(message);
    }
  });

  setErrors(errorMessages);
};

export default validatePassword;
