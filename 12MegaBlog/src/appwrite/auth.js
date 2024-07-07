import conf from '../conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService {
   client = new Client();
   account;

   constructor(){
    this.client
        .setEndpoint(conf.appwriteurl)
        .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);    
   }

   async createAccount({email,password,name})
   {
      try {
        const userAccount =  await this.account.create(ID.unique(),email,password,name);

        if(userAccount)
        {
         //if useraccount exists we login the user so that we now login the user.
         return this.login({email,password});

        }
        else {
          console.log("User account not created");
          return userAccount;
        }
        
      } catch (error) {
        console.log(error);
      }

   }

   async login({email,password})
   {
      try {
       return await this.account.createEmailPasswordSession(email,password);
      } 
      catch (error) {
        console.log(error);
      }
   } 
  
   async getCurrentUser(){
      try {
        return await this.account.get();
      } 
      catch (error) {
        console.log(error);
      }
      //if we didnot get the user we return null
      return null;
   } 

   //logout is called delete session.
    async logout()
    {
        try {
          return await this.account.deleteSessions();
        } 
        catch (error) {
          console.log(error);
        }
    }
}

const authService = new AuthService();

export default authService;