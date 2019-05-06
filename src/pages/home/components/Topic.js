import React, { PureComponent } from 'react';
import { TopicWrapper, TopicItem } from '../style';
import {connect} from "react-redux";
class Topic extends PureComponent {

	render() {
		const {todoList} = this.props
		return (
			<TopicWrapper>
				{
					todoList.map(item=>{
						return(
							<TopicItem key={item.get('id')}>
								<img className='topic-pic' src={item.get('imgUrl')} alt=""/>
								{item.get('title')}
							</TopicItem>
						)
					})
				}
			</TopicWrapper>
		)
	}
}

const mapStateToProps = (state)=> {

	return {
		todoList: state.getIn(['home','topicList']),
	}
};

export default connect(mapStateToProps,null)(Topic);
