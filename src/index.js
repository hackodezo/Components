import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from "./ApprovalCard";
import Faker from "faker";

const App = () => {
    return(
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 2AM"
                    commentText="Hai How are You"
                    imageUrl={Faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Shan"
                    timeAgo="Yesterday at 2AM"
                    commentText="I Am Fine"
                    imageUrl={Faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Athul"
                    timeAgo="Monday at 2AM"
                    commentText="Well Done"
                    imageUrl={Faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));