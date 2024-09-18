import LeafletMap from './Components/Map/LeafletMap';
import SearchInput from './Components/Filters/SearchInput';
import SelectOptions from './Components/Filters/SelectOptions';
import Provider from './Components/Context/FilterProvider';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
        <div className='provider'>
          <Provider>
            <SelectOptions />
            <SearchInput />
            <LeafletMap />
          </Provider>
        </div>
    </div>
  );
}

export default App;