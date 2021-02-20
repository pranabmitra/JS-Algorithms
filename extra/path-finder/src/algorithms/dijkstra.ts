import {Block} from '../path-finder';

export function dijkstra(
  grid: Block[][],
  startPoint: Block,
  endPoint: Block,
): Block[] {
  const visitorNodes = [];
  startPoint.distance = 0;
  const unvisitedNodes = getAllNodes(grid);

  while (!!unvisitedNodes.length) {
    // In real, min heap would have been used; here we're just using JS sort
    sortNodesByDistance(unvisitedNodes);
    // first element
    const closestNode = unvisitedNodes.shift();
    if (closestNode) {
      if (closestNode.distance === Number.MAX_SAFE_INTEGER) {
        return visitorNodes;
      }
      closestNode.isVisited = true;
      visitorNodes.push(closestNode);

      if (closestNode === endPoint) return visitorNodes;
      updateUnvisitedNeighbors(closestNode, grid);
    }
  }

  return visitorNodes;
}

const getAllNodes = (grid: Block[][]) => {
  const nodes = [];
  for (let row of grid) {
    for (let node of row) {
      nodes.push(node);
    }
  }

  return nodes;
};

const getUnvisitedNeighbors = (node: Block, grid: Block[][]) => {
  const neighbors = [];
  const {row, col} = node;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  // grid[0].length = collumn length
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);

  return neighbors.filter(neighbor => !neighbor.isVisited);
};

const sortNodesByDistance = (unvisitedNodes: Block[]) => {
  unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
};

const updateUnvisitedNeighbors = (node: Block, grid: Block[][]) => {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
  for (let neighbor of unvisitedNeighbors) {
    neighbor.distance = node.distance + 1;
    neighbor.previousBlock = node;
  }
};

export function getShortestPath(endPoint: Block) {
  const nodesInOrder: Block[] = [];
  let currentNode = endPoint;
  while (currentNode !== null) {
    // add at the beginning
    nodesInOrder.unshift(currentNode);
    currentNode = currentNode.previousBlock as Block;
  }

  return nodesInOrder;
}
