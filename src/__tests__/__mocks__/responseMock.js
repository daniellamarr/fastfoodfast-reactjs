/* eslint-disable import/prefer-default-export */
export const getMenuMock = [
  {
    id: 39,
    title: 'PP\'s food',
    price: '850',
    quantity: '6',
    image: `https://res.cloudinary.com/daniel-lamarr/image/upload/
      v1549718043/uploads/jwqmpuh81hgat5wu9l3x.png`,
  },
  {
    id: 6,
    title: 'Spaghetti',
    price: '2000',
    quantity: '34',
    image: `https://res.cloudinary.com/daniel-lamarr/image/upload/
      v1539291318/uploads/ttr4c5cota4wsdh3xfeh.jpg`,
  },
];

export const loginMock = {
  token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwia2V5IjoiZGFua
    WVsY2hpZGllYmVsZUBnbWFpbC5jb20iLCJpYXQiOjE1NTE5MzU3MjEsImV4cCI6MTU1Mj
    AyMjEyMX0.Oz5UxWNz5GCYsaFRbNOrrakl958Sia4gM0GBcerkSEA`,
  user: {
    name: 'Daniel Lamarr',
    email: 'danielchidiebele@gmail.com',
    phone: '8135270797',
    address: 'Egbeda, Lagos',
  },
};

export const signupMock = {
  status: 'success',
  message: 'Your sign up was successful',
  token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzIsImlhdCI6MTU1MTkzNj
  UzNywiZXhwIjoxNTUyMDIyOTM3fQ.PaHiGTMcWnD1ukoNFM31xhXANud806yb7vR4V0RD_6k`,
};

export const errorSignupMock = {
  status: 'error',
  message: 'Name field cannot be left empty',
};

export const errorLoginMock = {
  status: 'error',
  message: 'Incorrect username or password',
};
