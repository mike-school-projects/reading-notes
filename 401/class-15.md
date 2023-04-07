# Class Notes

## Binary Search Trees

### WHAT

Node-based data structure where each node has a maximum of two nodes.  Each node follows a specific order, i.e. all left nodes are < right nodes.

### WHY

By ordering the nodes, it gives you O(log n) time performance since you can split the dataset in half at each node.

### HOW

BST are node based with two pointers to left and right descendents. Basic methods required are:
- insertion
- deletion
- traversal

### OTHER CONSIDERATIONS

BST may become unbalanced over time leading to worsening performance.  Worst case, time performance can degrade to O(n).

Balancing operations may be necessary for improved performance.  BSTs may be balanced based on height (distance from head) or weight (number of nodes on subtrees)


## Things I want to know more about

[Link to home](https://mikeshen7.github.io/reading-notes)
