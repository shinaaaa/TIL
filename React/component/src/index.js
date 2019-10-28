import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import Segment from './components/Segment';
import Message from './components/Message';
import ApprovalCard from './components/ApprovalCard';
import CommentDetail from './components/CommentDetail';


class App extends React.Component {

    state = {
        //초기 값
        commnets: [],
        paragraph: faker.lorem.paragraph()
    };

    handleAddComment = () => {
        const newComment = {
            author: faker.name.firstName(),
            time: faker.date.recent().toLocaleString(),
            body: faker.lorem.sentence(),
            avatar: faker.image.avatar()
        };
        this.setState({ commnets: [...this.state.commnets, newComment] });
    };

    //App의 method
    render() {
        return (
            <>
                <Segment>
                    <div className="ui icon header">
                        <i className="pdf file outline icon">No document</i>
                    </div>
                    <div className="ui primary button">Add document</div>
                </Segment>
                <Segment>
                    <h4 className="ui header">For your information</h4>
                    <p>{this.state.paragraph}</p>
                </Segment>
                <Message
                    header="회원 약관 변경"
                    body="약관이 변경되었습니다. 동의?보감?"
                ></Message>
                <div className="ui container comments">
                    <button className='ui primary button' onClick={this.handleAddComment}>코멘트 추가하기</button>
                    <ApprovalCard>
                        <h4>복습 각?</h4>
                        <p>남아공 ㄱ</p>
                    </ApprovalCard>
                    {this.state.commnets.map(commnet => {
                        return (
                            <ApprovalCard>
                                <CommentDetail
                                    author={commnet.author}
                                    time={commnet.time}
                                    body={commnet.body}
                                    avatar={commnet.avatar}
                                ></CommentDetail>
                            </ApprovalCard>
                        )
                    })}
                </div>
            </>
        );
    }
}


ReactDOM.render(<App />, document.querySelector('#root'));
