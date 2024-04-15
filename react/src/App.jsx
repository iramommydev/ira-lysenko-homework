import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Button from './components/Button/Button';
import List from './components/List/List';

const App = () => {
  const previous = () => {
    console.log('return to previous page');
  };
  return (
    <>
      <Header />
      <Banner />
      <Button color='lightblue' text='Previous' onClick={previous}></Button>
      <Button color='lightblue' text='Next'></Button>
      <Button color='grey' href='#' text='Private policy'></Button>
      <List></List>
    </>
  );
};

export default App;
