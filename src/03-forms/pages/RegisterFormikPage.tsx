import { Form, Formik } from 'formik'
import * as Yup from "yup";

import { MyTextInput } from '../components';
import '../styles/styles.css'

export const RegisterFormikPage = () => {

    return (
        <Formik
            initialValues={{
                email: '',
                name: '',
                password1: '',
                password2: '',
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .required('Requerido')
                    .min(2, 'Debe de tener un minimo de 2 caracteres.')
                    .max(15, 'Debe de tener un máximo de 2 caracteres.'),
                email: Yup.string()
                    .email('Debe de ser un email valido.')
                    .required('Requerido'),
                password1: Yup.string()
                    .required('Requerido')
                    .min(6, 'Debe de tener un minimo de 6 caracteres.'),
                password2: Yup.string()
                    .oneOf([Yup.ref('password1')], 'Las contraseñas no son iguales.')
                    .required('Requerido')
                    .min(6, 'Debe de tener un minimo de 6 caracteres.')
            })}
            onSubmit={(values) => {
                console.log(values);
            }}>
            {

                ({ handleReset }) => (

                    <Form>
                        <MyTextInput label='Name' name='name' placeholder='Santiago' />
                        <MyTextInput label='Email' name='email' type='email' placeholder='algo@gmail.com' />
                        <MyTextInput label='Password' name='password1' type='password' placeholder='******' />
                        <MyTextInput label='Confirm password' name='password2' type='password' placeholder='******' />

                        <button type='submit' > Register </button>
                        <button type='submit' onClick={handleReset}> Reset form </button>
                    </Form>
                )
            }
        </Formik>
    )
}
