export function Image({ data }) {
	return <img src={data.src} />
}

export const image_template = {
	type: 'image',
	label: 'Image',
	defaultItem: {
		_template: 'image',
		src: '/img/tomas-robertson-tqe-NKrSXTw-unsplash.jpg',
		position: 'right',
		width: 'large',
		'col-start': 2,
		'col-end': 4
	},
	key: undefined,
	// todo add fields here for position and width etc.
	fields: []
}
