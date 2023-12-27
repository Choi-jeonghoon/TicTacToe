import React from "react";
import "./Square.css"

export default class Square extends React.Component {
    /*
    Constructor(생성자) 인스턴스화 된 객체에서 다른 메서드를 호출하기 
    전에 수행해야 하는 사용자 지정 초기화를 제공할 수 있다.
    */
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        }
    }


    render() {
        return (
            <button className="square" onClick={() => { this.setState({ value: 'x' }) }}>
                {this.state.value}
            </button>
        )
    }

}