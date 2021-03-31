import React, { useState, useEffect } from 'react';
import {
  PhotosPage,
  SearchSection,
  SearchForm,
  SearchInput,
  SearchButton,
  PhotoSection,
  PhotoCenter,
  LoadingText,
} from './PhotoStyle';
import PhotosItem from 'components/Photos/PhotosItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const ClientID = `?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;
const MainUrl = 'https://api.unsplash.com/photos/';
const SearchUrl = 'https://api.unsplash.com/search/photos/';

const Photos = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState('');

  const fetchImages = async () => {
    setLoading(true);
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;
    let url = '';
    if (query) {
      url = `${SearchUrl}${ClientID}${urlPage}${urlQuery}`;
    } else {
      url = `${MainUrl}${ClientID}${urlPage}`;
    }
    try {
      const response = (await fetch(url)).json();
      response.then((resolve) => {
        console.log(page);
        setPhotos((oldPhotos) => {
          if (query && page === 1) {
            return resolve.results;
          } else if (query) {
            return [...oldPhotos, ...resolve.results];
          } else {
            return [...oldPhotos, ...resolve];
          }
        });
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 20
      ) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });
    return () => window.removeEventListener('scroll', event);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    fetchImages();
  };

  return (
    <PhotosPage>
      <SearchSection>
        <SearchForm>
          <SearchInput
            onChange={handleSearch}
            value={query}
            placeholder='Search'
          />
          <SearchButton type='submit' onClick={handleSubmit}>
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </SearchButton>
        </SearchForm>
      </SearchSection>
      <PhotoSection>
        <PhotoCenter>
          {photos.map((image) => {
            return <PhotosItem key={image.id} {...image}></PhotosItem>;
          })}
        </PhotoCenter>
        {loading && <LoadingText>Loading</LoadingText>}
      </PhotoSection>
    </PhotosPage>
  );
};

export default Photos;
