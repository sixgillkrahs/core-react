/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import type { PickerProps } from 'antd/es/date-picker/generatePicker';
import type { Moment } from 'moment';

import DatePicker from './DatePicker';

export type TimePickerProps = Omit<PickerProps<Moment>, 'picker'>;

const TimePicker = React.forwardRef<any, TimePickerProps>((props, ref) => (
  <DatePicker {...props} picker="time" mode={undefined} ref={ref} />
));

TimePicker.displayName = 'TimePicker';

export default TimePicker;
