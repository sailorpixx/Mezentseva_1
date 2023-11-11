// app.js

const e = React.createElement;

class App extends React.Component {
    render() {
        return e(
            'div',
            null,
            e('div', { class: 'header' },
                e('img', { src: 'logo.jpg', alt: 'Логотип', height: '50' }),
                e('div', null,
                    e('button', { type: 'button', class: 'btn btn-outline-primary my-button' }, 'Лента'),
                    e('button', { type: 'button', class: 'btn btn-outline-primary my-button' }, 'Мой блог'),
                    e('button', { type: 'button', class: 'btn btn-outline-primary my-button' }, 'Контакты')
                )
            ),
            e('div', { class: 'content' },
                e('h1', { class: 'lenta-title' }, 'Моя лента'),
                e('div', { class: 'd-flex align-items-stretch justify-content-center flex-wrap' },
                    e(Card, { imgSrc: 'girl1.jpg', cardId: '1', cardTitle: 'sailorpixx', commentTexts: ['Awesome shot!', 'Beautiful!'] }),
                    e(Card, { imgSrc: 'girl2.jpg', cardId: '2', cardTitle: 'abc_official', commentTexts: ['Nice photo!'] }),
                    e(Card, { imgSrc: 'girl3.jpg', cardId: '3', cardTitle: 'ivanova_', commentTexts: ['Great work!', 'Amazing!'] }),
                    // Добавим еще одну карточку для примера
                    e(Card, { imgSrc: 'girl4.jpg', cardId: '4', cardTitle: 'example_user', commentTexts: ['This is an example!', 'Cool!'] })
                )
            )
        );
    }
}

class Card extends React.Component {
    render() {
        return e(
            'div',
            { class: 'card' },
            e('img', { src: this.props.imgSrc, class: 'card-img-top', alt: `Картинка ${this.props.cardId}`, 'data-card-id': this.props.cardId }),
            e('div', { class: 'card-body' },
                e('h5', { class: 'card-title' }, this.props.cardTitle),
                e(LikeButtonContainer, { cardId: this.props.cardId }),
                this.props.commentTexts.map((commentText, index) => e(CommentContainer, { key: `${this.props.cardId}_comment${index + 1}`, commentId: `${this.props.cardId}_${index + 1}`, commentText }))
            )
        );
    }
}

class LikeButtonContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        return e(
            'div',
            { id: `likeButtonContainer${this.props.cardId}`, class: 'like-button' },
            e(LikeButton, { onClick: () => this.setState({ liked: true }) })
        );
    }
}

class CommentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        return e(
            'div',
            { id: `commentContainer${this.props.commentId}`, class: 'comment' },
            e('span', null, this.props.commentText),
            e(LikeButtonContainer, { cardId: this.props.commentId })
        );
    }
}

// Рендерим всю страницу
