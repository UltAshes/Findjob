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
      <span class="text">Account Password Registration</span>
      <div class="flex-col group mt-51">
        <div class="flex-col self-stretch">
          <div class="flex-row items-center section_3">
            <span class="font_3 text_4 text-IOb8kGRn" @click="onClick">Job Wanted</span>
            <div class="flex-col justify-start items-center shrink-0 text-wrapper ml-57">
              <span class="font_3 text_5">Recruitment</span>
            </div>
          </div>
          <input v-model="phone" class="view_2 section_4 input" placeholder="Please enter your account number" />
          <span v-if="accountError" class="error-message">{{ accountError }}</span>

          <input v-model="password" class="view_2 section_4 input_1" placeholder="Please enter your password" />
          <span v-if="passwordError" class="error-message">{{ passwordError }}</span>

          <div class="flex-col justify-start items-center text-wrapper_3 view-dqHrmlbO" @click="onClick_1">
            <span class="font_3 text_9">Registration</span>
          </div>
        </div>
        <div class="self-center group_2 mt-20">
          <span class="font_2 text_10">I already have an account.</span>
          <span class="text_11 text-vweaqvtO" @click="onClick_2">Go to log in</span>
        </div>
        <div class="flex-row self-stretch group_3 mt-20">
          <van-checkbox class="section_5" v-model="v_model" name="VHuIdCVH" shape="regtangular"></van-checkbox>
          <span class="self-center text_12 ml-11">
            I have read and agreed to the "User Agreement" and "Privacy Policy", allowing unified management of my
            account
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {
        v_model: '',
        phone: '',  // 手机号字段
        password: '', // 密码字段
        accountError: '', // 用于显示手机号验证错误信息
        passwordError: '', // 用于显示密码验证错误信息
      };
    },

    methods: {
      validateInputs() {
        // 清除之前的错误消息
        this.accountError = '';
        this.passwordError = '';

        // 验证手机号是否为 11 位数字
        const phoneRegex = /^\d{11}$/;
        if (!phoneRegex.test(this.phone)) {
          this.accountError = 'Invalid mobile number';
        }

        // 验证密码是否大于 6 位
        if (this.password.length < 6) {
          this.passwordError = 'The password must contain more than 6 valid characters';
        }

        // 如果没有错误信息，则通过验证
        return !this.accountError && !this.passwordError;
      },

      onClick() {
        this.$router.push({ name: 'register_findjob' });
      },
      async onClick_1() {
        // 验证输入
        if (!this.validateInputs()) {
          return;
        }
        console.log('准备发送注册数据:', { phone: this.phone, password: this.password, type:"hr"});
        // 验证通过后发送请求
        this.$axios({
        url: '/register',    
        method: 'post',
        data: {
          phone: this.phone,         
          password: this.password,
          type:"hr"
        }
        }).then(res=>{
        console.log(res)
        this.$router.push({ name: 'login_recruitment' });
        ;
      },err=>{
        console.log(err);
      })
      },
      onClick_2() {
        this.$router.push({ name: 'login_recruitment' });
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
  .ml-57 {
    margin-left: 57px;
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
          padding: 7px 11px 8px 58.5px;
          background-color: #ebebeb;
          border-radius: 10px;
          .text_4 {
            color: #585858;
            line-height: 17.5px;
          }
          .text-IOb8kGRn {
            cursor: pointer;
          }
          .text-wrapper {
            padding: 15.5px 0 16px;
            background-color: #ffffff;
            border-radius: 10px;
            width: 241px;
            height: 50px;
            .text_5 {
              color: #c38370;
            }
          }
        }
        .view_2 {
          margin-right: 7px;
          margin-top: 28px;
        }
        .section_4 {
          border-radius: 10px;
          height: 65px;
          border: solid 3px #ebebeb;
        }
        .input {
          padding: 10px 10px 10px 10px;
        }
        .input_1 {
          padding: 10px 10px 10px 10px;
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
        .view-dqHrmlbO {
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
          .text-vweaqvtO {
            cursor: pointer;
          }
        }
        .group_3 {
          margin-left: 12px;
          .section_5 {
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