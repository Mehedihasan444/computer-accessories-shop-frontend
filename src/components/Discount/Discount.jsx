

const Discount = () => {
    return (
        <div className="flex justify-between items-center my-20 bg-[#FFE9C2] p-10 rounded-md">
            <div className="space-y-5 flex-1">
                <p className="text-lg font-thin">EXCLUSIVE HEADPHONE</p>
                <h1 className="text-6xl font-bold">Discounts 50% On All Headphone</h1>
                <button className="btn bg-red-500 text-white">Shop Now</button>
            </div>
            <div className="flex-1">
                <img src="https://media.product.which.co.uk/prod/images/original/3620def07c61-headphone-comp-2.jpg" alt="" className="transform transition-transform duration-300 ease-in-out hover:scale-105" />
            </div>
        </div>
    );
};

export default Discount;