import React from 'react';
//import chart from 'chart.js';
//import {BarChart} from 'react-d3';

var Voting = React.createClass({
/*  barData() {
    {
    "name":"Series A",
    "values":[{"x":1, 'y':91}]
  },
  {
    "name":"Series B",
    "values":[{"x":2, 'y':120}]
  }

},*/
  render() {
    return (
      <div>
        <p>visualization</p>
        <BarChart data={barData} width={500} height={200} fill={'#3182bd'} title={BarChart} yAxisLabel='Label' xAxisLabel='Value' />
      </div>
    )
  }
});
export default Voting;
