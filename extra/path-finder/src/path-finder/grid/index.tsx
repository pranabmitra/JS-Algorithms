import React from 'react';
import './style.css';

export class Grid extends React.Component<Props, {}> {

  render() {
    const {row, col, isStart, isEnd} = this.props;
    const extraClasses = isEnd ? 'block-end' : isStart ? 'block-start' : '';

    return (
      <div id={`block-${row}-${col}`} className={`block ${extraClasses}`} />
    )
  }
}

interface Props {
  row: number;
  col: number;
  isStart?: boolean;
  isEnd?: boolean;
}
