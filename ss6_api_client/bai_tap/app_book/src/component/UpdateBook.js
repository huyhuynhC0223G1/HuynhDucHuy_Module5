import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { getBookById, updateBook } from '../service/BookService';

function UpdateBook() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const navigate= useNavigate();

    const fetchBook = async () => {
        const data = await getBookById(id);
        setBook(data);
        console.log(data);
    };
    useEffect(() => {
        fetchBook();
    }, [id]);

    const handleSubmit = async (values, {setSubmitting }) => {
        await updateBook(id, values);
        alert('The book has been updated successfully!');
        setBook('');
        navigate("/")
    };

    return (
        <div>
            <h1>Update Book</h1>
            {book && (
                <Formik
                    initialValues={book}
                    onSubmit={handleSubmit}
                    enableReinitialize
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div>
                                <label htmlFor="title">Title</label>
                                <Field type="text" name="title" />
                            </div>
                            <div>
                                <label htmlFor="quantity">Quantity</label>
                                <Field type="number" name="quantity" />
                            </div>
                            <button type="submit" disabled={isSubmitting}>
                                Update
                            </button>
                        </Form>
                    )}
                </Formik>
            )}
        </div>
    );
}

export default UpdateBook;