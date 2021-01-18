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

/**
 *                                            1
 *                                 2                      3
 *                         4             5         6             7
 *                                                            8      9
 *
 * **/

function maxDepth(tree) {
  if(!tree) {
    return 0
  } else {
    let leftDepth = 0, rightDepth = 0
    if(tree.child && tree.child.left) {
      leftDepth = maxDepth(tree.child.left)
    }
    if(tree.child && tree.child.right) {
      rightDepth = maxDepth(tree.child.right)
    }
    let childDepth = leftDepth > rightDepth ? leftDepth : rightDepth;
    return 1 + childDepth;
  }
}

console.log(maxDepth(tree))