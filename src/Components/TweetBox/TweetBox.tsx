import React, { Component, SyntheticEvent } from 'react';
import { Grid, Image, Button, Icon } from 'semantic-ui-react';
import './TweetBox.scss';
import faker from 'faker';
//import { Link } from 'react-router-dom';

import { Line, Circle } from 'rc-progress';


interface IProps{

}

interface IState{
    avatar: string,
    inputValLenPer: number,
    downCounter: number,
    inputText: string,
    inputValLen?: number
}

export default class TweetBox extends Component<IProps,IState>{
    constructor(props: any){
        super(props);

        this.state = {
            avatar: faker.internet.avatar(),
            inputValLenPer: 0,
            downCounter: -999,
            inputText:''
        }
    }

    inputHandle(e: SyntheticEvent){
            e.persist();
            const maxLen = 260;
            
            let etar =  (e.target as HTMLDivElement);
            let valLen = etar.textContent ? etar.textContent.length : 0;
            
            if(valLen===0 || (etar.childNodes[0] && etar.childNodes[0].nodeName.toUpperCase()==='BR')){
                etar.childNodes[0] && etar.childNodes[0].remove();
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
                    <div contentEditable={true} className='inputBoxCore' id='greenX' placeholder='무슨 일이 일어나고 있나요?' 
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