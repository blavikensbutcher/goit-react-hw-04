import './App.css';
import { SearchBar } from './SearchBar/SearchBar.jsx';
import { useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery.jsx';
import { getImages } from '../js/api.js';

function App() {
  const [response, setResponse] = useState([]);
  const [loader, setLoader] = useState(false);

  async function searchImages(query) {
    try {
      const fetchedData = await getImages(query);
      setResponse(fetchedData.data.results);
    } catch (e) {
    } finally {
    }
  }

  return (
    <>
      <SearchBar onSearch={searchImages} />
      <ImageGallery data={response} />
    </>
  );
}

export default App;
