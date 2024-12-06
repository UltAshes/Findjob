<template>
<div class="messagepage">
   <!-- 查看简历页浏览 -->
  <div class="flex-col page">
    <!-- 顶部导航栏 -->
    <div class="flex-row justify-between items-center section">
        <div class="flex-row">
        <span class="font text">Home</span>
        <span class="font ml-23">Search</span>
        </div>
        <div class="flex-row items-center">
        <span class="text_2">Message</span>
        <span class="font text_3 ml-20">Management</span>
        <span class="font text_4 ml-20">Miss Lin</span>
        <img class="shrink-0 image ml-20" src="../images/4.png"/>
        </div>
    </div>
    <!-- 主体部分 -->
    <div class="flex-col group">
        <div class="flex-row">
        <div class="flex-col shrink-0 section_2">
            <!-- 三个选项  -->
            <div class="flex-row items-center group_2">
                <button class="font_3 text_5" @click="onAllVisible" :class="{'active-text': isAllVisible}">All</button>
                <button class="font_3 text_5 ml-67" @click="onPassedVisible" :class="{'active-text': isPassedVisible}">Passed</button>
                <button class="font_3 text_5 ml-67" @click="onNotPassVisible" :class="{'active-text': isNotPassVisible}">Not pass</button>
            </div>
            <!-- 求职者消息列表 -->
            <div class="flex-col mt-26">
                <!-- 循环 -->
                <button 
                    class="flex-row list-item section_4 mt-8" 
                    v-for="(item, index) in items" 
                    :key="index"
                    :class="{'selected': selectedItem === index}" 
                    @click="onSelectItem(index)" >

                    <img
                    class="image_3"
                    src="../images/c8.png"
                    />
                    <div class="flex-col items-start group_3 ml-17">
                        <span class="font_5">Miss Lin</span>
                        <span class="font_7 mt-11">Interior designer</span>
                    </div>
                </button>
            </div>
        </div>
        <!-- 简历 -->
        <div class="flex-col flex-1 section_3 ml-12">
            <!-- 1. 基本信息 -->
            <div class="flex-row justify-between">
                <div class="flex-col">
                <span class="self-start font_5 text_1">Miss Lin</span>
                <div class="flex-row self-stretch group_4">
                    <div class="flex-row items-center">
                    <img
                        class="shrink-0 image_4"
                        src="../images/r7.png"
                    />
                    <span class="font_6 text_8 ml-11">2000-01-01</span>
                    </div>
                    <div class="flex-row items-center ml-76">
                    <img
                        class="shrink-0 image_4"
                        src="../images/r8.png"
                    />
                    <span class="font_6 text_9 ml-11">Women</span>
                    </div>
                </div>
                <div class="flex-row items-center self-stretch group_5">
                    <img
                    class="shrink-0 image_4"
                    src="../images/r5.png"
                    />
                    <span class="font_8 text_10 ml-10">On campus - Be on duty anytime</span>
                </div>
                </div>
                <!-- 头像 -->
                <img
                    class="image_2"
                    src="../images/r21.png"
                />
            </div>
            <!-- 2. 个人优势 -->
            <div class="flex-col mt-41">
                <div class="flex-row items-center self-stretch">
                <div class="section_6"></div>
                <span class="font_5 text_11 ml-14">Personal advantage</span>
                </div>
                <span class="self-start font_9 text_12 mt-26">Active</span>
            </div>
            <!-- 3. 理想职位 -->
            <div class="flex-col mt-41">
                <div class="flex-row items-center">
                <div class="section_6"></div>
                <span class="font_10 ml-14">Desired position</span>
                </div>
                <div class="flex-row items-center group_13 mt-24">
                <span class="font_9 text_13">Unlimited</span>
                <div class="section_7 view"></div>
                <span class="font_8 text_14">Computer software</span>
                <div class="section_7 view_2"></div>
                <span class="font_8 text_15">8 hours per day</span>
                <div class="section_7 view_3"></div>
                <span class="font_9 text_16">Unlimited</span>
                </div>
            </div>
            <!-- 4. 工作经历 -->
            <div class="flex-row relative group_17 mt-41">
                <div class="section_6 pos"></div>
                <span class="font_10 pos_2">Work experience</span>
                <div class="flex-col pos_3">
                    <div class="flex-row justify-between items-center group_6">
                    <div class="flex-row items-center">
                        <span class="font_11 text_17">HUAWEI</span>
                        <span class="font_11 text_18">Internet</span>
                        <span class="font_8 text_19">design department</span>
                        <span class="font_8 text_20">UI designer</span>
                    </div>
                    <span class="font_2 text_21">2023.6-2023.12</span>
                    </div>
                    <div class="flex-col group_9">
                    <div class="flex-row items-center self-stretch">
                        <span class="font_11">Job content:</span>
                        <span class="font_12 ml-14">1. Web Ul design</span>
                    </div>
                    <span class="self-start font_12 text_22">2. Connect the front and rear ends</span>
                    </div>
                    <div class="section_1 view_1"></div>
                    <div class="flex-col group_15">
                    <div class="flex-row justify-between items-center">
                        <div class="flex-row items-center">
                        <span class="font_11 text_23">HUAWEI</span>
                        <span class="font_11 text_24">Internet</span>
                        <span class="font_8 text_25">design department</span>
                        <span class="font_8 text_26">UI designer</span>
                        </div>
                        <span class="font_2 text_27">2023.6-2023.12</span>
                    </div>
                    <div class="flex-col mt-14">
                        <div class="flex-row items-center self-stretch">
                        <span class="font_11">Job content:</span>
                        <span class="font_12 ml-14">1. Web Ul design</span>
                        </div>
                        <span class="self-start font_12 text_28">2. Connect the front and rear ends</span>
                    </div>
                    </div>
                </div>
            </div>
            <!-- 5. 项目经历 -->
            <div class="flex-col justify-start mt-41">
                <div class="flex-col justify-start">
                <div class="flex-col">
                    <div class="flex-row items-center self-start">
                    <div class="shrink-0 section_6"></div>
                    <span class="font_10 ml-14">Project experience</span>
                    </div>
                    <div class="flex-col self-stretch group_11">
                    <div class="flex-row justify-between items-center group_6">
                        <div class="flex-row">
                        <span class="font_13 text_29">Part-time platform for college students</span>
                        <span class="font_8 ml-17">UI designer</span>
                        </div>
                        <span class="font_2 text_21">2023.6-2023.12</span>
                    </div>
                    <div class="flex-col group_10 mt-14">
                        <div class="flex-row items-center self-stretch">
                        <span class="font_13 text_41">Project description:</span>
                        <span class="font_12 ml-7">1. Web Ul design</span>
                        </div>
                        <span class="self-start font_12 text_32">2. Connect the front and rear ends</span>
                    </div>
                    </div>
                    <div class="self-stretch section_1 view_7"></div>
                    <div class="flex-col self-stretch group_16">
                    <div class="flex-row justify-between items-center">
                        <div class="flex-row">
                        <span class="font_13 text_33">Part-time platform for college students</span>
                        <span class="font_8 ml-17">UI designer</span>
                        </div>
                        <span class="font_2 text_34">2023.6-2023.12</span>
                    </div>
                    <div class="flex-col mt-14">
                        <div class="flex-row items-center self-stretch">
                        <span class="font_13 text_35">Project description:</span>
                        <span class="font_12 ml-7">1. Web Ul design</span>
                        </div>
                        <span class="self-start font_12 text_36">2. Connect the front and rear ends</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <!-- 6. 教育经历 -->
            <div class="flex-col justify-start mt-41">
                <div class="flex-col">
                <div class="flex-row items-center">
                    <div class="section_6"></div>
                    <span class="font_10 ml-14">Educational experience</span>
                </div>
                <div class="flex-row items-center mt-17">
                    <img
                    class="image_5"
                    src="https://ide.code.fun/api/image?token=6752673f4ae84d00121f17e1&name=986dc4390a264d417bf663461a16a00b.png"
                    />
                    <div class="flex-col flex-1 ml-14">
                    <div class="flex-row items-center">
                        <span class="font_4 text_37">Fuzhou university</span>
                        <span class="font_2 text_38 ml-20">2022-2026</span>
                    </div>
                    <div class="flex-row items-center mt-10">
                        <span class="font_4 text_39">Software Engineering</span>
                        <span class="font_3 text_40 ml-17">Bachelor</span>
                    </div>
                    </div>
                </div>
                <div class="flex-col group_10 mt-17">
                    <div class="flex-row items-center self-stretch">
                    <span class="font_13 text_41">Experience:</span>
                    <span class="font_12 ml-20">1. Web Ul design</span>
                    </div>
                    <span class="self-start font_12 text_42">2. Connect the front and rear ends</span>
                </div>
                </div>
            </div>
          </div>
        </div>
        <div class="flex-row justify-end group_7 mt-21">
            <button v-if="isAllVisible == true" class="flex-col justify-start items-center text-wrapper button" @click="onPass">Pass</button>
            <button v-if="isAllVisible == true" class="flex-col justify-start items-center text-wrapper_2 ml-41 button_1" @click="onNotPass">Not pass</button>
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
      isAllVisible: true,
      isPassedVisible: false,
      isNotPassVisible: false,

      selectedItem: null,
      items: [null, null, null, null, null, null, null, null, null, null, null],
    };
  },

  methods: {
    // 左侧列表显示分类
    onAllVisible(){
        this.isAllVisible = true;
        this.isPassedVisible = false;
        this.isNotPassVisible = false;
    },
    onPassedVisible(){
        this.isAllVisible = false;
        this.isPassedVisible = true;
        this.isNotPassVisible = false;
    },
    onNotPassVisible(){
        this.isAllVisible = false;
        this.isPassedVisible = false;
        this.isNotPassVisible = true;
    },
    // 简历是否通过
    onPass(){

    },
    onNotPass(){

    },
    onSelectItem(index){
        this.selectedItem = index;
    }
  },
};
</script>

