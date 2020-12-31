let tree = {
  value: "-",
  left: {
    value: '+',
    left: {
      value: 'a',
    },
    right: {
      value: '*',
      left: {
        value: 'b',
      },
      right: {
        value: 'c',
      }
    }
  },
  right: {
    value: '/',
    left: {
      value: 'd',
    },
    right: {
      value: 'e',
    }
  }
}
let result = []
//  1.1 先序遍历  ===>  递归遍历
function preorderTraversal(tree) {
  if(tree) {
    result.push(tree.value)
    preorderTraversal(tree.left)
    preorderTraversal(tree.right)
  }
}

//  2.1 中序遍历  ===>  递归遍历
function middleOrderTraversal(tree) {
  if(tree) {
    middleOrderTraversal(tree.left)
    result.push(tree.value)
    middleOrderTraversal(tree.right)
  }
}

//  3.1 后序遍历  ===>  递归遍历
function postorderTraversal(tree) {
  if(tree) {
    postorderTraversal(tree.left)
    postorderTraversal(tree.right)
    result.push(tree.value)
  }
}

/********************************************** 非递归的方式来实现 **********************************************/
//  1.2 先序遍历  ===>  非递归遍历
function preorderTraversalD(nodes) {
  let result = []
  let stack = []
  stack.push(nodes)
  while(stack.length) {                     // 等同于 while(stack.length !== 0) 直到栈中的数据为空
    let node = stack.pop()                  // 取的是栈中最后一个j
    result.push(node.value)
    if(node.right) stack.push(node.right)   // 先压入右子树
    if(node.left) stack.push(node.left)     // 后压入左子树
  }
  return result
}

//  2.2 中序遍历  ===>  非递归遍历
function middleOrderTraversal(tree) {
  let result = []
  let stack = []
  stack.push(tree)
  while(stack.length || tree) {
    if(tree) {
      stack.push(tree)
      tree = tree.left
    } else {
      tree = stack.pop()
      result.push(tree.value)
      tree = tree.right
    }
  }
  return result
}

//  3.3 后序遍历  ===>  非递归遍历
function postorderTraversal(node) {
  let result = [];
  let stack = [];
  stack.push(node);
  while(stack.length) {
    // 不能用node.touched !== 'left' 标记‘left’做判断，
    // 因为回溯到该结点时，遍历右子树已经完成，该结点标记被更改为‘right’ 若用标记‘left’判断该if语句会一直生效导致死循环
    if(node.left && !node.touched) { // 不要写成if(node.left && node.touched !== 'left')
      // 遍历结点左子树时，对该结点做 ‘left’标记；为了子结点回溯到该（双亲）结点时，便不再访问左子树
      node.touched = 'left';
      node = node.left;
      stack.push(node);
      continue;
    }
    if(node.right && node.touched !== 'right') { // 右子树同上
      node.touched = 'right';
      node = node.right;
      stack.push(node);
      continue;
    }
    node = stack.pop(); // 该结点无左右子树时，从栈中取出一个结点，访问(并清理标记)
    node.touched && delete node.touched; // 可以不清理不影响结果 只是第二次对同一颗树再执行该后序遍历方法时，结果就会出错啦因为你对这棵树做的标记还留在这棵树上
    result.push(node.value);
    node = stack.length ? stack[stack.length - 1] : null;
    //node = stack.pop(); 这时当前结点不再从栈中取（弹出），而是不改变栈数据直接访问栈中最后一个结点
    //如果这时当前结点去栈中取（弹出）会导致回溯时当该结点左右子树都被标记过时 当前结点又变成从栈中取会漏掉对结点的访问（存入结果数组中）
  }
  return result; // 返回值
}

/********************************************** 广度优先遍历 **********************************************/
let res = []
let stack = [tree]  // 将树压入栈中
let count = 0
function breadthFirst() {
  let node = stack[count]
  if(node) {
    res.push(node.value)
    if(node.left) stack.push(node.left)
    if(node.right) stack.push(node.right)
    count++
    breadthFirst()
  }
}

/********************************************** 深度优先遍历 **********************************************/
let deepTraversal1 = (node, nodeList = []) => {
  if (node !== null) {
    nodeList.push(node)
    let children = node.children
    for (let i = 0; i < children.length; i++) {
      deepTraversal1(children[i], nodeList)
    }
  }
  return nodeList
}
console.log(deepTraversal1(tree))