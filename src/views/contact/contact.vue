<template>
  <div class="all">
    <div class="bg">
      <div class="cont">
        <div class="left">
          <h3>联系我们</h3>
          <div class="detail">如果您有任何查询或需要启动项目，请不要害怕与我们联系</div>
          <div class="list-box">
            <div class="list">
              <div class="img">
                <a-icon type="phone"/>
              </div>
              <div class="info">
                <div class="top">电话</div>
                <div class="bottom">0318-251819</div>
              </div>
            </div>
            <div class="list">
              <div class="img">
                <a-icon type="mail"/>
              </div>
              <div class="info">
                <div class="top">电子邮箱</div>
                <div class="bottom">10086@qq.com</div>
              </div>
            </div>
            <div class="list">
              <div class="img">
                <a-icon type="desktop"/>
              </div>
              <div class="info">
                <div class="top">办公时间</div>
                <div class="bottom">9:00-18:00</div>
              </div>
            </div>
            <div class="list">
              <div class="img">
                <a-icon type="mail"/>
              </div>
              <div class="info">
                <div class="top">地址</div>
                <div class="bottom">河北石家庄新华区中储广场D座2201</div>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="img"><img
            src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3300305952,1328708913&fm=27&gp=0.jpg" alt="">
          </div>
          <div class="form">
            <a-textarea placeholder="请输入留言内容" :autosize="{ minRows: 4,maxRows: 10 }" v-model="form"/>
            <div class="btn" @click="submit">提交</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "contact",
    data() {
      return {
        form: ''
      }
    },
    methods:{
      submit(){
        alert(this.form)
      }
    }
  }
</script>

<style lang="less" scoped>
  .all {
    width: 100%;
    height: 700px;

    .bg {
      height: calc(100% + 200px);
      background: #181818;

      .cont {
        display: flex;
        justify-content: space-between;
        width: 1300px;
        margin: 0 auto;
        padding-top: 130px;

        .left {
          width: 560px;
          margin-top: 120px;

          h3 {
            font-size: 35px;
            line-height: 45px;
            color: #7acb9e;
          }

          .detail {
            font-size: 18px;
            line-height: 45px;
            color: #878787;
          }

          .list-box {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            .list {
              display: flex;
              width: 280px;
              margin-top: 40px;

              .img {
                width: 60px;
                min-width: 60px;
                height: 60px;
                border-radius: 50%;
                background: #fff;
                box-shadow: 0 0 6px 2px #fff;
                color: #7acb9e;
                text-align: center;
                line-height: 60px;
                font-size: 30px;
              }

              .info {
                margin-left: 12px;

                .top {
                  font-size: 18px;
                  line-height: 35px;
                  color: #7acb9e;
                }

                .bottom {
                  font-size: 16px;
                  color: #878787;
                }
              }
            }
          }
        }

        .right {
          position: relative;
          width: 500px;
          height: 616px;

          .img {
            width: 100%;
            height: 100%;
            overflow: hidden;

            img {
              width: 100%;
            }
          }

          .form {
            position: absolute;
            top: 80px;
            left: -80px;
            width: 470px;
            height: 470px;
            background: #fff;
            opacity: 0.9;
            padding: 70px 34px;

            .btn {
              margin-top: 44px;
              width: 130px;
              height: 44px;
              text-align: center;
              line-height: 44px;
              color: #fff;
              font-size: 18px;
              background: #7acb9e;
              border-radius: 22px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
</style>
