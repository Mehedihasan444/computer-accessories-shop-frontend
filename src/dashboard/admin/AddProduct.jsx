import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

// imagebb auth credentials
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const axiosPublic = useAxiosPublic();
  const onSubmit = async (data) => {

    //hosting the product image on imagebb and getting the direct link of the image
    const imageFile = { image: data.images[0] };

    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const new_product = {
        ...data,
        model: "",
        rating: 0,
        reviews: 0,
        images: [res.data.data.display_url],
      };
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
    <section className="bg-white ">
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
