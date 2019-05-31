import React,{Component} from 'react';
import {Grid,Loader,Icon} from 'semantic-ui-react';
import "./GotoTop.scss";

interface IState{

}
interface IProps{
    isLoading: boolean,
    className: string 
}


export default class GotoTop extends Component <IProps, IState>{

    render(){
        let {isLoading,className} = this.props;
        return <Grid.Row className={'gototop ' + (className||'')}   >
                <Loader active={!!isLoading} size={'medium'}/>
                <div className={'message' + (isLoading?' hide':'')} onClick={()=>{
                    window.scrollTo({top:0, behavior:'smooth'} );
                }}>
                    <Icon name='twitter' color='black' size='large' className='birdIcon'/>
                    <div>위로 가기 ↑</div>
                </div>
        </Grid.Row>
    }
}
