import React,{Component} from 'react';
import {Grid,Icon,Button,Search ,Segment, Container} from 'semantic-ui-react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './Navbar.scss';

export default class Navbar extends Component{
    render(){
        return <div className='Navbar'>
                <div className='NavbarWrapper'>
                    <div className='leftPart'>
                        <Link to='/home'><Icon name='home' link /><span>홈</span></Link>
                        <Link to='/notifications'><Icon name='bell outline' link/><span>알림</span></Link>
                        <Link to='/mail'><Icon name='mail outline' link/><span>쪽지</span></Link>
                    </div>
                    <Icon name='twitter' size='large' color='blue' link onClick={()=>{ window.scrollTo({top:0, behavior:'smooth'}); }}></Icon>
                    <div className='rightPart'>
                        <Search placeholder='트위터 검색하기' showNoResults={false} size='mini'/>
                        <Icon name='smile outline' size='big'/>
                        <Button circular color='yellow' size='tiny'>트윗하기</Button>
                    </div>
                </div>
            </div>

    }
}
