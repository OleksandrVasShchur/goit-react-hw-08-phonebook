import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/authOperations";
import css from '../components/Style/form.module.css';

const LoginPage = () => {
const dispatch = useDispatch;

const handleSubmit = e => {
e.preventDefault();
const email = e.target.elements.email.value;
const password = e.target.elements.password.value;
dispatch(logIn({email, password}))
}

    return (
        <div className={css.navBox}>
          <form className={css.formSt} onSubmit={handleSubmit}>
          <label>Email
          <input className={css.inputSt} type="email" name="email" />
          </label>
            <label> Password
            <input className={css.inputSt} type="password" name="password" />
            </label>
            <button className={css.buttonSt} type="submit">Login</button>
          </form>
        </div>
      );
}

export default LoginPage;
