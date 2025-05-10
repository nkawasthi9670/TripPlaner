import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faChildren, faLocationDot, faPerson, faUsers } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Plan = ({ mode, toggleMode }) => {

  const navigate = useNavigate();

  
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("");
  const [travelGroup, setTravelGroup] = useState('');
  const [savedLocation, setSavedLocation] = useState("");
 

  const handleContinue = async () => {
    try {
      // API call to save the plan
      const response = await axios.post('http://localhost:5000/api/plan', {
        location,
        duration,
        travelGroup,
      });

      // Check if the API call was successful
      if (response.data.success) {
        alert('Plan saved successfully!');

        setSavedLocation(location); 
        // Redirect to homepage with the new data 
        navigate('/home', {
        state: {
         location,
        duration,
        travelGroup
        }
       });
      }
    } catch (error) {
      console.error('Error saving plan:', error);
      alert('Please Fill the details');
    }
  };
 

  return (
    <div className={`h-screen ${mode === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-black'}`}>


      <div className="max-w-3xl mx-auto p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
          Plan Your Journey, Your Way!
        </h1>
        <p className="text-lg mb-8 text-center">
          Let's create your personalized travel experience
        </p>
     
        <div className="space-y-6">
          {/* Location */}
          <div className='relative'>
            <p className="text-sm font-medium mb-1">
              Where would you like to go?
            </p>
            {location === "" && (
              <FontAwesomeIcon
                icon={faLocationDot}
                className={`absolute mt-6 ml-3 transform -translate-y-1/2 ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
              />
            )}
            <input
              type="text"
              value={location}
              required
              onChange={(e) => setLocation(e.target.value)}
              placeholder="     Enter location"
              className={`w-full ${mode === 'dark' ? 'bg-gray-600' : ''} border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
          </div>

          {/* Duration */}
          <div className='relative'>
            <p className="text-sm font-medium mb-1">
              How long will you stay?
            </p>
            {duration === "" && (
              <FontAwesomeIcon
                icon={faCalendar}
                className={`absolute mt-3 left-3 top-1/2 transform -translate-y-1/2 ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
              />
            )}
            <input
              type="text"
              value={duration}
              required
              onChange={(e) => setDuration(e.target.value)}
              placeholder="     Enter duration"
              className={`w-full ${mode === 'dark' ? 'bg-gray-600' : ''} border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400`}
            />
          </div>

          {/* Travel Group */}
          <div>
            <p className="text-sm font-medium mb-2">
              Who are you travelling with?
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {/* Solo */}
              <button 
              onClick={() => setTravelGroup('Solo')}
              className={`flex items-center gap-2 border ${mode === 'dark' ? 'bg-gray-600' : ''} border-gray-300 rounded-lg py-2 px-4 text-sm w-full justify-center focus:ring-2 focus:ring-blue-300`}>
                <FontAwesomeIcon icon={faPerson} className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}  />
                Solo
              </button>

              {/* Couple */}
              <button 
              onClick={() => setTravelGroup('Couple')}
              className={`flex items-center gap-2 border ${mode === 'dark' ? 'bg-gray-600' : ''} border-gray-300 rounded-lg py-2 px-4 text-sm w-full justify-center focus:ring-2 focus:ring-blue-300`}>
                <FontAwesomeIcon icon={faChildren} className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}  />
                Couple
              </button>

              {/* Family */}
              <button 
              onClick={() => setTravelGroup('Family')}
              className={`flex items-center gap-2 border ${mode === 'dark' ? 'bg-gray-600' : ''} border-gray-300 rounded-lg py-2 px-4 text-sm w-full justify-center focus:ring-2 focus:ring-blue-300`}>
                <FontAwesomeIcon icon={faChildren} className={`${mode === 'dark' ? 'text-white' : 'text-black'}`}  />
                Family
              </button>

              {/* Friends */}
              <button 
              onClick={() => setTravelGroup('Friends')}
              className={`flex items-center gap-2 border ${mode === 'dark' ? 'bg-gray-600' : ' '} border-gray-300 rounded-lg py-2 px-4 text-sm w-full justify-center focus:ring-2 focus:ring-blue-300`}>
                <FontAwesomeIcon icon={faUsers} className={`${mode === 'dark' ? 'text-white' : 'text-black'}`} />
                Friends
              </button>
            </div>
          </div>

          {/* Continue Button */}
         <div className="flex justify-center gap-4 mt-4">
          <button
           onClick={handleContinue}
           className="bg-blue-500 w-40 hover:bg-blue-600 text-white font-semibold  rounded-xl transition-all"
          >
           Continue
          </button>

           <button
           onClick={toggleMode}
           className="bg-blue-500 w-40 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all"
            >
           {mode === 'light' ? 'Dark' : 'Light'}
           </button>
         </div>

        </div>
      </div>
    </div>
  );
};

export default Plan;
