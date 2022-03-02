import { useEffect, useState } from 'react';
import './App.scss';
import Banner from './components/Banner/Banner';
import { Filters } from './components/Filters/Filters';
import { Footer } from './components/Footer/Footer';
import { Offerbox } from './components/Offerbox/Offerbox';

function App() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetch("https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG")
      .then(res => res.json())
      .then(res => {
        setData(res)
      })
  }, [])

  console.log(data);
  const OfferBoxes = data.map((datas: any, i: number) => <Offerbox key={i} data={datas} />)

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
