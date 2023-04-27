import Profile from "./Profile"
type User = {
  _id?: String,
  userName: String,
  email: String,
  profile: Profile,
  role: Array<String>,
  password: string,
};

export default User;