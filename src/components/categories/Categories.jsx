import ac from '../../assets/services/AC.png'
import laptop from '../../assets/services/laptop.png'
import tv from '../../assets/services/tv.png'
import lapAcessories from '../../assets/services/laptop-accessories.png'
import headphone from '../../assets/services/headphone.png'
import earbuds from '../../assets/services/earbuds.png'
import drone from '../../assets/services/drone.png'
import bluethoot from '../../assets/services/bt-speaker.png'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { DataContext } from '../../DataProvider/DataProvider'


const Categories = () => {
    const mystyle = {
        backgroundColor: "#F2F4F8",
        padding: "20px",
        borderRadius: "10px"
      };
const {setSearchValue}=useContext(DataContext)
const navigate=useNavigate()

const handleSubmit = async (category) => {
    setSearchValue(category)
    navigate("/products");
  };
    return (
        <div className=" space-y-3 my-20 lg:mb-20">
            <h1 className="text-3xl md:text-4xl font-bold md:mb-2 text-center">Explore Our Category</h1>
            <p className="text-center">Get Your Desired Product from Featured Category!</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center items-center gap-3 lg:mx-52 pt-10 px-5">
                
                <div onClick={()=>handleSubmit('AC')} style={mystyle}  className='flex flex-col justify-center items-center hover:scale-105 hover:text-warning font-semibold hover:cursor-pointer'>
                    <img src={ac} alt="air condisonar" />
                    <p>AC</p>
                </div>
                <div onClick={()=>handleSubmit('Laptop')} style={mystyle} className='flex flex-col justify-center items-center hover:scale-105 hover:text-warning font-semibold hover:cursor-pointer'>
                    <img src={laptop} alt="air condisonar" />
                    <p>Laptop</p>
                </div>
                <div onClick={()=>handleSubmit('air condisonar')} style={mystyle} className='flex flex-col justify-center items-center hover:scale-105 hover:text-warning font-semibold hover:cursor-pointer'>
                    <img src={tv} alt="air condisonar" />
                    <p>TV</p>
                </div>
                <div onClick={()=>handleSubmit('Accessories')} style={mystyle} className='flex flex-col justify-center items-center hover:scale-105 hover:text-warning font-semibold hover:cursor-pointer'>
                    <img src={lapAcessories} alt="Accessories" />
                    <p className='text-center'>Accessories</p>
                </div>
                <div onClick={()=>handleSubmit('Headphone')} style={mystyle} className='flex flex-col justify-center items-center hover:scale-105 hover:text-warning font-semibold hover:cursor-pointer'>
                    <img src={headphone} alt="air condisonar" />
                    <p>Headphone</p>
                </div>
                <div onClick={()=>handleSubmit('Ear-buds')} style={mystyle} className='flex flex-col justify-center items-center hover:scale-105 hover:text-warning font-semibold hover:cursor-pointer'>
                    <img src={earbuds} alt="air condisonar" />
                    <p>Ear-buds</p>
                </div>
                <div onClick={()=>handleSubmit('Speaker')} style={mystyle} className='flex flex-col justify-center items-center hover:scale-105 hover:text-warning font-semibold hover:cursor-pointer'>
                    <img src={bluethoot} alt="air condisonar" />
                    <p>Speaker</p>
                </div>
                <div onClick={()=>handleSubmit('Drone')} style={mystyle} className='flex flex-col justify-center items-center hover:scale-105 hover:text-warning font-semibold hover:cursor-pointer'>
                    <img src={drone} alt="air condisonar" />
                    <p>Drone</p>
                </div>
                <div onClick={()=>handleSubmit('Speaker')} style={mystyle} className='flex flex-col justify-center items-center hover:scale-105 hover:text-warning font-semibold hover:cursor-pointer'>
                    <img src={bluethoot} alt="air condisonar" />
                    <p>Speaker</p>
                </div>
                <div onClick={()=>handleSubmit('Speaker')} style={mystyle} className='flex flex-col justify-center items-center hover:scale-105 hover:text-warning font-semibold hover:cursor-pointer'>
                    <img src={bluethoot} alt="air condisonar" />
                    <p>Speaker</p>
                </div>
            </div>
        </div>
    );
};

export default Categories;

