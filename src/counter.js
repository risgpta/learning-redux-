import React, { Component } from 'react'
import { connect } from 'react-redux'
import {increment} from './actions/increment';

const Counter = (props) => {
    return(
        <div>
          <div>  Count = {props.num}</div>
            <button onClick={() => props.increment(props.num)}>
            ADD
            </button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    num : state.counter.count
})



export default connect(mapStateToProps, {increment})(Counter)
