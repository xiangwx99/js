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
function deepMid(tree) {
  if (tree && tree.child && tree.child.left) deepMid(tree.child.left)
  if (tree) res.push(tree.value)
  if (tree && tree.child && tree.child.right) deepMid(tree.child.right)
}

deepMid(tree)
console.log(res)