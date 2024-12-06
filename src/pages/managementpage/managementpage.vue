<template>
  <div class="managementpage">
    <!-- 职位管理页浏览 -->
    <div class="flex-col page">
      <!-- 顶部导航栏 -->
      <div class="flex-row justify-between items-center section">
          <div class="flex-row">
          <button class="font text">Home</button>
          <button class="font text_2 ml-23">Search</button>
          </div>
          <div class="flex-row items-center">
            <button class="font text_3">Message</button>
            <button class="ml-20 text_4">Management</button>
            <button class="ml-20 font text_5">Miss Lin</button>
            <img class="ml-20 shrink-0 image" src="../images/4.png"/>
          </div>
      </div>
      <!-- 主体部分 -->
      <div class="flex-col group">
          <!-- 职位列表 -->
          <div class="flex-col">
            <div class="flex-col mt-16 list-item" v-for="(item, index) in items" :key="index">
              <div class="flex-row items-center">
                <span class="font_2">Interior designer</span>
                <div class="flex-row ml-353">
                    <span class="font_3 text_6">480</span>
                    <span class="font_3 text_7 ml-104">2</span>
                </div>
              </div>
              <div class="flex-row justify-between items-end relative mt-7">
                <div class="flex-row items-center">
                  <span class="font_5 text_9">3-6K</span>
                  <div class="ml-16 flex-col justify-start items-center shrink-0 text-wrapper">
                    <span class="font_6 text_10">1-3 years</span>
                  </div>
                  <div class="ml-16 flex-col justify-start shrink-0 text-wrapper_2">
                    <span class="font_6 text_11">computersoftware</span>
                  </div>
                </div>
                <div class="flex-col group_2">
                  <div class="flex-row self-stretch">
                    <!-- 编辑按钮 -->
                    <button class="flex-row items-center group_3" @click="onEditPosition">
                      <img
                      class="shrink-0 image_2"
                      src="../images/m1.png"
                      />
                      <span class="font_4 text_8 ml-7">Edit</span>
                    </button>
                    <!-- 删除按钮 -->
                    <button class="flex-row ml-31" @click="onDeletePosition">
                      <img
                      class="shrink-0 image_3"
                      src="../images/m2.png"
                      />
                      <span class="ml-6 font_4">Delete</span>
                    </button>
                  </div>
                  <div class="flex-row self-stretch">
                    <span class="ml-10 mt-10 self-start font_8">seen</span>
                    <span class="ml-56 mt-10 self-start font_7 text_12 pos">interested</span>
                  </div>
                </div>
                
                </div>
            </div>
          </div>
          <!-- 分页按钮 -->
          <div class="flex-row justify-center items-center mt-95">
          <img
              class="image_4"
              src="../images/m3.png"
          />
          <div class="flex-col justify-start items-center text-wrapper_3"><span class="font_9 text_13">1</span></div>
          <div class="flex-col justify-start items-center text-wrapper_4"><span class="font_9">2</span></div>
          <div class="flex-col justify-start items-center text-wrapper_4"><span class="font_9 text_14">3</span></div>
          <span class="text_15">...</span>
          <img
              class="image_4 image_5"
              src="../images/m4.png"
          />
          </div>
      </div>
    </div>
    <!-- 职位编辑的弹窗 -->
     <div class="edit-position-wrapper" v-if="isEditVisible">
      <div class="edit-position">
        <div class="flex-col section_3">
          <span class="self-start font_2 text_6">Job description</span>
          <div class="flex-row self-stretch group_2">
            <span class="font_3 text_7">Company Name:</span>
            <span class="font_3 text_8 ml-14">Huawei Technologies Co., Ltd.</span>
          </div>
          <div class="flex-row items-center self-stretch group_3">
            <span class="font_5 text_9">Job Name:</span>
            <input class="flex-col justify-start items-start view text-wrapper ml-43 input" placeholder="Enter job name"  />
          </div>
          <div class="flex-row items-center self-stretch group_7">
            <span class="font_3 text_14">Job Type:</span>
            <input class="flex-col justify-start items-start view text-wrapper ml-52 input_1" placeholder="Enter job type" />
          </div>
          <div class="flex-row items-center self-stretch group_8">
            <span class="font_5">Time:</span>
            <input class="flex-col justify-start items-start view text-wrapper_4 ml-83 input_2" placeholder="Enter time" />
          </div>
          <div class="flex-row items-center self-stretch group_9">
            <span class="font_3 text_16">Salary:</span>
            <input class="flex-col justify-start items-start view text-wrapper_17 ml-74 input_3" placeholder="Enter salary" />
          </div>
          <div class="flex-row items-center self-stretch group_10">
            <span class="font_5 text_18">Deadline:</span>
            <input class="flex-col justify-start items-start view text-wrapper_6 ml-53 input_4" placeholder="Enter deadline" />
          </div>
          <div class="flex-row items-center self-stretch group_11">
            <span class="font_5">RecruitNum:</span>
            <input class="flex-col justify-start items-start view text-wrapper_4 ml-35 input_5" placeholder="Enter recruits number" />
          </div>
          <div class="flex-row items-center self-stretch group_12">
            <span class="font_3 text_20">WorkingHours:</span>
            <input
              class="flex-col justify-start items-start view text-wrapper_18 ml-10 input_6"
              placeholder="Enter working hours"
            />
          </div>
          <div class="flex-row items-center self-stretch group_13">
            <span class="font_5 text_22">Address:</span>
            <input class="flex-col justify-start items-start view text-wrapper_1 ml-59 input_7" placeholder="Enter address" />
          </div>
          <span class="self-start font_3 text_24">Salary Detail:</span>
          <textarea
            class="text-wrapper_13 textarea"
            type="textarea"
            placeholder="Enter salary range"
            v-model="textarea"
            v-bind:autosize="{ minHeight:110, maxHeight:110 }"
          ></textarea>
          <span class="self-start font_8 text_26">Job Requirements:</span>
          <textarea
            class="view_7 textarea_1"
            type="textarea"
            placeholder="Enter Job requirements"
            v-model="textarea_1"
            v-bind:autosize="{ minHeight:74, maxHeight:74 }"
          ></textarea>
          <span class="self-start font_8 text_28">Job Responsibilities:</span>
          <textarea
            class="view_7 textarea_2"
            type="textarea"
            placeholder="Enter Job responsibilities"
            v-model="textarea_2"
            v-bind:autosize="{ minHeight:74, maxHeight:74 }"
          ></textarea>
          <div class="flex-row self-stretch group_14">
            <button class="flex-col justify-start items-center text-wrapper_7" @click="onBack"><span class="font_9 text_29">Back</span></button>
            <button class="flex-col justify-start items-center text-wrapper_8 ml-18" @click="onFinish"><span class="font_10">Finish</span></button>
          </div>
        </div>
      </div>
      
     </div>
     <!-- 确认删除的弹窗 -->
      <div class="confirm-delete-wrapper" v-if="isDelete">
        <div class="confirm-delete">
          <div class="flex-col section_4">
            <span class="self-center font_5 text_14">Confirm deletion?</span>
            <span class="self-stretch font_9 text_15">After confirming deletion, it cannot be restored</span>
            <div class="flex-row self-stretch group_5">
              <button class="flex-col justify-start items-center text-wrapper_3 button" @click="onCancelDelete">Cancel</button>
              <button class="flex-col justify-start items-center text-wrapper_4 ml-32 button_1" @click="onConfirmDelete">Confirm</button>
            </div>
          </div>
        </div>
        
      </div>
    <!-- 添加一个覆盖全屏的遮罩层 -->
    <div v-if="isEditVisible || isDelete" class="overlay"></div>
  </div>
