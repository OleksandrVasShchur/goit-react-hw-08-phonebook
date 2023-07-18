import { useDispatch } from "react-redux";
import { register } from "redux/auth/authOperations";
import css from '../components/Style/form.module.css'


const RegisterPage = () => {
    const dispatch = useDispatch();
  
    const handleSubmit = event => {
      event.preventDefault();
      const name = event.target.elements.name.value;
      const email = event.target.elements.email.value;
      const password = event.target.elements.password.value;
      dispatch(register({ name, email, password }));

    };
  
    
    return (
      <div className={css.navBox}>
        <form className={css.formSt} onSubmit={handleSubmit}>
          <label>Username
          <input className={css.inputSt} type="text" name="name" />
          </label>
        <label>Email
        <input className={css.inputSt} type="email" name="email" />
        </label>
          <label> Password
          <input className={css.inputSt} type="password" name="password" />
          </label>
          <button className={css.buttonSt} type="submit">Register</button>
        </form>
      </div>
    );

  };

  export default RegisterPage;