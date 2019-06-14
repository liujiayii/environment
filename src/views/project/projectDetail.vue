<template>
  <div class="cont">
    <div class="section">
      <div class="slide">
        <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
          <swiper-slide class="slide-1"></swiper-slide>
          <swiper-slide class="slide-2"></swiper-slide>
          <swiper-slide class="slide-3"></swiper-slide>
          <swiper-slide class="slide-4"></swiper-slide>
          <swiper-slide class="slide-5"></swiper-slide>
          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        </swiper>
        <!-- swiper2 Thumbs -->
        <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
          <swiper-slide class="slide-1"></swiper-slide>
          <swiper-slide class="slide-2"></swiper-slide>
          <swiper-slide class="slide-3"></swiper-slide>
          <swiper-slide class="slide-4"></swiper-slide>
          <swiper-slide class="slide-5"></swiper-slide>
        </swiper>
      </div>
      <div class="right">
        <h3>第{{($route.query.id)*1+1}}篇:太阳能发电机</h3>
        <p>产品介绍：7月26日，光伏行业2018年上半年发展回顾与下半年形势展望研讨会在京召开，国家能源局新能源和再生能源司新能源处处长熊敏峰在致辞中表示，今年上半年分布式光伏新增装机1224万千瓦，同比增长72
          %，新增规模首次超过集中式光伏，体现了光伏发电未来发展方向。</p>
      </div>
    </div>
    <div class="main">
      <h3>详细介绍</h3>
      <p> 永磁调速器系统由永磁调速器本体、电动执行器、控制信号源、控制中心、电缆等集成。
        永磁调速器安装在电动机和负载之间，通过导体转子和永磁体转子之间的气隙实现电动机到负载端无接触式联接的扭矩传递。其工作原理是：当导体转子和永磁体转子之间相对运动时，导体转子切割磁力线，在导体转子中产生感应电流，感应电流进而产生感应磁场，感应磁场与永磁体转子产生的磁场交互作用，从而实现两者之间的扭矩传递。
        永磁调速器本体包括：1.永磁体转子（连接于负载侧）；2.导体转子（连接于电机侧）；3.调速机构。调速机构可调节永磁体转子和导体转子的相对位置，改变两者之间磁场耦合的面积，从而改变传递的扭矩。耦合面积增大，通过永磁调速器传递的扭矩就增大，负载转速提高；耦合面积变小，通过永磁调速器传递的扭矩就变小，负载转速降低。
        电动执行器给调速机构提供动力，根据控制中心的指令进行动作，调节耦合面积，进而调节扭矩输出，并将结果反馈给控制中心。
        控制中心可以是PLC控制、智能仪表控制、也可以是DCS控制。
        控制信号源则为工艺需要的控制对象，对于水泵系统而言可能是管网压力、流量、或者液位。对于风机系统而言则可能是压力、流量等工艺参数。因此控制信号源可能为压力、流量、液位等参数，此参数通过变送器可转化为4～20mA的电流信号，指示电动执行器动作。
        永磁调速器实现了电动机和负载之间无接触式联接，有效的解决了旋转负载系统的对中、软启动、调速节能、减振等问题。
        整个系统结构示意图如下： 永磁调速器系统由永磁调速器本体、电动执行器、控制信号源、控制中心、电缆等集成。
        永磁调速器安装在电动机和负载之间，通过导体转子和永磁体转子之间的气隙实现电动机到负载端无接触式联接的扭矩传递。其工作原理是：当导体转子和永磁体转子之间相对运动时，导体转子切割磁力线，在导体转子中产生感应电流，感应电流进而产生感应磁场，感应磁场与永磁体转子产生的磁场交互作用，从而实现两者之间的扭矩传递。
        永磁调速器本体包括：1.永磁体转子（连接于负载侧）；2.导体转子（连接于电机侧）；3.调速机构。调速机构可调节永磁体转子和导体转子的相对位置，改变两者之间磁场耦合的面积，从而改变传递的扭矩。耦合面积增大，通过永磁调速器传递的扭矩就增大，负载转速提高；耦合面积变小，通过永磁调速器传递的扭矩就变小，负载转速降低。
        电动执行器给调速机构提供动力，根据控制中心的指令进行动作，调节耦合面积，进而调节扭矩输出，并将结果反馈给控制中心。
        控制中心可以是PLC控制、智能仪表控制、也可以是DCS控制。
        控制信号源则为工艺需要的控制对象，对于水泵系统而言可能是管网压力、流量、或者液位。对于风机系统而言则可能是压力、流量等工艺参数。因此控制信号源可能为压力、流量、液位等参数，此参数通过变送器可转化为4～20mA的电流信号，指示电动执行器动作。
        永磁调速器实现了电动机和负载之间无接触式联接，有效的解决了旋转负载系统的对中、软启动、调速节能、减振等问题。
        整个系统结构示意图如下：</p>
    </div>
    <a-divider/>
    <div class="more">
      <div class=""><span class="btn">上一个：</span>
        <router-link :to="{path:'/productDetail',query:{id:($route.query.id)*1-1}}">太阳能发电</router-link>
      </div>
      <div class=""><span class="btn">下一个：</span>
        <router-link :to="{path:'/productDetail',query:{id:($route.query.id)*1+1}}">风力发电</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "projectDetail",
    data() {
      return {
        swiperOptionTop: {
          spaceBetween: 10,
          loop: true,
          loopedSlides: 5, //looped slides should be the same
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        swiperOptionThumbs: {
          spaceBetween: 10,
          slidesPerView: 4,
          touchRatio: 0.2,
          loop: true,
          loopedSlides: 5, //looped slides should be the same
          slideToClickedSlide: true,
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.swiper
        const swiperThumbs = this.$refs.swiperThumbs.swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
    }
  }
</script>

<style lang="less" scoped>
  .cont {
    width: 1300px;
    margin: 0 auto;

    .section {
      display: flex;
      padding-top: 40px;
    }

    .slide {
      width: 650px;
      min-width: 650px;
      height: 540px;

      .swiper-container {
        background-color: #000;
      }

      .swiper-slide {
        background-size: cover;
        background-position: center;

        &.slide-1 {
          background-image: url('https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2153937626,1074119156&fm=27&gp=0.jpg');
        }

        &.slide-2 {
          background-image: url('https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=234634259,4236876085&fm=27&gp=0.jpg');
        }

        &.slide-3 {
          background-image: url('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3300305952,1328708913&fm=27&gp=0.jpg');
        }

        &.slide-4 {
          background-image: url('https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1060387669,1498970204&fm=27&gp=0.jpg');
        }

        &.slide-5 {
          background-image: url('https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2033838781,461625559&fm=27&gp=0.jpg');
        }
      }

      .gallery-top {
        height: 80% !important;
        width: 100%;
      }

      .gallery-thumbs {
        height: 20% !important;
        box-sizing: border-box;
        padding: 10px 0;
      }

      .gallery-thumbs .swiper-slide {
        width: 25%;
        height: 100%;
        opacity: 0.4;
      }

      .gallery-thumbs .swiper-slide-active {
        opacity: 1;
      }
    }

    .right {
      padding: 50px;

      h3 {
        font-size: 24px;
        line-height: 35px;
        color: #222222;
        margin-bottom: 10px;
      }

      p {
        font-size: 16px;
        line-height: 35px;
        color: #7d7d7d;
      }
    }

    .main {
      h3 {
        font-size: 24px;
        color: #222222;
        line-height: 45px;
        margin: 120px 0 30px;
      }

      p {
        font-size: 16px;
        line-height: 35px;
        color: #7d7d7d;
      }
    }

    .more {
      display: flex;
      justify-content: space-between;
      font-size: 16px;

      a {
        color: #555555;
      }

      .btn {
        color: #7d7d7d;
      }
    }
  }
</style>

