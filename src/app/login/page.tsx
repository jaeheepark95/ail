import { login, signup, signInWithEmail } from "./actions";
import OauthBtn from "./oauthBtn";

export default function LoginPage() {
  return (
    <div>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        {/* <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required /> */}
        {/* <button formAction={login}>Log in</button> */}
        <button formAction={signInWithEmail}>이메일 전송</button>
      </form>
      <OauthBtn></OauthBtn>
    </div>
  );
}
