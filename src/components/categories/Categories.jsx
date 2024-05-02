
const Categories = () => {
    return (
        <div className="lg:mb-10">
            <h1 className="text-4xl font-bold mb-2">Our Good Categories</h1>
            <hr />
            <div className="grid grid-cols-3 gap-5 mt-5">
                <div className="w-full  rounded-lg flex  justify-start  row-span-2 sm:h-[60vh] cursor-pointer" style={{
                    backgroundImage: `url('https://new-ella-demo.myshopify.com/cdn/shop/files/h9s1-custom-image-banner-1_370x.jpg?v=1639976027')`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}>
                    <div className="space-y-2 ml-10 pt-3">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2 uppercase mt-10">smartPhones{'>'}</h2>
                        <p className="text-lg font-bold text-gray-900 mb-4">$199</p>
                    </div>
                </div>
                <div className="w-full  rounded-lg flex  justify-start items-center  cursor-pointer" style={{
                    backgroundImage: `url('https://new-ella-demo.myshopify.com/cdn/shop/files/h9s1-custom-image-banner-2_370x.jpg?v=1639976027')`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}>
                    <div className="space-y-2 ml-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2 uppercase">Tablets{'>'}</h2>
                        <p className="text-lg font-bold text-gray-900 mb-4">$399</p>
                    </div>
                </div>
                <div className="w-full  rounded-lg flex  justify-start items-center cursor-pointer" style={{
                    backgroundImage: `url('https://new-ella-demo.myshopify.com/cdn/shop/files/h9s1-custom-image-banner-3_370x.jpg?v=1639976027')`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}>
                    <div className="space-y-2 ml-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2 uppercase">LapTops{'>'}</h2>
                        <p className="text-lg font-bold text-gray-900 mb-4">$199</p>
                    </div>
                </div>
                <div className="w-full  rounded-lg flex  justify-start items-center  cursor-pointer" style={{
                    backgroundImage: `url('https://new-ella-demo.myshopify.com/cdn/shop/files/h9s1-custom-image-banner-4_370x.jpg?v=1639976027')`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}>
                    <div className="space-y-2 ml-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2 uppercase">HeadPhones{'>'}</h2>
                        <p className="text-lg font-bold text-gray-900 mb-4">$199</p>
                    </div>
                </div>
                <div className="w-full  rounded-lg flex  justify-start items-center cursor-pointer" style={{
                    backgroundImage: `url('https://new-ella-demo.myshopify.com/cdn/shop/files/h9s1-custom-image-banner-5_370x.jpg?v=1639976027')`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}>
                    <div className="space-y-2 ml-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2 uppercase">smart tv{'>'}</h2>
                        <p className="text-lg font-bold text-gray-900 mb-4">$199</p>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default Categories;

