import { Link } from "react-router-dom";

function Tables({ charecters, loading, nodata }) {
    return (
        <div class="container">
            <div class="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Race</th>
                            <th>Gender</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? <span>Loading...</span> : null}
                        {charecters?.docs?.length === 0 && loading === false
                            ? (nodata = "No data found")
                            : null}
                        {charecters?.docs?.length > 0 &&
                            charecters?.docs.map((charecters, index) => (
                                <tr>
                                    <td className="">
                                        <span className="ms-5">{index}</span>
                                    </td>
                                    <td>{charecters.name}</td>
                                    <td>{charecters.race}</td>
                                    <td>{charecters.gender}</td>
                                    <Link to={`/details/${charecters?._id}`}>
                                        Details...
                                    </Link>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Tables;
