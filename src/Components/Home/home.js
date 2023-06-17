/** ------------ IMPORTING CSS ------------ **/
import Style from "./home.module.css";
/** ------------ IMPORTING ROUTER DEPENDENCIES------------ **/
import {Link} from "react-router-dom";



function Home() {
    return (
        <div className={Style.container}>
            <table>
                <thead>
                    <tr className={Style.table_head}>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                    <td>
                        <Link to="/edit" className={Style.edit_btn}>Edit</Link>
                        <Link className={Style.dlt_btn}>Delete</Link>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}



/** ------------ EXPORTING MODUKES ------------ **/
export default Home;