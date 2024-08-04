import { styled } from '@mui/material/styles';
import { StaticDatePicker, DatePicker, MobileDatePicker, DesktopDatePicker } from '@mui/x-date-pickers';

const responsiveStyles = {
    width: '100%',
    maxWidth: '100%',
    '@media (min-width:600px)': {
      width: '300px', // Example width for larger screens
    },
    '@media (min-width:900px)': {
      width: '400px', // Example width for even larger screens
    },
  };


export const StyledStaticDatePicker = styled(StaticDatePicker)({
    ...responsiveStyles,
  '.MuiPickersToolbar-root': {
    color: '#0c1116',
    borderRadius: '2px',
    borderWidth: '1px',
    borderColor: '#f32172',
    border: '1px solid',
    backgroundColor: 'rgb(133, 167, 241)',
  },

});

export const StyledDesktopDatePicker = styled(DesktopDatePicker)({
    ...responsiveStyles,
  '.MuiPickersToolbar-root': {
    color: '#1565c0',
    borderRadius: '2px',
    borderWidth: '1px',
    borderColor: '#2196f3',
    border: '1px solid',
    backgroundColor: '#90caf9',
  },
});

export const StyledMobileDatePicker = styled(MobileDatePicker)({
    ...responsiveStyles,
  '.MuiPickersToolbar-root': {
    color: '#1565c0',
    borderRadius: '2px',
    borderWidth: '1px',
    borderColor: '#2196f3',
    border: '1px solid',
    backgroundColor: '#90caf9',
  },
});

export const StyledDatePicker = styled(DatePicker)({
    ...responsiveStyles,
  '.MuiPickersToolbar-root': {
    color: '#1565c0',
    borderRadius: '2px',
    borderWidth: '1px',
    borderColor: '#2196f3',
    border: '1px solid',
    backgroundColor: '#90caf9',
  },
});
