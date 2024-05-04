import { FaFacebook, FaGithub } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Social_login = () => {
  const { signIn_Google } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handle_google_login = () => {
    signIn_Google()
      .then((result) => {
       
        const userInfo = {
          name: result.user.displayName,
          email: result.user.email,
          image: result.user.photoURL,
          role: "user",
          phone:'+8801xxxxxxxxx',
          no_orders:0,
          total_spend: 0,
          password:''
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            toast.success("Your account is registered successfully");
          }
          navigate(location?.state || "/");
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };
  return (
    <>
      <div className=" flex text-4xl  justify-center items-center gap-5 ">
        <AiFillGoogleCircle
          className="cursor-pointer"
          onClick={handle_google_login}
        />
        <FaFacebook className="cursor-pointer" />
      </div>
      <div className="divider ">signIn with</div>
    </>
  );
};

export default Social_login;
