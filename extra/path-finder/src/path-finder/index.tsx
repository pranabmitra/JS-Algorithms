import React from 'react';
import {dijkstra, getShortestPath} from '../algorithms/dijkstra';
import {Grid as GridComponent} from './grid';
import './style.css';

const START_BLOCK_ROW = 10;
const START_BLOCK_COL = 12;
const END_BLOCK_ROW = 10;
const END_BLOCK_COL = 35;

export class Pathfinder extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      grid: [],
    };
  }

  componentDidMount() {
    const grid = getIntialGrid();
    this.setState({grid});
  }

  render() {
    const {grid} = this.state;

    return (
      <div className="container">
        <button onClick={() => this.visualizeDijkstra()}>
          Visualize Dijkstra's Algorithm
        </button>

        <div className="block-wrapper">
          {grid.map((row, index) => {
            return (
              <div key={index}>
                {row.map((block, blockIndex) => {
                  const {row, col, isStart, isEnd} = block;

                  return (
                    <GridComponent
                      key={blockIndex}
                      row={row}
                      col={col}
                      isStart={isStart}
                      isEnd={isEnd}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  visualizeDijkstra() {
    const {grid} = this.state;
    const startPoint = grid[START_BLOCK_ROW][START_BLOCK_COL];
    const endPoint = grid[END_BLOCK_ROW][END_BLOCK_COL];
    const visitedNodesInOrder = dijkstra(grid, startPoint, endPoint);
    const shortestPath = getShortestPath(endPoint);
    // console.log('Path: ', shortestPath);
    this.animateDijkstra(visitedNodesInOrder, shortestPath);
  }

  animateDijkstra(visitedNodesInOrder: Block[], shortestPathNodes: Block[]) {
    for (let i = 0; i < visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length - 1) {
        setTimeout(() => {
          this.animateShortestPath(shortestPathNodes);
        }, 10 * i);
      }

      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        const elem = document.getElementById(`block-${node.row}-${node.col}`);
        elem && elem.classList.add('block-visited');
      }, 10 * i);
    }
  }

  animateShortestPath(shortestPathNodes: Block[]) {
    for (let i = 0; i < shortestPathNodes.length; i++) {
      setTimeout(() => {
        const node = shortestPathNodes[i];
        const elem = document.getElementById(`block-${node.row}-${node.col}`);
        elem && elem.classList.add('block-shortest-path');
      }, 50 * i);
    }
  }
}

const getIntialGrid = () => {
  const grid = [];
  for (let row = 0; row < 20; row++) {
    const currentRow = [];
    for (let col = 0; col < 50; col++) {
      currentRow.push(createBlock(row, col));
    }

    grid.push(currentRow);
  }

  return grid;
};

const createBlock = (row: number, col: number): Block => {
  return {
    row,
    col,
    isStart: row === START_BLOCK_ROW && col === START_BLOCK_COL,
    isEnd: row === END_BLOCK_ROW && col === END_BLOCK_COL,
    distance: Number.MAX_SAFE_INTEGER,
    previousBlock: null,
  };
};

interface Props {}

interface State {
  grid: Block[][];
}

export interface Block {
  row: number;
  col: number;
  isStart?: boolean;
  isEnd?: boolean;
  distance: number;
  isVisited?: boolean;
  previousBlock?: null | Block;
}
