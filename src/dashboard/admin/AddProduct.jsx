import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// imagebb auth credentials
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const [warranty, setWarranty] = useState("");
  // Generate a unique ID for the warranty
  const [warrantyId] = useState(uuidv4());

  //A function that return  the date after that given years from the current date.
  function getDateAfterYears(years) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const targetYear = currentYear + years;
    const targetDate = new Date(
      targetYear,
      currentDate.getMonth(),
      currentDate.getDate()
    );
    return targetDate;
  }


  const onSubmit = async (data) => {
    const targetDate = getDateAfterYears(data.warranty_Duration);

    //hosting the product image on imagebb and getting the direct link of the image
    const imageFile = { image: data.images[0] };

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    let new_product = {};
    if (res.data.success) {
      if (warranty) {
        new_product = {
          ...data,
          model: "",
          rating: 0,
          reviews: 0,
          images: [res.data.data.display_url],
          warranty: {
            available: warranty,
            warranty_id: warrantyId,
            years: data.warranty_Duration,
            duration: targetDate,
            Conditions: " ",
          },
        };
      } else {
        const { warranty_Duration, ...rest } = data;

        new_product = {
          ...rest,
          model: "",
          rating: 0,
          reviews: 0,
          images: [res.data.data.display_url],
          warranty: {
            available: false,
          },
        };
      }
      //   Post product information on database
      const productInfo = await axiosPublic.post("/products", new_product);

      if (productInfo?.data?.insertedId) {
        toast.success("Product Successfully added!!!");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <section className="bg-white h-screen overflow-y-auto w-full">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-10 text-2xl font-bold text-black ">
          Add a new product
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="w-full">
              <label
                name="name"
                className="block mb-2 text-sm font-medium text-black"
              >
                Product name:
              </label>
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                id="name"
                className="input input-bordered input-accent w-full bg-transparent"
                placeholder="Type product name"
                required=""
              />
            </div>
            <div>
              <label
                name="category"
                className="block mb-2 text-sm font-medium text-black"
              >
                Category
              </label>
              <select
                name="category"
                {...register("category", { required: true })}
                className="input input-bordered input-accent w-full bg-transparent"
              >
                <option selected="" disabled>
                  Select a category
                </option>
                <option value="Smart Phone">Smart Phone</option>
                <option value="Tablets">Tablets</option>
                <option value="Laptops">Laptops</option>
                <option value="HeadPhones">HeadPhones</option>
                <option value="Smart TV">Smart TV</option>
              </select>
            </div>
            <div>
              <label
                name="brand"
                className="block mb-2 text-sm font-medium text-black"
              >
                Brand
              </label>
              <select
                name="brand"
                {...register("brand", { required: true })}
                className="input input-bordered input-accent w-full bg-transparent"
              >
                <option selected="" disabled>
                  Select a brand
                </option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Oppo">Oppo</option>
                <option value="Vivo">Vivo</option>
                <option value="OnePlus TV">OnePlus TV</option>
              </select>
            </div>
            <div>
              <label
                name="brand"
                className="block mb-2 text-sm font-medium text-black"
              >
                Tag
              </label>
              <select
                name="tag"
                {...register("tag", { required: true })}
                className="input input-bordered input-accent w-full bg-transparent"
              >
                <option selected="" disabled>
                  Select a tag
                </option>
                <option value="new_arrivals">new_arrivals</option>
                <option value="top_selling">top_selling</option>
                <option value="featured">featured</option>
              </select>
            </div>
            <div className="w-full">
              <label
                name="images"
                className="block mb-2 text-sm font-medium text-black"
              >
                Select Product Image
              </label>

              <input
                type="file"
                id="images"
                name="images"
                {...register("images", { required: true })}
                className="input pt-2 input-bordered input-accent w-full bg-transparent"
              />
            </div>

            <div className="w-full">
              <label
                name="name"
                className="block mb-2 text-sm font-medium text-black"
              >
                Price
              </label>
              <input
                type="text"
                name="price"
                {...register("price", { required: true })}
                id="price"
                className="input input-bordered input-accent w-full bg-transparent"
                placeholder="$2500"
                required=""
              />
            </div>
            <div className="w-full">
              <label
                name="discount_price"
                className="block mb-2 text-sm font-medium text-black"
              >
                {" "}
                Discount price
              </label>
              <input
                type="number"
                name="discount_price"
                {...register("discount_price", { required: true })}
                id="discount_price"
                className="input input-bordered input-accent w-full bg-transparent"
                placeholder="$2999"
                required=""
              />
            </div>
            <div className="w-full">
              <label
                name="stock"
                className="block mb-2 text-sm font-medium text-black"
              >
                In Stock
              </label>
              <input
                type="number"
                defaultValue={0}
                {...register("stock", { required: true })}
                name="stock"
                id="stock"
                className="input input-bordered input-accent w-full bg-transparent"
                placeholder="0"
                required=""
              />
            </div>
            <div>
              <label
                name="category"
                className="block mb-2 text-sm font-medium text-black"
              >
                Warranty
              </label>
              <select
                name="warranty"
                value={warranty}
                onChange={(e) => setWarranty(e.target.value)}
                // {...register("warranty", { required: true })}
                className="input input-bordered input-accent w-full bg-transparent"
              >
                <option selected="" disabled>
                  Select a Warranty
                </option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>

            <div>
              <label
                name="category"
                className="block mb-2 text-sm font-medium text-black"
              >
                Warranty Duration
              </label>
              <select
                disabled={warranty === "false"}
                name="warranty_Duration"
                {...register("warranty_Duration", { required: true })}
                className="input input-bordered input-accent w-full bg-transparent"
              >
                <option selected="" disabled>
                  Select a Warranty Duration
                </option>
                <option value="4">4 years</option>
                <option value="3">3 year</option>
                <option value="2">2 years</option>
                <option value="1">1 year</option>
                <option value="0.5">6 months</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                name="description"
                className="block mb-2 text-sm font-medium text-black"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                {...register("description", { required: true })}
                rows="8"
                className="input input-bordered input-accent w-full bg-transparent h-24"
                placeholder="Your description here"
              ></textarea>
            </div>
          </div>
          <button className="bg-[#1CA774] inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
            Add product
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
