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
  token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwia2V5IjoiZ
    GFuaWVsY2hpZGllYmVsZUBnbWFpbC5jb20iLCJpYXQiOjE1NTE5NzM4MTcsImV4cC
    I6MTU1MjA2MDIxN30.pAhIcLUhd9K0w1vof78x676BcVaXGnPPc7OevsrTFgI`,
  user: {
    name: 'Daniel Lamarr',
    email: 'danielchidiebele@gmail.com',
    phone: '8135270797',
    address: 'Egbeda, Lagos',
  },
};

export const unauthLogin = {
  status: 'error',
  message: 'No token Provided',
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

export const getSingleMenuMock = {
  id: 39,
  title: 'PP\'s food',
  price: '850',
  quantity: '6',
  image: `https://res.cloudinary.com/daniel-lamarr/image/upload/
    v1549718043/uploads/jwqmpuh81hgat5wu9l3x.png`,
};

export const cartItems = [
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

export const userOrders = [
  {
    id: 51,
    price: '5000',
    status: 'new',
    food: [
      {
        id: 71,
        orderid: 'African Recipe',
        quantity: 1,
      },
    ],
  },
  {
    id: 41,
    price: '26600',
    status: 'complete',
    food: [
      {
        id: 48,
        orderid: 'Shawarma',
        quantity: 3,
      },
      {
        id: 49,
        orderid: 'Spaghetti',
        quantity: 5,
      },
      {
        id: 50,
        orderid: 'African Recipe',
        quantity: 2,
      },
    ],
  },
];
