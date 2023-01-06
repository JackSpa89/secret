import React, { useState } from 'react';
import { ref, set } from 'firebase/database';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import * as yup from 'yup';

import style from './RsvpForm.module.scss';

import { database } from '~helper/firebase';

const initialValues = {
    name: '',
    plusOne: [ {
        name: ''
    } ],
    allergies: '',
    willAttend: ''
};

const validationSchema = yup.object().shape({
    name: yup
        .string()
        .min(2)
        .required('Name is required'),
    willAttend: yup
        .string()
        .min(2)
        .required('required!')
});

type ErrorProps = {
    name: string;
}

const Error: React.FC<ErrorProps> = ({ name }) =>
    <ErrorMessage name={ name }>
        { msg => <div className={ style.rsvpForm__error }>{msg} </div> }
    </ErrorMessage>;

export const SignupForm: React.FC = () => {
    const [ finished, setFinished ] = useState(false);
    const [ willAttend, setWillAttend ] = useState(false);

    const FinishedText: React.FC = () => {
        return willAttend
            ? <div className={ style.rsvpForm__finished }>
                <div>We'll meet you at the mansion!</div>
            </div>
            : <div className={ style.rsvpForm__finished }>
                <div>Sorry you can't make it!</div>
                <div>We'll miss you!</div>
            </div>;
    };

    return (
        finished
            ? <FinishedText />
            : <Formik
                initialValues={ initialValues }
                validationSchema={ validationSchema }
                onSubmit={ async (values) => {
                    values.willAttend === 'true' && setWillAttend(true);
                    set(ref(database, values.name), {
                        name: values.name,
                        plusOne: values.plusOne,
                        allergies: values.allergies,
                        willAttend: values.willAttend === 'true'
                    })
                        .then(() => {
                            setFinished(true);
                            console.log('Database successfully updated!');
                        })
                        .catch(error => console.log(error));
                } }
            >
                {({ values }) => (
                    <Form className={ style.rsvpForm } >
                        <div className={ style.rsvpForm__wrapper }>
                            <label className={ style.rsvpForm__label }>Full name</label>
                            <Field
                                className={ style.rsvpForm__input }
                                name="name"
                                placeholder="Full name"
                            />
                            <Error name="name" />
                        </div>
                        <div className={ style.rsvpForm__wrapper }>
                            <label className={ style.rsvpForm__label }>You coming?</label>
                            <label className={ style.rsvpForm__label }>
                                <Field
                                    className={ style.rsvpForm__checkboxes }
                                    type="radio"
                                    name="willAttend"
                                    value="true"
                                />
                            Yes
                            </label >
                            <label className={ style.rsvpForm__label }>
                                <Field
                                    className={ style.rsvpForm__checkboxes }
                                    type="radio"
                                    name="willAttend"
                                    value="false"
                                />
                            No
                            </label>
                            <Error name="willAttend" />
                        </div>
                        {
                            values.willAttend === 'true' && <div>
                                <div className={ style.rsvpForm__wrapper }>
                                    <label className={ style.rsvpForm__label }>Allergies?</label>
                                    <Field
                                        className={ style.rsvpForm__input }
                                        type="text"
                                        placeholder="Nuts, Onions, ..."
                                        name="allergies"
                                    />
                                </div>
                                <FieldArray name="plusOne">
                                    {({ remove, push }) => (
                                        <div>
                                            {values.plusOne.length > 0 &&
                                            values.plusOne.map((name, index) => (
                                                <div className={ style.rsvpForm__wrapper } key={ index }>
                                                    <div className="col">
                                                        <label className={ style.rsvpForm__label }>{ `${index + 1}. Guest` }</label>
                                                        <Field
                                                            className={ style.rsvpForm__input }
                                                            name={ `plusOne.${index}.name` }
                                                            placeholder={ `${index + 1}. Guest` }
                                                            type="text"
                                                        />
                                                        <button
                                                            type="button"
                                                            className={ style.rsvpForm__button }
                                                            onClick={ () => remove(index) }
                                                        >
                                                            X
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                            <button
                                                type="button"
                                                className={ style.rsvpForm__button }
                                                onClick={ () => push({ name: '' }) }
                                            >
                                            Add Guest
                                            </button>
                                        </div>
                                    )}
                                </FieldArray>
                            </div>
                        }

                        <button className={ style.rsvpForm__button } type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
    );
};
