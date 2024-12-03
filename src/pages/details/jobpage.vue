<template>
  <div class="jobpage">
    <!-- 岗位详情页浏览 -->
    <div class="flex-col page">
      <div class="flex-col">
        <!-- 顶部导航栏 -->
        <div class="flex-row justify-between items-center section">
          <div class="flex-row">
            <button class="font text" @click="onClick_2">Home</button>
            <span class="font text_2 ml-23">Search</span>
          </div>
          <div class="flex-row items-center">
            <button class="font text_3">Message</button>
            <button class="font text_4 ml-20">Resume</button>
            <button class="font text_5 ml-20">Miss Lin</button>
            <img class="image image_1 ml-20" src="../images/4.png" />
          </div>
        </div>

        <!-- 上方栏 岗位名称等 -->
        <div class="flex-col section_2">
          <div class="flex-row first_line">
            <img class="back-button" @click="onReturn" src="../images/c11.png" /> <!-- 新增的返回按钮 -->
            <span class="self-start font_2 text_1">Be recruiting</span>
          </div>

          <div class="flex-row self-stretch group">
            <span class="font_3 text_6">{{ job[0].name }}</span>
            <span class="font_3 text_7 ml-52">{{ job[0].salary_range }}</span>
          </div>
          <div class="flex-row self-stretch group_2">
            <div class="flex-row items-center">
              <img class="shrink-0 image_2" src="../images/j2.png" />
              <span class="font_2 ml-10">{{ job[0].city }}</span>
            </div>
            <div class="flex-row items-center group_3">
              <img class="shrink-0 image_2" src="../images/j3.png" />
              <span class="font_2 text_8 ml-9">{{ job[0].date }}</span>
            </div>
            <div class="flex-row items-center group_4">
              <img class="shrink-0 image_2" src="../images/j4.png" />
              <span class="font_2 ml-11">{{ job[0].requirement }}</span>
            </div>
          </div>
          <div class="flex-row self-stretch group_5">
            <!-- 喜欢按钮 -->
            <button class="flex-row items-center group_6 button" :class="{ 'button_1': isInterestedActive }"
              @click="toggleButton">
              <img v-if="!isInterestedActive" class="faverite_icon" src="../images/j1.png" />
              <img v-else class="faverite_icon" src="../images/j9.png" />
              Interested
            </button>
            <!-- 上传简历按钮 -->
            <button class="flex-col justify-start items-center text-wrapper ml-19 button_1"
              @click="onUploadResume({ uid: 1 })">Upload resume</button>
          </div>
        </div>
      </div>

      <!-- 详情 -->
      <div class="flex-row group_7 mt-20">
        <!-- 中间栏 -->
        <div class="flex-col flex-1 section_3">
          <span class="self-start font_4 text_12">Job description</span>
          <div class="flex-row self-stretch group_9">
            <div class="flex-col justify-start text-wrapper_1"><span class="font_5 text_14">{{ job[0].tag_1 }}</span>
            </div>
            <div class="flex-col justify-start items-center text-wrapper_15 ml-8">
              <span class="font_6 text_15">{{ job[0].tag_2 }}</span>
            </div>
            <div class="flex-col justify-start text-wrapper_3 ml-8">
              <span class="font_5 text_13 text_38">{{ job[0].tag_3 }}</span>
            </div>
            <div class="flex-col justify-start items-center text-wrapper_4 ml-8">
              <span class="font_6 text_17">{{ job[0].tag_4 }}</span>
            </div>
            <div class="flex-col justify-start items-center text-wrapper_5 ml-8">
              <span class="font_6 text_18">{{ job[0].tag_5 }}</span>
            </div>
            <div class="flex-col justify-start text-wrapper_3 ml-8">
              <span class="font_5 text_13 text_19">{{ job[0].tag_6 }}</span>
            </div>
          </div>
          <div class="flex-row self-stretch group_10">
            <div class="flex-row items-center">
              <span class="font_7 text_21">Time:</span>
              <div class="flex-col justify-start shrink-0 text-wrapper_16 ml-8">
                <span class="font_7 text_22">{{ job[0].time }}</span>
              </div>
            </div>
            <div class="flex-row items-center ml-223">
              <span class="font_7 text_23">RecruitNum:</span>
              <div class="flex-col justify-start items-center shrink-0 text-wrapper_7 ml-11">
                <span class="font_8">{{ job[0].recruitNum }}</span>
              </div>
            </div>
          </div>
          <div class="flex-row self-stretch group_12">
            <div class="flex-row items-center">
              <span class="font_8">Salary:</span>
              <div class="flex-col justify-start shrink-0 text-wrapper_8 ml-11">
                <span class="font_8 text_26">{{ job[0].salary }}</span>
              </div>
            </div>
            <div class="flex-row items-center ml-188">
              <span class="font_8 text_27">WorkingHours:</span>
              <div class="flex-col justify-start items-center shrink-0 text-wrapper_9 ml-11">
                <span class="font_7 text_28">{{ job[0].workingHours }}</span>
              </div>
            </div>
          </div>
          <div class="flex-row items-center self-stretch group_13">
            <span class="font_7 text_30">Deadline:</span>
            <div class="flex-col justify-start text-wrapper_6 ml-11">
              <span class="font_7 text_31">{{ job[0].deadline }}</span>
            </div>
          </div>
          <div class="flex-row items-center self-stretch group_14">
            <span class="font_7">Address:</span>
            <div class="flex-col justify-start items-center flex-1 text-wrapper_11 ml-8">
              <span class="font_8 text_33">
                {{ job[0].address }}
              </span>
            </div>
          </div>
          <span class="self-start font_8 text_34">Salary detail:</span>
          <div class="flex-col self-stretch section_5">
            <span class="self-start font_10">{{ job[0].salaryDetail }}</span>
          </div>
          <span class="self-start font_8 text_35">Job Requirements:</span>
          <div class="flex-col items-start self-stretch section_6">
            <span class="font_10">{{ job[0].jobRequirements }}</span>
          </div>
          <span class="self-start font_8 text_36">Job responsibilities:</span>
          <div class="flex-col self-stretch section_7">
            <span class="self-stretch font_10">
              {{ job[0].jobResponsibilities }}
            </span>
          </div>
        </div>

        <!-- 右侧栏 -->
        <div class="flex-col shrink-0 self-start ml-20">
          <div class="flex-col section_4">
            <div class="flex-col justify-start items-center self-stretch text-wrapper_2">
              <span class="text_11">Company information</span>
            </div>
            <div class="flex-row items-center self-stretch group_8 view">
              <img class="image_4" :src="require('../images/j5.png')" />
              <span class="font text_20 ml-14">{{ job[0].company_name }}</span>
            </div>
            <div class="flex-row items-center self-stretch group_8 view_2">
              <img class="image_5" src="../images/j6.png" />
              <span class="font_9 text_24 ml-12">{{ job[0].company_ifPublished }}</span>
            </div>
            <div class="flex-row items-center self-stretch group_11">
              <img class="image_6" src="../images/j7.png" />
              <span class="font_9 text_25 ml-14">{{ job[0].company_recruitNum }}</span>
            </div>
            <div class="flex-row self-stretch group_1">
              <img class="image_7" src="../images/j8.png" />
              <span class="font_9 text_29 ml-14">{{ job[0].company_type }}</span>
            </div>
            <button class="flex-col justify-start items-center text-wrapper_13 text-wrapper_10 button_2">
              View all jobs
            </button>
          </div>
          <img class="image_8 mt-18" src="../images/6.png" />
          <img class="image_9 mt-18" src="../images/7.png" />
        </div>
      </div>
    </div>
    <!-- 点击上传简历之后的显示 -->
    <div class="upload-wrapper" v-if="isUploadVisible">
      <div class="upload">
        <div class="flex-col section_4">
          <div class="flex-col group view">
            <span class="self-start font_3 text_7">Edit personal information</span>
            <div class="flex-row equal-division">
              <div class="flex-col equal-division-item">
                <span class="self-start font_4">Name</span>
                <div class="mt-18 flex-col justify-start items-start self-stretch text-wrapper">
                  <input v-model="form.name" class="font_5 text_9 text_10" type="text" placeholder="Miss Lin">
                </div>
              </div>
              <div class="flex-col equal-division-item">
                <span class="self-start font_4">Job Status</span>
                <div class="flex-col justify-start items-start self-stretch text-wrapper mt-17">
                  <input v-model="form.job_status" class="font_5 text_9 text_11" type="text" placeholder="Unlimited">
                </div>
              </div>
            </div>
            <div class="flex-row self-stretch group_4 view_4">
              <span class="font_7 text_13">Gender</span>
              <span class="font_7 ml-289">Birthday</span>
            </div>
            <div class="flex-row self-stretch group_5">
              <div class="flex-row">
                <div class="flex-col justify-start items-center text-wrapper_2 font_5 text_16 man" @click="toggleMan"
                  :class="{ 'active': manSelected }">man</div>
                <div class="flex-col justify-start items-center text-wrapper_2 font_5 text_16" @click="toggleWoman"
                  :class="{ 'active': womanSelected }">woman</div>
              </div>
              <div class="ml-76 flex-col justify-start items-start text-wrapper_4">
                <input v-model="form.birthday" class="font_5 text_14 text_15" type="text" placeholder="Select the date">
              </div>
            </div>
          </div>
          <div class="flex-col group_9">
            <span class="self-start font_3 text_20">Edit personal advantage</span>
            <div class="flex-col justify-start items-start self-stretch text-wrapper_8 mt-23">
              <textarea v-model="form.advantage" class="font_5 text_28" type="text" placeholder="Active"></textarea>
            </div>
          </div>
          <div class="flex-col group_14">
            <span class="self-start font_3 text_38">Add job expectations</span>
            <div class="grid_2">
              <div class="flex-col grid-item_2">
                <span class="self-start font_7">Desired industry</span>
                <div class="flex-col justify-start items-start self-stretch text-wrapper mt-15">
                  <input v-model="form.desired_industry" class="font_5 text_40" type="text" placeholder="Unlimited">
                </div>
              </div>
              <div class="flex-col grid-item_2">
                <span class="self-start font_7">Desired position tag</span>
                <div class="mt-14 flex-col justify-start items-start self-stretch text-wrapper">
                  <input v-model="form.desired_tag" class="font_5 text_40" type="text" placeholder="Computer software">
                </div>
              </div>
              <div class="flex-col grid-item_2">
                <span class="self-start font_7">Desired work time</span>
                <div class="mt-18 flex-col justify-start items-start self-stretch text-wrapper">
                  <input v-model="form.desired_worktime" class="font_5 text_40" type="text"
                    placeholder="8 hours per day">
                </div>
              </div>
              <div class="flex-col grid-item_2">
                <span class="self-start font_7">Salary requirement</span>
                <div class="mt-14 flex-col justify-start items-start self-stretch text-wrapper">
                  <input v-model="form.salary_requirement" class="font_5 text_40" type="text" placeholder="Unlimited">
                </div>
              </div>
            </div>
          </div>
          <div class="flex-col group">
            <span class="self-start font_3 text_50">Add project experience</span>
            <div class="flex-row equal-division">
              <div class="flex-col equal-division-item">
                <span class="self-start font_7">Project name</span>
                <div class="flex-col justify-start items-start self-stretch text-wrapper mt-15">
                  <input v-model="form.project_name" class="font_5 text_9" type="text" placeholder="Unlimited">
                </div>
              </div>
              <div class="flex-col equal-division-item">
                <span class="self-start font_7">Project role</span>
                <div class="flex-col justify-start items-start self-stretch text-wrapper mt-15">
                  <input v-model="form.project_role" class="font_5 text_9" type="text" placeholder="Unlimited">
                </div>
              </div>
            </div>
            <span class="self-start font_7 text_51">Project time</span>
            <div class="flex-row items-center self-stretch group_4 view_9">
              <span class="font_14 text_52">From</span>
              <div class="flex-col justify-start items-center text-wrapper_12 ml-13">
                <input v-model="form.project_time_begin" class="font_5 text_14" type="text"
                  placeholder="Select the date">
              </div>
              <span class="font_14 text_53 ml-13">To</span>
              <div class="flex-col justify-start items-center text-wrapper_12 ml-13">
                <input v-model="form.project_time_end" class="font_5 text_54" type="text" placeholder="Select the date">
              </div>
            </div>
            <span class="self-start font_7 text_55">Project description</span>
            <div class="flex-col self-stretch section_12">
              <textarea v-model="form.Project_description" class="self-stretch font_15" type="text"
                placeholder='Describe the project and show the recruiter your project experience for example:  1. Project overview... 2. The division of personnel... 3. My division of labor...'></textarea>
            </div>
          </div>
          <div class="flex-col group">
            <span class="self-start font_3 text_56">Editing education</span>
            <div class="flex-col justify-start self-stretch relative group_16">
              <div class="grid_3">
                <div class="flex-col grid-item_3">
                  <span class="self-start font_16">School name</span>
                  <div class="mt-18 flex-col justify-start items-start self-stretch text-wrapper">
                    <input v-model="form.School_name" class="font_5 text_58" type="text" placeholder="Unlimited">
                  </div>
                </div>
                <div class="flex-col grid-item_3">
                  <span class="self-start font_7 text_57">Education background</span>
                  <div class="mt-14 flex-col justify-start items-start self-stretch text-wrapper">
                    <input v-model="form.Education_background" class="font_5 text_58" type="text"
                      placeholder="Unlimited">
                  </div>
                </div>
                <div class="flex-col grid-item_4">
                  <span class="self-start font_7 text_59">Major name</span>
                  <div class="flex-col justify-start items-start self-stretch text-wrapper view_10">
                    <input v-model="form.Major_name" class="font_5 text_60" type="text" placeholder="Unlimited">
                  </div>
                  <span class="self-start font_13 text_61">Time</span>
                </div>
              </div>
              <div class="flex-row items-center pos_2">
                <span class="font_14 text_62">From</span>
                <div class="flex-col justify-start items-center shrink-0 text-wrapper_12 ml-13">
                  <input v-model="form.Time_begin" class="font_5 text_63" type="text" placeholder="Select the date">
                </div>
                <span class="font_14 text_64 ml-13">To</span>
                <div class="flex-col justify-start items-center shrink-0 text-wrapper_12 ml-13">
                  <input v-model="form.Time_end" class="font_5 text_65" type="text" placeholder="Select the date">
                </div>
              </div>
            </div>
            <span class="self-start font_7 text_66">Experience in school</span>
            <div class="flex-col items-start self-stretch section_13">
              <textarea v-model="form.Experience_in_school" class="font_15" type="text"
                placeholder='1. Hold a position in school... 2. Get the honor... 3. Main courses learned...'></textarea>
            </div>
          </div>
          <div class="flex-row group_17">
            <div class="flex-col justify-start items-center text-wrapper_13"><span class="font_16"
                @click="onCancel">Cancel</span></div>
            <div class="ml-16 flex-col justify-start items-center text-wrapper_14">
              <span class="font_13 text_67" @click="onFinish">Finish</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 添加一个覆盖全屏的遮罩层 -->
    <div v-if="isUploadVisible" class="overlay"></div>
  </div>
