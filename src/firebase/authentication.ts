import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  UserCredential,
} from "firebase/auth";
import { auth } from "./firebase";
import { TUser, TUserDetails } from "./types";

export const register = async (userDetails: TUser) => {
  try {
    const userCredentials: UserCredential =
      await createUserWithEmailAndPassword(
        auth,
        userDetails.email,
        userDetails.password
      );
    const user = userCredentials?.user;
    if (!user) {
      console.log(`User Email: ${userDetails.email} not found`);
    }
  } catch (error) {
    console.log(error);
  }
};

export const login = async (userDetails: TUser) => {
  try {
    const userCredentials: UserCredential = await signInWithEmailAndPassword(
      auth,
      userDetails.email,
      userDetails.password
    );
    const user = userCredentials?.user;
    if (!user) {
      console.log(`User Email: ${userDetails.email} not found`);
    }
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    console.log("Successfully logged out");
  } catch (error) {
    console.log(error);
  }
};

export const updateUserProfile = async (userDetails: TUserDetails) => {
  try {
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, userDetails);
    } else {
      console.log("User profile not found");
    }
  } catch (error) {
    console.log(error);
  }
};
