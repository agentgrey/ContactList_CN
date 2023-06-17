/** ------------ IMPORTING CSS ------------ **/
import Style from "./add.module.css";



function Add() {
    return (
        <div className={Style.container}>
            <p className={Style.title}>Add Contact</p>
            <form>
                <input type="text" placeholder="Name" required/>
                <input type="email" placeholder="Email" required/>
                <input type="tel" placeholder="Phone number" required/>
                <button type="submit" className={Style.save_btn} >Save</button>
                <button type="reset" className={Style.cnl_btn}>Reset</button>
            </form>
        </div>
    )
}



/** ------------ EXPORTING MODULES ------------ **/
export default Add;