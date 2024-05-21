import EditForm from "@/components/profile/info/EditForm";
import { getFetch } from "@/utils/fetch";
import { cookies } from "next/headers";
import React from "react";

const ProfilePage = async () => {
  const token = cookies().get("token");
  const user = await getFetch("/profile/info", {
    Authorization: `Bearer ${token.value}`,
  });

  //   console.log(user);
  return (
    <div className="vh-70">
      <EditForm user={user} />
 
    </div>
  );
};

export default ProfilePage;
