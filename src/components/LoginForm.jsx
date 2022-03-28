import Input from "./common/Input";
import Button from "./common/Button";
import Logo from "./common/Logo";

const LoginForm = () => {
  return (
    <div className="login-form">
      <div className="container">
        <Logo />
        <h1 className="login-form__heading">Login</h1>
        <p className="login-form__desc">
          Sign in with your data that you entered during your registration.
        </p>
        <form>
          <Input
            type="email"
            id="email"
            label="Email"
            placeholder="name@example.com"
          />
          <Input
            type="password"
            id="password"
            label="Password"
            placeholder="min. 8 characters"
          />
          <Input type="checkbox" id="keep-login" label="Keep me logged in" />

          <Button
            type="submit"
            label="Login"
            className="btn btn__block login-form__submit-btn"
          />
        </form>
        <a href="" className="login-form__forgot-password">
          Forgot Password
        </a>
        <div className="login-form__signup">
          Don't have an account?
          <a href="" className="signup__link">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
