<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of 3">
        <div class="img"><img src="../../assets/banner.png" alt=""></div>
        <div class="right">
          <div class="title" data-swiper-parallax="-100">{{item}}:为企业提供</div>
          <div class="subtitle" data-swiper-parallax="-200">节能减排方案</div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>
    <div class="cont">
      <div class="section">
        <div class="title">
          <h3>工程案例</h3>
          <ul class="right">
            <li v-for="(item,index) of 5" :key="index" :class="{active:index===active}" @click="()=>active=index">
              <div class="img"></div>
              <div class="info">{{item}}钢材</div>
            </li>
          </ul>
        </div>
        <div class="main">
          <div class="text">
            公司以技术创新为先导，致力于节能环保技术创新，引领节能环保技术方向，在电气节能领域，针对不同的电机工艺应用情况，开发不同的节能产品，显著提高了工业企业电机的应用效率，为工矿企业的节能减排提供产品解决方案。
          </div>
          <div class="img"><img src="../../assets/home3.png" alt=""></div>
        </div>
      </div>
    </div>
    <div class="contact">
      <div class="bg"></div>
      <div class="text">
        <div class="en">This is where we Drem</div>
        <div class="cn">我们秉承专业成就未来</div>
      </div>
      <div class="section">
        <div class="left"><img
          src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3300305952,1328708913&fm=27&gp=0.jpg" alt="">
        </div>
        <div class="main">
          <div class="en">If you are interested, you are welcome to leave a message.</div>
          <div class="cn">如果你感兴趣的话，欢迎在这里留下你的信息。</div>
          <div class="form">
            <div class="field"><span class="star">*</span>姓名：<input type="text"></div>
            <div class="field"><span class="star">*</span>电话：<input type="text"></div>
            <div class="field"><span class="star">*</span>地址：<input type="text"></div>
            <div class="field"><span class="star">*</span>内容：<input type="text"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        swiperOption: {
          speed: 600,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        active: 0
      }
    }
  }
</script>

<style lang="less" scoped>
  .cont {
    width: 1300px;
    margin: 0 auto;

    .title {
      display: flex;
      justify-content: space-between;

      h3 {
        font-size: 33px;
        line-height: 63px;
      }

      .right {
        position: relative;
        z-index: 2;
        display: flex;

        li {
          display: flex;
          flex-direction: column;
          align-items: center;
          list-style: none;
          width: 160px;
          height: 190px;
          color: #8e8e8e;
          cursor: pointer;

          &.active, &:hover {
            background: #015f2b;
            color: #fff;

            .img {
              background: url("../../assets/home.png") center center no-repeat;
            }
          }

          .img {
            margin-top: 20px;
            width: 54px;
            height: 54px;
            border-radius: 50%;
            border: 1px solid #8e8e8e;
            display: flex;
            justify-content: center;
            align-items: center;
            background: url("../../assets/home2.png") center center no-repeat;
          }

          .info {
            font-size: 16px;
            margin-top: 20px;
          }
        }

      }
    }

    .main {
      display: flex;
      margin-top: -50px;

      .text {
        font-size: 18px;
        line-height: 56px;
      }

      .img {
        margin-left: 40px;
        width: 800px;
        min-width: 800px;
        height: 400px;
        overflow: hidden;

        img {
          width: 100%;
        }
      }
    }
  }

  .contact {
    position: relative;
    width: 100%;
    height: 600px;
    background: url("../../assets/home55.png");
    background-size: cover;
    margin-bottom: 400px;

    .bg {
      width: 100%;
      height: 100%;
      background: #015f2b;
      opacity: 0.85;
    }

    .text {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 3;
      text-align: center;
      padding-top: 200px;
      line-height: 56px;
      color: #fff;

      .en {
        font-size: 45px;
      }

      .cn {
        font-size: 30px;
      }
    }

    .section {
      width: 1300px;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;

      .left {
        width: 400px;
        height: 150px;
        overflow: hidden;
        margin-top: 180px;

        img {
          width: 100%;
        }
      }

      .main {
        position: relative;
        z-index: 2;
        color: #222222;
        width: 820px;
        margin-top: -130px;
        background: #fff;
        padding: 100px;

        .en {
          font-size: 26px;
          line-height: 52px;
        }

        .cn {
          font-size: 20px;
          line-height: 56px;
        }

        .form {
          font-size: 20px;
          line-height: 56px;
          color: #222;
          margin-top: 60px;

          .star {
            color: #015f2b;
          }

          input {
            background: none;
            border: none;
            outline: none;
            border-bottom: 1px solid #cecece;
            width: 70%;
          }
        }
      }
    }

  }

  .swiper-slide {
    display: flex;
    width: 100%;
    font-size: 18px;
    color: #fff;
    box-sizing: border-box;
    background-color: transparent !important;
    justify-content: space-around !important;
  }

  .swiper-slide .img {
    width: 63%;
  }

  .swiper-slide .right {
    background: #015f2b;
    width: 37%;
  }

  .swiper-slide .img img {
    width: 100%;
  }

  .swiper-slide .title {
    font-size: 35px;
    padding-top: 220px;
    text-align: center;
  }

  .swiper-slide .subtitle {
    font-size: 80px;
    margin-left: -40px;
  }

</style>
