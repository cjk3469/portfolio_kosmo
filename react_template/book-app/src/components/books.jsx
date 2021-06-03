import React, { Component } from 'react';
import Book from './book';

class Books extends Component{
    /*
    state
    컴포넌트 안에서 우리가 정의한 컴포넌트의 state 오브젝트이다.
    컴포넌트 UI를 위한 데이터를 보관하는 오브젝트이다.
    */
    state={
        books: [
            {id:1,name:'HTML',count :0},
            {id:2,name:'JAVA',count :0},
            {id:3,name:'SPRING',count :0}
        ],
    };
    eventIncrement = book => {
        console.log(`eventIncrement ${book.name}`);
        book.count++;
        this.setState(this.state);
    }
    eventDecrement = book => {
        console.log(`eventDecrement ${book.name}`);
        book.count--;
        this.setState(this.state);
    }
    eventDelete = book => {
        console.log(`eventDelete ${book.name}`);
        book.count=0;
        this.setState(this.state);
    }
    /*
    props
    컴포넌트 밖에서 주어지는 데이터이다.
    컴포넌트 안에서 자체적으로 데이터를 정의해서 사용하는 state와는 다르게
    props는 컴포넌트 밖에서 데이터를 제공받는다.->우리는 jsp에서 해야함
    가장 근본적인 이유는 컴포넌트의 재사용을 높이기 위해서이다.
    */
    render(){
        return(
            <ul>
                {
                    this.state.books.map(book=>(
                        <Book 
                        key={book.id} 
                        book={book}
                        onIncrement={this.eventIncrement}
                        onDecrement={this.eventDecrement}
                        onDelete={this.eventDelete}
                        />
                    ))
                }
            </ul>
        );
    }
}

export default Books;