var React = require('react');
var Display = require('./parts/Display');
var BarChart = require('react-d3').BarChart;

var Board = React.createClass({

	barGraphData(results) {
    console.log('the object keys are :' + Object.keys(results));
		return Object.keys(results).map(function(choice) {
      console.log('choice '+ results[choice])
			return {
				x: choice,
				y: results[choice]
			};
		});
	},

  wasAsked() {
    return this.props.currentQuestion.query !== undefined;
  },

	render() {
    const data = [{ label: '', values: this.barGraphData(this.props.results)}]
		return (
			<div id="scoreboard">

				<Display if={this.props.status === 'connected' && this.wasAsked()}>
					<BarChart data={data}
							  title={this.props.currentQuestion.q}
							  height={window.innerHeight * 0.6}
							  width={window.innerWidth * 0.9} />
				</Display>

				<Display if={this.props.status === 'connected' && !this.wasAsked()}>
					<h3>Awaiting a Question...</h3>
				</Display>

			</div>
		);
	}
});

module.exports = Board;
