<template>
  <div>
    <div class="banner">
      <div class="main">
        <h3 class="title">企业概况</h3>
        <p class="txt">
          专注于节能减排技术、能源优化技术和环保工艺技术的研究与开发，凭借多年来在建材、冶金、电力、化工等行业基础业务上的技术积淀和市场感悟，致力于为企业提供节能技术推广、节能环保产品研发与销售、节能环保工程服务，努力为企业提供整体节能减排方案;多年来我们致力于环保工艺技术研究、环保工程设计与施工、安装、调试服务和环保产品开发，取得了很好的经济效益和社会效益。冶金、电力、化工等行业基础业务上的技术积淀和市场感悟，致力于为企业提供节能技术推广、节能环保产品研发与销售、节能环保工程服务，努力为企业提供整</p>
      </div>
      <div class="bg"></div>
    </div>
    <div class="select">
      <div :class="[{ active: active===1 }, 'box']" @click="toggleActive(1)">领导致辞</div>
      <div :class="[{ active: active===2 }, 'box']" @click="toggleActive(2)">发展历程</div>
      <div :class="[{ active: active===3 }, 'box']" @click="toggleActive(3)">公司荣誉</div>
      <div :class="[{ active: active===4 }, 'box']" @click="toggleActive(4)">组织架构</div>
    </div>
    <div class="cont">
      <div class="article" v-show="active===1">
        <div>
          <p>尊敬的客户和朋友：</p>
          <p v-for="item of 3">
            {{item}}:着中国工业化的全面推进和工业产能的不断提升，资源的制约和环境承载能力与人民群众对良好生态环境的期待着中国工业化的全面推进和工业产能的不断提升，资源的制约和环境承载能力与人民群众对良好生态环境的期待着中国工业化的全面推进和工业产能的不断提升，资源的制约和环境承载能力与人民群众对良好生态环境的期待</p>
        </div>
        <div class="img"><img src="../../assets/about-lead.png" alt=""></div>
      </div>
      <div class="list" v-show="active===2">
        <ul>
          <li v-for="item of 8"><span class="date"><span class="day">{{item+11}}</span>/{{item}}</span><a href="">薄膜太阳能组件落地新西兰空军基地轻钢屋顶</a>
          </li>
        </ul>
      </div>
      <div v-show="active===3">
        <img src="../../assets/about-honor.png" alt="">
      </div>
      <div v-show="active===4"><img src="../../assets/about-team.png" alt=""></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "about",
    data() {
      return {
        active: 1
      }
    },
    methods: {
      toggleActive(num) {
        this.active = num
      }
    }
  }
</script>

<style lang="less" scoped>
  .banner {
    position: relative;
    height: 766px;
    width: 100%;
    background: url("../../assets/about.png");
    background-size: contain;

    .bg {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: #000;
      opacity: 0.2;
    }

    .main {
      position: absolute;
      right: 10%;
      top: 100px;
      width: 700px;
      z-index: 2;
      text-align: left;
      color: #fff;

      .title {
        font-size: 40px;
        line-height: 48px;
        color: #fff;
        margin-bottom: 20px;
      }

      .txt {
        font-size: 20px;
        line-height: 45px;
        height: 330px;
        overflow: scroll;

        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }

  .select {
    width: 800px;
    margin: 90px auto;
    display: flex;
    justify-content: space-between;

    .box {
      font-size: 16px;
      line-height: 48px;
      border: 1px solid #ccc;
      padding: 0 50px;
      cursor: pointer;
    }

    .active {
      background: #015f2b;
      border: none;
      color: #fff;
    }
  }

  .cont {
    width: 1200px;
    margin: 0 auto;
  }

  .article {
    display: flex;
    text-align: left;
    font-size: 18px;
    color: #222;
    line-height: 35px;

    p {
      margin-bottom: 20px;
    }

    .img {
      height: 600px;
      width: 390px;
      min-width: 390px;

      img {
        width: 100%;
      }
    }
  }

  .list {
    font-size: 18px;
    line-height: 48px;
    color: #7d7d7d;

    li {
      list-style: none;
    }

    .day {
      font-size: 26px;
    }

    a {
      margin-left: 10px;
      color: #7d7d7d;

      &:hover {
        color: #015f2b;
      }
    }
  }
</style>
