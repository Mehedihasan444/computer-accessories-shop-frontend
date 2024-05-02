import { useQuery } from "@tanstack/react-query";
import Wishlist_Card from "../../components/Wishlist_Card/Wishlist_Card";

const Wishlist = () => {
    const { isPending, error, data:products=[] } = useQuery({
        queryKey: ['data'],
        queryFn: () =>
          fetch('/products.json')
          .then((res) =>
            res.json(),
          ),
      })
    return (
        <section className="min-h-screen " id="products">
              <p className="text-center">....</p>
      <h1 className="text-center text-4xl font-bold">Wishlist({products?.length})</h1>
      
        <div className="grid grid-cols-1 my-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {products?.map((product) => (
            <Wishlist_Card key={product.id} product={product} />
          ))}
  
      </div>
        </section>
    );
};

export default Wishlist;