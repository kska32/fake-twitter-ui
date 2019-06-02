import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import FooterCard  from '../src/Components/FooterCard/FooterCard';
import ProfileCard  from '../src/Components/ProfileCard/ProfileCard';
import NewsStreamCard  from '../src/Components/NewsStreamCard/NewsStreamCard';
import FollowerRcmd  from '../src/Components/FollowerRcmd/FollowerRcmd';
import TweetBox  from '../src/Components/TweetBox/TweetBox';
import TrendsCard from '../src/Components/TrendsCard/TrendsCard';
import Navbar from '../src/Components/Navbar/Navbar';
import GotoTop from '../src/Components/GotoTop/GotoTop';

import {BrowserRouter as Router, Link} from 'react-router-dom';
import {Grid} from 'semantic-ui-react';



storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

let leftStyle={width:'288px',padding:'0px 14px',border:'2px dashed black',backgroundColor:'#E6ECF0'};
let middleStyle={width:'600px',borderRadius:'5px',border:'2px dashed black',margin:'0px',backgroundColor:'#E6ECF0'};

storiesOf('twitterUI',module)
.add('footer-card', ()=>(
  <div style={{...leftStyle, paddingTop:'14px', paddingBottom:'14px'}}>
    <Router>
      <FooterCard/>
    </Router>
  </div>
))
.add('ProfileCard', ()=>(
<div style={{...leftStyle, paddingTop:'14px'}}>
  <ProfileCard/> 
  </div>
))
.add('NewsStreamCard', ()=>(
  <div style={middleStyle}>
    <NewsStreamCard/>
  </div>
))

.add('FollowerRcmd', ()=>(
    <div style={{...leftStyle, paddingTop:'14px'}}>
      <Router>
      <FollowerRcmd/>
      </Router>
    </div>
))

.add('TweetBox', ()=>(
  <Grid style={middleStyle}>
    <TweetBox/>
  </Grid>
))

.add('TrendsCard', ()=>(
    <div style={{...leftStyle}}>
      <Router>
        <TrendsCard/>
      </Router>
    </div>
))

.add('Navbar', ()=>(
  <div style={{minWidth:'930px'}}>
    <Router>
      <Navbar/>
    </Router>
  </div>
))

.add('GotoTop', ()=>(
  <Grid style={middleStyle}>
    <GotoTop/>
  </Grid>
))
;