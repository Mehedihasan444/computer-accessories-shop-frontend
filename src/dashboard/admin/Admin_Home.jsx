import { CiUser } from "react-icons/ci";

import { TbUsersGroup } from "react-icons/tb";
import { IoDocumentTextOutline } from "react-icons/io5";
import Chart_2 from "../../components/Charts/Chart_2";
import Chart_1 from "../../components/Charts/Chart_1";
const Admin_Home = () => {
    return (
        <div className="lg:w-[calc(100vw-380px)] py-10 px-5 bg-slate-200">
      <div className="sm:flex gap-10 justify-center items-center ">
        <div className="flex-1 shadow-md rounded-md p-5 bg-white ">
          <div className="flex justify-center items-center gap-5 ">
            <div className="text-5xl rounded-md p-3 bg-red-200 text-red-500">
              <CiUser />
            </div>
            <h1 className="text-6xl font-bold">874</h1>
          </div>
          <div className="">
            <progress
              className="progress progress-accent w-full"
              value="40"
              max="100"
            ></progress>
          </div>
          <h2 className="text-2xl font-bold">No. Sold</h2>
        </div>
        <div className="flex-1 shadow-md rounded-md p-5 bg-white">
          <div className="flex justify-center items-center gap-5 ">
            <div className="text-5xl rounded-md p-3 bg-green-200 text-green-500">
              <TbUsersGroup />
            </div>
            <h1 className="text-6xl font-bold">874</h1>
          </div>
          <div className="">
            <progress
              className="progress progress-accent w-full"
              value="40"
              max="100"
            ></progress>
          </div>
          <h2 className="text-2xl font-bold">Users</h2>
        </div>
        <div className="flex-1 shadow-md rounded-md p-5 bg-white">
          <div className="flex justify-center items-center gap-5 ">
            <div className="text-5xl rounded-md p-3 bg-blue-200 text-blue-500">
              <IoDocumentTextOutline />
            </div>
            <h1 className="text-6xl font-bold">874</h1>
          </div>
          <div className="">
            <progress
              className="progress progress-accent w-full"
              value="40"
              max="100"
            ></progress>
          </div>
          <h2 className="text-2xl font-bold">Orders</h2>
        </div>
      </div>
      <div className="sm:flex gap-10 justify-center items-center my-14">
        <div className="flex-1 shadow-md rounded-md space-y-3 p-5 bg-white">
          <h2 className="text-2xl font-bold">Users</h2>
          <hr />
          <Chart_1 />
        </div>
        <div className="flex-1 shadow-md rounded-md space-y-3 p-5 bg-white">
          <h2 className="text-2xl font-bold">Orders</h2>
          <hr />
          <Chart_2 />
        </div>
      </div>
    </div>
    );
};

export default Admin_Home;