import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import Banner from './components/Banner/Banner';
import { Filters } from './components/Filters/Filters';
import { Footer } from './components/Footer/Footer';
import { Offerbox } from './components/Offerbox/Offerbox';
import { selectFilter } from './redux/reducers/filterReducer';

function App() {
  const [data, setData] = useState<any>([]);
  const { stars } = useSelector(selectFilter);

  useEffect(() => {
    console.log('sda')
    fetch("https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG")
      .then(res => res.json())
      .then(res => {
        setData(res)
      })
  }, [])

  const filteredData = data.filter((hotel: { starRating: string; }) => parseInt(hotel.starRating) >= stars);

  const OfferBoxes = filteredData.map((datas: any, i: number) => <Offerbox key={i} data={datas} />);

  return (
    <div className="App">
      <Banner />
      <div className="MainContentContainer">
        <Filters />
        <div className="ContentContainer">
          {OfferBoxes}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
