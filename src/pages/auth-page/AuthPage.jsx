import React from 'react'
import { Button } from '@consta/uikit/Button';
import {Informer} from '@consta/uikit/Informer';


const AuthPage = () => {
    const [formData, setFormData] = React.useState({
        username: '',
        password: ''
    })

    const [message, setMessage] = React.useState(null);
    
    const fieldChangeHandle = (evt) => {
        const { name, value } = evt.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    const formSubmitHandle = (evt) => {
        evt.preventDefault(); // Предотвращаем стандартное поведение формы
        if (formData.username.trim() && formData.password.trim()) {
            setMessage({
                label: "Все хорошо",
                view: "filled",
                status: "success",
            });
        } else {
            setMessage({
                label: "Заполните все поля",
                view: "filled",
                status: "alert",
            });
        }
    };

    return (
        <>
            <h1 className="auth-page-title">AuthPage</h1>
            <div className="feedback-form-container">
                <form className="feedback-form">
                    <label htmlFor="firstName">Имя:</label>
                    <input id="firstName" name="username" value={formData.username} onChange={fieldChangeHandle} />
                    <label htmlFor="password">Пароль:</label>
                    <input id="password" name="password" value={formData.password} onChange={fieldChangeHandle} />
                    <Button size='m' label="Вход" form="round" onClick={formSubmitHandle} />
                    {message && (
                    <Informer
                        label={message.label}
                        view={message.view}
                        status={message.status}
                    />
                )}
                </form>
            </div>
        </>
    );
};

export default AuthPage;