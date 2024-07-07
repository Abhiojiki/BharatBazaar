import conf from '../conf/conf.js'

import { Client, Account, ID, OAuthProvider } from "appwrite";


export class AuthServiceGoogle {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }


async createGoogleacc()
{
    try{
           return  await this.account.createOAuth2Session(
                OAuthProvider.Google,
               'http://localhost:5173/Dashboard',
                'http://localhost:5173/ErrorPage',


            )      
    }
    catch(error){
        throw error
    }
}

async getinfo(){
    try{
        return await this.account.getSession('current');
      
    }
    catch(error){
        throw error;
    }
}


async logout() {

    try {
        await this.account.deleteSessions();
    } catch (error) {
        console.log("Appwrite serive :: logout :: error", error);
    }
}


async getCurrentUser() {
    try {
        return await this.account.get();
    } catch (error) {
        console.log("Appwrite serive :: getCurrentUser :: error", error);
    }

    return null;
}



}

const authGoogle = new AuthServiceGoogle()
export default authGoogle;


