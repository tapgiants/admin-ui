import React from 'react';
import dayjs from 'dayjs';

const FormatDate = ({ format, children }) =>
  <span className="format-date">{dayjs(children).format(format)}</span>;

FormatDate.defaultProps = {
  format: 'MMM D, YYYY',
};

export default FormatDate;
