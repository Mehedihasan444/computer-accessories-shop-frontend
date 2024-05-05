import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { useState } from "react";
import { FaCamera } from "react-icons/fa6";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { user } = useAuth();
  const { register, handleSubmit, watch, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const { data: userInfo, refetch } = useQuery({
    queryKey: ["userInfo", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}`);
      return res.data;
    },
  });
  

  const handleUploadClick = () => {
    document.getElementById("file-upload").click();
  };


  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data) => {
    if (data.image.length > 0) {
      const imageFile = { image: data.image[0] };
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
      if (res.data.success) {
        const info = {
          name: data.name,
          email: data.email,
          phone: data.phone,
          image: res.data.data.display_url,
        };
        const userRes = await axiosSecure.put(
          `/users/updateProfile/${userInfo.email}`,
          info
        );
        console.log(userRes.data);
        if (userRes.data.modifiedCount > 0) {
          // reset();
          toast.success("Profile updated successfully");
        } else {
          toast.error("Something went wrong!");
        }
      }
    } else if (data.image.length === 0) {

      const info = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        image: user.photoURL,
      };
      const userRes = await axiosSecure.put(
        `/users/updateProfile/${userInfo.email}`,
        info
      );
      console.log(userRes.data);
      if (userRes.data.modifiedCount > 0) {
        // reset();
        toast.success("Profile updated successfully");
      } else {
        toast.error("Something went wrong!");
      }
    }
  };



  return (
    <div className="flex justify-center items-center">
      <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">My Profile</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative flex flex-col justify-center items-center">
            <div className="mb-4 rounded-full h-28 w-28 border ">
              {selectedImage == null ? (
                <img
                  src={userInfo?.image}
                  // src={user.photoURL}
                  alt="Current Profile"
                  className="rounded-full h-28 w-28 object-cover mb-2"
                />
              ) : (
                <img
                  src={selectedImage}
                  // src={user.photoURL}
                  alt="Current Profile"
                  className="rounded-full h-28 w-28 object-cover mb-2"
                />
              )}
            </div>

            {/*  */}

            <div className="absolute bottom-5 right-28 bg-gray-300 p-2 rounded-full cursor-pointer">
              <FaCamera
                className="text-gray-500 "
                onClick={handleUploadClick}
              />
              <input
                id="file-upload"
                onChange={handleImageChange}
                className="file-upload absolute top-0 left-0 w-full h-full opacity-0"
                type="file"
                accept="image/*"
              />
            </div>

            {/*  */}
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="font-medium">
              Name:{" "}
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              name="name"
              defaultValue={userInfo?.name}
              className=" input-bordered input h-8 ml-2 w-3/4"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="font-medium">
              Email:{" "}
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              name="email"
              defaultValue={userInfo?.email}
              className="input-bordered input h-8 ml-2 w-3/4"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="font-medium">
              Phone Number:{" "}
            </label>
            <input
              {...register("phone")}
              type="tel"
              id="phone"
              name="phone"
              defaultValue={userInfo?.phone}
              className="input-bordered input h-8 ml-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="font-medium">
              Address:{" "}
            </label>
            <input
              {...register("address")}
              type="tel"
              id="address"
              name="address"
              defaultValue={userInfo?.address}
              className="input-bordered input h-8 ml-2"
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              //    onClick={updateProfile}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
