"use client";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

const Profile = () => {
  const router = useRouter();

  // logout handler
  const OnLogOutHandler = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      toast.success(response.data.message);
      router.push("/login");
    } catch (error: any) {
      toast.error(error.response.data.error);
    }
  };

  // profile Detail Handler

  const OnDetailHandler = async ()=>{
    const response = await axios.get("/api/users/user");
     return response.data.user
  }

  useEffect(()=>{
    OnDetailHandler().then((res)=>{
      setUser(res)
  }).catch(err=>{
      console.log(err)
  })
  }, [])

  const [user, setUser] = useState({email:'', username:'', _id:''})

  return (
    <section className=" bg-gray-50 dark:bg-gray-900 flex font-medium items-center justify-center h-screen">
      <section className="w-96 mx-auto bg-white dark:bg-gray-800 rounded-2xl px-10 py-8 shadow-lg">
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm">{user._id}</span>
          <span className="text-emerald-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </span>
        </div>

        <div className="mt-8 ">
          <h2 className="dark:text-white text-gray-700 font-bold text-2xl tracking-wide">
            {user.username} <br /> Name
          </h2>
        </div>
        <p className="text-emerald-400 font-semibold mt-2.5">Active</p>

        <div className="h-1 w-full bg-gray-200 mt-8 rounded-full">
          <div className="h-1 rounded-full w-2/5 dark:bg-yellow-500 bg-gray-500"></div>
        </div>
        <div className="mt-3 text-white text-sm">
          <span className="text-gray-400 font-semibold">Storage:</span>
          <span>40%</span>
        </div>

        <div className="flex justify-between gap-x-2">
        <button
          onClick={OnLogOutHandler}
          className="w-full text-white font-medium rounded-lg text-md px-5 py-3.5 text-center bg-teal-600 cursor-pointer disabled:opacity-50 flex items-center justify-center my-3"
        >
          Logout
        </button>
        <Link
          href={`/profile/${user._id}`}
          className="w-full text-white font-medium rounded-lg text-md px-5 py-3.5 text-center bg-teal-600 cursor-pointer disabled:opacity-50 flex items-center justify-center my-3"
        >
          Detail
        </Link>
        </div>
      </section>
    </section>
  );
};

export default Profile;
