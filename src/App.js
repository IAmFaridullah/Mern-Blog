import Header from './components/Header';
import SectionHeader from './components/SectionHeader';
import Body from './components/Body';
import ArticlesContainer from './components/ArticlesContainer';
import Footer from './components/Footer.jsx';

function App() {
  return (
        <>
        <Header/>
          <Body>   
          <SectionHeader heading="Recent Articles"/>
          <ArticlesContainer/>
          <SectionHeader heading="Popular Articles"/>
          <ArticlesContainer/>
          </Body>
        <Footer />
        </> 
    )
}

export default App;
