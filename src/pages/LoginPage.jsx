import styleLogin from './LoginPage.module.css'
import { Logincom } from '../components/login'

export const Login = () => {
    return(
    <div className={styleLogin.login}>
        <div >
            < Logincom />
        </div>
    </div> 
    )
}