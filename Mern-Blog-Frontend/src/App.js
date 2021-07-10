import { useReducer, useState} from 'react';

import Header from './components/Header';
import SectionHeader from './components/SectionHeader';
import Body from './components/Body';
import ArticleDetailsBody from './components/ArticleDetailsBody';
import ArticlesContainer from './components/ArticlesContainer';
import Footer from './components/Footer.jsx';
import ArticleDetails from './components/ArticleDetails';
import NewArticle from './components/NewArticle';

import blogContext from './context/blogContext';
import reducer from './context/reducer';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import uuid from 'react-uuid';


function App() {
const [initialState, ] = useState({
    blogs : [],
    sideBarBlogs : [],
    comments : [],
    updated : false,
    activeBlogId : null
})


const [state , dispatch] = useReducer(reducer, initialState);



  return (
        <>
        <blogContext.Provider value={[state , dispatch]} >
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
              <Route path="/new-article" exact>
                   <NewArticle/>
              </Route>
              <Route path="/category/Technology" exact>
                  <Body>   
                  <SectionHeader heading='Technology Articles' />
                  <ArticlesContainer key='1' category='Technology'/>
                  </Body>
              </Route>
              <Route path="/category/Security" exact>
                  <Body>   
                  <SectionHeader heading='Security Articles'/>
                  <ArticlesContainer key='2' category='Security'/>
                  </Body>
              </Route>
              <Route path="/category/Programming" exact>
                  <Body>   
                  <SectionHeader heading='Programming Articles'/>
                  <ArticlesContainer key='3' category='Programming'/>
                  </Body>
              </Route>
              <Route path="/article-detail/:title">
                  <ArticleDetailsBody>
                    <ArticleDetails/>
                  </ArticleDetailsBody>
              </Route>
            </Switch>  
          <Footer />
        </BrowserRouter>
        </blogContext.Provider>
        </> 
    )
}

export default App;
