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

let res = []
function lastDeep(tree) {
  if (tree && tree.child && tree.child.left) lastDeep(tree.child.left)
  if (tree && tree.child && tree.child.right) lastDeep(tree.child.right)
  if (tree && tree.value) res.push(tree.value)
}
lastDeep(tree)
console.log(res)