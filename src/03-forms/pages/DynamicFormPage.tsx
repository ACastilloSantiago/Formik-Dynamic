import { Formik, Form } from "formik";

import formJson from "../data/custom-form.json";
import { MyTextInput } from "../components";


const initialValues: { [key: string]: any } = {};
for (const input of formJson) {
    initialValues[input.name] = input.value
}

export const DynamicFormPage = () => {
    return (
        <div>
            <h1>
                DynamicFormPage
            </h1>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => console.log(values)}
            >
                {(formik) => (
                    <Form noValidate>
                        {
                            formJson.map(({ label, name, placeholder, type }) => {
                                return (

                                    <MyTextInput
                                        key={name}
                                        label={label}
                                        name={name}
                                        type={type as any}
                                        placeholder={placeholder} />
                                )
                            })
                        }
                        <button type="submit">Submit</button>
                    </Form>

                )}
            </Formik>
        </div>
    )
}
