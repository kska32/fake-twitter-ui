import React, { Component } from 'react';
import { Grid, Image, Button, Icon } from 'semantic-ui-react';
import './TweetBox.scss';
import faker from 'faker';
import { Link } from 'react-router-dom';

import { Line, Circle } from 'rc-progress';

export default class TweetBox extends Component{
    constructor(props){
        super(props);

        this.state = {
            avatar: faker.internet.avatar(),
            inputValLenPer: 0,
            downCounter: -999,
            inputText:''
        }
    }

    inputHandle(e){
            e.persist();
            const maxLen = 260;
            let valLen = e.target.innerText.length;

            if(valLen===0){//for Edege in the case that edge insert <BR/> to contentEditable ELEMENT.
                e.target.innerHTML = '';
            }
            if(e.target.childNodes[0] && e.target.childNodes[0].nodeName.toUpperCase()==='BR'){
                e.target.childNodes[0].remove();
            }

            this.setState({ 
                inputValLenPer: Math.round(valLen/maxLen*100),
                inputValLen: valLen,
                downCounter: valLen - maxLen 
            });
    }

    render(){
        let {avatar,inputValLenPer,downCounter,inputText} = this.state;
        return <Grid.Row className='tweetBox'>
            <Grid.Column width={2} className='avatar'>
                <Image src={avatar} circular bordered size='mini'/>
            </Grid.Column>
            <Grid.Column width={14} className='inputBox'>
                <div className='inputBoxWrapper'>
                    <div contentEditable='true' className='inputBoxCore' id='greenX' placeholder='무슨 일이 일어나고 있나요?' 
                        onInput={this.inputHandle.bind(this)} 
                    />
                    <Icon name='smile outline'  className='faces' />
                    <div className='counter'>{downCounter>=-10?-downCounter:''}</div>
                    <Circle className='progCircle' percent={inputValLenPer} 
                        strokeColor={inputValLenPer<100?"#2AA6F2":(inputValLenPer===100?"#FFAD1F":"#E0245E")} 
                        strokeWidth="12"  strokeLinecap="square" trailColor='#DBE2E7' trailWidth='5'
                    />
                    <div className='toolbar'>
                        <div className='leftPart'>
                            <Icon name='picture' className='photo' color='yellow' size='large' >
                                <span>사진 또는 동영상 추가하기</span>
                            </Icon>
                            <Icon name='trello' className='gif' color='yellow' size='large'>
                                <span>GIF 파일 추가하기</span>
                            </Icon>
                            <Icon name='sheqel' className='poll' color='yellow' size='large'>
                                <span>투표 추가하기</span>
                            </Icon>
                            <Icon name='map marker alternate' className='gps' color='yellow' size='large'>
                                <span>위치정보 사용안함</span>
                            </Icon>
                        </div>
                        <div className='rightPart'>
                            <Icon name='add' className='plusbt' color='yellow' size='large' circular>
                                <span>다른 트윗 추가하기</span>
                            </Icon>
                            <Button circular color='yellow' size='tiny' className='dotweet'>트윗하기</Button>
                        </div>
                    </div>
                </div>
            </Grid.Column>
        </Grid.Row>
    }
}