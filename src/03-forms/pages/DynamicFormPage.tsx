import { Formik, Form } from "formik";
import * as Yup from 'yup'

import formJson from "../data/custom-form.json";
import { MySelect, MyTextInput } from "../components";


const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};
for (const input of formJson) {
    initialValues[input.name] = input.value

    if (!input.validations) continue

    let schema = Yup.string()

    for (const rule of input.validations) {

        if (rule.type === 'required') {
            schema = schema.required('Este campo es requerido.')
        }
        if (rule.type === 'minLength') {
            schema = schema.min((rule as any).value || 2, `Mínimo de ${(rule as any).value || 2} caracteres.`)
        }
        if (rule.type === 'email') {
            schema = schema.email('Revise el formato del email.')
        }

        // ... otras reglas.

    }
    requiredFields[input.name] = schema
}

const validationSchema = Yup.object({ ...requiredFields })

export const DynamicFormPage = () => {
    return (
        <div>
            <h1>
                DynamicFormPage
            </h1>

            <Formik
                initialValues={initialValues}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                {(formik) => (
                    <Form noValidate>
                        {
                            formJson.map(({ label, name, placeholder, type, options }) => {

                                if (type === 'input' || type === 'email' || type === 'password') {

                                    return (

                                        <MyTextInput
                                            key={name}
                                            label={label}
                                            name={name}
                                            type={type as any}
                                            placeholder={placeholder} />
                                    )
                                } else if (type === 'select') {

                                    return (

                                        <MySelect key={name} label={label} name={name} >

                                            <option value=''>Select an option</option>
                                            {
                                                options?.map(({ id, label }) => (

                                                    <option key={id} value={label}>{label}</option>

                                                ))
                                            }

                                        </MySelect>

                                    )

                                }

                                return <span>Type: {type}</span>
                            })
                        }
                        <button type="submit">Submit</button>
                    </Form>

                )}
            </Formik>
        </div>
    )
}
