<template>
  <div>
    <a-layout id="components-layout-demo-fixed">
      <a-layout-header :style="{ position: 'relative', zIndex: 99, width: '100%',background: '#fff',height:'116px'}">
        <div style="display: flex;justify-content: space-around">
          <div class="logo">LOGO</div>
          <div style="display: flex">
            <a-menu theme="light" mode="horizontal" :defaultSelectedKeys="['/home']"
                    :style="{ lineHeight: '116px' }">
              <template v-for="item of menuData">
                <a-menu-item :key="`/${item.path}`" v-if="item.nav">
                  <router-link :to="`/${item.path}`">{{item.name}}</router-link>
                </a-menu-item>
              </template>
            </a-menu>
            <div class="search">
              <a-icon type="search"/>
            </div>
          </div>
        </div>
      </a-layout-header>
      <a-layout-content :style="{ padding: '0', marginTop: '2px'}">
        <div :style="{ background: '#fff', minHeight: '380px' ,paddingBottom:'200px'}">
          <a-back-top/>
          <router-view/>
        </div>
      </a-layout-content>
      <a-layout-footer :style="{padding:'0'}">
        <div class="foot">
          <div class="logo"><img src="../../assets/logo.png" alt=""></div>
          <div class="link">
            <ul>
              <li>关于我们</li>
              <li>公司介绍</li>
              <li>发展历程</li>
              <li>资质荣誉</li>
              <li>合作伙伴</li>
            </ul>
            <ul>
              <li>产品中心</li>
              <li>公司介绍</li>
              <li>发展历程</li>
              <li>资质荣誉</li>
              <li>合作伙伴</li>
            </ul>
            <ul>
              <li>解决方案</li>
              <li>公司介绍</li>
              <li>发展历程</li>
              <li>资质荣誉</li>
              <li>合作伙伴</li>
            </ul>
            <ul>
              <li>成功案例</li>
              <li>公司介绍</li>
              <li>发展历程</li>
              <li>资质荣誉</li>
              <li>合作伙伴</li>
            </ul>
            <ul>
              <li>新闻资讯</li>
              <li>公司介绍</li>
              <li>发展历程</li>
              <li>资质荣誉</li>
              <li>合作伙伴</li>
            </ul>
            <ul>
              <li>联系我们</li>
              <li><img src="../../assets/code.png" alt=""></li>
            </ul>
            <ul>
              <li></li>
              <li>电话：400-125-2562</li>
              <li>地址：河北省石家庄市新华区中储广场1102</li>
            </ul>
          </div>
        </div>
      </a-layout-footer>
      <a-layout-footer :style="{ background: '#042f17',color:'#fff',textAlign:'center' }">
        ©2017 喔家房产 All rights resered | 河北XX有限公司
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
  import {menuData} from '../../config/route'

  export default {
    name: "layout",
    data() {
      return {
        menuData
      }
    }
  }
</script>

<style lang="less" scoped>
  #components-layout-demo-fixed {
    .logo {
      line-height: 116px;
      font-weight: bold;
      font-size: 42px;
    }

    .search {
      line-height: 116px;
      font-size: 20px;
    }
  }

  .foot {
    position: relative;
    width: 1600px;
    padding-bottom: 60px;
    margin: 0 auto;

    .logo {
      position: absolute;
      top: -40px;
    }

    .link {
      display: flex;
      justify-content: center;
      z-index: 2;

      ul {
        margin-right: 30px;
        text-align: left;

        li {
          font-size: 18px;
          color: #666666;
          line-height: 45px;
          list-style: none;
          max-width: 240px;

          &:first-child {
            line-height: 100px;
            color: #222222;
          }
        }

        &:last-child {
          li:nth-child(2) {
            margin-top: 100px;
          }
        }
      }
    }
  }
</style>