<style scoped lang="scss">
.ml-23 {
  margin-left: 23px;
}
.ml-67 {
  margin-left: 67px;
}
.mt-11 {
  margin-top: 11px;
}
.ml-11 {
  margin-left: 11px;
}
.mt-41 {
  margin-top: 41px;
}
.ml-13 {
  margin-left: 13px;
}
.mt-9 {
  margin-top: 9px;
}
.ml-17 {
  margin-left: 17px;
}
.mt-21 {
  margin-top: 21px;
}
.ml-41 {
  margin-left: 41px;
}
.page {
  padding-top: 50px; //整体页面下移
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

    .font {
      font-size: 20px;
      font-family: Inter;
      line-height: 15px;
      font-weight: 600;
      color: #ffffff;
    }
    .text {
      line-height: 15px;
    }
    .text_2 {
      color: #c38370;
      font-size: 20px;
      font-family: Inter;
      font-weight: 600;
      line-height: 19px;
    }
    .text_3 {
      line-height: 19px;
    }
    .text_4 {
      line-height: 15.5px;
    }
    .image {
      border-radius: 50%;
      width: 42px;
      height: 42px;
    }
  }
  .group {
    padding: 20px 100px 28px;
    .section_2 {
      padding: 22.5px 8px 88px 8px;
      background-color: #ffffff;
      border-radius: 10px;
      height: 1133px;
      .group_2 {
        padding: 0 32.5px;

        
        .text_5 {
          line-height: 11.5px;
        }
        // 三个文字按钮的基础样式
        .font_3 {
          font-size: 16px;
          font-family: Inter;
          line-height: 11px;
          color: #121212;
        }
        // 点击样式 - 要放在基础样式之后才会生效
        .active-text{
          color: #c38370; 
        } 
      }
      .list-item {
        padding: 17px 18px 17px;
        background-color: #ffffff;
        border-radius: 10px;
        &:first-child {
          margin-top: 0;
        }
        .image_3 {
          border-radius: 50%;
          width: 48px;
          height: 48px;
        }
        .group_3 {
          width: 241.5px;
          .font_7 {
            font-size: 18px;
            font-family: Inter;
            line-height: 17.5px;
            color: #7e7e7e;
          }
        }
      }
      .section_4 {
        padding: 17px 18px 17px;
        background-color: #ffffff; // 默认的白色背景
        border-radius: 10px;
      }
      .selected {
        background-color: #f0f0f0; // 被点击后的颜色
      }
    }
    .ml-11 {
        margin-left: 11px;
        }
        .mt-41 {
        margin-top: 41px;
        }
        .ml-7 {
        margin-left: 7px;
        }
        .mt-17 {
        margin-top: 17px;
        }
        .ml-17 {
        margin-left: 17px;
        }
        .section_3 {
        padding: 37.5px 48.5px 33.5px;
        background-color: #ffffff;
        border-radius: 10px;
        height: 1133px;
        .font_5 {
            font-size: 24px;
            font-family: Inter;
            line-height: 18.5px;
            font-weight: 600;
            color: #121212;
        }
        .text_1 {
            margin-left: 1.5px;
        }
        .group_4 {
            margin-top: 29px;
            .font_6 {
            font-size: 18px;
            font-family: Inter;
            line-height: 13.5px;
            color: #121212;
            }
            .text_8 {
            line-height: 13.5px;
            }
            .text_9 {
            line-height: 13.5px;
            }
        }
        .group_5 {
            margin-top: 15px;
            .text_10 {
            line-height: 17px;
            }
        }
        .image_4 {
            width: 28px;
            height: 28px;
        }
        .image_2 {
            margin: 4.5px 7.5px 7px 0;
            border-radius: 50%;
            width: 107px;
            height: 107px;
        }
        .section_6 {
            background-color: #c38370;
            border-radius: 8px;
            width: 4px;
            height: 22px;
        }
        .text_11 {
            line-height: 22.5px;
        }
        .font_9 {
            font-size: 18px;
            font-family: Inter;
            line-height: 13.5px;
            color: #2e2e2e;
        }
        .text_12 {
            line-height: 13.5px;
        }
        .font_10 {
            font-size: 24px;
            font-family: Inter;
            line-height: 23px;
            font-weight: 600;
            color: #121212;
        }
        .group_13 {
            padding: 0 2px;
            .text_13 {
            line-height: 13.5px;
            }
            .section_7 {
            background-color: #7e7e7e;
            width: 1px;
            height: 16px;
            }
            .view {
            margin-left: 4.5px;
            }
            .text_14 {
            margin-left: 9px;
            }
            .view_2 {
            margin-left: 11px;
            }
            .text_15 {
            margin-left: 9px;
            line-height: 17px;
            }
            .view_3 {
            margin-left: 6px;
            }
            .text_16 {
            margin-left: 10.5px;
            line-height: 13.5px;
            }
        }
        .font_8 {
            font-size: 18px;
            font-family: Inter;
            line-height: 17.5px;
            color: #2e2e2e;
        }
        .group_17 {
            height: 229.5px;
            .pos_3 {
            position: absolute;
            left: 0;
            right: 0;
            top: 50.5px;
            .group_9 {
                margin-top: 14.5px;
                .text_22 {
                margin-left: 126px;
                }
            }
            .font_11 {
                font-size: 18px;
                font-family: Inter;
                line-height: 13.5px;
                font-weight: 600;
                color: #2e2e2e;
            }
            .view_1 {
                margin: 9.5px 21.5px 0 4.5px;
            }
            .group_15 {
                margin-top: 16.5px;
                .text_23 {
                line-height: 13.5px;
                }
                .text_24 {
                margin-left: 22px;
                }
                .text_25 {
                margin-left: 16.5px;
                }
                .text_26 {
                margin-left: 17.5px;
                }
                .text_27 {
                margin-right: 19.5px;
                font-size: 15px;
                }
                .text_28 {
                margin-left: 125px;
                }
            }
            }
            .pos {
            position: absolute;
            left: 0;
            top: 0;
            }
            .pos_2 {
            position: absolute;
            left: 17px;
            top: 1.5px;
            }
        }
        .group_11 {
            margin-top: 25.5px;
        }
        .group_6 {
            padding: 0 2px;
            .text_17 {
            line-height: 13.5px;
            }
            .text_18 {
            margin-left: 22px;
            }
            .text_19 {
            margin-left: 16.5px;
            }
            .text_20 {
            margin-left: 17.5px;
            }
            .text_21 {
            margin-right: 16.5px;
            font-size: 15px;
            }
            .text_29 {
            line-height: 17.5px;
            }
        }
        .font_2 {
            font-size: 16px;
            font-family: Inter;
            line-height: 11px;
            color: #7e7e7e;
        }
        .font_13 {
            font-size: 18px;
            font-family: Inter;
            line-height: 17.5px;
            font-weight: 600;
            color: #2e2e2e;
        }
        .font_12 {
            font-size: 18px;
            font-family: Inter;
            line-height: 22px;
            color: #2e2e2e;
        }
        .section_1 {
            background-color: #7e7e7e57;
            height: 1px;
        }
        .view_7 {
            margin: 8.5px 21.5px 0 4.5px;
        }
        .group_16 {
            margin: 16.5px 2px 0 2px;
            .text_33 {
            line-height: 17.5px;
            }
            .text_34 {
            margin-right: 16.5px;
            font-size: 15px;
            }
            .text_35 {
            line-height: 17.5px;
            }
            .text_36 {
            margin-left: 179px;
            }
        }
        .image_5 {
            border-radius: 8px;
            width: 48px;
            height: 48px;
        }
        .font_4 {
            font-size: 16px;
            font-family: Inter;
            line-height: 15px;
            color: #121212;
        }
        .text_37 {
            font-weight: 600;
            line-height: 15.5px;
        }
        .text_38 {
            line-height: 12px;
        }
        .text_39 {
            line-height: 15.5px;
        }
        .font_3 {
            font-size: 16px;
            font-family: Inter;
            line-height: 11px;
            color: #121212;
        }
        .text_40 {
            line-height: 12px;
        }
        .group_10 {
            padding-left: 2px;
            padding-right: 2px;
            .text_41 {
            line-height: 17.5px;
            }
            .text_32 {
            margin-left: 179px;
            }
            .text_42 {
            margin-left: 124px;
            }
        }
    }
    .font_5 {
      font-size: 24px;
      font-family: Inter;
      line-height: 18.5px;
      font-weight: 600;
      color: #121212;
    }
    .font_2 {
      font-size: 16px;
      font-family: Inter;
      line-height: 11px;
      color: #7e7e7e;
    }
    .group_7 {
      padding: 0 210px;
      .text-wrapper {
        padding: 17.5px 0 16px;
        background-color: #c38370;
        border-radius: 4px;
        width: 204px;
        height: 48px;
      }
      .button {
        font-size: 20px;
        font-family: Inter;
        line-height: 15px;
        font-weight: 600;
        color: #ffffff;
      }
      .text-wrapper_2 {
        padding: 16px 0 11.5px;
        background-color: #ffffff;
        border-radius: 4px;
        width: 204px;
        height: 48px;
        border: solid 1px #7e7e7e;
      }
      .button_1 {
        font-size: 20px;
        font-family: Inter;
        line-height: 18.5px;
        font-weight: 600;
        color: #7e7e7e;
      }
    }
  }
}
</style>