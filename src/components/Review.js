import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

class Review extends Component {    
    constructor() {
        super();
        this.pager = this.pager.bind(this);
        this.moveP = this.moveP.bind(this);
    }
    state = {
        reviews: [],
        pagen: 1
    }

    componentDidMount() {
        const address = "https://jsonplaceholder.typicode.com/comments"
        axios.get(address)
            .then(res => {
                this.setState({
                    reviews : res.data
                })
            })            
    }

    pager(e) {
        this.setState({pagen : e/10});
    }

    moveP(e) {
        if (e === "<" && this.state.pagen >= 1) 
        { this.setState({
            pagen : this.state.pagen - 1
        }) } else if (e === "<" && this.state.pagen <= this.state.reviews.length - 1) {
        this.setState({
            pagen : this.state.pagen + 1
        }) 
    }
    }

    render() {
        const n = this.state.pagen        
        const sN = (n - 1) * 10 + 1;
        const bN = (n) * 10
        return (
            <div>
                <Pagination>
                <center>
                <span onClick={() => this.moveP("<")}>{"<"}</span>
                {this.state.reviews.map(page => n <= 5 && 
                page.id%10 === 0 &&
                page.id/10 >= 1 &&
                page.id/10 <= 10 ?
                <Element onClick={() => this.pager(page.id)}> {page.id/10} </Element> :                  
                page.id%10 === 0 && 
                page.id/10 >= n - 5 &&
                page.id/10 <= n + 5 ?
                <Element onClick={() => this.pager(page.id)}> {page.id/10} </Element> : "")}
                <span onClick={() => this.moveP(">")}>{">"}</span>
                </center>
                </Pagination>
                {this.state.reviews.map(review => <p>{review.id >= sN  && review.id <= bN ? review.body : ""}</p>)}
            </div>               
        )}
}

export default Review;

const Pagination = styled.div`

`
const Element = styled.span`
box-sizing: border-box;
display: inline-block;
width: 30px;
`