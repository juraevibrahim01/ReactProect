// SignupPage.jsx
import { useLocation, useNavigate } from "react-router-dom";
import SignUpStyle from './SignUpPage.module.css'
import { useState } from "react";

export const SignupPage = () => {

    const [error, setError] = useState("");
  
    const location = useLocation();
    const course = location.state?.course || "Неизвестный курс";
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); /* Отключаем перезагрузку стр после отправки формы */

        const formData = new FormData(e.target);
        const name = formData.get("name");
        const email = formData.get("email");

        alert(`Вы успешно записались на курс: ${course}`);
        navigate("/schools");
    };

  return (
    <div className={SignUpStyle.signUpDiv}>
        <div className={SignUpStyle.signUp}>
        <h2>Registration for the course: {course}</h2>
        <form onSubmit={handleSubmit} className={SignUpStyle.form}>
            <div>
            <label>
                Name:
            </label>
            <br />
                <input type="text" name="name" required />
            </div>
            <div>
            <label>
                Email:
            </label>
            <br />
                <input type="email" name="email" required />
            </div>
            <div className={SignUpStyle.buttonDiv}>
                <button type="submit" className={SignUpStyle.button}>SEND</button>
            </div>
        </form>
        </div>
    </div>
  );
};
