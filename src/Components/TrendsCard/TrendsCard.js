import React,{Component} from 'react';
import {Grid,Image} from 'semantic-ui-react';
import './TrendsCard.scss';
import faker from 'faker';
import {Link} from 'react-router-dom';


export default class TrendsCard extends Component{
    render(){
        return <Grid className='TrendsCard'>
            <Grid.Column width={16} textAlign="left" className='titleArea'>
                <span className='title'>전 세계 지역 트렌드</span>·
                <Link to='#'><span className='fixinfo'>변경하기</span></Link>
            </Grid.Column>
            {
                [1,2,3,4,5,6,7,8].map((v,i)=><TrendsColumn key={i} />)
            }
        </Grid>
    }
}

function TrendsColumn({keyword,tweetCount}){
        let kw = keyword || faker.random.word() ;
        let tc = tweetCount || faker.random.number();

        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        return  <Grid.Column width={16} textAlign="left" className='trendsCol'>
            <Link to={`/search?q=${kw}&src=tren`}>
                <div className='keyword'>#{kw}</div>
                { parseInt(tc)>=100 && <div className='tweetCount' >{numberWithCommas(tc)}트윗</div> }
            </Link>
        </Grid.Column>
    
}