
import { useParams } from 'react-router-dom';
import Review from './Review';
import RatingStar from '../../Utilities/RatingStar/RatingStar';
import ReviewForm from './ReviewForm';
// Assuming ProductCard component is defined elsewhere
// Assuming Review component is defined elsewhere

const Reviews = () => {
  // Assuming the product ID is retrieved from the URL params
  const { productId } = useParams();

  // Mock product data (replace with actual data fetch)
  const product = {
    id: productId,
    name: 'Example Product',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus ligula ut magna ullamcorper, sit amet dapibus turpis congue.',
    imageUrl: 'https://via.placeholder.com/150',
    averageRating: 4.5,
    reviews: [
      { id: 1, user: 'User1', rating: 4, comment: 'Great product!' },
      { id: 2, user: 'User2', rating: 5, comment: 'Excellent quality.' },
      // Add more sample reviews
    ],
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Product Reviews</h1>
      
     

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Average Rating: <span> <RatingStar Rating_value={product.averageRating}/></span> </h2>
        {/* Display star rating component */}
        
        {/* You can use a library like react-rating-stars-component */}
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">User Reviews</h2>
        {product.reviews.map(review => (
          <Review key={review.id} review={review} />
        ))}
      </div>

      {/* Add a form to allow users to submit reviews */}
      {/* This form could include fields for rating and comment */}
      <ReviewForm/>
    </div>
  );
};

export default Reviews;
