
import TripCard from '../components/TripCard';
import Header from '../components/Header';
import FlightDetails from '../components/FlightDetails';
import AccommodationCard from '../components/AccommodationCard';
import ActivityCard from '../components/ActivityCard';
import ActivitiesSection from '../components/ActivitiesSection';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

const HomePage = ({ mode, toggleMode }) => {
   const { state } = useLocation();
  const { location, duration, travelGroup } = state || {};
  
  return (
    <div className={` ${mode === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-black'}`}>
      
      {/* Page Content */}
      <Header mode={mode} toggleMode={toggleMode} />
      <TripCard 
        location={location} 
        duration={duration} 
        travelGroup={travelGroup} 
      />
      <FlightDetails 
       location={location} />
      <AccommodationCard mode={mode} />
      <ActivityCard mode={mode} />
      <ActivitiesSection mode={mode} />
      <Footer mode={mode} />
    </div>
  );
};

export default HomePage;
