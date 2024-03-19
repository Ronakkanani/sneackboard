import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';

export default function Formik2() {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            contact: '',
            gender: '',
            lang: [],
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(5, 'min 5 characters or max')
                .max(10, 'min 10 characters or max')
                .required('Required'),
            lastName: Yup.string()
                .min(5, 'min 5 characters or max')
                .max(10, 'min 10 characters or max')
                .required('Required'),
            contact: Yup.string()
                .max(10, 'max 10 characters or max')
                .required('Required'),
            gender: Yup.string()
                .required('Required'),
            lang: Yup.array().min(2, 'Select at least one language')
                .required('Required'),
        }),
        onSubmit: values => {
            console.log(values);
        },
    });
    return (
        <>
            <div className="container formiks">
                <form onSubmit={formik.handleSubmit}>
                    <label>First Name</label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div className='errortag'>{formik.errors.firstName}</div>
                    ) : null}
                    <br />
                    <label>Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div className='errortag'>{formik.errors.lastName}</div>
                    ) : null}
                    <br />
                    <label>contact No</label>
                    <input
                        id="contact"
                        name="contact"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.contact}
                    />
                    {formik.touched.contact && formik.errors.contact ? (
                        <div className='errortag'>{formik.errors.contact}</div>
                    ) : null}
                    <label className='d-block mb-2'>gender : </label>
                    <label>male</label>
                    <input
                        id="gender"
                        name="gender"
                        type="radio"
                        onChange={formik.handleChange}
                        value='male'
                    // className='d-inline-block me-3'
                    />
                    <label>female</label>
                    <input
                        id="gender"
                        name="gender"
                        type="radio"
                        onChange={formik.handleChange}
                        value='female'
                    // className='d-inline-block mb-3'
                    />
                    {formik.touched.gender && formik.errors.gender ? (
                        <div className='errortag'>{formik.errors.gender}</div>
                    ) : null}
                    <br />
                    <label className='mb-2'>language : </label>
                    <br />
                    <label>hindi</label>
                    <input
                        id="lang"
                        name="lang"
                        type="checkbox"
                        onChange={formik.handleChange}
                        value='hindi'
                    // className='d-inline-block me-2'
                    />
                    <label>gujarati</label>
                    <input
                        id="lang"
                        name="lang"
                        type="checkbox"
                        onChange={formik.handleChange}
                        value='gujarati'
                    // className='d-inline-block me-2'
                    />
                    <label>english</label>
                    <input
                        id="lang"
                        name="lang"
                        type="checkbox"
                        onChange={formik.handleChange}
                        value='gujarati'
                    // className='d-inline-block me-2'
                    />
                    <label>marathi</label>
                    <input
                        id="lang"
                        name="lang"
                        type="checkbox"
                        onChange={formik.handleChange}
                        value='gujarati'
                    // className='d-inline-block'
                    />
                    {formik.touched.lang && formik.errors.lang ? (
                        <div className='errortag'>{formik.errors.lang}</div>
                    ) : null}
                    <br /><br />
                    <button type="submit" className='d-block'>Submit</button>
                </form>
            </div>
        </>
    )
}
