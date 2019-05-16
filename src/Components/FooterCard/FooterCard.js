import React,{Component} from 'react';
import {Grid, Image, Button , Icon} from 'semantic-ui-react';
import './FooterCard.scss';
import faker from 'faker';
import {Link} from 'react-router-dom';

let data = [
    {title:'회사소개', href:'/about'},
    {title:'고객센터', href:'/support'},
    {title:'이용약관', href:'/tos'},
    {title:'개인정보 처리방침', href:'/privacy'},
    {title:'쿠키', href:'/cookie'},
    {title:'광고 정보', href:'/ads'},
    {title:'브랜드', href:'/brands'},
    {title:'블로그', href:'/korea'},
    {title:'시스템 현황', href:'/systemstatus'},
    {title:'애플리케이션', href:'/products'},
    {title:'인재채용', href:'/careers'},
    {title:'마케팅', href:'/marketing'},
    {title:'비즈니스', href:'/business'},
    {title:'개발자', href:'/developer'}
]


export default class FooterCard extends Component{
    render(){
        return <Grid className='FooterCard' textAlign='left' >
            <Grid.Column width={16} className='firstPart'>
                <ul>
                    <li>© 2019 Twitter</li>
                    {
                        data.map((v,i)=>{
                            return <li key={i}><Link to={v.href}>{v.title}</Link></li>
                        })
                    }
                </ul>
            </Grid.Column>
            <Grid.Column width={16} className='secondPart'>
                    <Link to='/welcome?ref=gl-tw-tw-twitter-webtimeline'>
                        <Icon name='external square' />트위터로 광고하세요
                    </Link>
            </Grid.Column>
        </Grid>
    }
}

