import style from './Login.module.css'
import { useState } from 'react'
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import { users } from './user';

export const Logincom = () => {
    
    const [general, setGeneral] = useState({
            FullName: "",
            password: ""
    });
    
    function handleChange (e){
        const name = e.target.name;
        const value = e.target.value;
        setGeneral(values => ({
            ...values,
            [name]: value
        }))
    }



    function handleSubmit (e) {
        e.preventDefault();
        
        if (!general.FullName || !general.password) {
            return;
        }

        Swal.fire({
        text: "Вы успешно зарегистрировались",
        icon: "success",
        confirmButtonText: "Ок"
        });

        // Проверяем, есть ли уже такой пользователь
        const exists = users.some(
        (user) => user.user === general.FullName && user.password === general.password
        );

        if (exists) {
        Swal.fire("Ошибка", "Пользователь уже существует", "error");
        return;
        }

         // Добавляем пользователя
        users.push({ user: general.FullName, password: general.password });

        Swal.fire("Успешно!", "Вы зарегистрированы", "success");
        setGeneral({ FullName: "", password: "" }); // очистка формы
        
    }

    return (
        <>
        <fieldset className={style.fieldset}>
            <legend className={style.legend}>Login</legend>
            <form className={style.form} onSubmit={handleSubmit}>
                <label className={style.lables}> Fullname
                <input type="text" name="FullName" value={general.FullName} onChange={handleChange} className={style.inputs}/>
                </label>
                <label className={style.lables}> Password
                    <input type="password" name="password" value={general.password} onChange={handleChange} className={style.inputs}/>
                </label>
                <div className={style.spanDiv}>
                    <div className={style.spanDiv}>
                        <span className={style}>You don't have account yet? <Link to="/sign">SignUp</Link></span>
                    </div>
                </div>
                <div className={style.butonDiv}>
                    <input type="submit" value="SEND" className={style.button} />
                </div>
            </form>
        </fieldset>
        </>
    )
}