</template>

<script >
export default {
  components: {},
  props: {},
  data() {
    return {
      isEditVisible: false, // 添加控制弹窗显示的数据属性
      isDelete: false,
      items: [null, null, null, null, null],
    };
  },

  methods: {
    //点击职位编辑按钮
    onEditPosition() {
      this.isEditVisible = true; // 点击按钮时设置弹窗显示
    },
    onBack() {
      this.isEditVisible = false; // 点击Back时关闭弹窗
    },
    onFinish() {
      this.isEditVisible = false; // 点击finish时保存，关闭弹窗
    },
    
    onDeletePosition(){
      this.isDelete = true; //点击删除键时设置确认弹窗显示
    },
    onCancelDelete(){
      this.isDelete = false; //退出弹窗
    },
    onConfirmDelete(){
      this.isDelete = false; //退出弹窗
    },
  },
};
</script>

<style scoped lang="scss">
.ml-23 {
  margin-left: 23px;
}
.ml-353 {
  margin-left: 353px;
}
.ml-104 {
  margin-left: 104px;
}
.mt-7 {
  margin-top: 7px;
}
.ml-31 {
  margin-left: 31px;
}
.ml-7 {
  margin-left: 7px;
}
.mt-95 {
  margin-top: 95px;
}
.page {
  padding-top: 50px; //整体页面下移
  background-color: #f2ebe0;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  .section {
    padding: 9px 100px 9px 106px;
    background-color: #121212;

    // 将导航栏固定，并位于最上层
    position: fixed; 
    top: 0; 
    width: 100%;
    z-index: 1000; 

    .font {
      font-size: 20px;
      font-family: Inter;
      font-weight: 600;
      color: #ffffff;
    }
    .text {
      line-height: 15px;
    }
    .text_2 {
      line-height: 15px;
    }
    .text_3 {
      line-height: 19px;
    }
    .text_4 {
      color: #c38370;
      font-size: 20px;
      font-family: Inter;
      font-weight: 600;
      line-height: 19px;
    }
    .text_5 {
      line-height: 15.5px;
    }
    .image {
      border-radius: 50%;
      width: 42px;
      height: 42px;
    }
  }
  .group {
    padding: 45px 100px 40px;
    .list-item {
      padding: 32px 48px 32px 52px;
      background-color: #ffffff;
      border-radius: 10px;
      &:first-child {
        margin-top: 0;
      }
      .font_2 {
        font-size: 24px;
        font-family: Inter;
        line-height: 23.5px;
        font-weight: 600;
        color: #121212;
      }
      .font_3 {
        font-size: 24px;
        font-family: Inter;
        line-height: 17.5px;
        font-weight: 600;
        color: #121212;
      }
      .text_6 {
        line-height: 18px;
      }
      .text_7 {
        line-height: 17.5px;
      }
      .font_5 {
        font-size: 18px;
        font-family: Inter;
        line-height: 13.5px;
        color: #fc6335;
      }
      .text_9 {
        line-height: 13.5px;
      }
      .text-wrapper {
        padding: 10px 0 6px;
        background-color: #f8f8f8;
        border-radius: 6px;
        width: 104px;
        height: 32px;
        .text_10 {
          line-height: 17px;
        }
      }
      .text-wrapper_2 {
        padding: 10px 0 6px;
        background-color: #f8f8f8;
        border-radius: 6px;
        height: 32px;
        .text_11 {
          margin: 0 12px;
          line-height: 17.5px;
        }
      }
      .font_6 {
        font-size: 18px;
        font-family: Inter;
        line-height: 17.5px;
        color: #7e7e7e;
      }
      .group_2 {
        margin-bottom: 4px;
        .group_3 {
          margin-left: 402px;
          .image_2 {
            width: 16px;
            height: 16px;
          }
          .text_8 {
            line-height: 18.5px;
          }
        }
        .image_3 {
          width: 18px;
          height: 18px;
        }
        .font_4 {
          font-size: 24px;
          font-family: Inter;
          line-height: 17.5px;
          color: #c38370;
        }
        .font_8 {
          font-size: 24px;
          font-family: Inter;
          line-height: 13.5px;
          color: #7e7e7e;
        }
      }
      .font_7 {
        font-size: 24px;
        font-family: Inter;
        line-height: 17.5px;
        color: #7e7e7e;
      }
      .text_12 {
        line-height: 18.5px;
      }
      // .pos {
      //   position: absolute;
      //   right: 378.5px;
      //   bottom: 3.5px;
      // }
    }
    .image_4 {
      border-radius: 4px;
      width: 30px;
      height: 30px;
    }
    .text-wrapper_3 {
      margin-left: 12px;
      padding: 10px 0;
      background-color: #c38370;
      border-radius: 4px;
      width: 30px;
      height: 30px;
      .text_13 {
        color: #ffffff;
        line-height: 11.5px;
      }
    }
    .text-wrapper_4 {
      margin-left: 12px;
      padding: 8px 0;
      background-color: #ffffff;
      border-radius: 4px;
      width: 30px;
      height: 30px;
      .text_14 {
        line-height: 12px;
      }
    }
    .font_9 {
      font-size: 16px;
      font-family: Inter;
      line-height: 12px;
      color: #7e7e7e;
    }
    .text_15 {
      margin-left: 20px;
      color: #7e7e7e;
      font-size: 20px;
      font-family: Inter;
      line-height: 2.5px;
    }
    .image_5 {
      margin-left: 18px;
    }
  }
}

