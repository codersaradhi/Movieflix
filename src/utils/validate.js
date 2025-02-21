export const checkValidData =  (email,Password,name) =>{
    const validEmail = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email) //email will be tested and returns a boolen value true or false
    const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password)
    
   

    
    if(!validEmail) return "Email is not Valid";
    if(!validPassword) return "Password is not valid";
  

    return null
}