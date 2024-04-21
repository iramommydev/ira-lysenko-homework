import RegistrationForm from "../../components/Registration/RegistrationForm";

import styles from './Registration.module.css';

function Registration() {
  return (
   <>
   <div className={styles.wrapper}>
   <h1>Registration</h1>
   <RegistrationForm />
   </div>
   </> 
  )
}

export default Registration;