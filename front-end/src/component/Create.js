    import { ErrorMessage, Field, Form, Formik } from "formik";
    import React from "react";
    import * as yup from 'yup';
    import { createSong } from "../service/SongService";
    import { useNavigate } from "react-router-dom";
    import Swal from "sweetalert2";

    export default function Create() {
        const navigate = useNavigate();
    
        return (
            <>
                <div style={{ marginLeft: '38%' }}>
                    <h1>Đăng kí bài hát</h1>
                    <Formik
                        initialValues={{ name: "", singer: "", musician: "", playTime: "" }}
                        validationSchema={yup.object({
                            name: yup.string().required("không để trống"),
                            singer: yup.string().required("không để trống").max(30, "Tối đa 30 kí tự"),
                            musician: yup.string().required("không để trống").max(30, "Tối đa 30 kí tự"),
                            playTime: yup.string().required("không để trống")
                           
                        })}
                        onSubmit={async (value) => {
                          await createSong(value)
                            navigate("/")
                            Swal.fire({
                                icon: "success",
                                title: "Create Successful !!!",
                                button: "Aww yiss!",
                              })
                            }
                        }
                        
                    >
    
                        {({ isSubmitting }) => (
                            <Form>
                                <table>
                                    <tr>
                                        <td><label htmlFor="name">Tên bài hát</label></td>
                                        <td><Field id="name" name="name" type="text"></Field>
                                            <ErrorMessage name="name" component='div' className="text-red" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="singer">Ca sĩ</label></td>
                                        <td><Field id="singer" name="singer" type="text"></Field>
                                            <ErrorMessage name="singer" component='div' className="text-red" />
                                        </td>
                                    </tr>
          
                                    <tr>
                                        <td><label htmlFor="musician">Nhạc sĩ</label></td>
                                        <td><Field id="musician" name="musician" type="text"></Field>
                                            <ErrorMessage name="musician" component='div' className="text-red" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="playTime">Thời gian phát</label></td>
                                        <td><Field id="playTime" name="playTime" type="text"></Field>
                                            <ErrorMessage name="playTime" component='div' className="text-red" />
                                        </td>
                                    </tr>
                                </table>
                                <div>
                                    <button style={{ background: '#cda45e' }} type='submit' disabled={isSubmitting}>Đăng Kí</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </>
        )
    }