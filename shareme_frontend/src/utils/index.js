import jwt_decode from 'jwt-decode';

export const createOrGetUser = (response) => {
  const decoded = jwt_decode(response.credential);
  localStorage.setItem('user', JSON.stringify(decoded));

  const { name, sub, picture } = decoded;

  const doc = {
    _id: sub,
    _type: 'user',
    userName: name,
    image: picture,
  };

  return doc;
};
