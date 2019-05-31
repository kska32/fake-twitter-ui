import React,{Component} from 'react';

import './App.scss';

import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {Grid} from 'semantic-ui-react';

import ProfileCard from './Components/ProfileCard/ProfileCard';
import TrendsCard from './Components/TrendsCard/TrendsCard';
import FollowerRcmd from './Components/FollowerRcmd/FollowerRcmd';
import FooterCard from './Components/FooterCard/FooterCard';
import TweetBox from './Components/TweetBox/TweetBox';
import NewsStreamCard from './Components/NewsStreamCard/NewsStreamCard';
import GotoTop from './Components/GotoTop/GotoTop';

import uuidv1 from 'uuid/v1';

interface IState {
    newsStreamCardQueue: Array<string>,
    isLoading: boolean
}
interface IProps{

}

export class App extends Component <IProps,IState> {
    constructor(props:IProps){
          super(props);
          this.state= {
              newsStreamCardQueue:['0','1','2','3'],
              isLoading: false
          }
          console.log('Twitter-Faker V1.0.0');
          console.log('Coded by kska32@gmail.com - 2019');
    }

    componentDidMount(){
        let {newsStreamCardQueue} = this.state;

        let observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting) {
                    this.setState({isLoading: true})
                    setTimeout(()=>{
                        newsStreamCardQueue.push(uuidv1());
                        newsStreamCardQueue.push(uuidv1());
                        newsStreamCardQueue.push(uuidv1());
                        newsStreamCardQueue.push(uuidv1());
                        this.setState({newsStreamCardQueue, isLoading: false});
                    },1000)

                }
            });
        });

        observer.observe(document.querySelector('.theBottom') as Element);
    }

    render(){ 
          let {newsStreamCardQueue, isLoading} = this.state;
          return (
            <Router>
              <div className="App">
                  <Navbar/>
                  <Grid className='mainDashboard'>
                      <Grid.Column width={4} className='leftDashboard'>
                          <ProfileCard />
                          <TrendsCard />
                          <FollowerRcmd />
                          <FooterCard />
                      </Grid.Column>

                      <Grid.Column width={8} className='contentDashboard'>
                          <Grid className='tweetStreamingArea'>
                              <TweetBox />
                              { 
                                newsStreamCardQueue.map((v,i)=>{
                                    return <NewsStreamCard key={v}/>
                                })
                              }
                              <GotoTop isLoading={isLoading} className="theBottom" />
                          </Grid>
                      </Grid.Column>
                      
                      <Grid.Column width={4} className='rightDashboard'>
                          <FollowerRcmd />
                          <FooterCard />
                      </Grid.Column>
                  </Grid>
              </div>
            </Router>
          );
    }
}

//
//

type DomainId<T extends string> = {
    type: T,
    value: number,
}

// CustomerId
type CustomerId = DomainId<'CustomerId'>;
const createCustomerId = (value: number): CustomerId => ({ type: 'CustomerId', value });

// Product Id
type ProductId = DomainId<'ProductId'>;
const createProductId = (value: number): ProductId => ({ type: 'ProductId', value });

// Example class
class Example {
    static avoidAccidentalEquivalence(id: CustomerId) {
        // Implementation
    }

    static useEquivalence(id: number) {
        // Implementation
    }
}

var customerId = createCustomerId(1);
var productId = createProductId(5);

// Allowed
Example.avoidAccidentalEquivalence(customerId);

// Errors 'Supplied parameters do not match signature of call target'
//Example.avoidAccidentalEquivalence(productId);

// Allowed
Example.useEquivalence(customerId.value);

// Allowed
Example.useEquivalence(productId.value);


let firstNo = 12345567;
console.log(firstNo);

export default App;
