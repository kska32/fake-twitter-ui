import React,{Component} from 'react';
import {Grid,Image} from 'semantic-ui-react';
import './ProfileCard.scss';
import faker from 'faker';
window.faker = faker;

export default class ProfileCard extends Component{
    render(){
        return <Grid className='profileCard' {...this.props}>
            <Grid.Row columns={1} className='topPart'>
                <Grid.Column width={16}>
                    <Image src={faker.image.image()} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row className='middlePart'>
                <Grid.Column className='avatar' width={5}>
                    <Image src={faker.internet.avatar()} circular bordered/>
                </Grid.Column>
                <Grid.Column className='userinfo'>
                    <div className='nickname'>{faker.internet.userName()}</div>
                    <div className='contactName'>@{faker.internet.userName()}</div>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row className='bottomPart' columns='equal'>
                <Grid.Column className='tweetArea' >
                    <div className='tweet'>트윗</div>
                    <div className='count'>{faker.random.number()}</div>
                </Grid.Column>
                <Grid.Column className='followingArea'>
                    <div className='following'>팔로잉</div>
                    <div className='count'>{faker.random.number()}</div>
                </Grid.Column>
                <Grid.Column className='followerArea'>
                    <div className='follower'>팔로워</div>
                    <div className='count'>{faker.random.number()}</div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    }
}