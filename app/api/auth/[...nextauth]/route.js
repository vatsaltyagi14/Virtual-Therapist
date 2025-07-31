import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import User from '@/models/users';
import connectDB from '@/config/database';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    /**
     * Called when a user successfully signs in.
     * @param {object} params - The parameters object.
     * @param {object} params.profile - The user's profile from the OAuth provider.
     * @returns {boolean} - Return true to allow the sign-in, false to deny.
     */
    async signIn({ profile }) {
      // 1. Connect to the database
      await connectDB();
      // 2. Check if the user already exists
      const userExists = await User.findOne({ email: profile.email });
      // 3. If the user doesn't exist, create them
      if (!userExists) {
        await User.create({
          email: profile.email,
          username: profile.name,
          image: profile.picture,
        });
      }
      // 4. Return true to allow the sign-in to proceed
      return true;
    },
    /**
     * Called whenever a session is checked.
     * @param {object} params - The parameters object.
     * @param {object} params.session - The session object.
     * @returns {object} - The modified session object with the user's ID.
     */
    async session({ session }) {
      // 1. Connect to the database
      await connectDB();
      // 2. Find the user in the database using the session email
      const user = await User.findOne({ email: session.user.email });
      // 3. Assign the user's database ID to the session object
      session.user.id = user._id.toString();
      // 4. Return the modified session
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