</template>

<script>

export default {
  components: {},
  props: ['jid'],
  data() {
    return {
      isInterestedActive: false, // 控制按钮状态的数据属性
      isUploadVisible: false, // 添加控制弹窗显示的数据属性
      womanSelected: true, // 假设默认woman是选中状态
      jobDetails: {}, // 用于存储详情数据
      form: {
        name: '',
        Job_status: '',
        Gender: '',
        birthday: '',
        advantage: '',
        desire_industry: '',
        desire_tag: '',
        desired_worktime: '',
        salary_requirement: '',
        project_name: "",
        project_role: "",
        project_time_begin: "",
        project_time_end: "",
        Project_description: "",
        School_name: "",
        Education_background: "",
        Major_name: "",
        Time_begin: "",
        Time_end: "",
        Experience_in_school: "",
        company_name: "",
        industry_involved: "",
        department_name: "",
        job_title: "",
        job_begin_time: "",
        job_end_time: "",
        job_content: ""

      },
      job: [
        {
          name: "Java Architect",
          salary_range: "35-60K",
          city: "Beijing",
          date: "Over 10 years",
          requirement: "Junior college",
          tag_1: "computer software",
          tag_2: "Java",
          tag_3: "Network computering",
          tag_4: "Go",
          tag_5: "Multi-threaded",
          tag_6: "Distributed Technology",
          time: "Two months",
          recruitNum: "150 person",
          salary: "1800 per month",
          workingHours: "6 Hours",
          deadline: "2024.11.21 12:00",
          address: "Fuzhou Cangshan District Zhongzhai international high-end home experience Museum",
          salaryDetail: "First month base salary 4000+ commission"
            + "Starting from the second month, base salary 5000+ commission + performance (comprehensive salary 6000 +)"
            + "Nine to four days off in June"
            + "Type of social insurance: Five insurances"
            + "Commission method: sales commission",
          jobRequirements: "1, good sense of service;"
            + "2, engaged in sales experience is preferred;"
            + "3, like to deal with people, good at network platform communication.",
          jobResponsibilities: "1. At least 7 years of work experience, more than 3 years of structure experience, plus points with small teams"
            + "2. Solid JAVA foundation: proficient in multi-threading, JNI, object-oriented design/design pattern, performance optimization."
            + "3. Familiar with the use of Linux system, Shel script writing, the use of common problem diagnosis tools."
            + "4. In-depth understanding and practical experience :TCP/IP, http, SSL protocols, and common network communication diagnostic tools."
            + "5. In-depth understanding and practical experience of Java Socket programming, Java NIO, Netty framework and other network programming related knowledge."
            + "6. In-depth understanding and practical experience in the use of redis-cluster, kafka, ELK, EFK products. Being familiar with big data technologies such as hadoop, spark and fink is a plus.",

          company_url: "../images/j5.png",
          company_name: "Huawei",
          company_ifPublished: "Published",
          company_recruitNum: "1000-9999 people",
          company_type: "Computer software",

        }

      ]
    };
  },
  created() {
    // 根据 jid 获取详情数据
    console.log(this.jid);
    this.fetchJobDetails(this.jid);
  },
  methods: {
    fetchJobDetails(jid) {
      console.log("尝试获取信息")
      // 这里可以通过后端 API 获取该职位的详情
      this.$axios

        .get(`/details/jobpage/${jid}`)
        .then((res) => {
          this.jobDetails = res.data;
        })
        .catch((err) => {
          console.error('获取详情失败:', err);
        });
    },
    // 跳转主页
    onClick_2() {
      this.$router.push({ name: 'homepage' });
    },
    // 返回搜索页
    onReturn() {
      this.$router.push({ name: 'searchpage' });
    },
    // Interested按钮状态
    toggleButton() {
      this.isInterestedActive = !this.isInterestedActive; // 切换按钮状态
    },
    //上传简历按钮
    onUploadResume(uid) {
      this.$axios.get('/information', { uid })
        .then(response => {
          console.log('获取数据成功:', response.data);
        })
        .catch(error => {
          console.error('获取数据失败:', error);
        });
      this.isUploadVisible = true; // 点击按钮时设置弹窗显示
    },
    onCancel() {
      this.isUploadVisible = false; // 点击cancel时关闭弹窗
    },
    onFinish() {
      console.log('发送简历:', this.form)
      this.$axios({
        url: '/information',
        method: 'Post',
        data: {
          form: this.form
        }
      }).then(res => {
        console.log(res);
        if (res.data.code === 200) {
          // 搜索成功，显示搜索结果
          const responseData = res.data;
          console.log('后端返回的数据:', responseData);
        } else {
          // 搜索失败，显示错误消息
          console.error('搜索失败:', res.data.msg);
        }
      }, err => {
        console.log(err);
      })
      this.isUploadVisible = false; // 点击finish时保存，关闭弹窗
    },
    toggleMan() {
      this.manSelected = !this.manSelected;
      this.womanSelected = !this.womanSelected; // 确保点击man时woman取消选中
      this.form.Gender = 'man';
    },
    toggleWoman() {
      this.womanSelected = !this.womanSelected;
      this.manSelected = !this.manSelected; // 确保点击woman时man取消选中
      this.form.Gender = 'woman';
    },
  },
};
</script>

