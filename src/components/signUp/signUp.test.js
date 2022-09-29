import { fireEvent, render, screen } from "@testing-library/react";
import { SignUp } from "./signUp";

test("SignUp  component test", async () => {
  const clickFunc = jest.fn();
  const { getByLabelText } = render(<SignUp onSubmit={clickFunc} />);

  const nextButton = screen.getByText(/next/i);

  //

  expect(nextButton).toBeDisabled();

  fireEvent.change(getByLabelText(/name/i), {
    target: { value: "realdev" },
  });

  fireEvent.click(nextButton);

  expect(clickFunc).toBeCalledWith({ name: "realdev" });

  expect(clickFunc).toBeCalledTimes(1);

  //
  expect(nextButton).toBeDisabled();

  fireEvent.change(getByLabelText(/email/i), {
    target: { value: "realdev123@gmail.com" },
  });

  fireEvent.click(nextButton);

  expect(clickFunc).toBeCalledWith({ email: "realdev123@gmail.com" });

  expect(clickFunc).toBeCalledTimes(2);

  //

  const submitButton = screen.getByText(/submit/i);

  expect(submitButton).toBeDisabled();

  fireEvent.change(getByLabelText(/password/i), {
    target: { value: "realdev" },
  });

  fireEvent.click(submitButton);

  expect(clickFunc).toBeCalledTimes(3);

  expect(clickFunc).toBeCalledWith({
    email: "realdev123@gmail.com",
    name: "realdev",
    password: "realdev",
  });

  //
});
