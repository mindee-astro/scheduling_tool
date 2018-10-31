import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const rootEl = document.getElementById('root');
const theme = createMuiTheme(
	{
		palette: {
	    	type: 'light', // Switching the dark mode on is a single property value change.
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
			        border: 1,
			        color: 'black',
			        padding: '0 30px',
		      	},
		    },
		    MuiCard: {
		      	root: {
			        borderRadius: 12,
			        border: 0,
			        color: 'black',
			        padding: '0 30px',
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
	  	},
	}
);

let render = () => {
    const MainApp = require('./MainApp').default;
    ReactDOM.render(
        (<MuiThemeProvider theme={theme}><MainApp/></MuiThemeProvider>),
        rootEl
    );
};

render();
