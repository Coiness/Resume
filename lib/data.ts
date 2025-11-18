export const resumeData = {
  name: '李泽健',
  basicInfo: {
    job: '前端开发工程师',
    phone: '13161940310',
    email: '1512133221@qq.com',
    github: 'https://github.com/Coiness',
    age: '20',
    base: '北京',
  },
  avatarUrl: '/avatar.jpg',
  personalStrengths: [
    '熟悉常⽤ HTML 与 HTML5 语义化标签，掌握 CSS/CSS3 基础语法及常⻅布局⽅式（Flex、 Grid），具备还原⾼保真设计稿的能⼒',
    '掌握 JavaScript 及 ES6+ 语法特性，理解作⽤域、闭包、原型链、this 指向、箭头函数、Promise等核⼼概念',
    '熟悉 React 技术栈，能够基于函数组件开发业务模块，配合 Ant Design 等组件库⾼效构建⻚⾯',
    '理解 HTTP 协议基本原理，了解 TCP/IP 通信过程与常⻅ HTTP 状态码语义',
    '熟悉前端⼯程化流程，能够使⽤ Vite、Webpack 搭建项⽬开发环境，了解 Git 基础操作及团队协作流程',
  ],
  projectExpericen: [
    {
      title: '配方工坊-前端',
      subtitle: ['React', 'TypeScript', 'Redux', 'Vite'],
      description:
        '基于 React 的智能配⽅计算与订单管理系统，⽀持原料-半成品-成品的多层级递归成本核算，提升配⽅计算效率并减少⼈⼯错误。',
      feature: [
        '设计并实现多层级配⽅依赖计算算法，⽀持原料、半成品与成品的递归成本核算，替代传统⼿⼯计 算⽅式，提升整体计算效率',
        '通过⾃定义 Hook 封装业务逻辑，并抽象服务层数据操作，实现⾼内聚低耦合的组件设计，提升系统可维护性与扩展性',
        '基于 Vite 构建⼯具链集成 ESLint、TypeScript 类型检查及热更新开发，优化⽣产环境⾃动化构建与部署流程',
        '通过图⽚压缩、CDN 加速、Vite分包与动态导⼊等⼿段优化构建体积与加载效 率，将 FCP 指标由 3.7s 优化⾄1.8s。',
        '对系统核⼼数据计算与订单管理模块进⾏性能调优和⼯程化改造，确保⼤数据量计算场景下的稳定性与响应速度',
      ],
    },
    {
      title: '代码可视化平台-全栈',
      subtitle: ['React', 'TypeScript', 'Ant Design', 'React Hooks'],
      description:
        '基于 React 的算法可视化平台，负责集成 AI 助⼿提供实时编程指导和代码分析，⽀持类ChatGPT 打字机效果和代码⾼亮渲染，提升开发者学习与调试体验。',
      feature: [
        '前端模块化设计聊天界⾯和消息流管理，通过 SSE 实现实时对话与打字机效果，结合 react-markdown ⽀持代码⾼亮渲染',
        '使⽤ Lodash 节流函数结合 useRef 缓冲区处理⾼频消息更新，通过 React Hooks 管理复杂异步状态，保证消息流顺畅与响应性能',
        '集成 react-window 实现历史对话虚拟列表渲染，显著减少 DOM 节点开销，在百条以上消息场景下仍保持滚动流畅与界⾯响应迅速',
        '通过 React.lazy + Suspense 实现⻚⾯组件懒加载，减少主包体积，降低初始加载压⼒。结合 Vite ⾃动分包配置与按需导⼊策略，提升⾸屏加载速度',
      ],
    },
  ],
  education: {
    school: '北京邮电大学',
    major: '人工智能专业本科在读',
    time: '2023.7-至今',
  },
  hobbies: [
    { name: '游戏', description: '喜欢玩MC，第一个项目就是为MC写的' },
    { name: '音乐', description: '虽然没有音乐细胞但是很喜欢听歌，最近在听深紫乐队' },
    { name: '编程', description: '想要改变这个世界。。。想要成为懒狗。。。' },
  ],
}
