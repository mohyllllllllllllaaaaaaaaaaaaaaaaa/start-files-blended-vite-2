import Text from '../components/Text/Text';
import Form from '../components/Form/Form';
import { useEffect, useState } from 'react';
import {getPhotos} from '../apiService/photos.js';
import Loader from '../components/Loader/Loader'
import PhotosGallery from '../components/PhotosGallery/PhotosGallery';
import Button from '../components/Button/Button.jsx';



const Photos = () => {
  const [query, setQuery]= useState('');
  const[page, setPage] = useState(1);
  const[loader, setLoader] = useState(false);
  const[images, setImages] = useState([]);
  const[error, setError] = useState(null);
  const[isEmpty, setIsEmpty] = useState(false);
  const[isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const abortControler = new  AbortController();
    if(!query){
      return}
    const fetchItems = async() => {
setLoader(true)

try{
  const {photos, per_page, total_results} = await getPhotos(query, page, abortControler.signal)
  if(!photos.length){
    return setIsEmpty(true);
  }
  setImages((prevImages) => [ ...prevImages, ...photos ])
  setIsVisible(page < Math.ceil(total_results / per_page))
}catch(error){
  if (error.name === 'CanceledError' || error.code === 'ERR_CANCELED') {
    console.log('Запит скасовано');
    return;
  }
  setError(error)

}finally{
  setLoader(false)
}

    }
    fetchItems();
    return () => {
      abortControler.abort();
    };
  },[page, query])

  const onHandelSubmit = value =>{
    setQuery(value)
    setImages([])
    setPage(1)
    setError(null)
    setIsEmpty(false)
    setIsVisible(false)
  }
  const loadMore = () =>{
    setPage(prevPage => prevPage + 1 )
  }
  return (
    <>
      <Text textAlign="center">Let`s begin search 🔎</Text>
      <Form onSubmit={onHandelSubmit}/>
      {!error && !isEmpty && !images.length && <Text textAlign='center'>Start search!</Text>}
      {loader && <Loader/> }
      {error && <Text textAlign='center'>Something went wrong!</Text>}
      {images.length > 0 && <PhotosGallery images={images}/>}
      {isVisible && images.length > 0 &&  <Button onClick= {loadMore} disabled={loader}> {loader ? "Loading..." : "Load more"}  </Button>}
      {isEmpty && ( <Text textAlign='center'>Dont found images!</Text>)}
    </>
  );
};

export default Photos;
