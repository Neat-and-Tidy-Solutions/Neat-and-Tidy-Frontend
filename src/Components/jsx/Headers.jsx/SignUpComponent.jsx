import images from "../../assets/images/PNG/Registration picture.png";
import { LoginButton3, TestInput } from "../../../authentication.styled";
import styles from "../../css/signup.module.css";

function SignUpComponent() {
  return (
    <div className={styles.page2}>
      <div className={styles.p2leftside}>
        <img src={images} alt="signup" className={styles.p2img2} />
      </div>
      <div className={styles.p2rightside}>
        <p className={styles.welcome2}>Welcome!</p>
        <p className={styles.signupby}>Sign up by entering the information below</p>
        <TestInput type="text" placeholder="Username:" />
        <TestInput type="email" placeholder="Email:" />
        <TestInput type="password" placeholder="Password:" />
        <TestInput type="number" placeholder="Contact Number:" />
        <div className={styles.p1rightsidediv2}>
          <p className={styles.dont}> Already have an Account </p>
          <a href="/login" className={styles.p1a1}>
            Login
          </a>
        </div>
        <LoginButton3 type="button" value="Sign Up" />
      </div>
    </div>
  );
}
export default SignUpComponent;
