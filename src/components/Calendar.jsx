import React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StyledDatePicker, StyledMobileDatePicker, StyledDesktopDatePicker, StyledStaticDatePicker } from './CalenderStyles';

const Calendar = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          // 'DatePicker',
          // 'MobileDatePicker',
          // 'DesktopDatePicker',
          'StaticDatePicker',
        ]}
      >
        {/* <DemoItem label="Desktop variant">
          <StyledDesktopDatePicker defaultValue={dayjs('2022-04-17')} />
        </DemoItem>
        <DemoItem label="Mobile variant">
          <StyledMobileDatePicker defaultValue={dayjs('2022-04-17')} />
        </DemoItem>
        <DemoItem label="Responsive variant">
          <StyledDatePicker defaultValue={dayjs('2022-04-17')} />
        </DemoItem> */}
        <DemoItem label="Static variant">
          <StyledStaticDatePicker defaultValue={dayjs('2022-04-17')} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default Calendar;
