import images from "../../assets/images/JPG/Happy cleaning.jpg";
import "../../css/login.css";
import image2 from "../../assets/images/SVG/forgotPassword.svg";
import { LoginButton3, TestInput } from "../../../authentication.styled";

function Login() {
  return (
    <div className="page1">
      <div className="p1-left-side">
        <img src={images} alt="login" className="p1-img1" />
      </div>
      <div className="p1-right-side">
        <p className="welcome">Welcome Back</p>
        <p className="log">Log in to your Dashboard</p>
        <TestInput type="text" placeholder="Email" />
        <TestInput type="password" placeholder="Password" />
        <div className="p1-right-side-div1">
          <div className="remember-div">
            <input type="checkbox" name="remeberMe" id="remeberMe" />
            <p>Remember me</p>
          </div>
          <div className="forgot-div">
            <img src={image2} alt="logo" className="p1-img2" />
            <p>Forgot Password</p>
          </div>
        </div>
        <LoginButton3 type="button" value="Login" />
        <div className="p1-right-side-div2">
          <p className="dont"> Dont have an account? </p>
          <a href="/signup2" className="p1-a1">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
export default Login;
