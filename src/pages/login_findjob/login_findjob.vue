<template>
  <div class="flex-row justify-evenly page">
    <div class="flex-col section">
      <div class="flex-row items-center group_1">
        <img
          class="image"
          src="../images/1.png"
        />
        <div class="flex-col items-start ml-17">
          <span class="font text_2">Job Search</span>
          <span class="font_2 text_3 mt-8">Good jobs straight talk</span>
        </div>
      </div>
      <div class="flex-row mt-52">
        <img
          class="image_2"
          src="../images/2.png"
        />
        <div class="flex-col items-start ml-14">
          <span class="font text_6">Communication</span>
          <span class="font_2 mt-8">Timely communication</span>
        </div>
      </div>
      <div class="flex-row items-center mt-52">
        <img
          class="image_3"
          src="../images/3.png"
        />
        <div class="flex-col items-start ml-14">
          <span class="text_7">Optional</span>
          <span class="font_2 mt-4">Any position you choose</span>
        </div>
      </div>
    </div>
    <div class="flex-col section_2">
      <span class="text">Account Password Login</span>
      <div class="flex-col group mt-51">
        <div class="flex-col self-stretch">
          <div class="flex-row items-center section_3">
            <div class="flex-col justify-start items-center text-wrapper">
              <span class="font_3 text_4">Job Wanted</span>
            </div>
            <span class="font_3 text_5 ml-58 text-YRaniajF" @click="onClick">Recruitment</span>
          </div>
          <input
            v-model="phone"
            class="section_4 view input"
            placeholder="Please enter your account number"
          />
          <input
            type="password"
            v-model="password"
            class="flex-col justify-start items-start section_4 view_2 input_1"
            placeholder="Please enter your password"
          />
          <div class="flex-col justify-start items-center text-wrapper_3 view-sUtx5jkb" @click="onClick_1">
            <span class="font_3 text_9">Login</span>
          </div>
          <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </div>
        <div class="self-center group_2 mt-20">
          <span class="font_2 text_10">Don't have an account yet?</span>
          <span class="text_11 text-ljcNvz1x" @click="onClick_2">Go to Register</span>
        </div>
        <div class="flex-row self-stretch group_3 mt-20">
          <van-checkbox class="group_5" v-model="v_model" name="E2oqKU5y" shape="regtangular"></van-checkbox>
          <span class="self-center text_12 ml-11">
            I have read and agreed to the "User Agreement" and "Privacy Policy", allowing unified management of my
            account
          </span>
        </div>
      </div>=
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex"; // 用于映射 Vuex actions
  export default {
    components: {},
    props: {},
    data() {
      return {
      phone: '', // 用户输入的账号
      password: '', // 用户输入的密码
      errorMessage: '', // 错误信息
      v_model: '', // 用户协议勾选框
    };
  },

    methods: {
      ...mapActions(['saveAuthData']), // 映射 Vuex 的 saveAuthData action
      onClick() {
        this.$router.push({ name: 'register_recruitment' });
      },
      async onClick_1() {
      console.log('准备发送登录数据:', { phone: this.phone, password: this.password,type:"user"});
      try {
        const response = await this.$axios({
          method: 'POST',
          url: '/login', // 
          data: {
            phone: this.phone,
            password: this.password,
            type:"user"
          }
        });
        this.$router.push({ name: 'homepage' });
      } 
      catch (error) {
        this.errorMessage = '登录失败，请检查用户名和密码。';
        console.error("Login error:", error);
      }
    },
      onClick_2() {
        this.$router.push({ name: 'register_findjob' });
        
      },
    },
  };
</script>

<style scoped lang="scss">
  .ml-17 {
    margin-left: 17px;
  }
  .mt-51 {
    margin-top: 51px;
  }
  .ml-11 {
    margin-left: 11px;
  }
  .page {
    padding: 178px 290px 179px;
    background-color: #c38370;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    .section {
      padding: 75.5px 13.5px 367.5px 20px;
      background-color: #eadbd6;
      border-radius: 20px 0px 0px 20px;
      height: 667px;
      .group_1 {
        padding: 0 3px;
        .image {
          width: 40px;
          height: 45px;
        }
        .text_2 {
          color: #c38370;
          line-height: 15px;
        }
        .text_3 {
          color: #c38370;
          line-height: 15.5px;
        }
      }
      .image_2 {
        margin-bottom: 3px;
        border-radius: 4px;
        width: 38px;
        height: 35px;
      }
      .font {
        font-size: 20px;
        font-family: Inter;
        line-height: 15.5px;
        font-weight: 600;
      }
      .text_6 {
        color: #888888;
        line-height: 15.5px;
      }
      .image_3 {
        width: 38px;
        height: 34.5px;
      }
      .text_7 {
        color: #888888;
        font-size: 20px;
        font-family: Inter;
        font-weight: 600;
        line-height: 19.5px;
      }
    }
    .section_2 {
      padding: 62.5px 31px 74.5px 39.5px;
      background-color: #ffffff;
      border-radius: 0px 20px 20px 0px;
      width: 588px;
      height: 667px;
      .text {
        color: #2e2e2e;
        font-size: 28px;
        font-family: Inter;
        font-weight: 600;
        line-height: 27.5px;
      }
      .group {
        padding-left: 2.5px;
        .section_3 {
          margin-right: 7px;
          padding: 7px 7px 8px;
          background-color: #ebebeb;
          border-radius: 10px;
          .text-wrapper {
            padding: 16.5px 0 15.5px;
            background-color: #ffffff;
            border-radius: 10px;
            width: 241px;
            height: 50px;
            .text_4 {
              color: #c38370;
              line-height: 17.5px;
            }
          }
          .text_5 {
            margin-right: 51.5px;
            color: #585858;
            line-height: 18.5px;
          }
          .text-YRaniajF {
            cursor: pointer;
          }
        }
        .section_4 {
          margin-right: 7px;
          margin-top: 28px;
        }
        .view {
          border-radius: 10px;
          height: 65px;
          border: solid 3px #ebebeb;
        }
        .input {
          padding: 10px 10px 10px 10px;
        }
        .view_2 {
          padding: 22.5px 0 18px;
          border-radius: 10px;
          width: 508px;
          border: solid 3px #ebebeb;
        }
        .input_1 {
          padding: 22px 19px 18px 19px;
        }
        .text-wrapper_3 {
          margin-right: 7px;
          margin-top: 31px;
          padding: 20.5px 0 21px;
          background-color: #c38370;
          border-radius: 10px;
          width: 508px;
          .text_9 {
            color: #ffffff;
            line-height: 23.5px;
          }
        }
        .view-sUtx5jkb {
          cursor: pointer;
        }
        .font_3 {
          font-size: 24px;
          font-family: Inter;
          line-height: 18.5px;
          font-weight: 600;
        }
        .group_2 {
          line-height: 16px;
          .text_10 {
            color: #7e7e7e;
            line-height: 15px;
          }
          .text_11 {
            color: #7e7e7e;
            font-size: 16px;
            font-family: Inter;
            font-weight: 700;
            line-height: 16px;
          }
          .text-ljcNvz1x {
            cursor: pointer;
          }
        }
        .group_3 {
          margin-left: 12px;
          .group_5 {
            flex-shrink: 0;
            align-self: flex-start;
          }
          .text_12 {
            color: #7e7e7e;
            font-size: 16px;
            font-family: Inter;
            line-height: 19px;
            text-align: center;
            width: 469px;
          }
        }
      }
    }
    .font_2 {
      font-size: 16px;
      font-family: Inter;
      line-height: 15.5px;
      color: #888888;
    }
  }
</style>