// 职位编辑弹窗样式
.edit-position-wrapper{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 10px 10px 3px;
  background-color: #ffffff;
  border-radius: 16px;
  width: 697px;
  z-index: 1002;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  input::-webkit-scrollbar,
  textarea::-webkit-scrollbar {
    display: none; /* 隐藏滚动条 */
  }
  .edit-position{
    max-height: 90vh;
    /* 设置弹窗的最大高度 */
    overflow-y: auto;
    /* 允许弹窗内部滚动 */
    -ms-overflow-style: none;
    /* 适用于 Internet Explorer 和旧版 Edge */
    scrollbar-width: none;

    // 定义placeholder的通用样式
    ::placeholder {
      font-size: 16px; // 假设的字体大小
      color: #808080; // 假设的字体颜色
      opacity: 1; // 确保placeholder可见
    }
    .ml-10{
      margin-left: 10px;
    }
    .ml-35 {
      margin-left: 35.5px;
    }
    .ml-43 {
      margin-left: 43px;
    }
    .ml-63 {
      margin-left: 63px;
    }
    .ml-45 {
      margin-left: 45px;
    }
    .ml-47 {
      margin-left: 47px;
    }
    .ml-51 {
      margin-left: 51px;
    }
    .ml-52 {
      margin-left: 52px;
    }
    .ml-53 {
      margin-left: 53px;
    }
    .ml-59 {
      margin-left: 59px;
    }
    .ml-67 {
      margin-left: 67px;
    }
    .ml-74 {
      margin-left: 74px;
    }
    .ml-83 {
      margin-left: 83px;
    }
    .section_3 {
      padding: 32.5px 44px 0 44px;
      background-color: #ffffff;
      border-radius: 16px;
      .font_2 {
        font-size: 18px;
        font-family: Inter;
        line-height: 17.5px;
        color: #7e7e7e;
      }
      .text_6 {
        color: #121212;
        line-height: 17.5px;
      }
      .group_2 {
        margin-top: 27px;
        .text_7 {
          line-height: 15px;
        }
        .text_8 {
          color: #121212;
          line-height: 15.5px;
        }
      }
      .group_3 {
        margin-top: 24.5px;
        .text_9 {
          line-height: 12px;
        }
        .input {
          padding: 7px 13px 5px 13px;
        }
      }
      .group_7 {
        margin-top: 24px;
        .text_14 {
          line-height: 15px;
        }
        .input_1 {
          padding: 7px 13px 5px 13px;
        }
      }
      .font_3 {
        font-size: 16px;
        font-family: Inter;
        line-height: 15.5px;
        color: #888888;
      }
      .view {
        flex-shrink: 0;
      }
      .text-wrapper {
        padding: 7.5px 0 5px;
        background-color: #ffffff;
        border-radius: 4px;
        width: 486px;
        height: 30px;
        border: solid 1px #d9d9d9;
      }
      .group_8 {
        margin-top: 24px;
        .input_2 {
          padding: 7px 13px 8px 13px;
        }
      }
      .font_5 {
        font-size: 16px;
        font-family: Inter;
        line-height: 12.5px;
        color: #888888;
      }
      .group_9 {
        margin-top: 24px;
        .text_16 {
          line-height: 15px;
        }
        .text-wrapper_17 {
          padding: 7.5px 0 5px;
          background-color: #ffffff;
          border-radius: 4px;
          width: 486px;
          height: 30px;
          border: solid 1px #d9d9d9;
        }
        .input_3 {
          padding: 8px 13px 5px 13px;
        }
      }
      .group_10 {
        margin-top: 24px;
        .text_18 {
          line-height: 12.5px;
        }
        .text-wrapper_6 {
          padding: 7.5px 0 8.5px;
          background-color: #ffffff;
          border-radius: 4px;
          width: 486px;
          height: 30px;
          border: solid 1px #d9d9d9;
        }
        .input_4 {
          padding: 7px 13px 8px 13px;
        }
      }
      .group_11 {
        margin-top: 24px;
        .input_5 {
          padding: 7px 13px 8px 13px;
        }
      }
      .text-wrapper_4 {
        padding: 7.5px 0 8.5px;
        background-color: #ffffff;
        border-radius: 4px;
        width: 486px;
        height: 30px;
        border: solid 1px #d9d9d9;
      }
      .group_12 {
        margin-top: 24px;
        .text_20 {
          line-height: 15.5px;
        }
        .text-wrapper_18 {
          padding: 7.5px 0 5px;
          background-color: #ffffff;
          border-radius: 4px;
          width: 486px;
          height: 30px;
          border: solid 1px #d9d9d9;
        }
        .input_6 {
          padding: 7px 13px 5px 13px;
        }
      }
      .group_13 {
        margin-top: 24px;
        .text_22 {
          line-height: 12px;
        }
        .text-wrapper_1 {
          padding: 8px 0 8.5px;
          background-color: #ffffff;
          border-radius: 4px;
          width: 486px;
          height: 30px;
          border: solid 1px #d9d9d9;
        }
        .input_7 {
          padding: 8px 13px 8px 13px;
        }
      }
      .text_24 {
        margin-top: 27px;
      }
      .text-wrapper_13 {
        align-self: stretch;
        margin-top: 15.5px;
      }
      .textarea {
        background-color: #ffffff;
        border: solid 1px #d9d9d9;
        border-radius: 4px;
        width: 609px;
        height: 150px;
        padding: 12px 13px;
      }
      .font_8 {
        font-size: 16px;
        font-family: Inter;
        line-height: 15.5px;
        color: #7e7e7e;
      }
      .text_26 {
        margin-top: 29px;
      }
      .view_7 {
        align-self: stretch;
        margin-top: 13.5px;
      }
      .textarea_1 {
        background-color: #ffffff;
        border: solid 1px #d9d9d9;
        border-radius: 4px;
        width: 609px;
        height: 150px;
        padding: 11px 13px;
      }
      .text_28 {
        margin-top: 27px;
      }
      .textarea_2 {
        background-color: #ffffff;
        border: solid 1px #d9d9d9;
        border-radius: 4px;
        width: 609px;
        height: 150px;
        padding: 11px 13px;
      }
      .group_14 {
        padding: 24px 0 29px;
        .text-wrapper_7 {
          margin-left: 327px;
          padding: 6px 0 8.5px;
          border-radius: 4px;
          width: 132px;
          height: 28px;
          border: solid 1px #7e7e7e;
          .font_9 {
            font-size: 16px;
            font-family: Inter;
            line-height: 12.5px;
            color: #7e7e7e;
          }
          .text_29 {
            line-height: 12px;
          }
        }
        .text-wrapper_8 {
          padding: 7px 0 9px;
          background-color: #c38370;
          border-radius: 4px;
          width: 132px;
          height: 28px;
          .font_10 {
            font-size: 16px;
            font-family: Inter;
            line-height: 12.5px;
            color: #ffffff;
          }
        }
      }
    }
  }
}
// 确认是否删除弹窗样式
.confirm-delete-wrapper{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 10px 10px 3px;
  background-color: #ffffff;
  border-radius: 16px;
  width: 429px;
  z-index: 1002;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  .confirm-delete{
    .section_4 {
      padding: 56.5px 31.5px 52px;
      background-color: #ffffff;
      border-radius: 16px;
      width: 429px;
      .font_5 {
        font-size: 18px;
        font-family: Inter;
        line-height: 13.5px;
        color: #fc6335;
      }
      .text_14 {
        color: #121212;
        line-height: 14px;
      }
      .font_9 {
        font-size: 16px;
        font-family: Inter;
        line-height: 12px;
        color: #7e7e7e;
      }
      .text_15 {
        margin-top: 21px;
        color: #888888;
        line-height: 19px;
        word-break: break-all;
      }
      .group_5 {
        margin-top: 40.5px;
        padding-left: 35.5px;
        padding-right: 34.5px;
        .text-wrapper_3 {
          padding: 5.5px 0 8.5px;
          border-radius: 4px;
          width: 132px;
          height: 28px;
          border: solid 1px #7e7e7e;
        }
        .button {
          font-size: 16px;
          font-family: Inter;
          line-height: 12px;
          color: #7e7e7e;
        }
        .text-wrapper_4 {
          padding: 7px 0 9px;
          background-color: #c38370;
          border-radius: 4px;
          width: 132px;
          height: 28px;
        }
        .button_1 {
          font-size: 16px;
          font-family: Inter;
          line-height: 12.5px;
          color: #ffffff;
        }
      }
    }
  }
  
}
/* 修改：添加遮罩层样式 */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* 半透明遮罩 */
  z-index: 1001;
  /* 确保遮罩层在弹窗之上 */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>