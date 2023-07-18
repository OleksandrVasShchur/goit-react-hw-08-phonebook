// import { useState } from "react";
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


// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const dispatch = useDispatch();

//   const handleChange = event => {
//     const { name, value } = event.target;

//     switch (name) {
//       case 'email':
//         setEmail(value);
//         break;
//       case 'password':
//         setPassword(value);
//         break;
//       default:
//         return;
//     }
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       logIn({
//         email,
//         password,
//       })
     
//     );
//     console.log(email, password);
//     form.reset();
//   };

//   return (
//     <>
//       <p>Login</p>

//       <form onSubmit={handleSubmit}>
//         <label>
//           Email
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Password
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={handleChange}
//           />
//         </label>
//         <button type="submit">Log In</button>
//       </form>
//     </>
//   );
// }
// export default LoginPage;