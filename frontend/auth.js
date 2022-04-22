class Auth {
     constructor(){
         this.isAuthenticated = false
         
     }

     login(cb){
         this.isAuthenticated = true
         cb() 
     }

     logout(cb){
         this.authenticated = false
         cb()
     }

     isAuthenticated(){
         return this.authenticated
     }


}

export default new Auth()