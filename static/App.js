var BugFilter = React.createClass({
	displayName: 'BugFilter',

	render: function () {
		return React.createElement(
			'div',
			null,
			'Filter'
		);
	}
});

var BugTable = React.createClass({
	displayName: 'BugTable',

	render: function () {
		return React.createElement(
			'div',
			null,
			'Table'
		);
	}
});

var BugAdd = React.createClass({
	displayName: 'BugAdd',

	render: function () {
		return React.createElement(
			'div',
			null,
			'Add'
		);
	}
});

var BugList = React.createClass({
	displayName: 'BugList',

	render: function () {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				null,
				'Bug Tracker!'
			),
			React.createElement(BugFilter, null),
			React.createElement(BugTable, null),
			React.createElement(BugAdd, null)
		);
	}
});

ReactDOM.render(React.createElement(BugList, null), document.getElementById('main'));