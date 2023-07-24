import { Field, Form, Formik } from "formik";
import { createNewBook } from "../service/BookService";


function CreateNewBook({ history }) {
    return (
        <>
            <h1>Add New Book</h1>
            <Formik
                initialValues={{ title: "", quantity: 0 }}
                onSubmit={async (values, { setSubmitting }) => {
                    await createNewBook(values);
                    alert("The book has been added successfully!");
                    history.push("/");
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label htmlFor="title">Title</label>
                            <Field id="title" type="text" name="title" />
                        </div>
                        <div>
                            <label htmlFor="quantity">Quantity</label>
                            <Field id="quantity" type="number" name="quantity" />
                        </div>
                        <div>
                            <button type="submit" disabled={isSubmitting}>
                                Create
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default CreateNewBook;