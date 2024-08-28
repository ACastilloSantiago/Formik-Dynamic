import { FormEvent } from 'react'
import '../styles/styles.css'
import { useForm } from '../hooks/useForm'


export const RegisterFormikPage = () => {

    const { name, email, onChange, password1, password2, formData: registerData, resetForm } = useForm({
        email: '',
        name: '',
        password1: '',
        password2: '',
    })


    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(registerData)

    }
    return (

        <div>
            <h1>RegisterFormikPage</h1>

            <form
                noValidate
                onSubmit={onSubmit}

            >

                <input
                    type="text"
                    placeholder="Name"

                    name='name'
                    value={name}
                    onChange={onChange}
                />
                <input
                    type="email"
                    placeholder="Email"
                    name='email'
                    value={email}
                    onChange={onChange}

                />
                <input
                    type="password"
                    placeholder="Password"
                    name='password1'
                    value={password1}
                    onChange={onChange}


                />
                <input
                    type="password"
                    placeholder="Repeat password"
                    name='password2'
                    value={password2}
                    onChange={onChange}

                />

                <button type="submit">Create</button>
                <button type="button" onClick={resetForm}>Reset Form</button>
            </form>

        </div>

    )
}
