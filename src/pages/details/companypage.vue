<template>
  <div class="flex-col page">
  <div class="flex-col">
    
    <div class="flex-row justify-between items-center section">
      <div class="flex-row">
        <button class="font text">Home</button>
        <span class="font text_2 ml-23">Search</span>
      </div>
      <div class="flex-row items-center">
        <button class="font text_3">Message</button>
        <button class="font text_4 ml-20">Resume</button>
        <button class="font text_5 ml-20">Miss Lin</button>
        <img
          class="image image_1 ml-20"
          src="../images/4.png"
        />
      </div>
    </div>

    <!-- 上方栏 公司名称 -->
    <div class="flex-row justify-between section_2">
      <div class="flex-row items-center self-center">
        <div class="flex-row">
         <img class="back-button" @click="onReturn" src="../images/c11.png"/> <!-- 新增的返回按钮 -->
        </div>
        <img
          class="image_2"
          src="../images/c1.png"
        />
        <div class="flex-col ml-32">
          <span class="self-start font_2 text_6">{{company[0].name}}</span>
          <div class="flex-row items-center self-stretch mt-32">
            <span class="font_4 text_9">Published</span>
            <span class="font_4 text_10 ml-8">{{company[0].staff}} people</span>
            <span class="font_4 text_11 ml-8">{{company[0].type}}</span>
          </div>
        </div>
      </div>
      <div class="flex-row items-center self-start group">
        <div class="flex-row">
          <span class="self-center font_2">{{company[0].possition}}</span>
          <span class="self-start font_3 text_7 ml-12">position</span>
        </div>
        <div class="flex-row items-baseline ml-44">
          <span class="font_2">{{company[0].boss}}</span>
          <span class="font text_8 ml-7">BOSS</span>
        </div>
      </div>
    </div>
  </div>
  <!-- 详情 -->
  <div class="flex-row group_2 mt-20">
    <!-- 中间栏 -->
    <div class="flex-col flex-1 section_3">
      <!-- 公司信息介绍 -->
      <div class="flex-col">
        <span class="self-start font_5 text_13">Company information</span>
        <div class="flex-col self-stretch group_5">
        <span class="self-start font_6 text_14">{{company[0].information_1}}</span>
          <span class="self-stretch font_6 text_15">
            {{company[0].information_2}}
          </span>
        </div>

        <!-- 公司相册 -->
        <span class="self-start font_5 text_18">Company photo album</span>
        <div class="flex-row justify-between equal-division">
          <img
            class="equal-division-item"
            src="../images/c2.png"
          />
          <img
            class="equal-division-item"
            src="../images/c3.png"
          />
          <img
            class="equal-division-item"
            src="../images/c4.png"
          />
          <img
            class="equal-division-item"
            src="../images/c5.png"
          />
        </div>
      </div>

      <!-- 公司岗位列表 -->
       <div class="company job listing part">
      <div class="flex-row justify-between items-end group_6">
        <span class="font_5">Job openings</span>
        <div class="flex-row items-center">
          <button class="font_8 text_19">View all {{ company[0].position }} jobs</button>
          <img
            class="shrink-0 image_4 ml-11"
            src="../images/c10.png"
          />
        </div>
      </div>
      <div class="flex-col list">
        <!-- 遍历company数组中每个对象的jobItems -->
      <div 
         v-for="(companyItem, index) in company" :key="index">
        <!-- 遍历每个公司对象中的jobItems数组 -->
        <div class="flex-row justify-between items-center list-item mt-20" v-for="(jobItem, jobIndex) in companyItem.jobItems"
            :key="jobIndex">
            <div class="flex-col group_9">
              <span class="font_9">{{jobItem.name}}</span>
              <div class="flex-row items-center mt-10">
                <span class="font_11">{{jobItem.salary}}</span>
                <div class="flex-col justify-start shrink-0 text-wrapper_2">
                  <span class="font_8 text_22">{{jobItem.date}}</span>
                </div>
                <div class="flex-col justify-start items-center shrink-0 text-wrapper_3">
                  <span class="font_7">{{jobItem.requirement}}</span>
                </div>
              </div>
            </div>
            <!-- 负责该岗位的管理员信息 -->
            <div class="flex-row items-center group_8">
              <img
                class="image_5"
                :src="jobItem.manager_url"
              />
              <div class="flex-col items-start ml-20">
                <span class="font_10 text_23">{{jobItem.manager_name}}</span>
                <span class="font_3 text_24 mt-9">recruiting manager</span>
              </div>
            </div>
        </div>
      </div>
      </div>
     </div>
    </div>

    <!-- 右侧栏 -->
    <div class="flex-col shrink-0 self-start section_4 ml-20">
      <div class="flex-col justify-start items-center self-stretch text-wrapper">
        <span class="font text_12">Executive introduction</span>
      </div>
      <div class="flex-row items-center self-stretch group_3 mt-18">
        <img
          class="image_3"
          src="../images/c8.png"
        />
        <div class="flex-col items-start group_4 ml-13">
          <span class="font_5">{{company[0].executive_name}}</span>
          <span class="font_7 text_16 mt-14">{{company[0].executive_position}}</span>
        </div>
      </div>
      <span class="self-center font_6 text_17 mt-18">
        {{company[0].executive_intro}}
      </span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  components: {},
  props: ["cid"],
  data() {
    return {
      companyDetails: {}, // 用于存储详情数据
      company:[
        {
          icon_url:"../images/c1.png",
          name:"Huawei",
          ifPublished:"Published",
          staff:"1000-9999",
          type:"Computer software",
          possition:"511",
          boss:"127",
          information_1:"Ruijie Network, China data communication solution provider.",
          information_2:"Since its establishment in 2000, it has adhered to independent innovation, and has been rooted in theindustry, in-depth scenario solution design and innovation, and the use of cloud computing, SDN, mobile Internet, big data, Internet of things, AI and other new technologies to provide scenario-based digital solutions for users in various industries. And to provide users with 'visible good service'.",
          url_1:"../images/c2.png",
          url_2:"../images/c3.png",
          url_3:"../images/c4.png",
          url_4:"../images/c5.png",
          jobItems: [
            {
              name:"Thermal Design Engineer (Engineering)",
              salary:"20-30k",
              date:"5-10 years",
              requirement:"Bachelor",
              manager_url:"../images/c6.png",
              manager_name:"Miss Jiang",
            },
            {
              name:"Thermal Design Engineer (Engineering)",
              salary:"20-30k",
              date:"5-10 years",
              requirement:"Bachelor",
              manager_url:"../images/c7.png",
              manager_name:"Miss Jiang",
            },
            {
              name:"Thermal Design Engineer (Engineering)",
              salary:"20-30k",
              date:"5-10 years",
              requirement:"Bachelor",
              manager_url:"../images/c8.png",
              manager_name:"Miss Jiang",
            },
          ],
          // 右侧栏数据
          executive_name:"Ren Zhengfei",
          executive_position:"PRESIDENT",
          executive_intro:"He was born in Zhenning County, Guizhou Province on October 25, 1944. Founder and President of HuaweiTechnologies Co., LTD.",
        }
      ]
      
    };
  },
  created() {
    // 根据 jid 获取详情数据
    console.log(this.cid);
    this.fetchJobDetails(this.cid);
  },
  methods: {
    fetchJobDetails(cid) {
      console.log("尝试获取公司信息")
      // 这里可以通过后端 API 获取该职位的详情
      this.$axios

        .get(`/details/companypage/${cid}`)
        .then((res) => {
          this.companyDetails = res.data; // 假设返回的数据是详情
        })
        .catch((err) => {
          console.error('获取详情失败:', err);
        });
    },
    // 跳转主页
    onClick_2(){
        this.$router.push({ name: 'homepage'});
      },
    // 返回搜索页
    onReturn(){
        this.$router.push({ name: 'searchpage'});
      }
  },
};
</script>

