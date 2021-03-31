import styled from 'styled-components';
import { MEDIA_QUERY_MD, MEDIA_QUERY_SM } from 'constant/BreakPoint';

export const PhotosPage = styled.main``;

export const SearchSection = styled.section`
  padding: 2rem 0 0 0;
  width: 50vw;
  max-width: 1024px;
  margin: 0 auto;
`;

export const SearchForm = styled.form`
  display: flex;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1.25rem;
  border: none;
  text-transform: capitalize;
  letter-spacing: 0.1rem;
  font-size: 1.5rem;
  background: transparent;
  color: hsl(210, 22%, 49%);
  border-bottom: 3px solid hsl(210, 22%, 49%);

  &::placeholder {
    color: hsl(210, 22%, 49%);
  }
`;

export const SearchButton = styled.button`
  padding: 0.75rem 1.25rem;
  border: none;
  text-transform: capitalize;
  letter-spacing: 0.1rem;
  font-size: 1.5rem;
  background: transparent;
  color: hsl(210, 22%, 49%);
  border-bottom: 3px solid hsl(210, 22%, 49%);
`;

export const PhotoSection = styled.section`
  padding: 2rem 0;
`;

export const PhotoCenter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 1rem;

  ${MEDIA_QUERY_MD} {
    grid-template-columns: 1fr 1fr;
  }

  ${MEDIA_QUERY_SM} {
    grid-template-columns: 1fr;
  }
`;

export const LoadingText = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  padding: 3rem;
`;
