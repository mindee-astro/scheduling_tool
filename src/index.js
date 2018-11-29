import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const rootEl = document.getElementById('root');

const primary = '#B85560';
const secondary = '#6C5B7B';
const paper = '#C06C84';
const error = '#FF1C3C';
const info = '#25381D';
const stdfontsize = 14;
const smllfontsize = 12;
const lrgfontsize = 20;
const cardbg = '#FFFFF3';
const appbg = '#FFE1EC';
//const bg = 'rgba(108, 91, 123, 0.1)';
const buttonbg = 'rgba(108, 91, 123, 0.8)';
const buttonHover = 'rgba(53, 92, 125, 2.6)'
const disabledButton = 'rgba(255, 143, 0, 0.1)';

const theme = createMuiTheme(
	{
		palette: {
	    	type: 'light', // Switching the dark mode on is a single property value change.
	    	primary: {
	    		main: primary,
	    	},
	    	secondary: {
	    		main: secondary,
	    	},
	    	error: {
	    		main: error,
	    	},
	    	info: {
	    		main: info,
	    	},
		    background: {
		      default: appbg,
		    }
	  	},
	  	typography: {
		  	fontFamily: [
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
		    ].join(','),
		    fontSize: stdfontsize,
		    caption: {
		    	fontSize: smllfontsize,
		    	color: 'black',
		    },
		    title: {
		    	fontSize: lrgfontsize,
		    	color: 'white',
		    },
		    subheading: {
		    	color: 'white',
		    },

		},
		overrides: {
		    MuiButton: {
		      	root: {
		      		fontFamily: [
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
				    ].join(','),
			        borderRadius: 15,
			        border: 0,
			        color: 'black',
			        padding: '0 30px',
			        backgroundColor: buttonbg,
			        '&:hover': {
				    	backgroundColor: buttonHover,
				    	color: 'white',
				    },
				    '&:disabled': {
				    	backgroundColor: disabledButton,
				    },
		      	},
		    },
		    MuiCard: {
		      	root: {
			        borderRadius: 12,
			        border: 1,
			        color: 'black',
			        backgroundColor: cardbg,
			        padding: '10px',
			        boxShadow: '0 3px 5px 2px rgba(100, 100, 100, .3)',
			        fontFamily: [
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
				    ].join(','),
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
		      		backgroundColor: paper,
		      	},
		    },
		    MuiMenu: {
		      	paper: {
		      		backgroundColor: paper,
		      	},
		    },
		    MuiListItemIcon: {
		    	root: {
		    		color: 'white'
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
