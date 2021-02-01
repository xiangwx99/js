/**
 *  在初始阶段, 本质上发生在auto run函数中, 然后通过render函数生成Virtual DOM, view根据Virtual DOM生成Actual DOM.
 *  因为render函数依赖于页面上所有的数据data, 并且这些数据都是响应式的, 所有的数据作为组件render函数的依赖.一旦这些数据有所改变,那么render函数会被重新调用
 *
 *  在更新阶段, render函数会重新调用并且返回一个新的Virtual DOM, 新旧Virtual DOM之间会进行比较,把diff之后的最小改动应用到Actual DOM之中
 *
 *  Watcher负责收集依赖，清除依赖和通知依赖。在大型复杂的树形结构下，由于采用了精准追踪系统， 所以会避免组件的过度渲染
 *
 *
 *  Actual DOM 和 Virtual DOM
 *    Actual DOM 通过document.createElement('div')生成一个DOM节点。
 *      document.createElement('div')  ==> 浏览器原生对象(开销大) "[object HTMLDivElement]"
 *    Virtual DOM 通过 vm.$createElement('div')生成一个JS对象，VDOM对象有一个表示div的tag属性，有一个包含了所有可能特性的data属性，可能还有一个包含更多虚拟节点的children列表。
 *      vm.$createElement('div')   // 纯JS对象（轻量） { tag: 'div', data: { attrs: {}, ...}, children: [] }
 *    因为Virtual DOM的渲染逻辑和Actual DOM解耦了，所以有能力运行在的非浏览器环境中，这就是为什么Virtual DOM出现之后混合开发开始流行的原因，React Native 和 Weex能够实现的原理就是这个。
 *
 *
 *
 *  JSX和Template
 *    JSX和Template都是用于声明DOM和state之间关系的一种方式，在Vue中，Template是默认推荐的方式，但是也可以使用JSX来做更灵活的事。
 *    JSX更加动态化，对于使用编程语言是很有帮助的，可以做任何事，但是动态化使得编译优化更加复杂和困难。
 *    Template更加静态化并且对于表达式有更多约束，但是可以快速复用已经存在的模板，模板约束意味着可以在编译时做更多的性能优化，相对于JSX在编译时间上有着更多优势。
 * **/