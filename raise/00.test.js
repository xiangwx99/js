/**
 *  1.不绑定key => 节点位置不变, 但是innerText改变
 *  2.绑定key => dom节点位置发生变化, 但是内容没更新
 *
 *  增删: 没有key的情况， 节点位置不变，内容也更新了 ; 有key的情况， 节点删除了 A, B 节点，新增了 F, G 节点
 * **/