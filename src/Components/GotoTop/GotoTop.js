import React,{Component} from 'react';
import {Grid,Loader,Icon} from 'semantic-ui-react';
import "./GotoTop.scss";
import PropTypes from 'prop-types';

export default class GotoTop extends Component{
    static propTypes = {
        isLoading: PropTypes.bool
    }
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
