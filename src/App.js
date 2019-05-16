import React,{Component} from 'react';

import './App.scss';

import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {Container,Grid,Button, Segment, Loader, Icon} from 'semantic-ui-react';

import ProfileCard from './Components/ProfileCard/ProfileCard';
import TrendsCard from './Components/TrendsCard/TrendsCard';
import FollowerRcmd from './Components/FollowerRcmd/FollowerRcmd';
import FooterCard from './Components/FooterCard/FooterCard';
import TweetBox from './Components/TweetBox/TweetBox';
import NewsStreamCard from './Components/NewsStreamCard/NewsStreamCard';
import GotoTop from './Components/GotoTop/GotoTop';

import uuidv1 from 'uuid/v1';


export class App extends Component {
    constructor(props){
          super(props);
          this.state= {
              newsStreamCardQueue:[0,1,2,3],
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

        observer.observe(document.querySelector('.theBottom'));
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

export default App;
