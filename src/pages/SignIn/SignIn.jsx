import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
const SignIn = () => {
  const { signIn_with_email } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const navigate=useNavigate()
  const onSubmit = (data) => {
    signIn_with_email(data?.email, data?.password)
      .then((res) => {
        console.log(res);
        toast.success('Successfully SignIn!!!');
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
        toast.error('Something went wrong');
      });
  };
  return (
    <div>
      <div className="md:max-w-md mx-5 md:mx-auto">
        <form className=" space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
              {...register("password", { required: true })}
            />
          </label>
          <div className="">
            <input type="checkbox" />
            <span> Remember me</span>
          </div>
          <div className="">
            <button className="w-full btn">SignIn</button>
          </div>
          <Link to='/system-access/ForgotPassword'><h3 className="text-red-400">Lost your password?</h3></Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
