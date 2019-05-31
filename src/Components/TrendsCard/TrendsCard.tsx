import React,{Component} from 'react';
import {Grid} from 'semantic-ui-react';
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


 let TrendsColumn = ({keyword = faker.random.word(), tweetCount = faker.random.number()}: {keyword?:string,tweetCount?:number}):any=>{
 
        let numberWithCommas = (x:string):string => {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        return (<Grid.Column width={16} textAlign="left" className='trendsCol'>
            <Link to={`/search?q=${keyword}&src=tren`}>
                <div className='keyword'>#{keyword}</div>
                { parseInt(tweetCount.toString())>=100 && <div className='tweetCount' >{numberWithCommas(tweetCount.toString())}트윗</div> }
            </Link>
        </Grid.Column>);
    
};

