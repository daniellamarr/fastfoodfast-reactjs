const onScroll = () => {
  window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      document.getElementById('home-header').className = 'hbg';
    } else {
      document.getElementById('home-header').className = '';
    }
  };
};

export default onScroll;
