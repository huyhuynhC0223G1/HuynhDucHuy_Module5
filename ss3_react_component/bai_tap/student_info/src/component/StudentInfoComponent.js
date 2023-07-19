import { Component } from "react";

const students = [
    {
        id: 1,
        name: 'Huynh Duc A',
        age: 20,
        address: 'Gia Lai'
    },
    {
        id: 2,
        name: 'Nguyen Van A',
        age: 18,
        address: 'Quang Nam'
    },
    {
        id: 3,
        name: 'Tran Thi A',
        age: 19,
        address: 'Da Nang'
    },
    {
        id: 3,
        name: 'Tran Thi T',
        age: 18,
        address: 'Da Nang'
    }
]

class StudentInfoComponent extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <>
            <h1>List Student</h1>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>NAME</td>
                        <td>AGE</td>
                        <td>ADDRESS</td>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </>
        )
    }
}
export default StudentInfoComponent;