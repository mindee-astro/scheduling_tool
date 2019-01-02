export const colorPalette = {
	primary: '#205493',
	secondary: '#E8513B',
	error: '#FF1C3C',
	info: '#25381D',
	action: '#5559FF',
	sideBar: '#112E51',
	cardBG: '#D6D7D9',
	appBG: '#323A45',
	buttonBG: '#FC9888',
	buttonHover: '#E8513B',
	disabledButton: '#FCC9BE'
}

export const size = {
	standardFont: 14,
	smallFont: 12,
	largeFont: 20,
	borderRadius: 12,
	buttonRadius: 19,
}

export const fontFamily = [
	'roboto',
	'-apple-system',
	'BlinkMacSystemFont',
	'"Segoe UI"',
	'Roboto',
	'"Helvetica Neue"',
	'Arial',
	'sans-serif',
	'"Apple Color Emoji"',
	'"Segoe UI Emoji"',
	'"Segoe UI Symbol"',
].join(',')

/// Schedule page custom template ////

export const scheduleVariation = {
	suspend: {
		backgroundColor: '#FF6E60',
		color: 'white',
		minWidth: '120px',
		primary: {
			color: '#78342D',
			fontWeight: 'bold',
		},
	},
	ongoing: {
		backgroundColor: '#71DF96',
		minWidth: '120px',
		primary: {
			color: '#04691C',
			fontWeight: 'bold',
		}
	},
	pending: {
		minWidth: '120px',
		primary: {
			color: colorPalette.primary,
			fontWeight: 'bold',
		}
	},
	complete: {
		minWidth: '120px',
		backgroundColor: '#515152',
		color: '#B8B8BA',
		primary: {
			color: 'white',
			fontWeight: 'bold',
		},
	}
}

// Notification Snackbar custom template ////