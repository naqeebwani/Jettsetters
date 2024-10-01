import React, { useEffect, useState, lazy, Suspense } from 'react'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom';
import PopupModal from './components/shared/PopupModal';
import Loader from './components/shared/Loader';
import Plane from './assets/gif/trip.gif';
import Ship from './assets/gif/ship2.gif';
import { getSearchAirportToken } from './utils/GetAirport';


const FlightsPage = lazy(() => import('./pages/FlightsPage'));
const Cruise = lazy(() => import('../src/pages/Cruise'));
const CovidFAQ = lazy(() => import('./pages/CovidFAQ'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Packages = lazy(() => import('./pages/Packages'));
const Hajj = lazy(() => import('./pages/Hajj'));
const Dubai = lazy(() => import('./pages/Dubai'));
const DubaiActivities = lazy(() => import('./pages/DubaiActivities'));
const RamMandir = lazy(() => import('./pages/RamMandir'));
const Europe = lazy(() => import('./pages/Europe'));
const Kashmir = lazy(() => import('./pages/Kashmir'));
const NorthEast = lazy(() => import('./pages/NorthEast'));
const Georgia = lazy(() => import('./pages/Georgia'));
const DarjeelingSikkimDetailPage = lazy(() => import('./pages/DarjeelingSikkimDetailPage'));
const PackageDetails = lazy(() => import('./pages/PackageDetails'));

const setTokenToSession = async () => {
  const token = await getSearchAirportToken();
  sessionStorage.setItem('token', token);
}
// console.log(sessionStorage.getItem('token'))

const App = () => {
  const [firstPop, setFirstPop] = useState(false);
  const [open, setOpen] = useState(true);
  const { pathname } = useLocation();
  useEffect(() => {
    if (sessionStorage.getItem('popModal') !== 'true') {
      setFirstPop(true);
    }
    sessionStorage.setItem('popModal', 'true');
    if (!sessionStorage.getItem('token')) {
      setTokenToSession();
    }
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className='App overflow-x-hidden'>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* <Route path='/' element={<Cruise />} />
          <Route path='/flight' element={<FlightsPage />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/covid-19' element={<CovidFAQ />} />
          <Route path='/terms-conditions' element={<TermsConditions />} />
          <Route path='/packages' element={<Packages />} />
          <Route path='/packages/hajj&umrah' element={<Hajj />} />
          <Route path='/packages/dubai' element={<Dubai />} />
          <Route path='/packages/dubai/activities' element={<DubaiActivities />} />
          <Route path='/packages/ram-mandir-tour' element={<RamMandir />} />
          <Route path='/packages/europe' element={<Europe />} />
          <Route path='/packages/kashmir' element={<Kashmir />} />
          <Route path='/packages/north-east' element={<NorthEast />} />
          <Route path='/packages/georgia' element={<Georgia />} />
          <Route path='packages/north-east/darjeeling-sikkim' element={<DarjeelingSikkimDetailPage />} />
          <Route path='/packages/kashmir/:package' element={<PackageDetails />} /> */}
          <Route path='*' element={<div className='min-h-screen flex justify-center items-center text-5xl font-bold'>404 Not Found</div>} />
        </Routes>
      </Suspense>

      {/* <Suspense fallback={<Loader />} >
        {firstPop && (
          <PopupModal
            setOpen={setOpen}
            open={open}
            firstPop={firstPop}
            setFirstPop={setFirstPop}
            title={pathname === '/flight' ? "Flights" : "/" ? "Cruise" : "best Packages"}
            img={pathname === '/' ? Plane : Ship}
          />
        )}
      </Suspense> */}
    </div>
  )
}

export default App;