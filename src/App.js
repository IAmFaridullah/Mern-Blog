import Header from './components/Header';
import SectionHeader from './components/SectionHeader';
import Body from './components/Body';
import ArticleDetailsBody from './components/ArticleDetailsBody';
import ArticlesContainer from './components/ArticlesContainer';
import Footer from './components/Footer.jsx';
import ArticleDetails from './components/ArticleDetails';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
        <>
        <BrowserRouter>
          <Header/>
            <Switch>
              <Route path="/" exact>
                  <Body>   
                  <SectionHeader heading="Recent Articles"/>
                  <ArticlesContainer/>
                  <SectionHeader heading="Popular Articles"/>
                  <ArticlesContainer/>
                  </Body>
              </Route>
              <Route path="/article-detail">
                  <ArticleDetailsBody>
                    <ArticleDetails/>
                  </ArticleDetailsBody>
              </Route>
            </Switch>  
          <Footer />
        </BrowserRouter>
        </> 
    )
}

export default App;
