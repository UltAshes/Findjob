<template>
  <div class="resumepage">
    <!-- 个人信息页浏览 -->
    <div class="flex-col page">
      <!-- 顶部导航栏 -->
      <div class="flex-row justify-between items-center section">
        <div class="flex-row">
          <button class="font text">Home</button>
          <button class="font text_2 ml-23">Search</button>
        </div>
        <div class="flex-row items-center">
          <button class="font text_3">Message</button>
          <span class="font text_4 ml-20">Resume</span>
          <button class="font text_5 ml-20">Miss Lin</button>
          <img class="image image_23 ml-20" src="../images/4.png" />
        </div>
      </div>
      <!-- 主体部分 -->
      <div class="flex-row justify-center mt-24">

        <!-- 简历目录 -->
        <div class="flex-col self-start section_2">
          <div class="flex-col self-stretch">
            <div class="flex-col justify-start items-center self-stretch text-wrapper">
              <span class="font_2">Resume catalog</span>
            </div>
            <span class="self-center font_4 text_8 mt-29">Personal information</span>
          </div>
          <span class="self-center font_5 text_9 mt-36">Personal advantage</span>
          <span class="self-center font_5 mt-36">Desired position</span>
          <span class="self-center font_5 mt-36">Work experience</span>
          <span class="self-center font_5 mt-36">Project experience</span>
          <span class="self-center font_5 mt-36">Educational experience</span>
          <span class="self-center font_4 text_16 mt-36">Custom addition</span>
        </div>
        <!-- 简历 -->
        <div class="flex-col section_3 ml-20">
          <div class="flex-col">
            <div class="section_4"></div>
            <!-- 1. 基本信息 -->
            <div v-if="!isEdit_1" class="flex-row items-center group">
              <div class="flex-col">
                <div class="flex-row items-end group_1">
                  <span class="font_3 text_7">Miss Lin</span>
                  <!-- 编辑键1 -->
                  <img class="shrink-0 image_3 ml-393" src="../images/r4.png" @click="onEdit_1" />
                </div>
                <div class="flex-row items-center group_4">
                  <img class="shrink-0 image_7" src="../images/r7.png" />
                  <span class="font_6 text_10">2000-01-01</span>
                  <img class="shrink-0 image_7 image_1" src="../images/r8.png" />
                  <span class="font_6 text_11">Women</span>
                </div>
                <div class="flex-row items-center group_6">
                  <img class="image_7" src="../images/r5.png" />
                  <span class="font_7 text_13 ml-10">On campus - Be on duty anytime</span>
                </div>
              </div>
              <!-- 头像 -->
              <img class="image_4 ml-35" src="../images/r21.png" @click="onUploadUserIcon" />
            </div>
            <!-- 1. 基本信息-编辑状态 -->
            <div v-else-if="isEdit_1" class="flex-col edit_1">
              <span class="self-start font_2 text_8">Edit personal information</span>
              <div class="mt-28 flex-col self-stretch">
                <div class="flex-col">
                  <div class="flex-row items-baseline group_4">
                    <span class="font_5 text_10">name</span>
                    <span class="font_5 ml-299">Job Status</span>
                  </div>
                  <div class="mt-18 flex-row group_4">
                    <input v-model="form1.name" class="text-wrapper_2" type="text" placeholder="Miss Lin">
                    <input v-model="form1.Job_status" class="text-wrapper_2 ml-75" type="text" placeholder="Unlimited">
                  </div>
                </div>
                <div class="flex-col mt-27">
                  <div class="flex-row">
                    <span class="font_7 text_14">gender</span>
                    <span class="font_7 text_15 ml-289">birthday</span>
                  </div>
                  <div class="flex-row group_6">
                    <div class="flex-row">
                      <div class="flex-col justify-start items-center text-wrapper_3 font_6 text_17 man"
                        @click="toggleMan" :class="{ 'active': manSelected }">man</div>
                      <div class="flex-col justify-start items-center text-wrapper_3 font_6 text_17"
                        @click="toggleWoman" :class="{ 'active': womanSelected }">woman</div>
                    </div>
                    <input v-model="form1.birthday" class="ml-76 text-wrapper_5" type="date"
                      placeholder="Select the date">
                  </div>
                  <div class="flex-row group_7">
                    <button class="flex-col justify-start items-center text-wrapper_6" @click="onCancel_1"><span
                        class="font_5">Cancle</span></button>
                    <button class="ml-16 flex-col justify-start items-center text-wrapper_7" @click="onFinish_1">
                      <span class="font_3 text_19">Finish</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 2. 个人优势 -->
          <div v-if="!isEdit_2" class="flex-col group_11 mt-41">
            <div class="flex-row items-center">
              <div class="section_8"></div>
              <span class="font_3 text_14 ml-14">Personal advantage</span>
              <!-- 编辑键2 -->
              <img class="shrink-0 self-end image_3 image_19" src="../images/r4.png" @click="onEdit_2" />
            </div>
            <div class="flex-col group_8 mt-16 max-width">
              <span class="self-start font_8 text_15">Active</span>

            </div>
          </div>
          <!-- 2. 个人优势-编辑状态 -->
          <div v-else-if="isEdit_2" class="flex-col edit_2">
            <span class="self-start font_2 text_14">Edit presonal advantage</span>
            <textarea v-model="advantage" class="flex-col justify-start items-start self-stretch view_1"
              placeholder="Active"></textarea>
            <div class="flex-row self-stretch group_7">
              <button class="flex-col justify-start items-center text-wrapper_3 view_2 button"
                @click="onCancel_2">Cancle</button>
              <button class="flex-col justify-start items-center text-wrapper_4 ml-16 button_1"
                @click="onFinish_2">Finish</button>
            </div>
          </div>
          <!-- 3. 求职期望 -->
          <div v-if="!isEdit_3" class="flex-col group_11 mt-41">
            <div class="flex-row items-center">
              <div class="section_8"></div>
              <span class="font_3 ml-14">Desired position</span>
              <!-- 编辑键3 -->
              <img class="image_3 ml-413" src="../images/r4.png" @click="onEdit_3" />
            </div>
            <div class="flex-row items-center self-stretch mt-24 max-width">
              <span class="font_8">Unlimited</span>
              <div class="shrink-0 section_9 ml-8"></div>
              <span class="font_7 text_17 ml-8">Computer software</span>
              <div class="shrink-0 section_9 ml-8"></div>
              <span class="font_7 ml-8">8 hours per day</span>
              <div class="shrink-0 section_9 ml-8"></div>
              <span class="font_7 ml-8">Unlimited</span>
            </div>
          </div>
          <!-- 3. 求职期望-编辑状态 -->
          <div v-else-if="isEdit_3" class="flex-col edit_3">
            <div class="flex-col">
              <span class="self-start font_2 text_16">Add job expectations</span>
              <div class="grid mt-9">
                <div class="flex-col grid-item">
                  <span class="self-start font_7 text_18">Desired industry</span>
                  <input v-model="form3.desire_industry" class="text-wrapper_2" type="text" placeholder="Unlimited">
                </div>
                <div class="flex-col grid-item">
                  <span class="self-start font_7 text_18">Desired position tag</span>
                  <input v-model="form3.desire_tag" class="text-wrapper_2" type="text" placeholder="Computer software">
                </div>
                <div class="flex-col grid-item">
                  <span class="self-start font_7 text_18">Desired work time</span>
                  <input v-model="form3.desired_worktime" class="text-wrapper_2" type="text"
                    placeholder="8 hours per day">
                </div>
                <div class="flex-col grid-item">
                  <span class="self-start font_7 text_18">Salary requirement</span>
                  <input v-model="form3.salary_requirement" class="text-wrapper_2" type="text" placeholder="Unlimited">
                </div>
              </div>
            </div>
            <div class="flex-row group_10 mt-23">
              <button class="flex-col justify-start items-center text-wrapper_3" @click="onCancel_3"><span
                  class="font_4 text_20">Cancle</span></button>
              <button class="ml-16 flex-col justify-start items-center text-wrapper_4" @click="onFinish_3">
                <span class="font_4 text_21">Finish</span>
              </button>
            </div>
          </div>
          <!-- 4.工作经历 -->
          <div v-if="!isEdit_4" class="flex-col group_7 mt-41">
            <div class="flex-row items-center">
              <div class="shrink-0 section_8"></div>
              <span class="font_3 ml-13">Work experience</span>
              <!-- 编辑键4 -->
              <img class="image_3 ml-407" src="../images/r4.png" @click="onEdit_4" />
            </div>
            <div class="flex-row items-center group_9">
              <div class="flex-row items-center shrink-0 content-width">
                <span class="font_9 text_26">HUAWEI</span>
                <span class="font_9 text_27">Internet</span>
                <span class="font_6 text_28">design department</span>
                <span class="font_6 text_29">UI designer</span>
              </div>
              <span class="ml-62 font_10 text_30">2023.6-2023.12</span>
            </div>
            <div class="flex-col group_10 max-width">
              <div class="flex-row title">
                <div class="flex-row items-center self-stretch">
                  <span class="font_9">Job content:</span>
                </div>
                <!-- 工作内容陈列 -->
                <div class="flex-col content ">
                  <span class="ml-14 font_11">1. Web Ul design</span>
                  <span class="ml-14 font_11">2. Connect the front and rear ends</span>
                </div>
              </div>
            </div>
          </div>
          <!-- 4.工作经历-编辑状态 -->
          <div v-else-if="isEdit_4" class="flex-col edit_4">
            <div class="flex-col">
              <span class="self-start font_2 text_23">Add work/study experience</span>
              <div class="grid">
                <div class="flex-col grid-item">
                  <span class="self-start font_9">company name</span>
                  <input v-model="form4.company_name" class="text-wrapper_2" type="text" placeholder="Unlimited">
                </div>
                <div class="flex-col grid-item">
                  <span class="self-start font_9">industry involved</span>
                  <input v-model="form4.industry_involved" class="text-wrapper_2" type="text" placeholder="Unlimited">
                </div>
                <div class="flex-col grid-item">
                  <span class="self-start font_9">department name</span>
                  <input v-model="form4.department_name" class="text-wrapper_2" type="text" placeholder="Unlimited">
                </div>
                <div class="flex-col grid-item">
                  <span class="self-start font_9">job title</span>
                  <input v-model="form4.job_title" class="text-wrapper_2" type="text" placeholder="Unlimited">
                </div>
              </div>
              <span class="self-start font_11 text_25">Time</span>
              <div class="flex-row items-center self-stretch group_13">
                <span class="font_6 text_26">From</span>
                <input v-model="form4.job_begin_time" class="text-wrapper_3 ml-13" type="date"
                  placeholder="Select the date">
                <span class="font_6 text_28 ml-13">To</span>
                <input v-model="form4.job_end_time" class="text-wrapper_3 ml-13" type="date"
                  placeholder="Select the date">
              </div>
              <span class="self-start font_9 text_29">job content</span>
              <textarea v-model="form4.job_content" class="flex-col justify-start items-start self-stretch section_11 "
                placeholder="1. Web Ul design
    2. Connect the front and rear ends"></textarea>
            </div>
            <div class="mt-42 flex-row group_14">
              <button class="flex-col justify-start items-center text-wrapper_4" @click="onCancel_4"><span
                  class="font_11 text_30">Cancle</span></button>
              <button class="ml-16 flex-col justify-start items-center text-wrapper_5" @click="onFinish_4">
                <span class="font_4 text_31">Finish</span>
              </button>
            </div>
          </div>
          <!-- 5.项目经历 -->
          <div v-if="!isEdit_5" class="flex-col group_7 mt-41">
            <div class="flex-row items-center self-center">
              <div class="shrink-0 section_8"></div>
              <span class="font_3 ml-14">Project experience</span>
              <!-- 编辑键5 -->
              <img class="self-start image_3 ml-386" src="../images/r4.png" @click="onEdit_5" />
            </div>
            <div class="flex-row items-center group_9">
              <div class="flex-row shrink-0 content-width">
                <span class="font_9">Part-time platform for college students</span>
                <span class="font_6 text_29 ml-17">UI designer</span>
              </div>
              <span class="ml-62 font_10">2023.6-2023.12</span>
            </div>
            <div class="flex-row group_10 max-width">
              <div class="flex-row items-center self-stretch">
                <span class="font_9">Project description:</span>
              </div>
              <!-- 项目内容陈列 -->
              <div class="flex-col content">
                <span class="ml-14 font_11">1. Web Ul design</span>
                <span class="ml-14 font_11">2. Connect the front and rear ends</span>
              </div>
            </div>

          </div>
          <!-- 5.项目经历-编辑状态 -->
          <div v-else-if="isEdit_5" class="flex-col edit_5">
            <div class="flex-col">
              <span class="self-start font_2 text_19">Add project experience</span>
              <div class="flex-row equal-division">
                <div class="flex-col equal-division-item">
                  <span class="self-start font_9 text_20">Project name</span>
                  <input v-model="form5.project_name" class="text-wrapper_2" type="text" placeholder="Unlimited">
                </div>
                <div class="flex-col equal-division-item ml-9">
                  <span class="self-start font_9 text_20">Project role</span>
                  <input v-model="form5.project_role" class="text-wrapper_2" type="text" placeholder="Unlimited">
                </div>
              </div>
              <span class="self-start font_9 text_22">Project time</span>
              <div class="flex-row items-center self-stretch group_11">
                <span class="font_6 text_23">From</span>
                <input v-model="form5.project_time_begin" class="text-wrapper_3 ml-13" type="date"
                  placeholder="Select the date">
                <span class="font_6 text_24 ml-13">To</span>
                <input v-model="form5.project_time_end" class="text-wrapper_3 ml-13" type="date"
                  placeholder="Select the date">
              </div>
              <span class="self-start font_9 text_25">Project description</span>
              <textarea v-model="form5.Project_description" class="flex-col self-stretch section_11" placeholder="1. Web Ul design
    2. Connect the front and rear ends"></textarea>
            </div>
            <div class="mt-42 flex-row group_12">
              <button class="flex-col justify-start items-center text-wrapper_4" @click="onCancel_5"><span
                  class="font_4 text_26">Cancle</span></button>
              <button class="ml-16 flex-col justify-start items-center text-wrapper_5" @click="onFinish_5">
                <span class="font_4 text_27">Finish</span>
              </button>
            </div>
          </div>
          <!-- 6.教育经历 -->
          <div v-if="!isEdit_6" class="flex-col group_11 mt-41">
            <div class="flex-row items-center">
              <div class="section_8"></div>
              <span class="font_3 ml-14">Educational experience</span>
              <!-- 编辑键6 -->
              <img class="self-start image_3 image_21 ml-332" src="../images/r4.png" @click="onEdit_6" />
            </div>
            <div class="flex-col mt-17">
              <div class="flex-row education-infor">
                <img class="shrink-0 image_20" src="../images/r14.png" />
                <div class="flex-col items-start shrink-0 self-center ml-14">
                  <div class="flex-row">
                    <span class="font_4 text_18">Fuzhou university</span>
                    <span class="self-start font_4 text_19 ml-18">2022-2026</span>
                  </div>
                  <div class="flex-row">
                    <span class="font_4 text_20 mt-14">Software engineering</span>
                    <span class="font_4 text_20 mt-14 ml-14">Bachelor</span>
                  </div>
                </div>

              </div>
              <div class="flex-row group_10 max-width">
                <div class="flex-row items-center self-stretch">
                  <span class="font_9">Experience:</span>
                </div>
                <!-- 教育经历内容陈列 -->
                <div class="flex-col content">
                  <span class="ml-14 font_11">1. Web Ul design</span>
                  <span class="ml-14 font_11">2. Connect the front and rear ends</span>
                </div>
              </div>
            </div>
          </div>
          <!-- 6.教育经历-编辑状态 -->
          <div v-else-if="isEdit_6" class="flex-col edit_6">
            <div class="flex-col">
              <span class="self-start font_2 text_19">Editing education</span>
              <div class="flex-col justify-start self-stretch relative group_11">
                <div class="grid">
                  <div class="flex-col grid-item">
                    <span class="self-start font_8 text_20">School name</span>
                    <input v-model="form6.School_name" class="text-wrapper_2" type="text" placeholder="Unlimited">
                  </div>
                  <div class="flex-col grid-item">
                    <span class="self-start font_9 text_20">Education background</span>
                    <input v-model="form6.Education_background" class="text-wrapper_2" type="text"
                      placeholder="Unlimited">
                  </div>
                  <div class="flex-col relative grid-item_2">
                    <span class=" self-start font_9 text_22">Major name</span>
                    <input v-model="form6.Major_name" class="text-wrapper_2 view" type="text" placeholder="Unlimited">
                    <span class="self-start font_9 text_24">Time</span>
                  </div>
                </div>
                <div class="flex-row items-center pos_6">
                  <span class="font_5 text_25">From</span>
                  <input v-model="form6.Time_begin" class="text-wrapper_3 ml-13" type="date"
                    placeholder="Select the date">
                  <span class="font_5 text_27 ml-13">To</span>
                  <input v-model="form6.Time_end" class="text-wrapper_3 ml-13" type="date"
                    placeholder="Select the date">
                </div>
              </div>
              <span class="self-start font_9 text_28">Experience in school</span>
              <textarea v-model="form6.Experience_in_school" class="flex-col items-start self-stretch section_11"
                placeholder="1. Web Ul design 
    2. Connect the front and rear ends"></textarea>
            </div>
            <div class="mt-42 flex-row group_12">
              <button class="flex-col justify-start items-center text-wrapper_4" @click="onCancel_6"><span
                  class="font_8">Cancle</span></button>
              <button class="ml-16 flex-col justify-start items-center text-wrapper_5" @click="onFinish_6"><span
                  class="text_29">Finish</span></button>
            </div>
          </div>
        </div>
        <!-- 附件上传栏 -->
        <div class="flex-col self-start section_5 ml-20">
          <div class="flex-row section_6">
            <span class="font_2">Attachment management</span>
            <button class="text_6 text_1 ml-35" @click="onUploadAttachment">+</button>
          </div>
          <div class="flex-col justify-start items-center relative group_2 mt-28">
            <div class="flex-row">
              <img class="self-start image_6" src="../images/r20.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 点击上传附件的弹窗 -->
    <div v-if="isAttachmentVisible" class="overlay_attachment" @click="onUploadAttachment"> <!--全屏遮罩层-->
      <div class="flex-col attachment" @click.stop="">
        <span class="self-center font_5 text_16">Drag the file here</span>
        <span class="self-center text_19">The file size must not exceed 300M</span>
        <button class="flex-col justify-start items-center self-stretch text-wrapper_2">
          <span class="font_5 text_20">Upload Files</span>
        </button>
      </div>
    </div>
    <!-- 点击上传头像的弹窗 -->
    <div v-if="isUserIconVisible" class="overlay_usericon" @click="onUploadUserIcon"> <!--全屏遮罩层-->
      <div class="flex-col justify-start user-icon" @click.stop="">
        <div class="flex-row equal-division">
          <img class="equal-division-item" src="../images/u2.png" />
          <img class="ml-24 equal-division-item" src="../images/u3.png" />
          <img class="ml-24 equal-division-item" src="../images/u4.png" />
          <img class="ml-24 equal-division-item" src="../images/u5.png" />
          <div class="ml-24 flex-col justify-start items-center equal-division-item_2">
            <img class="image_20" src="../images/u1.png" @click="onUploadImage" />
          </div>
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
      isAttachmentVisible: false, // 控制附件弹窗的数据
      isUserIconVisible: false, // 控制头像弹窗的数据
      womanSelected: true, // 假设默认woman是选中状态
      isEdit_1: false, //编辑键1默认非编辑状态
      isEdit_2: false, //编辑键2默认非编辑状态
      isEdit_3: false, //编辑键3默认非编辑状态
      isEdit_4: false, //编辑键4默认非编辑状态
      isEdit_5: false, //编辑键5默认非编辑状态
      isEdit_6: false, //编辑键5默认非编辑状态
      form1: {
        name: '',
        Job_status: '',
        Gender: '',
        birthday: '',
      },
      advantage: '',
      form3: {
        desire_industry: '',
        desire_tag: '',
        desired_worktime: '',
        salary_requirement: '',
      },
      form4: {
        company_name: "",
        industry_involved: "",
        department_name: "",
        job_title: "",
        job_begin_time: "",
        job_end_time: "",
        job_content: ""
      },
      form5: {
        project_name: "",
        project_role: "",
        project_time_begin: "",
        project_time_end: "",
        Project_description: "",
      },
      form6: {
        School_name: "",
        Education_background: "",
        Major_name: "",
        Time_begin: "",
        Time_end: "",
        Experience_in_school: "",
      },

    };
  },

  methods: {
    onUploadAttachment() {
      this.isAttachmentVisible = !this.isAttachmentVisible; // 上传附件弹窗
    },
    onUploadUserIcon() {
      this.isUserIconVisible = !this.isUserIconVisible; // 上传头像弹窗
    },
    onUploadImage() { //从此电脑上传图片

    },
    toggleMan() {
      this.manSelected = !this.manSelected;
      this.womanSelected = !this.womanSelected; // 确保点击man时woman取消选中
      this.form1.Gender = 'man';
    },
    toggleWoman() {
      this.womanSelected = !this.womanSelected;
      this.manSelected = !this.manSelected; // 确保点击woman时man取消选中
      this.form1.Gender = 'woman';
    },
    //编辑键1
    onEdit_1() {
      this.isEdit_1 = true;
    },
    onCancel_1() {
      this.isEdit_1 = false;
    },
    onFinish_1() {
      console.log('发送个人信息:', this.form)
      this.$axios({
        url: '/information/peopleM',
        method: 'Post',
        params: {
          uid: "1",
          name: this.form1.name,
          Job_status: this.form1.Job_status,
          Gender: this.form1.Gender,
          birthday: this.form1.birthday
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
      this.isEdit_1 = false;
    },
    //编辑键2
    onEdit_2() {
      this.isEdit_2 = !this.isEdit_2;
    },
    onCancel_2() {
      this.isEdit_2 = false;
    },
    onFinish_2() {
      console.log('发送个人优势:', this.form)
      this.$axios({
        url: '/information/peopleA',
        method: 'Post',
        params: {
          uid: "1",
          advantage: this.advantage
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
      this.isEdit_2 = false;
    },
    //编辑键3
    onEdit_3() {
      this.isEdit_3 = !this.isEdit_3;
    },
    onCancel_3() {
      this.isEdit_3 = false;
    },
    onFinish_3() {
      console.log('发送期望工作:', this.form)
      this.$axios({
        url: '/information/peopleD',
        method: 'Post',
        params: {
          uid: "1",
          desire_industry: this.form3.desire_industry,
          desire_tag: this.form3.desire_tag,
          desired_worktime: this.form3.desired_worktime,
          salary_requirement: this.form3.s,
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
      this.isEdit_3 = false;
    },
    //编辑键4
    onEdit_4() {
      this.isEdit_4 = !this.isEdit_4;
    },
    onCancel_4() {
      this.isEdit_4 = false;
    },
    onFinish_4() {
      console.log('发送期望工作:', this.form4)
      this.$axios({
        url: '/information/peopleD',
        method: 'Post',
        data: {
          uid: "1",
          company_name: this.form4.company_name,
          industry_involved: this.form4.industry_involved,
          department_name: this.form4.department_name,
          job_title: this.form4.job_title,
          job_begin_time: this.form4.job_begin_time,
          job_end_time: this.form4.job_end_time,
          job_content: this.form4.job_content
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
      this.isEdit_4 = false;
    },
    //编辑键5
    onEdit_5() {
      this.isEdit_5 = !this.isEdit_5;
    },
    onCancel_5() {
      this.isEdit_5 = false;
    },
    onFinish_5() {
      console.log('发送期望工作:', this.form5)
      this.$axios({
        url: '/information/peopleE',
        method: 'Post',
        data: {
          uid: "1",
          project_name: this.form5.project_name,
          project_role: this.form5.project_role,
          project_time_begin: this.form5.project_time_begin,
          project_time_end: this.form5.project_time_end,
          Project_description: this.form5.Project_description,
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
      this.isEdit_5 = false;
    },
    //编辑键6
    onEdit_6() {
      this.isEdit_6 = !this.isEdit_6;
    },
    onCancel_6() {
      this.isEdit_6 = false;
    },
    onFinish_6() {
      console.log('发送期望工作:', this.form6)
      this.$axios({
        url: '/information/peopleEE',
        method: 'Post',
        data: {
          uid: "1",
          School_name: this.form6.School_name,
          Education_background: this.form6.Education_background,
          Major_name: this.form6.Major_name,
          Time_begin: this.form6.Time_begin,
          Time_end: this.form6.Time_end,
          Experience_in_school: this.form6.Experience_in_school,
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
      this.isEdit_6 = false;
    }
  },
};
</script>

<style scoped lang="scss">
.ml-23 {
  margin-left: 23px;
}

.mt-29 {
  margin-top: 29px;
}

.ml-393 {
  margin-left: 393px;
}

.ml-413 {
  margin-left: 413px;
}

.mt-41 {
  margin-top: 41px;
}

.ml-13 {
  margin-left: 13px;
}

.ml-407 {
  margin-left: 407px;
}

.ml-386 {
  margin-left: 386.5px;
}

.mt-17 {
  margin-top: 17px;
}

.ml-332 {
  margin-left: 332px;
}

.ml-35 {
  margin-left: 35px;
}

.ml-93 {
  margin-left: 93px;
}

.mt-3 {
  margin-top: 3px;
}

.mt-9 {
  margin-top: 9px;
}

.page {
  padding-top: 50px; //整体页面下移
  padding-bottom: 207px;
  background-color: #f2ebe0;
  width: 100%;
  overflow-y: auto;
  overflow: hidden;
  height: 100%;

  .max-width {
    width: 680px;
  }

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
      line-height: 15.5px;
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
      line-height: 15px;
    }

    .text_5 {
      line-height: 15.5px;
    }

    .image {
      flex-shrink: 0;
    }

    .image_23 {
      border-radius: 50%;
      width: 42px;
      height: 42px;
    }
  }

  .section_2 {
    padding-bottom: 42px;
    background-color: #ffffff;
    border-radius: 16px;
    height: 450px;

    .text-wrapper {
      padding: 25px 0 19px;
      background-color: #f9f5f4;
      border-radius: 16px 16px 0px 0px;
      width: 208px;
    }

    .text_8 {
      line-height: 12.5px;
    }

    .font_5 {
      font-size: 16px;
      font-family: Inter;
      line-height: 15.5px;
      color: #121212;
    }

    .text_9 {
      line-height: 15px;
    }

    .text_16 {
      line-height: 12px;
    }
  }

  .section_3 {
    padding-bottom: 45px;
    background-color: #ffffff;
    border-radius: 16px;
    width: 697px;

    .section_4 {
      background-color: #f9f5f4;
      border-radius: 16px 16px 0px 0px;
      height: 61px;
    }

    .ml-299 {
      margin-left: 299px;
    }

    .ml-75 {
      margin-left: 75px;
    }

    .mt-27 {
      margin-top: 27px;
    }

    .ml-289 {
      margin-left: 289px;
    }

    .ml-19 {
      margin-left: 19px;
    }

    //1. 基本信息-编辑状态
    .edit_1 {
      margin: 28px 10px 0;
      padding: 32px 24px 28px 33px;
      background-color: #f8f8f8;
      border-radius: 16px;

      .font_2 {
        font-size: 18px;
        font-family: Inter;
        line-height: 17px;
        color: #121212;
      }

      .text_8 {
        margin-left: 2px;
        line-height: 17.5px;
      }

      .group_4 {
        padding: 0 2px;

        .text_10 {
          line-height: 9px;
        }

        .text-wrapper_2 {
          padding: 16px 15px;
          background-color: #ffffff;
          border-radius: 8px;
          width: 267px;
          height: 48px;
          border: solid 1px #d9d9d9;

          .text_11 {
            margin-left: 14px;
          }

          .text_12 {
            line-height: 14px;
          }

          .text_13 {
            line-height: 14px;
          }
        }
      }

      .font_7 {
        font-size: 16px;
        font-family: Inter;
        line-height: 15.5px;
        color: #888888;
      }

      .text_14 {
        line-height: 15px;
      }

      .text_15 {
        line-height: 15.5px;
      }

      .group_6 {
        margin-top: 16px;

        .text-wrapper_3 {
          padding: 20px 0 16px;
          background-color: #ffffff;
          border-radius: 8px;
          width: 124px;
          height: 48px;
          border-left: solid 1px #d9d9d9;
          border-right: solid 1px #d9d9d9;
          border-top: solid 1px #d9d9d9;
          border-bottom: solid 1px #d9d9d9;

          .text_17 {
            line-height: 10px;
          }
        }

        // 点击后切换样式
        .active {
          padding: 20px 0 16px;
          background-color: #eadbd6;
          border-radius: 8px;
          width: 124px;
          height: 48px;
          border-left: solid 1px #c38370;
          border-right: solid 1px #c38370;
          border-top: solid 1px #c38370;
          border-bottom: solid 1px #c38370;
          text-decoration-color: #c38370;
          font-size: 18px;
          font-family: Inter;
          line-height: 10px;
        }

        .man {
          margin-right: 20px;
        }

        .text-wrapper_5 {
          padding: 16px 16px;
          background-color: #ffffff;
          border-radius: 8px;
          width: 267px;
          height: 48px;
          border-left: solid 1px #d9d9d9;
          border-right: solid 1px #d9d9d9;
          border-top: solid 1px #d9d9d9;
          border-bottom: solid 1px #d9d9d9;

          .text_16 {
            margin-left: 16px;
            line-height: 13.5px;
          }
        }
      }

      .font_6 {
        font-size: 18px;
        font-family: Inter;
        line-height: 13.5px;
        color: #888888;
      }

      .group_7 {
        margin-top: 24px;

        .text-wrapper_6 {
          margin-left: 391px; //有修改
          padding: 8px 0 12px;
          background-color: #ffffff;
          border-radius: 8px;
          width: 96px;
          height: 34px;
          border-left: solid 1px #ffffff;
          border-right: solid 1px #ffffff;
          border-top: solid 1px #ffffff;
          border-bottom: solid 1px #ffffff;
        }

        .text-wrapper_7 {
          padding: 8px 0 12px;
          background-color: #c38370;
          border-radius: 8px;
          width: 96px;
          height: 34px;
          border-left: solid 1px #c38370;
          border-right: solid 1px #c38370;
          border-top: solid 1px #c38370;
          border-bottom: solid 1px #c38370;

          .font_3 {
            font-size: 16px;
            font-family: Inter;
            line-height: 12px;
            color: #121212;
          }

          .text_19 {
            color: #ffffff;
            line-height: 12.5px;
          }
        }
      }

      .font_5 {
        font-size: 16px;
        font-family: Inter;
        line-height: 12px;
        color: #888888;
      }
    }

    .group {
      padding: 26.5px 23px 0;

      .group_1 {
        padding-left: 1.5px;

        .text_7 {
          margin-bottom: 2px;
          line-height: 18.5px;
        }
      }

      .group_4 {
        margin-top: 27px;

        .font_6 {
          font-size: 18px;
          font-family: Inter;
          line-height: 13.5px;
          color: #121212;
        }

        .text_10 {
          margin-left: 10px;
          line-height: 13.5px;
        }

        .image_1 {
          margin-left: 28px;
        }

        .text_11 {
          margin-left: 12.5px;
          line-height: 13.5px;
        }

        .image_9 {
          margin-left: 26.5px;
        }

        .text_12 {
          margin-left: 7px;
          line-height: 13.5px;
        }
      }

      .group_6 {
        margin-top: 15px;

        .text_13 {
          line-height: 17px;
        }
      }

      .image_7 {
        width: 28px;
        height: 28px;
      }

      .image_4 {
        border-radius: 50%;
        width: 107px;
        height: 107px;
      }
    }

    .group_11 {
      padding-left: 23px;
      padding-right: 23px;

      .group_10 {
        margin-top: 0;

        .font_9 {
          font-size: 18px;
          font-family: Inter;
          line-height: 13.5px;
          font-weight: 600;
          color: #2e2e2e;
        }

        .content {
          margin-top: 25px;
        }

        .font_11 {
          font-size: 18px;
          font-family: Inter;
          line-height: 22px;
          color: #2e2e2e;
        }
      }

      .image_19 {
        margin-left: 375px;
        margin-top: -23px;
      }

      .text_14 {
        line-height: 22.5px;
      }

      .group_8 {
        height: 23px;

        .text_15 {
          margin-top: 9.5px;
          line-height: 13.5px;
        }
      }

      .font_8 {
        font-size: 18px;
        font-family: Inter;
        line-height: 13.5px;
        color: #2e2e2e;
      }

      .section_9 {
        background-color: #7e7e7e;
        width: 1px;
        height: 16px;
      }

      .text_17 {
        line-height: 17.5px;
      }

      .image_20 {
        border-radius: 8px;
        width: 48px;
        height: 48px;
      }

      .text_18 {
        font-weight: 600;
        line-height: 12px;
      }

      .text_20 {
        line-height: 12px;
      }

      .text_19 {
        // margin-top: 5px;
        color: #7e7e7e;
      }

      .image_21 {
        margin-top: 9px;
      }
    }

    //2. 个人优势-编辑状态
    .edit_2 {
      margin: 28px 10px 0;
      padding: 32px 24px 0 33px;
      background-color: #f8f8f8;
      border-radius: 16px;

      .font_2 {
        font-size: 18px;
        font-family: Inter;
        line-height: 17px;
        color: #121212;
      }

      .text_14 {
        margin-left: 2.5px;
        line-height: 17.5px;
      }

      .view_1 {
        margin-right: 8.5px;
        margin-top: 23px;
        padding: 14px 15px 130px;
        background-color: #ffffff;
        border-radius: 8px;
        width: 611px;
        border: solid 1px #d9d9d9;

        .font_6 {
          font-size: 18px;
          font-family: Inter;
          line-height: 13.5px;
          color: #121212;
        }

        .text_1 {
          margin-left: 11px;
          color: #888888;
          line-height: 14px;
        }
      }

      .group_7 {
        padding: 42px 0 28px;

        .text-wrapper_3 {
          margin-left: 411px;
        }

        .view_2 {
          padding: 8.5px 0 11.5px;
          background-color: #ffffff;
          border-radius: 8px;
          width: 96px;
          height: 34px;
          border: solid 1px #ffffff;
        }

        .button {
          font-size: 16px;
          font-family: Inter;
          line-height: 12px;
          color: #888888;
        }

        .text-wrapper_4 {
          padding: 8.5px 0 11.5px;
          background-color: #c38370;
          border-radius: 8px;
          width: 96px;
          height: 34px;
          border: solid 1px #c38370;
        }

        .button_1 {
          font-size: 16px;
          font-family: Inter;
          line-height: 12.5px;
          color: #ffffff;
        }
      }
    }

    .mt-15 {
      margin-top: 15px;
    }

    .mt-23 {
      margin-top: 23px;
    }

    .mt-9 {
      margin-top: 9px;
    }

    // 3. 求职期望-编辑状态
    .edit_3 {
      margin: 28px 10px 0;
      padding: 32px 0 28px;
      background-color: #f8f8f8;
      border-radius: 16px;

      .font_2 {
        font-size: 18px;
        font-family: Inter;
        line-height: 17px;
        color: #121212;
      }

      .text_16 {
        margin-left: 34px;
        line-height: 17.5px;
      }

      .grid {
        height: 234px;
        display: grid;
        grid-template-rows: repeat(2, minmax(0, 1fr));
        grid-template-columns: repeat(2, minmax(0, 1fr));
        row-gap: 0;
        column-gap: 10.5px;

        .grid-item {
          padding: 20px 34px;

          .font_7 {
            font-size: 16px;
            font-family: Inter;
            line-height: 15.5px;
            color: #888888;
          }

          .text_18 {
            line-height: 50.5px;
          }

          .text-wrapper_2 {
            padding: 16px 15px;
            background-color: #ffffff;
            border-radius: 8px;
            width: 267px;
            height: 48px;
            border-left: solid 1px #d9d9d9;
            border-right: solid 1px #d9d9d9;
            border-top: solid 1px #d9d9d9;
            border-bottom: solid 1px #d9d9d9;

            .font_6 {
              font-size: 18px;
              font-family: Inter;
              line-height: 14px;
              color: #121212;
            }

            .text_19 {
              margin-left: 14px;
            }
          }
        }
      }

      .group_10 {
        padding: 0 34px;

        .text-wrapper_3 {
          margin-left: 402px;
          padding: 8px 0 12px;
          background-color: #ffffff;
          border-radius: 8px;
          width: 96px;
          height: 34px;
          border-left: solid 1px #ffffff;
          border-right: solid 1px #ffffff;
          border-top: solid 1px #ffffff;
          border-bottom: solid 1px #ffffff;

          .text_20 {
            color: #888888;
          }
        }

        .text-wrapper_4 {
          padding: 8px 0 12px;
          background-color: #c38370;
          border-radius: 8px;
          width: 96px;
          height: 34px;
          border-left: solid 1px #c38370;
          border-right: solid 1px #c38370;
          border-top: solid 1px #c38370;
          border-bottom: solid 1px #c38370;

          .text_21 {
            color: #ffffff;
            line-height: 12.5px;
          }
        }

        .font_4 {
          font-size: 16px;
          font-family: Inter;
          line-height: 12px;
          color: #121212;
        }
      }
    }

    .mt-15 {
      margin-top: 15px;
    }

    .ml-13 {
      margin-left: 13px;
    }

    // 4. 工作经历-编辑状态
    .edit_4 {
      margin: 28px 10px 0;
      padding: 32px 0 28px;
      background-color: #f8f8f8;
      border-radius: 16px;

      .font_2 {
        font-size: 18px;
        font-family: Inter;
        line-height: 17px;
        color: #121212;
      }

      .text_23 {
        margin-left: 34px;
        line-height: 17.5px;
      }

      .grid {
        margin-top: 14px;
        height: 212px;
        display: grid;
        grid-template-rows: repeat(2, minmax(0, 1fr));
        grid-template-columns: repeat(2, minmax(0, 1fr));
        row-gap: 0;
        column-gap: 11px;

        .grid-item {
          padding: 14px 34px;

          .text-wrapper_2 {
            padding: 16px 15px;
            background-color: #ffffff;
            border-radius: 8px;
            width: 267px;
            height: 48px;
            border-left: solid 1px #d9d9d9;
            border-right: solid 1px #d9d9d9;
            border-top: solid 1px #d9d9d9;
            border-bottom: solid 1px #d9d9d9;

            .text_24 {
              margin-left: 14px;
            }
          }
        }
      }

      .font_11 {
        font-size: 16px;
        font-family: Inter;
        line-height: 50.5px;
        color: #888888;
      }

      .text_25 {
        margin-left: 34px;
        margin-top: 14px;
      }

      .group_13 {
        padding: 0 36px;

        .font_6 {
          font-size: 18px;
          font-family: Inter;
          line-height: 14px;
          color: #121212;
        }

        .text_26 {
          line-height: 13.5px;
        }

        .text-wrapper_3 {
          padding: 16px 15px;
          background-color: #ffffff;
          border-radius: 8px;
          width: 191px;
          height: 48px;
          border-left: solid 1px #d9d9d9;
          border-right: solid 1px #d9d9d9;
          border-top: solid 1px #d9d9d9;
          border-bottom: solid 1px #d9d9d9;

          .text_27 {
            line-height: 13.5px;
          }
        }

        .text_28 {
          line-height: 13.5px;
        }
      }

      .font_10 {
        font-size: 18px;
        font-family: Inter;
        line-height: 14px;
        color: #888888;
      }

      .font_9 {
        font-size: 16px;
        font-family: Inter;
        line-height: 50.5px;
        color: #888888;
      }

      .text_29 {
        margin-left: 32px;
        margin-top: 26px;
      }

      .section_11 {
        margin: 14px 33px 0;
        padding: 14px 15px 130px;
        background-color: #ffffff;
        border-radius: 8px;
        border: solid 1px #d9d9d9;

        .font_12 {
          font-size: 18px;
          font-family: Inter;
          line-height: 22px;
          color: #888888;
        }
      }

      .group_14 {
        padding: 0 24px;

        .text-wrapper_4 {
          margin-left: 420px;
          padding: 8px 0 12px;
          background-color: #ffffff;
          border-radius: 8px;
          width: 96px;
          height: 34px;
          border-left: solid 1px #ffffff;
          border-right: solid 1px #ffffff;
          border-top: solid 1px #ffffff;
          border-bottom: solid 1px #ffffff;

          .text_30 {
            line-height: 12px;
          }
        }

        .text-wrapper_5 {
          padding: 8px 0 12px;
          background-color: #c38370;
          border-radius: 8px;
          width: 96px;
          height: 34px;
          border-left: solid 1px #c38370;
          border-right: solid 1px #c38370;
          border-top: solid 1px #c38370;
          border-bottom: solid 1px #c38370;

          .font_4 {
            font-size: 16px;
            font-family: Inter;
            line-height: 12.5px;
            color: #121212;
          }

          .text_31 {
            color: #ffffff;
          }
        }
      }
    }

    .mt-15 {
      margin-top: 15px;
    }

    .ml-9 {
      margin-left: 9px;
    }

    .ml-13 {
      margin-left: 13px;
    }

    //5. 项目经历-编辑状态
    .edit_5 {
      margin: 28px 10px 0;
      padding: 32px 0 26px;
      background-color: #f8f8f8;
      border-radius: 16px;

      .font_2 {
        font-size: 18px;
        font-family: Inter;
        line-height: 17px;
        color: #121212;
      }

      .text_19 {
        margin-left: 34px;
        line-height: 17.5px;
      }

      .equal-division {
        align-self: stretch;
        margin-top: 20px;

        .equal-division-item {
          padding: 8px 34px;

          .text_20 {
            line-height: 50.5px;
          }

          .text-wrapper_2 {
            padding: 16px 15px;
            background-color: #ffffff;
            border-radius: 8px;
            width: 267px;
            height: 48px;
            border-left: solid 1px #d9d9d9;
            border-right: solid 1px #d9d9d9;
            border-top: solid 1px #d9d9d9;
            border-bottom: solid 1px #d9d9d9;

            .text_21 {
              margin-left: 14px;
              line-height: 14px;
            }
          }
        }
      }

      .font_9 {
        font-size: 16px;
        font-family: Inter;
        line-height: 50.5px;
        color: #888888;
      }

      .text_22 {
        margin-left: 34px;
        margin-top: 20px;
        line-height: 15.5px;
      }

      .group_11 {
        margin-top: 16px;
        padding: 0 36px;

        .font_6 {
          font-size: 18px;
          font-family: Inter;
          line-height: 13.5px;
          color: #121212;
        }

        .text_23 {
          line-height: 13.5px;
        }

        .text-wrapper_3 {
          padding: 16px 15px;
          background-color: #ffffff;
          border-radius: 8px;
          width: 191px;
          height: 48px;
          border-left: solid 1px #d9d9d9;
          border-right: solid 1px #d9d9d9;
          border-top: solid 1px #d9d9d9;
          border-bottom: solid 1px #d9d9d9;
        }

        .text_24 {
          line-height: 13.5px;
        }
      }

      .font_10 {
        font-size: 18px;
        font-family: Inter;
        line-height: 13.5px;
        color: #888888;
      }

      .text_25 {
        margin-left: 34px;
        margin-top: 26px;
        line-height: 15.5px;
      }

      .section_11 {
        margin: 14px 33px 0;
        padding: 14px 8px 132px 10px;
        background-color: #ffffff;
        border-radius: 8px;
        border-left: solid 1px #d9d9d9;
        border-right: solid 1px #d9d9d9;
        border-top: solid 1px #d9d9d9;
        border-bottom: solid 1px #d9d9d9;

        .font_11 {
          font-size: 18px;
          font-family: Inter;
          line-height: 22px;
          color: #888888;
        }
      }

      .group_12 {
        padding: 0 24px;

        .text-wrapper_4 {
          margin-left: 420px;
          padding: 8px 0 12px;
          background-color: #ffffff;
          border-radius: 8px;
          width: 96px;
          height: 34px;
          border-left: solid 1px #ffffff;
          border-right: solid 1px #ffffff;
          border-top: solid 1px #ffffff;
          border-bottom: solid 1px #ffffff;

          .text_26 {
            color: #888888;
          }
        }

        .text-wrapper_5 {
          padding: 8px 0 12px;
          background-color: #c38370;
          border-radius: 8px;
          width: 96px;
          height: 34px;
          border-left: solid 1px #c38370;
          border-right: solid 1px #c38370;
          border-top: solid 1px #c38370;
          border-bottom: solid 1px #c38370;

          .text_27 {
            color: #ffffff;
            line-height: 12.5px;
          }
        }

        .font_4 {
          font-size: 16px;
          font-family: Inter;
          line-height: 12px;
          color: #121212;
        }
      }
    }

    .ml-13 {
      margin-left: 13px;
    }

    //6. 教育经历
    .edit_6 {
      margin: 28px 10px 0;
      padding: 32px 0 26px;
      background-color: #f8f8f8;
      border-radius: 16px;

      .font_2 {
        font-size: 18px;
        font-family: Inter;
        line-height: 17px;
        color: #121212;
      }

      .text_19 {
        margin-left: 36px;
        line-height: 17.5px;
      }

      .group_11 {
        padding-bottom: 38px;

        .grid {
          width: 677px;
          height: 283.5px;
          display: grid;
          grid-template-rows: repeat(2, minmax(0, 1fr));
          grid-template-columns: repeat(2, minmax(0, 1fr));
          row-gap: 15px;
          column-gap: 11.5px;

          .grid-item {
            padding: 22px 16px 32px 16px;

            .text_20 {
              line-height: 50.5px;
            }
          }

          .grid-item_2 {
            padding: 0 16px;

            .text_22 {
              margin-top: -4px;
              line-height: 15.5px;
            }

            .view {
              margin-top: 14px;
            }

            .text_24 {
              margin-top: 26px;
              line-height: 12.5px;
            }
          }

          .text-wrapper_2 {
            padding: 16px 15px;
            background-color: #ffffff;
            border-radius: 8px;
            width: 267px;
            height: 48px;
            border-left: solid 1px #d9d9d9;
            border-right: solid 1px #d9d9d9;
            border-top: solid 1px #d9d9d9;
            border-bottom: solid 1px #d9d9d9;

            .text_21 {
              margin-left: 14px;
            }

            .text_23 {
              margin-left: 14px;
            }
          }
        }

        .pos_6 {
          position: absolute;
          left: 40.5px;
          top: 274px;

          .font_5 {
            font-size: 18px;
            font-family: Inter;
            line-height: 14px;
            color: #121212;
          }

          .text_25 {
            line-height: 13.5px;
          }

          .text-wrapper_3 {
            padding: 16px 15px;
            background-color: #ffffff;
            border-radius: 8px;
            width: 191px;
            height: 48px;
            border-left: solid 1px #d9d9d9;
            border-right: solid 1px #d9d9d9;
            border-top: solid 1px #d9d9d9;
            border-bottom: solid 1px #d9d9d9;

            .text_26 {
              line-height: 13.5px;
            }
          }

          .text_27 {
            line-height: 13.5px;
          }
        }

        .font_10 {
          font-size: 18px;
          font-family: Inter;
          line-height: 14px;
          color: #888888;
        }
      }

      .font_8 {
        font-size: 16px;
        font-family: Inter;
        line-height: 16px;
        color: #888888;
      }

      .font_9 {
        font-size: 16px;
        font-family: Inter;
        line-height: 50.5px;
        color: #888888;
      }

      .text_28 {
        margin-left: 34px;
        margin-top: 26px;
        line-height: 15.5px;
      }

      .section_11 {
        margin: 14px 33px 0;
        padding: 14px 12px 176px;
        background-color: #ffffff;
        border-radius: 8px;
        border-left: solid 1px #d9d9d9;
        border-right: solid 1px #d9d9d9;
        border-top: solid 1px #d9d9d9;
        border-bottom: solid 1px #d9d9d9;

        .font_11 {
          font-size: 18px;
          font-family: Inter;
          line-height: 22px;
          color: #888888;
        }
      }

      .group_12 {
        padding: 0 24px;

        .text-wrapper_4 {
          margin-left: 420px;
          padding: 8px 0 12px;
          background-color: #ffffff;
          border-radius: 8px;
          width: 96px;
          height: 34px;
          border-left: solid 1px #ffffff;
          border-right: solid 1px #ffffff;
          border-top: solid 1px #ffffff;
          border-bottom: solid 1px #ffffff;
        }

        .text-wrapper_5 {
          padding: 8px 0 12px;
          background-color: #c38370;
          border-radius: 8px;
          width: 96px;
          height: 34px;
          border-left: solid 1px #c38370;
          border-right: solid 1px #c38370;
          border-top: solid 1px #c38370;
          border-bottom: solid 1px #c38370;

          .text_29 {
            color: #ffffff;
            font-size: 16px;
            font-family: Inter;
            line-height: 12.5px;
          }
        }
      }

    }

    .font_3 {
      font-size: 24px;
      font-family: Inter;
      line-height: 23px;
      font-weight: 600;
      color: #121212;
    }

    .image_3 {
      width: 16px;
      height: 16px;
    }

    .font_7 {
      font-size: 18px;
      font-family: Inter;
      line-height: 17px;
      color: #2e2e2e;
    }

    // 4. 工作经历 5.项目经历 css
    .group_7 {
      padding: 0 23px;

      .content-width {
        width: 470px;
      }

      .group_9 {
        margin-top: 26px;

        .font_9 {
          font-size: 18px;
          font-family: Inter;
          line-height: 13.5px;
          font-weight: 600;
          color: #2e2e2e;
        }

        .text_26 {
          line-height: 13.5px;
        }

        .text_27 {
          margin-left: 22px;
        }

        .font_6 {
          font-size: 18px;
          font-family: Inter;
          line-height: 17.5px;
          color: #2e2e2e;
        }

        .text_28 {
          margin-left: 16px;
        }

        .text_29 {
          margin-left: 18px;
        }

        .font_10 {
          font-size: 16px;
          font-family: Inter;
          line-height: 11px;
          color: #7e7e7e;
        }

        .text_30 {
          font-size: 15px;
        }
      }

      .group_10 {
        margin-top: 0;

        .font_9 {
          font-size: 18px;
          font-family: Inter;
          line-height: 13.5px;
          font-weight: 600;
          color: #2e2e2e;
        }

        .content {
          margin-top: 25px;
        }

        .font_11 {
          font-size: 18px;
          font-family: Inter;
          line-height: 22px;
          color: #2e2e2e;
        }
      }
    }

    .section_8 {
      background-color: #c38370;
      border-radius: 8px;
      width: 4px;
      height: 22px;
    }
  }

  .font_4 {
    font-size: 16px;
    font-family: Inter;
    line-height: 12px;
    color: #121212;
  }

  .section_5 {
    padding-bottom: 105px;
    background-color: #ffffff;
    border-radius: 16px;
    width: 295px;
    height: 381px;

    .section_6 {
      padding: 25px 11.5px 19px;
      background-color: #f9f5f4;
      border-radius: 16px 16px 0px 0px;

      .text_6 {
        margin-right: 3.5px;
      }

      .text_1 {
        color: #6a6a6a;
        font-size: 32px;
        font-family: Inter;
        line-height: 15.5px;
      }
    }

    .group_2 {
      padding-bottom: 28px;

      .section_7 {
        padding: 0 2px 37.5px 2px;
        background-image: url('https://ide.code.fun/api/image?token=67492a3f4ae84d00121e31c3&name=926e9de81543dcd18490de1e6a0189f7.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;

        .image_6 {
          margin-top: 38px;
          width: 28px;
          height: 10px;
        }

        .group_3 {
          width: 64.5px;

          .image_2 {
            width: 55px;
            height: 22.5px;
          }

          .image_5 {
            width: 30px;
            height: 26px;
          }

          .image_10 {
            width: 11px;
            height: 12px;
          }
        }

        .group_5 {
          padding: 0 38.5px;

          .image_11 {
            width: 23px;
            height: 23px;
          }

          .image_12 {
            margin-left: 11.5px;
            width: 47px;
            height: 29px;
          }

          .image_13 {
            width: 37px;
            height: 34px;
          }
        }
      }

      .image-wrapper {
        padding: 2.5px 0 29.5px;
        background-image: url('https://ide.code.fun/api/image?token=67492a3f4ae84d00121e31c3&name=d5cc48945aeaf90d821b2c0d5014fb20.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        width: 209px;

        .image_17 {
          width: 122px;
          height: 23px;
        }
      }

      .pos_4 {
        position: absolute;
        left: 37px;
        top: 132px;
      }

      .image_16 {
        width: 61px;
        height: 55.5px;
      }

      .pos_3 {
        position: absolute;
        left: 25px;
        bottom: 26px;
      }

      .image_18 {
        width: 23px;
        height: 14px;
      }

      .pos_5 {
        position: absolute;
        right: 48px;
        bottom: 35px;
      }

      .image_15 {
        width: 50.5px;
        height: 60px;
      }

      .pos_2 {
        position: absolute;
        left: 102px;
        bottom: 33px;
      }

      .image_14 {
        width: 60px;
        height: 62px;
      }

      .pos {
        position: absolute;
        right: 83.5px;
        bottom: 33.5px;
      }
    }
  }

  .font_2 {
    font-size: 18px;
    font-family: Inter;
    line-height: 17px;
    color: #121212;
  }
}

/* 上传附件显示的弹窗样式 */
.overlay_attachment {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;

  /* 确保弹窗在最上层 */
  .attachment {
    padding: 86px 108px 72px;
    background-color: #ffffff;
    border-radius: 12px;

    .font_5 {
      font-size: 16px;
      font-family: Inter;
      line-height: 15.5px;
      color: #121212;
    }

    .text_16 {
      line-height: 15.5px;
    }

    .text_19 {
      margin-top: 26px;
      color: #7e7e7e;
      font-size: 14px;
      font-family: Inter;
      line-height: 11px;
    }

    .text-wrapper_2 {
      margin: 36px 14px 0;
      padding: 8px 0;
      background-color: #c38370;
      border-radius: 8px;
      width: 206px;
      height: 34px;
      border-left: solid 1px #c38370;
      border-right: solid 1px #c38370;
      border-top: solid 1px #c38370;
      border-bottom: solid 1px #c38370;

      .text_20 {
        color: #ffffff;
        line-height: 15.5px;
      }
    }
  }

}

/* 上传头像显示的弹窗样式 */
.overlay_usericon {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;

  /* 确保弹窗在最上层 */
  .user-icon {
    padding: 44px 0;
    background-color: #ffffff;
    border-radius: 12px;
    width: 560px;

    .equal-division {
      margin-left: 29px;
      margin-right: 34px;

      .equal-division-item {
        border-radius: 50%;
        width: 80px;
        height: 80px;
      }

      .equal-division-item_2 {
        padding: 20px 0 22px;
        border-radius: 50%;
        width: 80px;
        height: 80px;
        border-left: dotted 1px #7e7e7e;
        border-right: dotted 1px #7e7e7e;
        border-top: dotted 1px #7e7e7e;
        border-bottom: dotted 1px #7e7e7e;

        .image_20 {
          width: 36px;
          height: 36px;
        }
      }
    }
  }
}
</style>