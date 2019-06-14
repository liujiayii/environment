<template>
  <div>
    <div class="banner">
      <div class="main">
        <h3 class="title">产品展示</h3>
        <p class="txt">
          专注于节能减排技术、能源优化技术和环保工艺技术的研究与开发，凭借多年来在建材、冶金、电力、化工等行业基础业务上的技术积淀和市场感悟，致力于为企业提供节能技术推广、节能环保产品研发与销售、节能环保工程服务，努力为企业提供整体节能减排方案;多年来我们致力于环保工艺技术研究、环保工程设计与施工、安装、调试服务和环保产品开发.</p>
      </div>
      <div class="bg"></div>
    </div>
    <div class="select">
      <div :class="[{ active: active===1 }, 'box']" @click="toggleActive(1)">钢材架构</div>
      <div :class="[{ active: active===2 }, 'box']" @click="toggleActive(2)">水泥建筑</div>
      <div :class="[{ active: active===3 }, 'box']" @click="toggleActive(3)">化工用品</div>
      <div :class="[{ active: active===4 }, 'box']" @click="toggleActive(4)">市政建筑</div>
      <div :class="[{ active: active===5 }, 'box']" @click="toggleActive(5)">化工用品</div>
      <div :class="[{ active: active===6 }, 'box']" @click="toggleActive(6)">市政建筑</div>
    </div>
    <div class="cont">
      <div class="waterfalls">
        <div v-for="(item,index) of img" class="box" :key="index">
          <router-link :to="{path:'/productDetail',query:{id:index}}">
            <div class="pic"><img :src="item" :alt="`${index}.jpg`"></div>
            <div class="bg">太阳能发电机</div>
          </router-link>
        </div>
      </div>
      <a-pagination class="page" :defaultCurrent="2" :total="500" @change="onChange"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "product",
    data() {
      return {
        active: 1,
        img: ['https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3165522988,2394891213&fm=27&gp=0.jpg',
          'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1393987749,3422146058&fm=27&gp=0.jpg',
          'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1055727654,337004439&fm=27&gp=0.jpg',
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2968231382,1111539856&fm=27&gp=0.jpg',
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1451330793,2242997567&fm=27&gp=0.jpg',
          'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1060387669,1498970204&fm=27&gp=0.jpg',
          'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1483033257,4287748004&fm=27&gp=0.jpg']
      }
    },
    methods: {
      toggleActive(num) {
        this.active = num
      },
      onChange(pageNumber) {
        console.log('Page: ', pageNumber);
      }
    }
  }
</script>

<style lang="less" scoped>
  .banner {
    position: relative;
    height: 766px;
    width: 100%;
    background: url("../../assets/pruduct.png");
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
    width: 1200px;
    margin: 90px auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

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

    .waterfalls {
      padding: 10px;
      position: relative;
      margin: 0 auto;
      columns: 380px; /* 每列每个元素最小的宽度 */
      column-gap: 20px; /* 每列的距离，不设置这个可以通过margin来设置边距 */

      .box {
        position: relative;
        break-inside: avoid; /* 这个是设置多列布局页面下的内容盒子如何中断，如果不加上这个，每列的头个元素就不会置顶，配合columns使用 */
        margin-bottom: 15px; /* 如果是非图片瀑布流的话就加上背景吧，不然感觉不太好看。 */
        background: dodgerblue;
        color: white;
        border-radius: 5px;
        transition: all .3s;
        overflow: hidden;

        &:hover .bg {
          top: 0;
        }

        .pic img {
          width: 100%; /* 建议每个图片宽高为100%，如果不设置宽高，就会溢出外层盒子的，或者设置固定宽度，最好不要宽过外层盒子或者高过外层盒子。这里说的外层盒子就是html代码里的 .box */
          height: 100%;
          border-radius: 5px;
          border: 1px solid #ccc;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }

        .bg {
          position: absolute;
          top: 100%;
          width: 100%;
          height: 100%;
          background: #000;
          opacity: 0.8;
          transition: all .2s;
          text-align: center;
          padding-top: 30%;
        }
      }
    }

    .page {
      display: flex;
      justify-content: center;
      margin: 100px auto;
    }
  }
</style>
