var BugFilter = React.createClass({
	render: function(){
		return <div>Filter</div>
	}
})

var BugTable = React.createClass({
	render: function(){
		return <div>Table</div>
	}
})

var BugAdd = React.createClass({
	render: function(){
		return <div>Add</div>
	}
})

var BugList = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Bug Tracker!</h1>
				<BugFilter />
				<BugTable />
				<BugAdd />
			</div>
		)
	}
})

ReactDOM.render(
  <BugList />,
  document.getElementById('main')
);
