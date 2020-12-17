import React, {useContext, useState} from 'react';
import { NavLink, useHistory } from "react-router-dom";
import style from './Login.module.css'
import AppContext from "../AppContext";

const Login = () => {
    const { users } = useContext(AppContext)

    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const history = useHistory()

    const onLoginHandler = () => {
        let result:any = users.filter(user => user.login === login ? user : false)
        result = Object.assign(result, ...result)
        if (result.login === login) {
            if (result.password === password) {
                history.push('/profile')
            }
            else alert('Неверный пароль!')
        }
        else alert('Неверный логин!')
    }

    return (
        <form className={style.form}>
            <input type="text" value={ login } className='input' placeholder={'Логин/Email'} onChange={(event) => {
                setLogin(event.target.value)
            }}/>
            <input type="password" value={ password } className='input' placeholder={'Пароль'} onChange={(event) => {
                setPassword(event.target.value)
            }}/>
            <input type='button' className={ (login && password) ? 'btn' : 'btn--muted' } value='Войти' onClick={ onLoginHandler }/>
            <NavLink to={'/register'} className={style.link}>Нет аккаунта?</NavLink>
        </form>
    )
}

export default Login;