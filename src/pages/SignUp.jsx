
import style from './Sign.module.css'
import { useState } from 'react'
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import { users } from '../components/user';

export const SignUp = () => {
    
    
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
        
        // Проверяем есть ли такой пользователь
        const userExists = users.some(
        (user) =>
            user.user === general.FullName && user.password === general.password
        );


        if (userExists) {
            Swal.fire("Успешно!", "Вход успешен", "success");
        } else {
            Swal.fire("Ошибка", "Пользователь не найден", "error");
        }
        
    }
    
    return (
            <div className={style.login}>
                <div>
                    <fieldset className={style.fieldset}>
                        <legend className={style.legend}>Sign Up</legend>
                        <form className={style.form} onSubmit={handleSubmit}>
                            <label className={style.lables}> Fullname
                            <input type="text" name="FullName" value={general.FullName} onChange={handleChange} className={style.inputs}/>
                            </label>
                            <label className={style.lables}> Password
                                <input type="password" name="password" value={general.password} onChange={handleChange} className={style.inputs}/>
                            </label>
                            <div className={style.spanDiv}>
                                <span>Do you have an account? <Link to="/login">LogIn</Link></span>
                            </div>
                            <div className={style.butonDiv}>
                                <input type="submit" value="SEND" className={style.button} />
                            </div>
                        </form>
                    </fieldset>
                </div>
            </div> 
    )
}