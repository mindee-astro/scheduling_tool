import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const rootEl = document.getElementById('root');

const colorPalette = {
	primary: '#205493',
	secondary: '#6C5B7B',
	error: '#FF1C3C',
	info: '#25381D',
	sideBar: '#112E51',
	cardBG: '#D6D7D9',
	appBG: '#323A45',
	buttonBG: 'rgba(252, 88, 64, 0.5)',
	buttonHover: 'rgba(252, 88, 64, 2.6)',
	disabledButton: 'rgba(252, 88, 0, 0.1)'
}

const size = {
	standardFont: 14,
	smallFont: 12,
	largeFont: 20,
	borderRadius: 12
}

const fontFamily = [
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

const theme = createMuiTheme(
	{
		palette: {
	    	type: 'light', // Switching the dark mode on is a single property value change.
	    	primary: {
	    		main: colorPalette.primary,
	    	},
	    	secondary: {
	    		main: colorPalette.secondary,
	    	},
	    	error: {
	    		main: colorPalette.error,
	    	},
	    	info: {
	    		main: colorPalette.info,
	    	},
		    background: {
		      default: colorPalette.appBG,
		    }
	  	},
	  	typography: {
		  	fontFamily: fontFamily,
		    fontSize: size.standardFont,
		    caption: {
		    	fontSize: size.smallFont,
		    	color: 'black',
		    },
		    title: {
		    	fontSize: size.largeFont,
		    	color: 'white',
		    },
		    subheading: {
		    	color: 'white',
		    },

		},
		overrides: {
		    MuiButton: {
		      	root: {
		      		fontFamily: fontFamily,
			        borderRadius: size.borderRadius,
			        border: 0,
			        color: 'black',
			        padding: '0 30px',
			        backgroundColor: colorPalette.buttonBG,
			        '&:hover': {
				    	backgroundColor: colorPalette.buttonHover,
				    	color: 'white',
				    },
				    '&:disabled': {
				    	backgroundColor: colorPalette.disabledButton,
				    },
		      	},
		    },
		    MuiCard: {
		      	root: {
			        borderRadius: 12,
			        border: 1,
			        color: 'black',
			        backgroundColor: colorPalette.cardBG,
			        padding: '10px',
			        boxShadow: '0 3px 5px 2px rgba(100, 100, 100, .3)',
			        fontFamily: fontFamily,
		      	},
		    },
		    MuiIconButton: {
		    	root: {
		    		'&:hover': {
				    	backgroundColor: 'rgba(0, 0, 0, .3)',
				    },
		    	},
		    },
		    MuiFormControl: {
		    	root: {
		    		top: '-10px',
		    	},
		    },
		    MuiDrawer: {
		      	paper: {
		      		backgroundColor: colorPalette.sideBar,
		      	},
		    },
		    MuiMenu: {
		      	paper: {
		      		backgroundColor: colorPalette.sideBar,
		      	},
		    },
		    MuiListItemIcon: {
		    	root: {
		    		color: 'white'
		    	}
		    },
		    MuiTableHead: {
		    	root: {
		    		backgroundColor: colorPalette.secondary,
		    	}
		    },
		    MuiTableCell: {
		    	head: {
		    		color: 'white',
		    		fontSize: size.standardFont,
		    	},
		    },
		    MuiTable: {
		    	root: {
		    	}
		    }
	  	},
	}
);

let render = () => {
    const MainApp = require('./MainApp').default;
    ReactDOM.render(
        (<MuiThemeProvider theme={theme}><CssBaseline/><MainApp/></MuiThemeProvider>),
        rootEl
    );
};

render();
