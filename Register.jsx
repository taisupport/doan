import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const [msg, setMsg] = useState('');

    const submit = async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/users/register', form);
            setMsg('Đăng ký thành công: ' + res.data.user.email);
            localStorage.setItem('token', res.data.token);
        } catch (err) {
            setMsg(err ? .response ? .data ? .message || 'Lỗi');
        }
    };

    return ( <
        div style = {
            { padding: 20 } } >
        <
        h2 > Register < /h2> <
        form onSubmit = { submit } >
        <
        div > < input placeholder = "Name"
        value = { form.name }
        onChange = { e => setForm({...form, name: e.target.value }) }
        /></div >
        <
        div > < input placeholder = "Email"
        value = { form.email }
        onChange = { e => setForm({...form, email: e.target.value }) }
        /></div >
        <
        div > < input type = "password"
        placeholder = "Password"
        value = { form.password }
        onChange = { e => setForm({...form, password: e.target.value }) }
        /></div >
        <
        button type = "submit" > Register < /button> <
        /form> <
        p > { msg } < /p> <
        /div>
    );
}