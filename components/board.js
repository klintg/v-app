import React from 'react';
import Display from './parts/display'
import {BarChart} from 'react-d3'

var Board = React.createClass({

  barGraphData(results) {
    return Object.keys(results).map(function(choice) {
      return {
        label: choice,
        value: results[choice]
      };
    });
  },

  render() {
    return(
      <div id="scoreboard">

        <Display if={this.props.status === 'connected' && this.props.currentQuestion}>
          <BarChart data={this.barGraphData(this.props.results)}
                    title={this.props.currentQuestion.query}
                    height={window.innerHeight * 0.6}
                    width={window.innerWidth * 0.9}/>
        </Display>

        <Display if ={this.props.status === 'connected' && !this.props.currentQuestion}>
          <h3> Awaiting a Question <blink>...</blink> </h3>
        </Display>

      </div>
    )
  }
});
export default Board;
