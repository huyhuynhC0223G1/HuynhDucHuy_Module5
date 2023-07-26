import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

export default function Home({ covids }) {
  return (
    <div>
      <h1>VietNam's COVID-19 Information</h1>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>CONFIRMED</th>
            <th>DEATHS</th>
            <th>RECOVERED</th>
            <th>ACTIVE</th>
            <th>DATE</th>
          </tr>
        </thead>
        <tbody>
          {covids.map((covid) => (
            <tr key={covid.id}>
              <td>{covid.id}</td>
              <td>{covid.confirmed}</td>
              <td>{covid.deaths}</td>
              <td>{covid.recovered}</td>
              <td>{covid.active}</td>
              <td>{covid.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export async function getStaticProps() {
  const res = await axios.get("http://localhost:8080/covids")
  const covids = res.data
  return {
    props: {
      covids: covids
    }
  };
}