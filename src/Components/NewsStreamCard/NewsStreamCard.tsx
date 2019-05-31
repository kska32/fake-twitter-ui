import React, { Component } from 'react';
import { Grid, Image, Button, Icon } from 'semantic-ui-react';
import './NewsStreamCard.scss';
import faker from 'faker';
import { Link } from 'react-router-dom';


interface IProps{

}
interface IState{
    avatar: string,
    idname: string,
    nickname: string,
    sentences: string,
    sentenceImg: string,
    timestamp: number,
    replyCount:number,
    retweetCount: number,
    iloveitCount: number,

    replied: boolean,
    retweeted: boolean,
    ilovedit: boolean
}


export default class NewsStreamCard extends Component<IProps, IState>{
    constructor(props:any){
        super(props);
        this.state = {
            avatar: faker.internet.avatar(),
            idname: faker.name.findName(),
            nickname: faker.internet.userName(),
            sentences: faker.lorem.sentences(),
            sentenceImg: faker.random.image(),
            timestamp: faker.random.number(),
            replyCount: Math.round(faker.random.number()/100),
            retweetCount: Math.round(faker.random.number()/100),
            iloveitCount: Math.round(faker.random.number()/100),

            replied: false,
            retweeted: false,
            ilovedit: false
        }
    }
    render(){
        let { avatar,nickname,idname,sentences,sentenceImg,timestamp } = this.state;
        let { replyCount, retweetCount, iloveitCount } = this.state;
        let { replied, retweeted, ilovedit } = this.state;
        //console.log(sentenceImg);
        return <div className='newsStreamCard'>
            <span className='avatar'>
                <img src={avatar}/>
            </span>
            <span className='newsContent'>
                <div className='title'>
                    <span className='nickname'>{nickname}</span>
                    <span className='idname'>@{idname}</span>
                    <span className='timestamp'>・{timestamp}min </span>
                    <Icon className='chevron down dropBt'  tabIndex="-1">
                        <span className='dropMenu'>
                            <div>트윗 링크 복사하기</div>
                            <div>트윗 담아가기</div>
                            <div>@yonhaptweet 님 뮤트하기</div>
                            <div>@yonhaptweet 님 차단하기</div>
                            <div>트윗 신고하기</div>
                            <div>트윗이 마음에 들지 않습니다</div>
                            <div>새 모멘트에 추가하기</div>
                        </span>
                    </Icon>
                </div>
                <div className='textContent' >
                    {sentences}
                </div>
                <div className='translateit'>
                    트윗 번역하기
                </div>
                <div className='freeStyleContent'>
                    <img src={sentenceImg}/>
                </div>
                <div className='actionList'>
                    <span className={'reply' + (replied?' replied':'') } onClick={()=>{
                        !replied &&  this.setState({replyCount: replyCount + 1, replied: !replied});
                        replied && this.setState({replyCount: replyCount - 1, replied: !replied});
                    }}>
                        <Icon name='comment outline'>
                            <span>답글하기</span>
                        </Icon>
                        <span>{replyCount}</span>
                    </span>
                    <span className={'retweet' +  (retweeted?' retweeted':'')} onClick={()=>{ 
                        !retweeted &&  this.setState({retweetCount: retweetCount + 1, retweeted: !retweeted});
                        retweeted && this.setState({retweetCount: retweetCount- 1, retweeted: !retweeted});
                    }}>
                        <Icon name='retweet'>
                            <span>리트윗</span>
                        </Icon>
                        <span>{retweetCount}</span>
                    </span>
                    <span className={'iloveit' + (ilovedit?' ilovedit':'')} onClick={
                        ()=>{
                            !ilovedit &&  this.setState({iloveitCount: iloveitCount + 1, ilovedit: !ilovedit});
                            ilovedit && this.setState({iloveitCount: iloveitCount - 1, ilovedit: !ilovedit});
                        }
                    }>
                        <Icon name='heart outline'>
                            <span>마음에 들어요</span>
                        </Icon>
                        <span>{iloveitCount}</span>
                    </span>
                    <span className='sendmsg'>
                        <Icon name='mail outline'>
                            <span>쪽지</span>
                        </Icon>
                    </span>
                </div>
            </span>
        </div>
    }
}