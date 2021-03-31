import React from 'react';
import styled from 'styled-components';

const PhotosArticle = styled.article`
  height: 17.5rem;
  position: relative;
  overflow: hidden;

  &:hover {
    .photos-info {
      transform: translateY(0);
    }
  }
`;

const PhotosImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

const PhotosInfo = styled.div`
  position: absolute;
  width: 100%;
  padding: 1rem;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  transform: translateY(100%);
  transition: all 0.3s linear;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const PhotosName = styled.h4`
  margin-bottom: 0.5rem;
`;
const PhotosLikes = styled.p`
  margin-bottom: 0;
`;

const PhotosUserImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
`;

const PhotosItem = ({
  urls: { regular },
  alt_description,
  likes,
  user: {
    name,
    portfolio_url,
    profile_image: { medium },
  },
}) => {
  return (
    <PhotosArticle>
      <PhotosImg src={regular} alt={alt_description} />
      <PhotosInfo className='photos-info'>
        <div>
          <PhotosName>Auther：{name}</PhotosName>
          <PhotosLikes>Likes：{likes}</PhotosLikes>
        </div>
        <a href={portfolio_url}>
          <PhotosUserImg src={medium} alt='' />
        </a>
      </PhotosInfo>
    </PhotosArticle>
  );
};

export default PhotosItem;