<style scoped lang="scss">
.ml-23 {
  margin-left: 23px;
}

.ml-9 {
  margin-left: 9px;
}

.ml-19 {
  margin-left: 19px;
}

.ml-223 {
  margin-left: 223px;
}

.ml-188 {
  margin-left: 188px;
}

.ml-11 {
  margin-left: 11px;
}

.page {
  padding-bottom: 133px;
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

    .first_line {
      justify-content: flex-start;
    }

    .back-button {
      /* 返回按钮的样式 */
      position: absolute;
      width: 20px;
      left: 25px;
      /* 贴近左边缘 */
      cursor: pointer;
      /* 鼠标手形 */
    }

    .font_2 {
      font-size: 18px;
      font-family: Inter;
      line-height: 17.5px;
      color: #ffffff;
    }

    .text_1 {
      margin-left: 1.5px;
    }

    .group {
      margin-top: 24.5px;

      .font_3 {
        font-size: 36px;
        font-family: Inter;
        line-height: 27px;
      }

      .text_6 {
        color: #ffffff;
        font-weight: 600;
        line-height: 28px;
      }

      .text_7 {
        color: #fc6335;
      }
    }

    .group_2 {
      margin-top: 24.5px;

      .image_2 {
        width: 20px;
        height: 20px;
      }

      .group_3 {
        margin-left: 28.5px;

        .text_8 {
          line-height: 17px;
        }
      }

      .group_4 {
        margin-left: 36px;
      }
    }

    .group_5 {
      margin-top: 18px;
      margin-left: -25px;

      .group_6 {
        padding: 4.5px 18.5px 5.5px;
        border-radius: 8px;
        height: 52px;
        border: solid 1px #c38370;
        transition: background-color 0.3s, color 0.3s; // 添加过渡效果

        .faverite_icon {
          margin-right: 8px; // 在图片右侧添加间隔
        }
      }

      .button {
        margin-right: 9.5px;
        font-size: 24px;
        font-family: Inter;
        font-weight: 600;
        color: #c38370;
        line-height: 17.5px;
        margin-left: 25px;
        transition: background-color 0.3s, color 0.3s; // 添加过渡效果
        cursor: pointer;
      }

      .text-wrapper {
        padding: 14px 0 17px;
        background-color: #c38370;
        border-radius: 8px;
        width: 234px;
        height: 52px;
        border: solid 1px #c38370;
      }

      .button_1 {
        font-size: 24px;
        font-family: Inter;
        font-weight: 600;
        color: #ffffff;
        line-height: 18.5px;
        background-color: #c38370;
        transition: background-color 0.3s, color 0.3s; // 添加过渡效果
        cursor: pointer;
      }

      .button:hover,
      .button_1:hover {
        background-color: #a06f58; // 鼠标悬浮时的背景颜色
        color: #ffffff; // 鼠标悬浮时的文字颜色
      }

    }
  }

  .group_7 {
    padding: 0 100px;

    .section_3 {
      padding: 24.5px 40px 32px;
      background-color: #ffffff;
      border-radius: 16px;
      padding-bottom: 50px;

      .font_4 {
        font-size: 24px;
        font-family: Inter;
        font-weight: 600;
      }

      .text_12 {
        color: #121212;
        line-height: 23px;
      }

      .group_9 {
        margin-top: 14px;

        .text-wrapper_1 {
          padding: 7.5px 0 6px;
          background-color: #f8f8f8;
          border-radius: 6px;
          height: 28px;

          .text_14 {
            margin-left: 9px;
            margin-right: 6px;
            font-size: 15px;
            line-height: 14.5px;
          }
        }

        .text-wrapper_15 {
          padding: 8px 0 9px;
          background-color: #f8f8f8;
          border-radius: 6px;
          width: 49px;
          height: 28px;

          .text_15 {
            font-size: 15px;
            line-height: 11px;
          }
        }

        .text-wrapper_3 {
          padding: 8px 0 6px;
          background-color: #f8f8f8;
          border-radius: 6px;
          height: 28px;

          .text_13 {
            font-size: 15px;
            line-height: 14.5px;
          }

          .text_38 {
            margin-left: 9.5px;
            margin-right: 6.5px;
          }

          .text_19 {
            margin-left: 9.5px;
            margin-right: 9.5px;
          }
        }

        .font_5 {
          font-size: 16px;
          font-family: Inter;
          line-height: 15px;
          color: #6b6666;
        }

        .text-wrapper_4 {
          padding: 8px 0 9px;
          background-color: #f8f8f8;
          border-radius: 6px;
          width: 49px;
          height: 28px;

          .text_17 {
            font-size: 15px;
            line-height: 11px;
          }
        }

        .font_6 {
          font-size: 16px;
          font-family: Inter;
          line-height: 12px;
          color: #6b6666;
        }

        .text-wrapper_5 {
          padding: 8px 0 9px;
          background-color: #f8f8f8;
          border-radius: 6px;
          width: 138px;
          height: 28px;

          .text_18 {
            font-size: 15px;
            line-height: 11.5px;
          }
        }
      }

      .group_10 {
        margin-top: 19px;

        .text_21 {
          line-height: 12px;
        }

        .text-wrapper_16 {
          padding: 7.5px 0 9px;
          background-color: #f8f8f8;
          border-radius: 6px;
          height: 28px;

          .text_22 {
            margin-left: 13px;
            margin-right: 10px;
          }
        }

        .text_23 {
          line-height: 12px;
        }

        .text-wrapper_7 {
          padding: 7px 0 5.5px;
          background-color: #f8f8f8;
          border-radius: 6px;
          width: 112px;
          height: 28px;
        }
      }

      .group_12 {
        margin-top: 9px;

        .text-wrapper_8 {
          padding: 7px 0 5.5px;
          background-color: #f8f8f8;
          border-radius: 6px;
          height: 28px;

          .text_26 {
            margin-left: 13px;
            margin-right: 10px;
          }
        }

        .text_27 {
          line-height: 15.5px;
        }

        .text-wrapper_9 {
          padding: 7px 0 9px;
          background-color: #f8f8f8;
          border-radius: 6px;
          width: 88px;
          height: 28px;

          .text_28 {
            line-height: 12px;
          }
        }
      }

      .font_8 {
        font-size: 16px;
        font-family: Inter;
        line-height: 15px;
        color: #121212;
      }

      .font_7 {
        font-size: 16px;
        font-family: Inter;
        line-height: 12px;
        color: #121212;
      }

      .group_13 {
        margin-top: 9px;

        .text_30 {
          line-height: 12px;
        }

        .text-wrapper_6 {
          padding: 7px 0 9px;
          background-color: #f8f8f8;
          border-radius: 6px;
          height: 28px;

          .text_31 {
            margin-left: 13px;
            margin-right: 11px;
            line-height: 12px;
          }
        }
      }

      .group_14 {
        margin-top: 9px;

        .text-wrapper_11 {
          margin-right: 30px;
          padding: 7px 0 4.5px;
          background-color: #f8f8f8;
          border-radius: 6px;
          height: 27px;

          .text_33 {
            line-height: 15.5px;
          }
        }
      }

      .text_34 {
        margin-top: 17px;
        line-height: 15.5px;
      }

      .section_5 {
        margin-right: 7px;
        margin-top: 8.5px;
        padding: 7.5px 13px 4.5px;
        background-color: #f8f8f8;
        border-radius: 6px;
      }

      .text_35 {
        margin-top: 17px;
        line-height: 15.5px;
      }

      .section_6 {
        margin-right: 7px;
        margin-top: 8.5px;
        padding: 7.5px 13px 3.5px;
        background-color: #f8f8f8;
        border-radius: 6px;
      }

      .font_10 {
        font-size: 16px;
        font-family: Inter;
        line-height: 19px;
        color: #121212;
      }

      .text_36 {
        margin-top: 17px;
        line-height: 15.5px;
      }

      .section_7 {
        margin-top: 8.5px;
        padding: 11.5px 12.5px 8.5px;
        background-color: #f8f8f8;
        border-radius: 16px;
      }
    }

    .section_4 {
      padding-bottom: 14px;
      background-color: #ffffff;
      border-radius: 16px;

      .text-wrapper_2 {
        padding: 13px 0 9px;
        background-color: #f8f4ee;
        border-radius: 16px 16px 0px 0px;
        width: 295px;

        .text_11 {
          color: #121212;
          font-size: 20px;
          font-family: Inter;
          font-weight: 600;
          line-height: 19.5px;
        }
      }

      .group_8 {
        padding: 0 22px;

        .image_4 {
          width: 48px;
          height: 48px;
        }

        .text_20 {
          color: #121212;
          line-height: 15.5px;
        }

        .image_5 {
          width: 16px;
          height: 16px;
        }

        .text_24 {
          line-height: 10.5px;
        }
      }

      .view {
        margin-top: 16px;
      }

      .view_2 {
        margin-top: 10px;
      }

      .group_11 {
        margin-top: 12px;
        padding: 0 24px;

        .image_6 {
          width: 12px;
          height: 14px;
        }

        .text_25 {
          line-height: 13px;
        }
      }

      .font_9 {
        font-size: 14px;
        font-family: Inter;
        color: #121212;
      }

      .group_1 {
        margin-top: 11.5px;
        padding: 0 23.5px;

        .image_7 {
          width: 13px;
          height: 15px;
        }

        .text_29 {
          line-height: 13.5px;
        }
      }

      .text-wrapper_13 {
        align-self: center;
        margin-top: 17.5px;
      }

      .text-wrapper_10 {
        padding: 11.5px 0 10px;
        border-radius: 8px;
        width: 229px;
        height: 39px;
        border: solid 1px #c38370;
      }

      .button_2 {
        font-size: 16px;
        font-family: Inter;
        line-height: 15.5px;
        color: #c38370;
      }
    }

    .image_8 {
      width: 295px;
      height: 143px;
    }

    .image_9 {
      width: 295px;
      height: 204px;
    }
  }

  .font {
    font-size: 20px;
    font-family: Inter;
    line-height: 15px;
    font-weight: 600;
    color: #ffffff;
  }
}

