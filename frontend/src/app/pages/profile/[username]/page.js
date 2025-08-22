import { loginUser, logoutUser } from "@/app/lib/user";
import ProfilePage from "./profilePage";
import { faceUserByID} from "@/app/lib/user";
import { cookies } from "next/headers";
// import { Router } from "next/router";

async function Profile({params}) {
  
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    return <div className="text-center py-10 text-red-500">You need to be logged in to view this page.</div>;
    // Router.push("/pages/login");
  }
  const user = await faceUserByID(token); 
  if (!user) {
    return <div className="text-center py-10 text-red-500">User not found.</div>;
  }
  return (
    <>
      <ProfilePage user={user} />
    </>
  )
}

export default Profile
