/** ------------ IMPORTING CSS ------------ **/
import Style from "./edit.module.css";
/** ------------ IMPORTING ROUTER DEPENDENCIES------------ **/
import {Link} from "react-router-dom";



function Edit() {
    return (
        <div className={Style.container}>
            <p className={Style.title}>Edit Contact</p>
            <form>
                <input type="text" placeholder="Name" required/>
                <input type="email" placeholder="Email" required/>
                <input type="tel" placeholder="Phone number" required/>
                <button type="submit" className={Style.save_btn} >Save</button>
                <Link to="/" className={Style.cnl_btn}>Cancel</Link>
            </form>
        </div>
    )
}



/** ------------ EXPORTING MODULES ------------ **/
export default Edit;