import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Login with eamil",
      credentials: {
        username: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        const username = credentials?.username as string;
        const password = credentials?.password as string;
        console.log("Username:", username);
        console.log(" Password:", password);
        const user ={
          name:"ankit",
          id:"1",
          username:"ankitrazz001@gmil.com"
        }
        if(user){
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET

});

export { handler as GET, handler as POST };
