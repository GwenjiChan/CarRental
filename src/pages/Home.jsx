import {useRef, useState} from 'react'
import heroImg from '../images/heroImg.png'
import raize from '../images/raize.png'
import fortuner from '../images/fortuner.png'
import ranger from '../images/ranger.png'
import showcase from '../images/showcase.png'
import FAQ from '../images/FAQ.png'
import googlePlay from '../images/googleplay.png'
import appstore from '../images/appstore.png'
import appImg from '../images/app.png'

import Accordion from '../components/Accordion'

const Home = () => {
  const searchSectionRef = useRef(null);
  const [carTab, setCarTab] = useState("Toyota Raize")
  const [isOpen, setIsOpen] = useState(false);

  

  const scrollToSearchSection = () => {
    searchSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };


  const handleTabSelection = (tab) =>{
    console.log(tab)
    setCarTab(tab)
  }


  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const accordionData = [
    { title: '1. What is special about comparing rental car deals?', content: 'Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.' },
    { title: '2. How do I find the car rental deals?', content: 'You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.' },
    { title: '3. How do I find such low rental car prices?', content: 'Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.' },
  ];

  
// Accordion Component


  return (

    
    <>
    
        <section>
          <div className='container'>
             {/* Hero Section */}
              <div className='flex items-center justify-center mb-[100px] lg:mb-[300px]'>
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="font-semibold text-4xl text-gray-800 mb-4">Plan your trip now</h3>
                <h1 className="heading text-5xl font-bold mb-6">
                  Save <span className="text-emerald-500">big</span> with our car rental
                </h1>
                <p className="text-lg text-gray-600">
                  Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.
                </p>
                <button className='btn-2' onClick={scrollToSearchSection}>Book Ride</button>
              </div>
                <div className='w-3/4 hidden lg:block'>
                <img src={heroImg} alt="" className=''/>
                </div>
              </div>
            {/* Search Section */}
            <div  ref={searchSectionRef}  className='border-solid border-2 shadow-md h-auto p-10 mb-[150px] ' style={{ backgroundImage: 'url("http://pluspng.com/img-png/tire-track-png-hd-traxntrails-homepage-national-sports-center-for-the-disabled-1627.png")' }}>
                <h1 className='heading text-2xl font-bold mb-6'>Book a car</h1>
                <div className='grid grid-rows-1 lg:grid-cols-3 gap-2'>
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                      Select Your Car Type <span className="text-red-600">*</span>
                    </label>
                    <select
                      className="  w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 text-gray-700 "
                    >
                      <option>Select your car type</option>
                      <option>Toyota Raize</option>
                      <option>Ford Ranger</option>
                      <option>Toyota Fortuner</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                      Pick-up <span className="text-red-600">*</span>
                    </label>
                    <select
                      className="  w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 text-gray-700"
                    >
                      <option>Select Pick-up location</option>
                      <option>Pampanga</option>
                      <option>Bulacan</option>
                      <option>Manila</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                     Drop-off <span className="text-red-600">*</span>
                    </label>
                    <select
                      className=" w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 text-gray-700"
                    >
                      <option>Select Drop-off location</option>
                      <option>Pampanga</option>
                      <option>Bulacan</option>
                      <option>Manila</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                     Pick-up date <span className="text-red-600">*</span>
                    </label>
                    <input type="date" className='form__input' />
                  </div>
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                     Drop-off Date <span className="text-red-600">*</span>
                    </label>
                    <input type="date" className='form__input' />
                  </div>
                  <div>
                    <button className=' w-full btn-2'>Search</button>
                  </div>
                </div>
            </div>

            {/* Ads Section 1*/}
            <div className='mb-[150px]'>
              <div className='flex  flex-col items-center justify-center'>
                <h2 className='heading text-2xl font-semibold mb-2'>Plan your trip now</h2>
                <h1 className='heading text-5xl font-bold mb-6'>Quick & easy car rental</h1>
              </div>
              <div className=' grid grind-rows-1 lg:grid-cols-3 gap-6'>
                <div className='text-center'>
                  <h1 className='heading text-2xl font-bold mb-2'>Select Car</h1>
                  <p className=' text__para text-base'>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
                </div>
                <div className='text-center'>
                  <h1 className='heading text-2xl font-bold mb-2'>Contact Operator</h1>
                  <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
              </div>
              <div className='text-center'>
                  <h1 className='heading text-2xl font-bold mb-2'>Let's Drive</h1>
                  <p className='text__para text-base'>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
              </div>
              </div>
            </div>
             {/* Rental Fleet Section*/}
             <div>
              <div className='flex  flex-col items-center justify-center mb-6'>
                  <h2 className='heading text-2xl font-semibold mb-2'>Vehicle Models</h2>
                  <h1 className='heading text-5xl font-bold '>Our rental fleet</h1>
                  <p className='w-1/3 text__para text-center'>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
                </div>
                <div className="flex flex-col lg:flex-row">
                  {/* Left Div */}
                  <div className="w-full lg:w-2/6 p-4">
                    <ul className='flex flex-col gap-3'>
                      <li 
                      onClick={() => handleTabSelection("Toyota Raize")}
                      className={`p-5 cursor-pointer text-xl font-semibold ${carTab === "Toyota Raize" ? 'bg-emerald-600 text-white' : 'bg-gray-100 hover:bg-emerald-600 hover:text-white'}`}

                      >Toyota Raize</li>
                      <li 
                       onClick={() => handleTabSelection("Ford Ranger")}
                       className={`p-5 cursor-pointer text-xl font-semibold ${carTab === "Ford Ranger" ? 'bg-emerald-600 text-white' : 'bg-gray-100 hover:bg-emerald-600 hover:text-white'}`}
                      >Ford Ranger</li>
                      <li 
                       onClick={() => handleTabSelection("Toyota Fortuner")}
                       className={`p-5 cursor-pointer text-xl font-semibold ${carTab === "Toyota Fortuner" ? 'bg-emerald-600 text-white' : 'bg-gray-100 hover:bg-emerald-600 hover:text-white'}`}
                      >Toyota Fortuner</li>
                    </ul>
                  </div>
                  
                  {/* Middle Div */}
                  <div className="w-full lg:w-3/6 p-4">
                    {carTab === "Toyota Raize" ? <img src={raize} alt=""  /> :''}
                    {carTab === "Ford Ranger" ? <img src={ranger} alt=""  /> :''}
                    {carTab === "Toyota Fortuner" ? <img src={fortuner} alt=""  /> :''}
                  </div>
                  
                  {/* Right Div */}
                  <div className="w-full lg:w-2/6 p-4">
                  <div><h1 className='w-full text-center text-2xl font-bold text-white bg-emerald-600 p-2'>₱1500 /day Rent</h1></div>
                  {carTab === 'Toyota Raize' ?
                  
                  <table className="table-auto w-full text-left border-collapse border border-gray-300">
                    <tbody>
                      <tr className="bg-gray-100">
                        <td className="p-4 border border-gray-300 font-semibold">Model</td>
                        <td className="p-4 border border-gray-300">Raize</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-gray-300 font-semibold">Mark</td>
                        <td className="p-4 border border-gray-300">Toyota</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="p-4 border border-gray-300 font-semibold">Year</td>
                        <td className="p-4 border border-gray-300">2024</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-gray-300 font-semibold">Transmission</td>
                        <td className="p-4 border border-gray-300">Automatic</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="p-4 border border-gray-300 font-semibold">Gasoline</td>
                        <td className="p-4 border border-gray-300">Unleaded</td>
                      </tr>
                    </tbody>
                  </table>
                  : ''}
                  {carTab === 'Ford Ranger' ?
                  
                  <table className="table-auto w-full text-left border-collapse border border-gray-300">
                    <tbody>
                      <tr className="bg-gray-100">
                        <td className="p-4 border border-gray-300 font-semibold">Model</td>
                        <td className="p-4 border border-gray-300">Ranger</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-gray-300 font-semibold">Mark</td>
                        <td className="p-4 border border-gray-300">Ford</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="p-4 border border-gray-300 font-semibold">Year</td>
                        <td className="p-4 border border-gray-300">2024</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-gray-300 font-semibold">Transmission</td>
                        <td className="p-4 border border-gray-300">Automatic</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="p-4 border border-gray-300 font-semibold">Gasoline</td>
                        <td className="p-4 border border-gray-300">Diesel</td>
                      </tr>
                    </tbody>
                  </table>
                  : ''}
                  {carTab === 'Toyota Fortuner' ?
                  
                  <table className="table-auto w-full text-left border-collapse border border-gray-300">
                    <tbody>
                      <tr className="bg-gray-100">
                        <td className="p-4 border border-gray-300 font-semibold">Model</td>
                        <td className="p-4 border border-gray-300">Fortuner</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-gray-300 font-semibold">Mark</td>
                        <td className="p-4 border border-gray-300">Toyota</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="p-4 border border-gray-300 font-semibold">Year</td>
                        <td className="p-4 border border-gray-300">2024</td>
                      </tr>
                      <tr>
                        <td className="p-4 border border-gray-300 font-semibold">Transmission</td>
                        <td className="p-4 border border-gray-300">Automatic</td>
                      </tr>
                      <tr className="bg-gray-100">
                        <td className="p-4 border border-gray-300 font-semibold">Gasoline</td>
                        <td className="p-4 border border-gray-300">Diesel Premium</td>
                      </tr>
                    </tbody>
                  </table>
                  : ''}
                  <button className=' w-full text-center text-white text-2xl font-semibold bg-emerald-600 p-2 mt-2 shadow-md' onClick={scrollToSearchSection}>RESERVE NOW</button>
                  </div>
                </div>
             </div>
            
          </div>
           {/* Banner Section */}
           <div className='bg-stone-800 my-[100px] p-10'>
                    <h1 className='text-center text-5xl font-bold text-white mb-4'>Save big with our cheap car rental!</h1>
                    <p className='text-center text-2xl font-semibold text-white'>Top Airports. Local Suppliers. <span className='text-emerald-500'>24/7</span> Support.</p>
             </div>
          <div className='container'> 
            {/* Showcase Section */}
            <div>
              <div className='flex items-center justify-center'>
                <img src={showcase} alt="" />
              </div>
              <div className='flex flex-col lg:flex-row mt-10'>
                    <div className='w-full lg:w-1/2 px-10'>
                      <h2 className='text-2xl font-bold	'>Why Choose Us</h2>
                      <h1 className='heading'>Best valued deals you will ever find</h1>
                      <p className='text__para leading-7'>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
                    </div>
                    <div className='w-full lg:w-1/2 px-10'>
                      <ul>
                        <li className='mb-2'>
                          <h1 className='text-2xl font-bold	'>Cross Country Drive</h1>
                          <p className='text__para leading-[20px]'>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
                        </li>
                        <li className='mb-2'>
                          <h1 className='text-2xl font-bold	'>All Inclusive Pricing</h1>
                          <p className='text__para leading-[20px]'>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
                        </li>
                        <li className='mb-2'>
                          <h1 className='text-2xl font-bold	'>No Hidden Charges</h1>
                          <p className='text__para leading-[20px]'>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
                        </li>
                      </ul>
                    </div>
              </div>
            </div>

          </div>
          {/* Testimonial Section */}
          <div className='bg-gray-100	h-auto mt-[100px] w-full py-[100px]'>
            <div className='container flex flex-col  items-center justify-center '>
                  <h2 className='text-2xl font-semibold'>Reviewed by People</h2>
                  <h1 className='heading'>Client's Testimonials</h1>
                  <p className=' w-1/2 text__para leading-[25px] text-center'>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
            </div>
            <div className='container flex  flex-col lg:flex-row  gap-6 mt-5'>
            <div className='w-full lg:w-1/2'>
                  <div className='border border-solid-2 shadow-md p-10 bg-white h-auto lg:h-[250px]'>
                      <div className='flex flex-col'>
                          <div>
                              <h1 className='text-2xl font-semibold'>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</h1>
                          </div>
                          <div className='flex mt-3 gap-2 items-center'>
                              <div>
                                <img src="https://olison.co.uk/wp-content/uploads/2018/02/testimonial-avatar-1-1024x910.jpg" alt="" className='w-auto h-[50px] rounded-full'/>
                              </div>
                              <div>
                                  <h1 className='font-bold text-xl'>Cristian Salazar</h1>
                                  <p className='text__para'>Pampanga</p>
                              </div>
                          </div>
                      </div>
                  </div>

                </div>
                <div className='w-full lg:w-1/2'>
                  <div className='border border-solid-2 shadow-md p-10 bg-white h-auto lg:h-[250px]'>
                      <div className='flex flex-col'>
                          <div>
                              <h1 className='text-2xl font-semibold'>"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"</h1>
                          </div>
                          <div className='flex mt-10 gap-2 items-center'>
                              <div>
                                <img src="https://tse1.mm.bing.net/th?id=OIP.APW_gSlDSVRojhiUfiu1_QHaHa&pid=Api&P=0&h=220" alt="" className='w-auto h-[50px] rounded-full'/>
                              </div>
                              <div>
                                  <h1 className='font-bold text-xl'>Clyde Salazar</h1>
                                  <p className='text__para'>Pampanga</p>
                              </div>
                          </div>
                      </div>
                  </div>

                </div>
                
            </div>

          </div>
          {/* FAQ Section */}
            <div className='mt-[100px] relative'>
            <div className='container flex flex-col items-center justify-center  z-10'>
                <h2 className='text-2xl font-semibold'>FAQ</h2>
                <h1 className='heading'>Frequently Asked Questions</h1>
                <p className='w-1/2 text__para leading-[25px] text-center'>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
              </div>

              {/* Background Image */}
              <div className='absolute top-0 left-0 w-full h-full -z-10'>
                <img src={FAQ} alt="" className='w-auto h-full object-cover opacity-5' />
              </div>

              {/* Accordion Section */}
              <div className='container w-1/3  z-10 mt-10'>
                <div className='mb-[150px]'>
                  <Accordion items={accordionData} /> 
                </div>
              </div>
          </div>
          {/* Download Section */}
          <div className='bg-gray-100 py-[50px] relative'>
              <div className='container px-[100px] flex flex-row'>
                <div className='w-full lg:w-1/2'>
                  <h1 className='heading'>Download our app to get most out of it</h1>
                  <p className='text__para'>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
                    <div className='mt-2 flex flex-col lg:flex-row  items-start lg:items-center gap-3'>
                      <img src={googlePlay} alt="" className='cursor-pointer '/>
                      <img src={appstore} alt="" className='cursor-pointer '/>
                    </div>
                </div>
              </div>
              <div >
                <img src={appImg} alt="" className='hidden lg:block absolute right-[200px] bottom-0'/>
              </div>
          </div>
        </section>

    </>
  )
}

export default Home