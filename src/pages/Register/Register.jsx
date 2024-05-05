import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
const photo =
  "https://www.libarts.colostate.edu/wp-content/uploads/2018/02/userphoto.png";
const Register = () => {
  const { create_user_with_email, update_profile, sendEmailVerification, user, loading } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    // checking if the password contain atleast one leter, one number and has 8 charecter (Regex)
    if (/"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"/.test(data?.password)){
      create_user_with_email(data?.email, data?.password)
        .then((res) => {
          console.log("after mail verification", res);
          // updating user profile
          update_profile(data?.name, photo)
            .then(() => {
              axiosPublic.post("/users", { ...data, image: photo, phone: '+8801xxxxxxxxx', no_orders: 0, total_spend: 0, role: 'user',address:'' }).then((res) => {
                console.log(res.data);
                if (res.data.insertedId) {
                  toast.success("Registration Complete!!!");
                  navigate("/");
                } else {
                  toast.error(`${res.data.message}`);
                }
              });
            });
          // sending verification link
          if (!loading) {
            sendEmailVerification(user)
              .then(() => {
                toast.success('Email verification link send');
                navigate('/')
              })
              .catch((error) => {
                toast.success(`${error}`);
              });
          } else return <h1 className="text-4lx font-semibold">loading...</h1>;

        })
        .catch((err) => {
          console.log(err);
          toast.error(`Error : ${err.code}`);
        });

    }else{
      // showing toast error if the password is not strong enough
      toast.error("password: minimum eight characters, at least one letter and one number")
    }
  };

  return (
    <div>
      <div className="max-w-md mx-5 md:mx-auto  ">
        <form className=" space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Username *</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              {...register("name", { required: true })}
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Email address *</span>
            </div>
            <input
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full "
              {...register("email", { required: true })}
            />
          </label>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Password *</span>
            </div>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full "
              {...register("password", {
                required: true,
                maxLength: 16,
                minLength: 3,
              })}
            />
          </label>
          <p className="">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span className="text-red-400">privacy policy</span>.
          </p>
          <div className="">
            <button className="w-full btn">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
