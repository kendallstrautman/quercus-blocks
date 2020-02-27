export function H1({ data }) {
	return <h1>{data.text}</h1>
}

export const heading_1_template = {
	type: 'heading_1',
	label: 'Heading 1',
	defaultItem: {
		_template: 'heading_1',
		text:
			'Wherever I sat, there I might live, and the landscape radiated from me accordingly.',
		position: 'left',
		width: 'large',
		'col-start': 1,
		'col-end': 3
	},
	key: undefined,
	// todo add fields here for position and width etc.
	fields: []
}

export function H2({ data }) {
	console.log(data)
	return <h2>{data.text}</h2>
}

export const heading_2_template = {
	type: 'heading_2',
	label: 'Heading 2',
	defaultItem: {
		_template: 'heading_2',
		text:
			'Wherever I sat, there I might live, and the landscape radiated from me accordingly.',
		position: 'center',
		width: 'medium',
		'col-start': 2,
		'col-end': 3
	},
	key: undefined,
	// todo add fields here for position and width etc.
	fields: []
}
