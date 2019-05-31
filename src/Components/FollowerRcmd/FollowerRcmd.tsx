import React,{Component, SyntheticEvent} from 'react';
import {Grid,Image, Button} from 'semantic-ui-react';
import './FollowerRcmd.scss';
import faker from 'faker';
import {Link} from 'react-router-dom';
//import sprite from "./web_sprite.png";

export default class FollowerRcmd extends Component{
    constructor(props:any){
        super(props);

    }
    render(){
        return <Grid className='FollowerRcmd'  divided='vertically'>

            <Grid.Column width={16} textAlign="left" className='titleArea'>
                <span className='rcmd'>팔로우 추천</span>· 
                <Link to='/refresh'><span className='refresh'>새로 고침</span></Link>· 
                <Link to='/seeall'><span className='seeall'>모두 보기</span></Link>
            </Grid.Column>
            <RcmdColumn />
            <RcmdColumn />
            <RcmdColumn />
            <RcmdColumn />
            <RcmdColumn className='lastCol'/>

            <Grid.Row className='firstPart'>
                <Grid.Column width={3} className='firstPartColImg' textAlign='left'>
                    <Link to="/signInMail" >
                        <div className='imgWrapper'><div className='imageMail'></div></div>
                    </Link>
                </Grid.Column>
                <Grid.Column width={13} className='firstPartColTxt' textAlign='left'>
                    <Link to="./signInMail" >
                        <div className='title'>지인들을 찾아보세요</div>
                        <div className='littletitle'>Gmail에서 연락처 가져오기</div>
                    </Link>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row className='secondPart' textAlign='left'>
                <Grid.Column width={16} className='secondPartCol'>
                    <Link to="/welcome?ref=gl-tw-tw-twitter-webtimeline" >
                        다른 주소록 연결하기
                    </Link>
                </Grid.Column>
            </Grid.Row>
               
        </Grid>
    }
}



interface IRcmdColState{
    _avatar:string, 
    _nickname:string,
    _username:string,
    isWhite:boolean, 
    isFollowed:boolean
}

interface IRcmdColProps{
    avatar?: string,
    nickname?: string,
    idname?: string,
    className?: string,
    style?: string
}


class RcmdColumn extends Component<IRcmdColProps,IRcmdColState>{
    constructor(props:any){
        super(props);
        this.state = {
            _avatar: faker.internet.avatar(),
            _nickname: faker.internet.userName(),
            _username: faker.internet.userName(),
            isWhite: false,
            isFollowed: false
        }
    }
    closeIt(e:SyntheticEvent){
        const unitDur = 300;
        this.setState({            
            isWhite:true
        });

        window.setTimeout(()=>{
            this.setState({
                _avatar: faker.internet.avatar(),
                _nickname: faker.name.findName(),
                _username: faker.internet.userName(),
            });
        },unitDur)

        window.setTimeout(()=>{
            this.setState({
                isWhite: false,
                isFollowed: false
            });
        },unitDur*2);
    }

    mouseEnterLink(e:SyntheticEvent, avatar:string, nickname:string, idname:string){
        console.log(avatar, nickname, idname);
    }

    clickFollowBt(e:SyntheticEvent, curState:boolean){
        this.setState({isFollowed: !curState});
        window.setTimeout(()=>{
            this.closeIt(e);
        },1000)
        
    }

    render(){
            const {avatar, nickname, idname} = this.props;
            const {_avatar, _nickname, _username,isWhite, isFollowed} = this.state;

            const ava = avatar || _avatar;
            const nkn = (nickname || _nickname).slice(0,10);
            let idn = (idname || _username).slice(0,10>nkn.length?10-nkn.length+4:4);
                  idn = (nkn+idn).length>=14 ? idn+'...' : idn;            

            return <Grid.Row className={'rcmdCol ' + (this.props.className||'') + (isWhite ? ' whiteBoard':'')} style={this.props.style}>
                    <Grid.Column width={4} className='avatar'>
                        <Link to={'/id/'+nkn} onMouseEnter={(e)=>{this.mouseEnterLink(e,ava,nkn,idn)}}>
                            <Image src={ava} circular bordered size='tiny'/>
                        </Link>
                    </Grid.Column>
                    <Grid.Column width={12} className='avatarInfo' textAlign='left'>    
                        <div className='nameArea'>
                            <Link to={'/id/'+nkn} onMouseEnter={(e)=>{this.mouseEnterLink(e,ava,nkn,idn)}}>
                                <span className='nickname'>{nkn}</span>
                                <span className='idname'>@{idn}</span>
                            </Link>
                            <span className='close' onClick={(e)=>{ this.closeIt(e)}}>×</span>
                        </div>
                        <Button color='yellow' size='mini' circular basic 
                                className={'followBt'+(isFollowed ? ' followed' : '')} content={isFollowed ? '팔로잉' : '팔로우'}
                                onClick={(e)=>{ this.clickFollowBt(e,isFollowed) }} 
                                />
                    </Grid.Column>
            </Grid.Row>
    }
}