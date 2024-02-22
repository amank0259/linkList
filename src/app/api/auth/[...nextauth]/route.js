import clientPromise from "@/libs/mongoClient";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    secret: process.env.SECRET,
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GoogleProvider({
            clientId: "206880810070-muub0rdiu8csp3rf2pbfo4bn7ku538g9.apps.googleusercontent.com",
            clientSecret: "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"
        })
    ],
};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }