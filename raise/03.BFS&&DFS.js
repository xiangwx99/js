let tree = {
  value: 1,
  child: {
    left: {
      value: 2,
      child: {
        left: {
          value: 4
        },
        right: {
          value: 5
        }
      }
    },
    right: {
      value: 3,
      child: {
        left: {
          value: 6
        },
        right: {
          value: 7,
          child: {
            left: {
              value: 8
            },
            right: {
              value: 9
            }
          }
        }
      }
    },
  }
}

function BFS(tree) {
  let nodes = [], stack = [tree]
  while(stack.length > 0) {
    let node = stack.shift()
    nodes.push(node)
    if (node.child && node.child.left) stack.push(node.child.left)
    if (node.child && node.child.right) stack.push(node.child.right)
  }
  return nodes
}

function DFS(tree) {
  let nodes = [], stack = [tree]
  while(stack.length > 0) {
    let node = stack.pop()
    nodes.push(node)
    
  }
}

console.log(BFS(tree))