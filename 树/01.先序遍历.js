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
        right: {
          value: 6
        }
      }
    }
  }
}

/**
 *                                          1
 *                                   2             3
 *                              4        5               6
 *
 *
 * **/

let nodes = []
function deepFirst(tree) {
  nodes.push(tree.value)
  if (tree.child && tree.child.left) deepFirst(tree.child.left)
  if (tree.child && tree.child.right) deepFirst(tree.child.right)
}
deepFirst(tree)
console.log(nodes)

function first(tree) {
  let node = [tree], res = []
  while(node.length > 0) {
    let first = node.pop()
    res.push(first)
    if (first.child && first.child.right) node.push(first.child.right)
    if (first.child && first.child.left) node.push(first.child.left)
  }
  return res
}

console.log(first(tree))