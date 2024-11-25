export type UserData = {
  id: number;
  name: string;
  email: string;
  username: string;
  token: string;
};

export type UserProfileToken = {
  message: string;
  data: UserData; 
};

export type UserProfile = {
  username: string;
  email: string;
};
