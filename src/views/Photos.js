import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const ClientID = `?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;
const MainUrl = 'https://api.unsplash.com/photos/';
const SearchUrl = 'https://api.unsplash.com/search/photos/';

const PhotosPage = styled.main``;

const Photos = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const fetchImages = async () => {
    setLoading(true);
    let url = `${MainUrl}${ClientID}`;
    try {
      const response = fetch(url);
      const data = (await response).json();
      console.log(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return <PhotosPage>Photos</PhotosPage>;
};

export default Photos;
