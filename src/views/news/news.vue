<template>
  <div class="cont">
    <h3>重点关注</h3>
    <div>
      <div>
        <swiper class="slide" :options="swiperOption">
          <swiper-slide v-for="(item,index) of 4" :key="index">
            <div class="slide">
              <div class="img">
                <img
                  src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1451330793,2242997567&fm=27&gp=0.jpg"
                  alt="">
              </div>
              <div class="right">
                <div class="title">{{item}}:节能减排丨莱州发电：超低排放电厂是怎样 炼成的？</div>
                <div class="date">2019-03-06</div>
                <p class="detail">Global Solar Energy®质轻、可弯曲的太阳能组件实现了全球商业、户用、政府和移动应用。光伏建筑一体化方案是Global Solar
                  Energy®创新性的成果，通过把太阳能发电产品集成到建筑上，</p>
                <div class="btn">
                  <router-link :to="{path:'/newsDetail',query:{id:index}}">查看详情
                    <a-icon type="caret-right"/>
                  </router-link>
                </div>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <h3>行业动态</h3>
    <div class="section">
      <div class="list" v-for="(item,index) of 3" :key="index">
        <div class="img"><img
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1718395925,3485808025&fm=27&gp=0.jpg" alt="">
        </div>
        <div class="info">
          <div class="title">{{item}}:节能减排丨莱州发电：超低排放电厂是怎样 炼成的？</div>
          <div class="date">2019-03-06</div>
          <p class="detail">Global Solar Energy®质轻、可弯曲的太阳能组件实现了全球商业、户用、政府和移动应用。光伏建筑一体化方案是Global Solar
            Energy®创新性的成果，通过把太阳能发电产品集成到建筑上，</p>
          <div class="btn">
            <router-link :to="{path:'/newsDetail',query:{id:index}}">查看详情
              <a-icon type="caret-right"/>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <h3>企业要闻</h3>
    <div class="section">
      <div class="list" v-for="(item,index) of 3" :key="index">
        <div class="img"><img
          src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1718395925,3485808025&fm=27&gp=0.jpg" alt="">
        </div>
        <div class="info">
          <div class="title">{{item}}:节能减排丨莱州发电：超低排放电厂是怎样 炼成的？</div>
          <div class="date">2019-03-06</div>
          <p class="detail">Global Solar Energy®质轻、可弯曲的太阳能组件实现了全球商业、户用、政府和移动应用。光伏建筑一体化方案是Global Solar
            Energy®创新性的成果，通过把太阳能发电产品集成到建筑上，</p>
          <div class="btn">
            <router-link :to="{path:'/newsDetail',query:{id:index}}">查看详情
              <a-icon type="caret-right"/>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "news",
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .cont {
    width: 1300px;
    margin: 0 auto;
  }

  h3 {
    font-size: 35px;
    line-height: 45px;
    color: #010101;
    padding: 50px 0 20px;
  }

  .slide {
    width: 100%;
    height: 450px;
    display: flex;

    .img {
      width: 840px;
      min-width: 840px;
      height: 440px;
      overflow: hidden;

      img {
        width: 100%;
      }
    }

    .right {
      padding: 50px 40px;

      .title {
        font-size: 24px;
        line-height: 35px;
        color: #3d3d3d;
      }

      .date {
        font-size: 18px;
        line-height: 25px;
        color: #7e7e7e;
        margin: 30px 0 6px;
      }

      .detail {
        font-size: 16px;
        line-height: 25px;
        color: #7e7e7e;
        margin-bottom: 50px;
      }
    }
  }

  .section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .list {
      width: 416px;
      min-width: 416px;

      .img {
        width: 416px;
        height: 250px;
        overflow: hidden;

        img {
          width: 100%;
        }
      }

      .info {
        .title {
          font-size: 24px;
          line-height: 35px;
          color: #3d3d3d;
          margin-top: 20px;
        }

        .date {
          font-size: 18px;
          line-height: 25px;
          color: #7e7e7e;
          margin: 10px 0;
        }

        .detail {
          font-size: 16px;
          line-height: 25px;
          color: #7e7e7e;
          margin-bottom: 20px;
        }
      }
    }
  }

  .btn {
    width: 116px;
    height: 36px;
    border: 1px solid #6d6d6d;
    border-radius: 18px;
    margin-left: 18px;
    line-height: 36px;
    text-align: center;
    transition: all .5s;

    &:hover {
      background: #015f2b;
      color: #fff;

      a {
        color: #fff;
      }
    }

    a {
      color: #6d6d6d;
      transition: all .5s;
    }
  }
</style>
