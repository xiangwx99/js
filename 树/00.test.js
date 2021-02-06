function inorder(root) {//中序非递归   BST第K小的数   第K大见下面
  if (!root) return null;
  var stack = [];
  var p = root;
  //var pre=-Infinity;
  while (stack.length > 0 || p) {
    if (p) { //当前非空，当前入栈，左移
      stack.push(p);
      p = p.left;
    } else { //栈弹出，并右移
      p = stack.pop();
      console.log(p.value);//在此和前一个数比较 判断是否为二叉搜索树
      p = p.right;
    }
  }
}
function BFS(root) { //广度优先遍历(层序)
  var queue = [];
  queue.push(root); // 先进先出
  while (queue) {
    var temp = queue.shift();
    console.log(temp.value);
    if (temp.left != null)
      queue.push(temp.left);
    if (temp.right != null)
      queue.push(temp.right);
  }
}
function pre(root) {//先序非递归 中左右
  var stack = [];
  stack.push(root);
  while (stack) {
    // 移除最后一个
    var temp = stack.pop();
    console.log(temp.value);
    // 后进先出
    if (temp.right != null)
      stack.push(temp.right);
    if (temp.left != null)
      stack.push(temp.left);
  }
}
function pos(root) {//后序非递归 中右左=>左右中
  var stack1 = [];
  var stack2 = [];
  stack1.push(root);
  while (stack1) {
    var temp = stack1.pop();
    stack2.push(temp);
    if (temp.left != null)
      stack1.push(temp.left);
    if (temp.right != null)
      stack1.push(temp.right);
  }
  while (stack2) {
    console.log(stack2.pop().value);
  }
}
var preOrder = function (node) { //先序遍历  递归版(中序和后序修改打印位置即可)
  if (node) {
    console.log(node.value); //arr.push(node.val)
    preOrder(node.left);
    preOrder(node.right);
  }
}

