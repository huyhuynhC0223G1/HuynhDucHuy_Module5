import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div>
            <h1>USER LIST</h1>
            <Link to='/list'>
                <button type='submit'>GET USERS</button>
            </Link>
        </div>
    )
}