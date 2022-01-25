import React, { useState } from 'react';
import { ref, set } from 'firebase/database';
import { Field, FieldArray, Form, Formik } from 'formik';

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

export const SignupForm: React.FC = () => {
    const [ finished, setFinished ] = useState(false);
    const [ willAttend, setWillAttend ] = useState(false);

    return (
        finished
            ? willAttend
                ? <div className={ style.rsvpForm__finished }>
                    <div>We'll meet you at the castle!</div>
                </div>
                : <div className={ style.rsvpForm__finished }>
                    <div>Sorry you can't make it!</div>
                    <div>We'll miss you!</div>
                </div>
            : <Formik
                initialValues={ initialValues }
                onSubmit={ async (values) => {
                    values.willAttend === 'true' && setWillAttend(true);
                    set(ref(database, values.name), {
                        name: values.name,
                        plusOne: values.plusOne,
                        allergies: values.allergies,
                        willAttend: values.willAttend
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
                                                <div className="row" key={ index }>
                                                    <div className="col">
                                                        <label className={ style.rsvpForm__label }>{ `${index + 1}. Guest` }</label>
                                                        <Field
                                                            className={ style.rsvpForm__input }
                                                            name={ `plusOne.${index}.name` }
                                                            placeholder={ `${index + 1}. Guest` }
                                                            type="text"
                                                        />
                                                    </div>
                                                    <div className="col">
                                                        <button
                                                            type="button"
                                                            className={ style.rsvpForm__button }
                                                            onClick={ () => remove(index) }
                                                        >
                                                            Remove
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