// 弹窗包裹层样式
.upload-wrapper {
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

  // 上传简历弹出页面样式
  .upload {
    max-height: 90vh;
    /* 设置弹窗的最大高度 */
    overflow-y: auto;
    /* 允许弹窗内部滚动 */
    -ms-overflow-style: none;
    /* 适用于 Internet Explorer 和旧版 Edge */
    scrollbar-width: none;

    /* 适用于 Firefox */
    textarea {
      width: 100%;
      /* 设置宽度为100% */
      height: 100px;
      /* 设置高度 */
      padding: 5px;
      /* 添加内边距 */
    }

    .ml-289 {
      margin-left: 289px;
    }

    .ml-19 {
      margin-left: 19px;
    }

    .mt-23 {
      margin-top: 23px;
    }

    .mt-15 {
      margin-top: 15px;
    }

    .mt-17 {
      margin-top: 17px;
    }

    .ml-13 {
      margin-left: 13px;
    }

    .section_4 {
      padding: 32px 0 46px;
      background-color: #ffffff;
      border-radius: 16px;
      width: 697px;

      .group {
        margin-top: 32px;
        padding: 0 6px;

        .text_7 {
          margin-left: 40px;
        }

        .equal-division {
          align-self: stretch;
          margin-top: 20px;

          .equal-division-item {
            padding: 8px 38px;

            .font_4 {
              font-size: 16px;
              font-family: Inter;
              line-height: 9px;
              color: #888888;
            }
          }
        }

        .group_4 {
          padding: 0 40px;

          .text_13 {
            line-height: 15px;
          }

          .text_52 {
            line-height: 13.5px;
          }

          .text_53 {
            line-height: 13.5px;
          }
        }

        .view_4 {
          margin-top: 20px;
        }

        .group_5 {
          margin-top: 16px;
          padding: 0 38px;

          .man {
            margin-right: 20px;
          }

          .text-wrapper_2 {
            cursor: pointer;
            /* 鼠标悬停时变为手型 */
            padding: 20px 0 16px;
            background-color: #ffffff;
            border-radius: 8px;
            width: 124px;
            height: 48px;
            border-left: solid 1px #d9d9d9;
            border-right: solid 1px #d9d9d9;
            border-top: solid 1px #d9d9d9;
            border-bottom: solid 1px #d9d9d9;

            .text_16 {
              line-height: 10px;
            }
          }

          .active {
            padding: 20px 0 16px;
            background-color: #eadbd6;
            border-radius: 8px;
            width: 124px;
            height: 48px;
            border: solid 1px #c38370;

            color: #c38370;
            font-size: 18px;
            font-family: Inter;
            line-height: 10px;
          }

          .text-wrapper_4 {
            padding: 16px 0;
            background-color: #ffffff;
            border-radius: 8px;
            width: 267px;
            height: 48px;
            border-left: solid 1px #d9d9d9;
            border-right: solid 1px #d9d9d9;
            border-top: solid 1px #d9d9d9;
            border-bottom: solid 1px #d9d9d9;

            .text_15 {
              margin-left: 16px;
            }
          }
        }

        .text_50 {
          margin-left: 38px;
          line-height: 17.5px;
        }

        .text_51 {
          margin-left: 40px;
          margin-top: 20px;
        }

        .view_9 {
          margin-top: 16px;
        }

        .text_14 {
          line-height: 13.5px;
        }

        .text_55 {
          margin-left: 38px;
          margin-top: 26px;
        }

        .section_12 {
          margin: 14px 38px 0;
          padding: 14px 8px 132px 10px;
          background-color: #ffffff;
          border-radius: 8px;
          border-left: solid 1px #d9d9d9;
          border-right: solid 1px #d9d9d9;
          border-top: solid 1px #d9d9d9;
          border-bottom: solid 1px #d9d9d9;
        }

        .text_56 {
          margin-left: 40px;
          line-height: 17.5px;
        }

        .group_16 {
          padding-bottom: 38px;

          .grid_3 {
            // padding-bottom: 142px;
            // width: 687px;
            // height: 283.5px;
            display: grid;
            grid-template-rows: repeat(2, minmax(0, 1fr));
            grid-template-columns: repeat(2, minmax(0, 1fr));
            row-gap: 0;
            column-gap: 0;

            .grid-item_3 {
              padding: 32px 38px;

              .text_57 {
                line-height: 15.5px;
              }
            }

            .grid-item_4 {
              padding: 0 38px 28px;

              .text_59 {
                margin-top: -4px;
              }

              .view_10 {
                margin-top: 14px;
              }

              .text_61 {
                margin-top: 26px;
              }
            }
          }

          .pos_2 {
            position: absolute;
            left: 40.5px;
            top: 274px;

            .text_62 {
              line-height: 13.5px;
            }

            .text_64 {
              line-height: 13.5px;
            }
          }
        }

        .text_66 {
          margin-left: 38px;
          margin-top: 26px;
        }

        .section_13 {
          margin: 14px 38px 0;
          padding: 14px 12px 176px;
          background-color: #ffffff;
          border-radius: 8px;
          border-left: solid 1px #d9d9d9;
          border-right: solid 1px #d9d9d9;
          border-top: solid 1px #d9d9d9;
          border-bottom: solid 1px #d9d9d9;
        }
      }

      .view {
        margin-top: 0;
      }

      .group_9 {
        margin-top: 32px;
        padding: 0 43px;

        .text_20 {
          margin-left: 2px;
          line-height: 17.5px;
        }

        .text-wrapper_8 {
          padding: 16px 0 226px;
          background-color: #ffffff;
          border-radius: 8px;
          width: 611px;
          height: 258px;
          border-left: solid 1px #d9d9d9;
          border-right: solid 1px #d9d9d9;
          border-top: solid 1px #d9d9d9;
          border-bottom: solid 1px #d9d9d9;

          .text_28 {
            margin-left: 10px;
            line-height: 14px;
          }
        }
      }

      .font_3 {
        font-size: 18px;
        font-family: Inter;
        line-height: 17.5px;
        color: #121212;
      }

      .font_5 {
        font-size: 18px;
        font-family: Inter;
        line-height: 14px;
        color: #888888;
      }

      .group_14 {
        margin-right: 6px;
        margin-top: 32px;

        .text_38 {
          margin-left: 44px;
          line-height: 17.5px;
        }

        .grid {
          margin-right: 18px;
          margin-top: 8px;
          padding-left: 6px;
          padding-bottom: 117px;
          height: 234px;
          display: grid;
          grid-template-rows: repeat(2, minmax(0, 1fr));
          grid-template-columns: repeat(2, minmax(0, 1fr));
          row-gap: 0;
          column-gap: 20px;

          .grid-item {
            padding: 20px 20px 20px 38px;
          }
        }

        .text_42 {
          margin-left: 44px;
          margin-top: 14px;
        }

        .grid_2 {
          display: grid;
          grid-template-rows: repeat(2, minmax(0, 1fr));
          grid-template-columns: repeat(2, minmax(0, 1fr));
          row-gap: 11.5px;
          column-gap: 0;
          margin-left: 6px;
          margin-top: 24px;
          height: 202px;
        }

        .grid-item_2 {
          padding: 4px 38px 14px;
        }

        .text_44 {
          margin-left: 44px;
          margin-top: 14px;
        }

        .group_15 {
          margin-top: 18px;
          padding: 0 46px;

          .text_45 {
            line-height: 13.5px;
          }

          .text_47 {
            line-height: 13.5px;
          }
        }

        .text_49 {
          margin-left: 42px;
          margin-top: 26px;
        }

        .section_11 {
          margin: 14px 38px 0 43px;
          padding: 14px 12px 130px;
          background-color: #ffffff;
          border-radius: 8px;
          border-left: solid 1px #d9d9d9;
          border-right: solid 1px #d9d9d9;
          border-top: solid 1px #d9d9d9;
          border-bottom: solid 1px #d9d9d9;
        }
      }

      .font_7 {
        font-size: 16px;
        font-family: Inter;
        line-height: 15.5px;
        color: #888888;
      }

      .text-wrapper {
        padding: 16px 0;
        background-color: #ffffff;
        border-radius: 8px;
        width: 267px;
        height: 48px;
        border-left: solid 1px #d9d9d9;
        border-right: solid 1px #d9d9d9;
        border-top: solid 1px #d9d9d9;
        border-bottom: solid 1px #d9d9d9;

        .text_9 {
          margin-left: 14px;
        }

        .text_10 {
          line-height: 14px;
        }

        .text_11 {
          line-height: 14px;
        }

        .text_40 {
          margin-left: 14px;
        }

        .text_43 {
          margin-left: 14px;
        }

        .text_58 {
          margin-left: 14px;
        }

        .text_60 {
          margin-left: 14px;
        }
      }

      .font_14 {
        font-size: 18px;
        font-family: Inter;
        line-height: 14px;
        color: #121212;
      }

      .text-wrapper_12 {
        padding: 16px 0 16px 45px;

        background-color: #ffffff;
        border-radius: 8px;
        width: 191px;
        height: 48px;
        border-left: solid 1px #d9d9d9;
        border-right: solid 1px #d9d9d9;
        border-top: solid 1px #d9d9d9;
        border-bottom: solid 1px #d9d9d9;

        .text_46 {
          line-height: 13.5px;
        }

        .text_48 {
          line-height: 13.5px;
        }

        .text_54 {
          line-height: 13.5px;
        }

        .text_63 {
          line-height: 13.5px;
        }

        .text_65 {
          line-height: 13.5px;
        }
      }

      .font_15 {
        font-size: 18px;
        font-family: Inter;
        line-height: 22px;
        color: #888888;
      }

      .font_13 {
        font-size: 16px;
        font-family: Inter;
        line-height: 12.5px;
        color: #888888;
      }

      .group_17 {
        margin-top: 42px;
        padding: 0 34px;

        .text-wrapper_13 {
          cursor: pointer;
          /* 鼠标悬停时变为手型 */
          margin-left: 420px;
          padding: 8px 0 12px;
          background-color: #d9d9d9;
          border-radius: 8px;
          width: 96px;
          height: 34px;
          border-left: solid 1px #d9d9d9;
          border-right: solid 1px #d9d9d9;
          border-top: solid 1px #d9d9d9;
          border-bottom: solid 1px #d9d9d9;
        }

        .text-wrapper_14 {
          cursor: pointer;
          /* 鼠标悬停时变为手型 */
          padding: 8px 0 12px;
          background-color: #c38370;
          border-radius: 8px;
          width: 96px;
          height: 34px;
          border-left: solid 1px #c38370;
          border-right: solid 1px #c38370;
          border-top: solid 1px #c38370;
          border-bottom: solid 1px #c38370;

          .text_67 {
            color: #ffffff;
          }
        }
      }

      .font_16 {
        font-size: 16px;
        font-family: Inter;
        line-height: 12px;
        color: #888888;
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