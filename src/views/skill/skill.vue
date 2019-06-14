<template>
  <div>
    <div class="banner">
      <div class="main">
        <h3 class="title">技术创新</h3>
        <p class="txt">
          薄膜化、柔性化是光伏产业发展的未来和总趋势。正是基于这个重要的战略判断，自2010年起，汉能组织专家筛选了海外多家薄膜发电企业进行全球技术整合，这也是汉能不断走向国际，从而成为全球性跨国清洁能源企业的重要一步。
          2012年6月5日，汉能控股收购德国Q-CELLS子公司、铜铟镓硒(CIGS)薄膜电池制造商Solibro。该企业的铜铟镓硒（CIGS）薄膜太阳能电池具有全球领先的模组转换效率，研发转化率最高已达21%，并获得德国弗劳恩霍夫太阳能系统研究院（Fraunhofer
          ISE）认证。
          2013年1月9日，汉能控股集团在北京总部宣布完成对美国企业MiaSolé的并购，迈出了海外技术整合的第二步。本次并购使汉能获得全球转化率领先的铜铟镓硒（CIGS）技术，量产转化率达到15.5%，成为规模、技术上皆领先全球的薄膜太阳能企业。</p>
      </div>
      <div class="bg"></div>
    </div>
    <h2>研发技术</h2>
    <div class="cont">
      <div class="list" v-for="(item,index) of 6" :key="index">
        <div class="title">{{item}}:太阳能广岛芯片</div>
        <div class="detail">Global Solar Energy®质轻、可弯曲的太阳能组件实现了全球商业、户用、政府和移动应用。光伏建筑一体化方案是Global Solar
          Energy®创新性的成果，通过把太阳能发电产品集成到建筑上，
        </div>
        <div class="btn">
          <router-link :to="{path:'/skillDetail',query:{id:index}}">查看详情
            <a-icon type="caret-right"/>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "skill"
  }
</script>

<style lang="less" scoped>
  .banner {
    position: relative;
    height: 766px;
    width: 100%;
    background: url("../../assets/skill.png");
    background-size: cover;

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

  h2 {
    font-size: 35px;
    line-height: 45px;
    color: #010101;
    text-align: center;
    padding: 80px 0;
  }

  .cont {
    display: flex;
    width: 1300px;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: space-between;

    .list {
      width: 560px;
      margin-bottom: 80px;
      transition: all .5s;
      padding: 10px;

      &:hover {
        background: #ededed;

        .btn {
          background: #015f2b;
          color: #fff;

          a {
            color: #fff;
          }
        }
      }

      .title {
        height: 36px;
        border-left: 2px solid #000;
        font-size: 24px;
        line-height: 36px;
        padding-left: 18px;
      }

      .detail {
        margin: 10px 0;
        font-size: 16px;
        line-height: 25px;
        padding-left: 18px;
        color: #000;
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

        a {
          color: #6d6d6d;
          transition: all .5s;
        }
      }
    }
  }
</style>
