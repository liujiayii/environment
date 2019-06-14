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
      <h3>{{($route.query.id)*1+1}}:太阳能广岛芯片</h3>
      <p>Global Solar Energy®质轻、可弯曲的太阳能组件实现了全球商业、户用、政府和移动应用。光伏建筑一体化方案是Global Solar
        Energy®创新性的成果，通过把太阳能发电产品集成到建筑上，其致力于研发和提升Solibro的CIGS共蒸发技术。本机构的研发团队最早于2003年启动，现有30名雇员，其中有10人为博士。本机构已取得世界领先的实验室电池和小尺寸组件的转换效率，由德国Fraunhofer-ISE（弗劳恩霍夫太阳能系统研究院）认证的1cm2电池转换效率达到21.0%及16cm2由四块单片电池构成的小尺寸组件的转换效率达到18.7%。自主研发的小型设备为技术开发的最新成果，同时可在与乌普塞拉大学薄膜太阳能团队的合作中得到应用。Solibro
        Research AB有一条完整的试产线用于制造全尺寸的原型组件。除了CIGS研发，Solibro Research AB同样在开发系统部件和进行可靠性测试。</p>
    </div>
    <h3></h3>
  </div>
</template>

<script>
  export default {
    name: "skillDetail"
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
    width: 1300px;
    margin: 0 auto;

    h3 {
      font-size: 24px;
      line-height: 45px;
      color: #000;
      margin-bottom: 10px;
    }

    p {
      font-size: 16px;
      line-height: 40px;
      color: #666;
    }
  }

</style>
