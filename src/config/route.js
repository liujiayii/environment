import router from "../router";
import NProgress from "nprogress";

const constantRouterComponents = {
  Home: () => import('../views/home/home'),
  About: () => import('../views/about/about'),
  Product: () => import('../views/product/product'),
  ProductDetail: () => import('../views/product/productDetail'),
  Project: () => import('../views/project/project'),
  ProjectDetail: () => import('../views/project/projectDetail'),
  Skill: () => import('../views/skill/skill'),
  SkillDetail: () => import('../views/skill/skillDetail'),
  News: () => import('../views/news/news'),
  NewsDetail: () => import('../views/news/newsDetail'),
  Contact: () => import('../views/contact/contact'),
}

const menuData = [
  {
    path: "home",
    name: "首页",
    nav: true
  }, {
    path: "about",
    name: "关于我们",
    nav: true
  }, {
    path: "product",
    name: "产品展示",
    nav: true
  }, {
    path: "productDetail",
    name: "产品展示详情"
  }, {
    path: "project",
    name: "工程案例",
    nav: true
  }, {
    path: "projectDetail",
    name: "工程案例详情"
  }, {
    path: "skill",
    name: "专业技术",
    nav: true
  }, {
    path: "skillDetail",
    name: "专业技术详情"
  }, {
    path: "news",
    name: "新闻资讯",
    nav: true
  }, {
    path: "newsDetail",
    name: "新闻资讯详情"
  }, {
    path: "contact",
    name: "联系我们",
    nav: true
  }
]
/*格式化 后端 结构信息并递归生成层级路由表*/
const generator = (routerMap, parent) => {
  return routerMap.map(item => {
    const currentRouter = {
      path: `/${item.path}`,
      name: item.name,
      component: constantRouterComponents[item.path.replace(item.path[0], item.path[0].toUpperCase())],
    }
    currentRouter.path = currentRouter.path.replace('//', '/')
    return currentRouter
  })
}
/*路由守卫*/
router.addRoutes(generator(menuData))
router.beforeEach((to, form, next) => {
  (function smoothScroll() {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      window.requestAnimationFrame(smoothScroll);
      window.scrollTo(0, currentScroll - (currentScroll / 5));
    }
  })();
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})

export {menuData}
