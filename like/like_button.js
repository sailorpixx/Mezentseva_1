const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return ' You liked this.';
        }

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return ` You liked comment: ${this.props.commentText}`;
        }

        return e(
            'div',
            { className: 'comment' },
            e('span', null, this.props.commentText),
            e(LikeButton, { onClick: () => this.setState({ liked: true }) })
        );
    }
}

// Рендерим кнопку лайка и комментария в соответствующий контейнер для каждой карточки
ReactDOM.render(e(LikeButton), document.getElementById('likeButtonContainer1'));
ReactDOM.render(e(Comment, { commentText: 'Awesome shot!' }), document.getElementById('commentContainer1'));
ReactDOM.render(e(Comment, { commentText: 'Beautiful!' }), document.getElementById('commentContainer1_2'));

ReactDOM.render(e(LikeButton), document.getElementById('likeButtonContainer2'));
ReactDOM.render(e(Comment, { commentText: 'Nice photo!' }), document.getElementById('commentContainer2'));

ReactDOM.render(e(LikeButton), document.getElementById('likeButtonContainer3'));
ReactDOM.render(e(Comment, { commentText: 'Great work!' }), document.getElementById('commentContainer3'));
ReactDOM.render(e(Comment, { commentText: 'Amazing!' }), document.getElementById('commentContainer3_2'));