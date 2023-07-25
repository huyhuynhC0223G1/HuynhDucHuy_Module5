import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { updateBook } from '../service/BookService';

function UpdateBook() {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            const data = await updateBook(id);
            setBook(data);
        };
        fetchBook();
    }, [id]);

    const handleSubmit = async (values, { setSubmitting }) => {
        await updateBook(id, values);
        alert('The book has been updated successfully!');
        setBook('');
    };

    if (!book) {
        return <Link to={`/`}><button type="submit">Home</button></Link>;
    }

    return (
        <div>
            <h1>Update Book</h1>
            <Formik
                initialValues={book}
                onSubmit={handleSubmit}
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
        </div>
    );
}

export default UpdateBook;