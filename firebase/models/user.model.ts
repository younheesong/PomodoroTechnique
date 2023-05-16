export interface User {
  userId: string;
  username: string;
  isUserActive: boolean;
  createdAt: any;
  lastLoginAt: any;
  email: string;
  photoURL?: string;
  signupSource?: "google" | "facebook" | "twitter" | "kakao" | "email";
}
