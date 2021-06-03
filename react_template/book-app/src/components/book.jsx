import React, { Component } from 'react';
/*
브라우저에서 발생할 수 있는 모든 이벤트는 이벤트라는 오브젝트로 대표할 수 있는데
이 안에 이벤트와 관련된 모든 정보들이 들어있다. 그러나 브라우저에서 발생하는 이벤트를 그냥
쓰는 것이 아니라 리액트는 그 이벤트를 한단계 더 감싸는 자신만의 이벤트 클래스를 쓴다.
그것이 synthetic event이다.
*/
class Book extends Component{
    
    eventIncrement = (event) => {
        this.props.onIncrement(this.props.book);
    }
    eventDecrement = (event) => {
        this.props.onDecrement(this.props.book);
    }
    eventDelete = (event) => {
        this.props.onDelete(this.props.book);
    }
    render(){
        //console.log(this.props.book);
        const {name, count} = this.props.book;
        return (
            <li className="book">
            <span className="book-name">{name}</span>
            <span className="book-count">{count}</span>
            <button className = "book-button book-increase" onClick ={this.eventIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
            <button className = "book-button book-decrease" onClick={this.eventDecrement}>
                <i className="fas fa-minus-square"></i>
            </button>
            <button className = "book-button book-zero" onClick={this.eventDelete}>
                <i className="fas fa-trash-alt"></i>
            </button>
            </li>
        );
    }
}
export default Book;