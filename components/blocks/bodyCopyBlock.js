export function BodyCopy({ data }) {
	return (
		<>
			<p>{data.text}</p>
		</>
	)
}

export const body_copy_template = {
	type: 'body_copy',
	label: 'Body Copy',
	defaultItem: {
		_template: 'body_copy',
		text:
			'What is a house but a sedes, a seat?—better if a country seat. I discovered many a site for a house not likely to be soon improved, which some might have thought too far from the village, but to my eyes the village was too far from it.',
		position: 'center',
		width: 'medium',
		'col-start': 2,
		'col-end': 3
	},
	key: undefined,
	// todo add fields here for position and width etc.
	fields: []
}
