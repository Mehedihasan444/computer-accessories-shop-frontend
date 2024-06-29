import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";
import { FaCamera } from "react-icons/fa6";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();



  const { data: userInfo, refetch } = useQuery({
    queryKey: ["userInfo", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}`);
      return res.data;
    },
  });




  useEffect(() => {
    if (userInfo) {
      setFormData({
        name: userInfo.name || "",
        email: userInfo.email || "",
        phone: userInfo.phone || "",
        address: userInfo.address || "",
      });
    }
  }, [userInfo]);




  const handleUploadClick = () => {
    document.getElementById("file-upload").click();
  };


  
  let img = null;
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    img = file
    setSelectedImage(file);
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imageUrl = userInfo?.image;
    let info = {};

    if (selectedImage) {
      const imageFile = { image: img };
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        imageUrl = res.data.data.display_url;
      } else {
        toast.error("Image upload failed!");
        return;
      }

      info = {
        ...formData,
        image: imageUrl,
      };
    } else {
      info = {
        ...formData,
      };
    }

    const userRes = await axiosSecure.patch(
      `/users/updateProfile/${userInfo?.email}`,
      info
    );

    if (userRes.data.modifiedCount > 0) {
      toast.success("Profile updated successfully");
      refetch();
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">My Profile</h2>

        <form onSubmit={handleSubmit}>
          <div className="relative flex flex-col justify-center items-center">
            <div className="mb-4 rounded-full h-28 w-28 border ">
              {selectedImage == null ? (
                <img
                  src={userInfo?.image}
                  alt="Current Profile"
                  className="rounded-full h-28 w-28 object-cover mb-2"
                />
              ) : (
                <img
                  src={selectedImage}
                  alt="Selected Profile"
                  className="rounded-full h-28 w-28 object-cover mb-2"
                />
              )}
            </div>

            <div className="absolute bottom-5 right-28 bg-gray-300 p-2 rounded-full cursor-pointer">
              <FaCamera className="text-gray-500" onClick={handleUploadClick} />
              <input
                id="file-upload"
                onChange={handleImageChange}
                className="file-upload absolute top-0 left-0 w-full h-full opacity-0"
                type="file"
                accept="image/*"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="font-medium">
              Name:{" "}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="input-bordered input h-8 ml-2 w-3/4"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="font-medium">
              Email:{" "}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="input-bordered input h-8 ml-2 w-3/4"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="font-medium">
              Phone Number:{" "}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="input-bordered input h-8 ml-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="font-medium">
              Address:{" "}
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="input-bordered input h-8 ml-2"
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
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

// import { useState, useEffect } from "react";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import useAuth from "../../Hooks/useAuth";
// import { toast } from "react-toastify";
// import { FaCamera } from "react-icons/fa6";

// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

// const Profile = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: ""
//   });
//   const { user } = useAuth();
//   const axiosSecure = useAxiosSecure();
//   const axiosPublic = useAxiosPublic();

//   const { data: userInfo, refetch } = useQuery({
//     queryKey: ["userInfo", user?.email],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/users/${user?.email}`);
//       return res.data;
//     },
//   });

//   useEffect(() => {
//     if (userInfo) {
//       setFormData({
//         name: userInfo.name || "",
//         email: userInfo.email || "",
//         phone: userInfo.phone || "",
//         address: userInfo.address || ""
//       });
//     }
//   }, [userInfo]);

//   const handleUploadClick = () => {
//     document.getElementById("file-upload").click();
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedImage(file);
//     const reader = new FileReader();

//     reader.onload = () => {
//       setSelectedImage(reader.result);
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let imageUrl = userInfo?.image;
//     let info = {};

//     if (selectedImage) {
//       const formData = new FormData();
//       formData.append('image', selectedImage);

//       const res = await axiosPublic.post(image_hosting_api, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       if (res.data.success) {
//         imageUrl = res.data.data.display_url;
//       } else {
//         toast.error("Image upload failed!");
//         return;
//       }
//       info = {
//         ...formData,
//         image: imageUrl,
//       };
//     } else {
//       info = {
//         ...formData,
//       };
//     }

//     const userRes = await axiosSecure.patch(`/users/updateProfile/${userInfo.email}`, info);

//     if (userRes.data.modifiedCount > 0) {
//       toast.success("Profile updated successfully");
//       refetch();
//     } else {
//       toast.error("Something went wrong!");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center">
//       <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded shadow-md">
//         <h2 className="text-2xl font-semibold mb-4 text-center">My Profile</h2>

//         <form onSubmit={handleSubmit}>
//           <div className="relative flex flex-col justify-center items-center">
//             <div className="mb-4 rounded-full h-28 w-28 border ">
//               {selectedImage == null ? (
//                 <img
//                   src={userInfo?.image}
//                   alt="Current Profile"
//                   className="rounded-full h-28 w-28 object-cover mb-2"
//                 />
//               ) : (
//                 <img
//                   src={selectedImage}
//                   alt="Selected Profile"
//                   className="rounded-full h-28 w-28 object-cover mb-2"
//                 />
//               )}
//             </div>

//             <div className="absolute bottom-5 right-28 bg-gray-300 p-2 rounded-full cursor-pointer">
//               <FaCamera
//                 className="text-gray-500"
//                 onClick={handleUploadClick}
//               />
//               <input
//                 id="file-upload"
//                 onChange={handleImageChange}
//                 className="file-upload absolute top-0 left-0 w-full h-full opacity-0"
//                 type="file"
//                 accept="image/*"
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label htmlFor="name" className="font-medium">
//               Name:{" "}
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               className="input-bordered input h-8 ml-2 w-3/4"
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="email" className="font-medium">
//               Email:{" "}
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className="input-bordered input h-8 ml-2 w-3/4"
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="phone" className="font-medium">
//               Phone Number:{" "}
//             </label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleInputChange}
//               className="input-bordered input h-8 ml-2"
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="address" className="font-medium">
//               Address:{" "}
//             </label>
//             <input
//               type="text"
//               id="address"
//               name="address"
//               value={formData.address}
//               onChange={handleInputChange}
//               className="input-bordered input h-8 ml-2"
//             />
//           </div>

//           <div className="mb-4">
//             <button
//               type="submit"
//               className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//             >
//               Update Profile
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import { useForm } from "react-hook-form";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import useAuth from "../../Hooks/useAuth";
// import { toast } from "react-toastify";
// import { useState } from "react";
// import { FaCamera } from "react-icons/fa6";

// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

// const Profile = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const { user } = useAuth();
//   const { register, handleSubmit, reset } = useForm();
//   const axiosSecure = useAxiosSecure();
//   const axiosPublic = useAxiosPublic();

//   const { data: userInfo, refetch } = useQuery({
//     queryKey: ["userInfo", user?.email],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/users/${user?.email}`);
//       return res.data;
//     },
//   });

//   const handleUploadClick = () => {
//     document.getElementById("file-upload").click();
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     setSelectedImage(file);
//     const reader = new FileReader();

//     reader.onload = () => {
//       setSelectedImage(reader.result);
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const onSubmit = async (data) => {
//     let imageUrl = userInfo?.image;
//     let info ={}
//     if (selectedImage) {
//       const formData = new FormData();
//       formData.append('image', selectedImage);

//       const res = await axiosPublic.post(image_hosting_api, formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       if (res.data.success) {
//         imageUrl = res.data.data.display_url;
//       } else {
//         toast.error("Image upload failed!");
//         return;
//       }
//      info = {
//       name: data.name,
//       email: data.email,
//       phone: data.phone,
//       address: data.address,
//       image: imageUrl,
//     }
//     }else{
//        info = {
//         name: data.name,
//         email: data.email,
//         phone: data.phone,
//         address: data.address,

//       }
//     }

//     const userRes = await axiosSecure.patch(`/users/updateProfile/${userInfo.email}`, info);

//     if (userRes.data.modifiedCount > 0) {
//       toast.success("Profile updated successfully");
//       refetch();
//     } else {
//       toast.error("Something went wrong!");
//     }

//   };

//   return (
//     <div className="flex justify-center items-center">
//       <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded shadow-md">
//         <h2 className="text-2xl font-semibold mb-4 text-center">My Profile</h2>

//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="relative flex flex-col justify-center items-center">
//             <div className="mb-4 rounded-full h-28 w-28 border ">
//               {selectedImage == null ? (
//                 <img
//                   src={userInfo?.image}
//                   alt="Current Profile"
//                   className="rounded-full h-28 w-28 object-cover mb-2"
//                 />
//               ) : (
//                 <img
//                   src={selectedImage}
//                   alt="Selected Profile"
//                   className="rounded-full h-28 w-28 object-cover mb-2"
//                 />
//               )}
//             </div>

//             <div className="absolute bottom-5 right-28 bg-gray-300 p-2 rounded-full cursor-pointer">
//               <FaCamera
//                 className="text-gray-500"
//                 onClick={handleUploadClick}
//               />
//               <input
//                 id="file-upload"
//                 onChange={handleImageChange}
//                 className="file-upload absolute top-0 left-0 w-full h-full opacity-0"
//                 type="file"
//                 accept="image/*"
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label htmlFor="name" className="font-medium">
//               Name:{" "}
//             </label>
//             <input
//               {...register("name")}
//               type="text"
//               id="name"
//               name="name"
//               defaultValue={userInfo?.name}
//               className="input-bordered input h-8 ml-2 w-3/4"
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="email" className="font-medium">
//               Email:{" "}
//             </label>
//             <input
//               {...register("email")}
//               type="email"
//               id="email"
//               name="email"
//               defaultValue={userInfo?.email}
//               className="input-bordered input h-8 ml-2 w-3/4"
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="phone" className="font-medium">
//               Phone Number:{" "}
//             </label>
//             <input
//               {...register("phone")}
//               type="tel"
//               id="phone"
//               name="phone"
//               defaultValue={userInfo?.phone}
//               className="input-bordered input h-8 ml-2"
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="address" className="font-medium">
//               Address:{" "}
//             </label>
//             <input
//               {...register("address")}
//               type="text"
//               id="address"
//               name="address"
//               defaultValue={userInfo?.address}
//               className="input-bordered input h-8 ml-2"
//             />
//           </div>

//           <div className="mb-4">
//             <button
//               type="submit"
//               className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//             >
//               Update Profile
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import { useForm } from "react-hook-form";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import useAuth from "../../Hooks/useAuth";
// import { toast } from "react-toastify";
// import { useState } from "react";
// import { FaCamera } from "react-icons/fa6";

// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

// const Profile = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
//   const { user } = useAuth();
//   const { register, handleSubmit, watch, reset } = useForm();
//   const axiosSecure = useAxiosSecure();
//   const axiosPublic = useAxiosPublic();

//   const { data: userInfo, refetch } = useQuery({
//     queryKey: ["userInfo", user?.email],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/users/${user?.email}`);
//       return res.data;
//     },
//   });

//   const handleUploadClick = () => {
//     document.getElementById("file-upload").click();
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onload = () => {
//       setSelectedImage(reader.result);
//     };

//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const onSubmit = async (data) => {

//     data.image=[]
//     if (data.image) {
//       const imageFile = { image: data.image[0] };
//       const res = await axiosPublic.post(image_hosting_api, imageFile, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       console.log(res.data);
//       if (res.data.success) {
//         const info = {
//           name: data.name,
//           email: data.email,
//           phone: data.phone,
//           image: res.data.data.display_url,
//         };
//         const userRes = await axiosSecure.put(
//           `/users/updateProfile/${userInfo.email}`,
//           info
//         );
//         console.log(userRes.data);
//         if (userRes.data.modifiedCount > 0) {
//           // reset();
//           toast.success("Profile updated successfully");
//         } else {
//           toast.error("Something went wrong!");
//         }
//       }
//     } else  {

//       const info = {
//         name: data.name,
//         email: data.email,
//         phone: data.phone,
//         image: user.photoURL,
//       };
//       const userRes = await axiosSecure.put(
//         `/users/updateProfile/${userInfo.email}`,
//         info
//       );
//       console.log(userRes.data);
//       if (userRes.data.modifiedCount > 0) {
//         // reset();
//         toast.success("Profile updated successfully");
//       } else {
//         toast.error("Something went wrong!");
//       }
//     }
//   };

//   return (
//     <div className="flex justify-center items-center">
//       <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded shadow-md">
//         <h2 className="text-2xl font-semibold mb-4 text-center">My Profile</h2>

//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="relative flex flex-col justify-center items-center">
//             <div className="mb-4 rounded-full h-28 w-28 border ">
//               {selectedImage == null ? (
//                 <img
//                   src={userInfo?.image}
//                   // src={user.photoURL}
//                   alt="Current Profile"
//                   className="rounded-full h-28 w-28 object-cover mb-2"
//                 />
//               ) : (
//                 <img
//                   src={selectedImage}
//                   // src={user.photoURL}
//                   alt="Current Profile"
//                   className="rounded-full h-28 w-28 object-cover mb-2"
//                 />
//               )}
//             </div>

//             {/*  */}

//             <div className="absolute bottom-5 right-28 bg-gray-300 p-2 rounded-full cursor-pointer">
//               <FaCamera
//                 className="text-gray-500 "
//                 onClick={handleUploadClick}
//               />
//               <input
//                 id="file-upload"
//                 onChange={handleImageChange}
//                 className="file-upload absolute top-0 left-0 w-full h-full opacity-0"
//                 type="file"
//                 accept="image/*"
//               />
//             </div>

//             {/*  */}
//           </div>

//           <div className="mb-4">
//             <label htmlFor="name" className="font-medium">
//               Name:{" "}
//             </label>
//             <input
//               {...register("name")}
//               type="text"
//               id="name"
//               name="name"
//               defaultValue={userInfo?.name}
//               className=" input-bordered input h-8 ml-2 w-3/4"
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="email" className="font-medium">
//               Email:{" "}
//             </label>
//             <input
//               {...register("email")}
//               type="email"
//               id="email"
//               name="email"
//               defaultValue={userInfo?.email}
//               className="input-bordered input h-8 ml-2 w-3/4"
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="phone" className="font-medium">
//               Phone Number:{" "}
//             </label>
//             <input
//               {...register("phone")}
//               type="tel"
//               id="phone"
//               name="phone"
//               defaultValue={userInfo?.phone}
//               className="input-bordered input h-8 ml-2"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="phone" className="font-medium">
//               Address:{" "}
//             </label>
//             <input
//               {...register("address")}
//               type="tel"
//               id="address"
//               name="address"
//               defaultValue={userInfo?.address}
//               className="input-bordered input h-8 ml-2"
//             />
//           </div>

//           <div className="mb-4">
//             <button
//               type="submit"
//               //    onClick={updateProfile}
//               className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//             >
//               Update Profile
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Profile;
