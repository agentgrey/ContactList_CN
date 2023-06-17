/** ------------ IMPORTING HOOKS ------------ **/
import { createContext, useContext, useState , useEffect , useRef } from "react";

// create the contextAPI
const contactApi = createContext();
export function useValue(){
    const value = useContext(contactApi);
    return value;
}



function CustomContext({children}) {

    // Storing the contact list in the local state
    const [contactList, setContactList] = useState([]);
    const nameRef = useRef();
    const emailRef = useRef();
    const numberRef = useRef();

/** ------------ Function to fetch data from the api ------------ **/
    const fetchContactList = async() =>{
        let data = await fetch('https://jsonplaceholder.typicode.com/users/');
        let contact = await data.json();
        setContactList(contact);
    }
/** ------------ Function to delete contact from the list ------------ **/
    const deleteContact = (id) => {
        const index = contactList.findIndex((contact) => contact.id === id);
        if (index !== -1) {
          let newContactList = [...contactList];
          newContactList.splice(index, 1);
        //   Displyed the toast messages
        //   toast.success("Contact Deleted Successfully !");
        setContactList(newContactList);
        }
    };
/** ------------ Function to clear the input fields ------------ **/
    const handleClear = ()=>{
        nameRef.current.value = "";
        emailRef.current.value = "";
        numberRef.current.value = "";
    }
/** ------------ On Component Mount ------------ **/
    useEffect(()=>{
        fetchContactList();
    }, []);



    return (
        <>
            <contactApi.Provider value={{contactList, setContactList, deleteContact, handleClear,
                                    nameRef, emailRef, numberRef}}>
                {children}
            </contactApi.Provider>
        </>
    )
}



/** ------------ EXPORTING MODULES ------------ **/
export default CustomContext;