<style scoped lang="scss">
  .ml-23 {
  margin-left: 23px;
}
.ml-7 {
  margin-left: 7px;
}
.ml-11 {
  margin-left: 11px;
}
.mt-9 {
  margin-top: 9px;
}
.ml-13 {
  margin-left: 13px;
}
.page {
  padding-bottom: 18px;
  background-color: #f2ebe0;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .section {
    padding: 9px 100px 9px 105.5px;
    background-color: #121212;

    // 将导航栏固定，并位于最上层
    position: fixed; 
      top: 0; 
      width: 100%;
      z-index: 1000; 
    .text {
      line-height: 15px;
    }
    .text_2 {
      color: #c38370;
      line-height: 15px;
    }
    .text_3 {
      line-height: 19px;
    }
    .text_4 {
      line-height: 15px;
    }
    .text_5 {
      line-height: 15.5px;
    }
    .image {
      flex-shrink: 0;
    }
    .image_1 {
      border-radius: 50%;
      width: 42px;
      height: 42px;
    }
  }
  .section_2 {
    padding: 83px 100px 40px; //改动这里的第一个值，使其下移，不会被顶部导航栏遮住
    background-color: #61534f;
    display: flex; /* 使用flex布局 */
    align-items: center; /* 垂直居中 */
    justify-content: space-between; /* 两端对齐 */
    // 返回键
    .back-button {
        position: absolute; /* 绝对定位 */
        width: 20px;
        left: 25px; /* 贴近左边缘 */
        top: 75px;
        cursor: pointer; /* 鼠标手形 */
    }
    .image_2 {
        width: 100px;
        height: 100px;
        margin-left: 10px; /* 与左边缘的间隔 */
    }
    .font_2 {
      font-size: 36px;
      font-family: Inter;
      line-height: 26.5px;
      font-weight: 600;
      color: #ffffff;
    }
    .text_6 {
      line-height: 28px;
    }
    .font_4 {
      font-size: 14px;
      font-family: Inter;
      line-height: 13.5px;
      color: #ffffff;
    }
    .text_9 {
      line-height: 10.5px;
    }
    .text_10 {
      line-height: 13px;
    }
    .text_11 {
      line-height: 13.5px;
    }
    .group {
      margin-top: 18.5px;
      .text_7 {
        margin-top: 11px;
        color: #ffffff;
        line-height: 19px;
      }
      .text_8 {
        line-height: 15px;
        font-weight: unset;
      }
    }
  }
  .font {
    font-size: 20px;
    font-family: Inter;
    line-height: 15px;
    font-weight: 600;
    color: #ffffff;
  }
  .group_2 {
    padding: 0 100px;
    .section_3 {
      padding: 24.5px 38px 34px 39px;
      background-color: #ffffff;
      border-radius: 16px;
      height: 772px;
      .text_13 {
        margin-left: 2.5px;
        line-height: 23px;
      }
      .group_5 {
        margin: 20.5px 51px 0 2px;
        .text_14 {
          line-height: 19px;
        }
        .text_15 {
          line-height: 19px;
        }
      }
      .text_18 {
        margin-left: 2.5px;
        margin-top: 14px;
        line-height: 22.5px;
      }
    .equal-division {
        align-self: stretch;
        display: flex;
        justify-content: space-between; 
        flex-wrap: wrap;
        margin-right: 36px;
        margin-top: 22px;
        .equal-division-item {
            width: calc(25% - 10px); 
            margin-right: 10px; 
            height: 188px;
            &:last-child {
            margin-right: 0;
            }
        }
        }
      .group_6 {
        margin-top: 36.5px;
        .text_19 {
          color: #c38370;
          line-height: 17px;
        }
        .image_4 {
          width: 7px;
          height: 12px;
        }
      }
      .list {
        margin-top: 19.5px;
        .list-item {
          display: flex; /* 改为块级元素，实现上下排列 */
          margin-bottom: 20px; /* 增加底部间距 */
          &:first-child {
            margin-top: 0;
          }
          .group_9 {
            margin-top: 3.5px;
            .font_9 {
              font-size: 20px;
              font-family: Inter;
              line-height: 20.5px;
              font-weight: 600;
              color: #121212;
            }
            .font_11 {
              font-size: 20px;
              font-family: Inter;
              line-height: 15px;
              color: #fc6335;
            }
            .text-wrapper_2 {
              margin-left: 32.5px;
              padding: 9.5px 0 5.5px;
              background-color: #f8f8f8;
              border-radius: 6px;
              height: 32px;
              .text_22 {
                margin-left: 12.5px;
                margin-right: 6.5px;
              }
            }
            .text-wrapper_3 {
              margin-left: 21px;
              padding: 10px 0 9px;
              background-color: #f8f8f8;
              border-radius: 6px;
              width: 111px;
              height: 32px;
            }
          }
          .group_8 {
            margin-right: 8.5px;
            margin-left: 20px;
            .image_5 {
              border-radius: 50%;
              width: 58px;
              height: 58px;
            }
            .font_10 {
              font-size: 20px;
              font-family: Inter;
              line-height: 19.5px;
              font-weight: 600;
              color: #121212;
            }
            .text_23 {
              margin-left: 4px;
            }
            .text_24 {
              line-height: 19.5px;
            }
          }
        }
      }
      .font_8 {
        font-size: 18px;
        font-family: Inter;
        line-height: 17px;
        color: #7e7e7e;
      }
    }
    .section_4 {
      padding-bottom: 24.5px;
      background-color: #ffffff;
      border-radius: 16px;
      height: 276px;
      .text-wrapper {
        padding: 13px 0 13px;
        background-color: #f8f4ee;
        border-radius: 16px 16px 0px 0px;
        width: 295px;
        .text_12 {
          color: #121212;
          line-height: 15.5px;
        }
      }
      .group_3 {
        padding-left: 25px;
        padding-right: 25px;
        .image_3 {
          border-radius: 8px;
          width: 60px;
          height: 60px;
        }
        .group_4 {
          width: 172.5px;
          .text_16 {
            line-height: 13.5px;
          }
        }
      }
      .text_17 {
        line-height: 19px;
        width: 225px;
      }
    }
    .font_5 {
      font-size: 24px;
      font-family: Inter;
      line-height: 23.5px;
      font-weight: 600;
      color: #121212;
    }
    .font_7 {
      font-size: 18px;
      font-family: Inter;
      line-height: 13.5px;
      color: #7e7e7e;
    }
    .font_6 {
      font-size: 16px;
      font-family: Inter;
      line-height: 19.5px;
      color: #121212;
    }
  }
  .font_3 {
    font-size: 20px;
    font-family: Inter;
    line-height: 19.5px;
    color: #121212;
  }
}
</style>