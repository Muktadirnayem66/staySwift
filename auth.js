import NextAuth from "next-auth";
import GoogleProviders from 'next-auth/providers/google'
import FacebookProviders from "next-auth/providers/facebook"
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import mongoClientPromise from "./database/mongoClientPromise";
import CredentialProvider from 'next-auth/providers/credentials'
import { userModel } from "./models/user-model";
import bcrypt from 'bcryptjs'

 export const {
    handlers:{GET, POST},
    auth,
    signIn,
    signOut
 } = NextAuth({
    adapter:MongoDBAdapter(mongoClientPromise, {databaseName:process.env.ENVIRONMENT}),
    session:{
        strategy:"jwt"
    },
    providers:[
        CredentialProvider({
            credentials:{
                email:{},
                password:{},
            },
            async authorize(credentials){
                if(credentials === null) return null

                try {
                    const user = await userModel.findOne({email:credentials.email})
                    if(user){
                        const isMatch = await bcrypt.compare(
                            credentials.password,
                            user.password
                        )
                        if(isMatch){
                            return user
                        }else{
                            throw new Error("Email or password mismatch")
                        }

                    }else{
                        throw new Error("User not found")
                    }
                    
                } catch (err) {
                    throw new Error(err)
                }
            }

            
        }),
        GoogleProviders({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        }),
        FacebookProviders({
            clientId:process.env.FACEBOOK_CLIENT_ID,
            clientSecret:process.env.FACEBOOK_CLIENT_SECRET
        })
    ]
})