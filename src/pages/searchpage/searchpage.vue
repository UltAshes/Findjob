<template>
  <div class="flex-col page">
   <!-- 顶部导航栏 -->
       <div class="flex-row justify-between items-center section">
         <div class="flex-row">
           <span class="font text" @click="onClick_2">Home</span>
           <span class="font text_2 ml-23">Search</span>
         </div>
         <div class="flex-row items-center">
         <span class="font_2 text_3">Message</span>
         <span class="font text_4 ml-20">Resume</span>
          <span class="font ml-20">Miss Lin</span>
          <img
           class="shrink-0 image ml-20"
           src="../images/4.png"
         />
       </div>
     </div>
   <!-- 主体部分 -->
   <div class="flex-col group">
 
     <!-- 搜索板块 -->
     <div class="flex-col section_2">
       <div class="flex-row justify-end self-start section_3">
 
         <!-- 搜索按钮 -->
         <button class="flex-col justify-start items-center text-wrapper view_1 button" @click="fetchResults">Search</button>
         <div class="flex-row items-center section_4">
 
           <!-- select下拉菜单栏 以企业or以岗位搜索 -->
           <div class="select" >
             <select name="search_depends" id="search_depends" v-model="selectedValue">
               <option value="Position">Position</option>
               <option value="Enterprise">Enterprise</option>
             </select>
           </div>
 
           <!-- 输入框 -->
           <input
             class="flex-col justify-start items-start text-wrapper_2 view input"
             placeholder="Search for jobs, companies"
             v-model="query"
           />
         </div>
       </div>
       <span class="self-start font_2 text_8">City and Region</span>
       <div class="flex-row justify-between items-center self-stretch group_2">
         <span class="font_4 text_9">Nationwide</span>
         <span class="font_5 text_10">Beijing</span>
         <span class="font_5 text_11">Shanghai</span>
         <span class="font_5 text_12">Guangzhou</span>
         <span class="font_4 text_13">Shenzhen</span>
         <span class="font_5 text_14">Hangzhou</span>
         <span class="font_5 text_15">Tianjin</span>
         <span class="font_4">Xi 'an</span>
         <span class="font_4 text_16">Suzhou</span>
         <span class="font_4 text_17">Wuhan</span>
         <span class="font_4">Xiamen</span>
         <span class="font_4 text_18">Other cities</span>
       </div>
       <div class="flex-row justify-between items-center self-stretch group_3" >
        <select v-model="selectedOptions[0]" class="flex-row items-center section_1 button_1" @change="sendFilter" style="font-size: 14px;">   
          <option value="" disabled selected>Company Industry</option>
          <option value="IT">IT</option>
          <option value="Finance">Finance</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Education">Education</option>
          <option value="">Clear Selection</option>
         </select>
         <select v-model="selectedOptions[1]" class="flex-row items-center section_6 button_2"@change="sendFilter"style="font-size: 14px;">  
          <option value="" selected>Job Type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="">Clear Selection</option>
         </select>
         <select v-model="selectedOptions[4]" class="flex-row items-center section_5 button_3"@change="sendFilter"style="font-size: 14px;">      
          <option value="" selected>Work hours</option>
          <option value="0-1 years">6 hours</option>
          <option value="2-5 years">8 hours</option>
          <option value="5+ years">10 hours</option>
          <option value="">Clear Selection</option>
         </select>
         <select v-model="selectedOptions[2]" class="flex-row items-center section_13 button_4"@change="sendFilter"style="font-size: 14px;">      
          <option value="" selected>Salary Package</option>
          <option value="< 50k">&lt; 50k</option>
          <option value="50k-100k">50k-100k</option>
          <option value="> 100k">&gt; 100k</option>
          <option value="">Clear Selection</option>
         </select>
         <select v-model="selectedOptions[5]" class="flex-row items-center section_7 button_5"@change="sendFilter"style="font-size: 14px;">      
          <option value="" selected>Educational Requirements</option>
          <option value="High School">High School</option>
          <option value="Bachelor's">Bachelor's</option>
          <option value="Master's">Master's</option>
          <option value="PhD">PhD</option>
          <option value="">Clear Selection</option>
         </select>
         <span class="font_6 text_23">Clear filter</span>
       </div>
     </div>
 
     <!-- 内容板块 -->
     <div class="flex-row group_4">
 
       <!-- 中间部分 -->
       <div class="flex-col flex-1">
 
         <!-- 列表 -->
         
          <!-- 以岗位搜索的结果列表 -->
         <div v-if="selectedValue==='Position'">
           <div class="flex-col list-item mt-18" v-for="result in paginatedResults" :key="result.id">
             <div class="flex-row justify-between group_5">
               <router-link :to="`/details/jobpage/${result.jid}`" class="flex-col self-start group_7">
                 <span class="font_7"> {{result.name}} [{{ result.address }}]</span>
                 <div class="flex-row items-center mt-13">
                   <span class="font_9 text_25"> {{ result.salary }} </span>
                   <div class="flex-col justify-start items-center text-wrapper_4 ml-16">
                     <span class="font_10"> {{result.time}} </span>
                   </div>
                   <div class="flex-col justify-start text-wrapper_5 ml-16">
                     <span class="font_11 text_26"> {{result.requirements}} </span>
                   </div>
                 </div>
               </router-link>
               <div class="flex-row items-center self-center group_6">
                 <img
                   class="image_6"
                   src="../images/5.png"
                 />
                 <div class="flex-col ml-19">
                   <span class="self-start font_2">{{ result.companyName}}</span>
                   <div class="flex-col justify-start self-stretch text-wrapper_6 mt-13">
                     <span class="font_10 text_27">{{ result.tags }}</span>
                   </div>
                 </div>
               </div>
             </div>
             <div class="flex-row justify-between section_9">
               <div class="flex-row">
                 <span class="font_10 text_29">{{ result.description }}</span>
               </div>
               <span class="font_10 text_31">{{ result.salaryDetail }}</span>
             </div>
           </div>
         </div>
         <!-- 以公司搜索的结果列表 -->
         <div v-else-if="selectedValue==='Enterprise'">
           <div class="grid">
             <div class="mt-12 flex-col grid-item" v-for="result in results" :key="result.id">
            
            <router-link :to="`/details/companypage/${result.cid}`" class="flex-row group_4">
              <img
                class="self-center image_3"
                src="../images/5.png"
              />
              <div class="flex-col self-center group_5">
                <span class="self-start font_2 text_26">{{result.name}}</span>
                <div class="mt-14 flex-col justify-start self-stretch text-wrapper_4">
                  <span class="font_7 text_27">{{ result.tags }}</span>
                </div>
              </div>
              <div class="flex-col justify-start items-center self-start text-wrapper_5">
                <span class="font_8 text_28">{{ result.tags}}</span>
              </div>
            </router-link>
            <div class="flex-row items-center section_5">
              <span class="font_8 text_29">Hot recruit :</span>
              <span class="font_9 text_30">{{ result.HotRecruit}}</span>
              <span class="font_8 text_31">{{ result.HotRecruitSalary}}</span>
            </div>
          
        </div>
           </div>
           
         </div>
       </div>
     </div>
 
 
    <div class="flex-row justify-center items-center mt-42">
     <img class="image_8" src="../images/9.png" alt="上一页" @click="changePage(-1)"/>
         <span>第 {{ currentPage }} 页 / 共 {{ totalPages }} 页</span>
     <img class="image_9 image_8" src="../images/10.png" alt="下一页" @click="changePage(1)"/>
     </div>
   </div>
 </div>
 
 
 
 </template>
 
 <script>
 import axios from 'axios';
 
   export default {
     components: {},
     props: {},
     data() {
       return {
         selectedOptions: ["", "", "", "", "", "", "", "", "", ""],
         selectedValue:'Position',// 下拉框默认选项
         query: '',// 搜索框输入数据
         results: [],   // 存储搜索结果
         pageSize: 5, // 每页显示数量
         pageNum: 1,  // 共几页=所有数据/每页现实数量     
         currentPage: 1, // 当前页
       };
     },
   computed: {
     // 计算当前页数据
     paginatedResults() {
       const start = (this.currentPage - 1) * this.pageSize;
       const end = start + this.pageSize;
       return this.results.slice(start, end);
     },
     // 计算总页数
     totalPages() {
       return Math.ceil(this.results.length / this.pageSize);
     },
   },
     methods: {
       //模拟职业结果
      fetchResults() {
       this.results = [];
       const newResults = [        
         {
           jid: 1,
           name: "职位A",
           tags: "IT",
           time: "9:00-18:00",
           salary: "10k-15k",
           salaryDetail: "固定薪资",
           workingHours: "周一到周五",
           requirements: "本科及以上",
           description: "岗位职责...",
           recruitNum: 2,
           deadline: "2024-12-31",
           cid: 101,
           address: "1",
         },
         {
           jid: 2,
           name: "职位A",
           tags: "IT",
           time: "9:00-18:00",
           salary: "10k-15k",
           salaryDetail: "固定薪资",
           workingHours: "周一到周五",
           requirements: "本科及以上",
           description: "岗位职责...",
           recruitNum: 2,
           deadline: "2024-12-31",
           cid: 101,
           address: "2",
         },
         {
           jid: 3,
           name: "职位A",
           tags: "IT",
           time: "9:00-18:00",
           salary: "10k-15k",
           salaryDetail: "固定薪资",
           workingHours: "周一到周五",
           requirements: "本科及以上",
           description: "岗位职责...",
           recruitNum: 2,
           deadline: "2024-12-31",
           cid: 101,
           address: "3",
         },        {
           jid: 1,
           name: "职位A",
           tags: "IT",
           time: "9:00-18:00",
           salary: "10k-15k",
           salaryDetail: "固定薪资",
           workingHours: "周一到周五",
           requirements: "本科及以上",
           description: "岗位职责...",
           recruitNum: 2,
           deadline: "2024-12-31",
           cid: 101,
           address: "4",
         },        {
           jid: 1,
           name: "职位A",
           tags: "IT",
           time: "9:00-18:00",
           salary: "10k-15k",
           salaryDetail: "固定薪资",
           workingHours: "周一到周五",
           requirements: "本科及以上",
           description: "岗位职责...",
           recruitNum: 2,
           deadline: "2024-12-31",
           cid: 101,
           address: "5",
         },        {
           jid: 1,
           name: "职位A",
           tags: "IT",
           time: "9:00-18:00",
           salary: "10k-15k",
           salaryDetail: "固定薪资",
           workingHours: "周一到周五",
           requirements: "本科及以上",
           description: "岗位职责...",
           recruitNum: 2,
           deadline: "2024-12-31",
           cid: 101,
           address: "6",
         },{
           jid: 1,
           name: "职位A",
           tags: "IT",
           time: "9:00-18:00",
           salary: "10k-15k",
           salaryDetail: "固定薪资",
           workingHours: "周一到周五",
           requirements: "本科及以上",
           description: "岗位职责...",
           recruitNum: 2,
           deadline: "2024-12-31",
           cid: 101,
           address: "7",
         },{
           jid: 1,
           name: "职位A",
           tags: "IT",
           time: "9:00-18:00",
           salary: "10k-15k",
           salaryDetail: "固定薪资",
           workingHours: "周一到周五",
           requirements: "本科及以上",
           description: "岗位职责...",
           recruitNum: 2,
           deadline: "2024-12-31",
           cid: 101,
           address: "8",
         },{
           jid: 1,
           name: "职位A",
           tags: "IT",
           time: "9:00-18:00",
           salary: "10k-15k",
           salaryDetail: "固定薪资",
           workingHours: "周一到周五",
           requirements: "本科及以上",
           description: "岗位职责...",
           recruitNum: 2,
           deadline: "2024-12-31",
           cid: 101,
           address: "9",
         },{
           jid: 1,
           name: "职位A",
           tags: "IT",
           time: "9:00-18:00",
           salary: "10k-15k",
           salaryDetail: "固定薪资",
           workingHours: "周一到周五",
           requirements: "本科及以上",
           description: "岗位职责...",
           recruitNum: 2,
           deadline: "2024-12-31",
           cid: 101,
           address: "10",
         },
       ]
       this.results.push(...newResults);
       this.currentPage = 1;
       },
       //模拟公司结果
      fetchResults2() {
       this.results = [];
       const newResults = [        
         {
           "name": "1",
           "tag":'2',
           "HotRecruit":"2",
           "HotRecruitSalary":1000
         },
         {
           "name": "1",
           "tag":'2',
           "HotRecruit":"2",
           "HotRecruitSalary":1000
         },
         {
           "name": "1",
           "tag":'2',
           "HotRecruit":"2",
           "HotRecruitSalary":1000
         },
         {
           "name": "1",
           "tag":'2',
           "HotRecruit":"2",
           "HotRecruitSalary":1000
         },
       ]
       this.results.push(...newResults);
       this.currentPage = 1;
      },
      formatSelectedOptions(i) {
      // 过滤非空值并用分号格式化
      const value = this.selectedOptions[i];
      const formattedString = value !== undefined && value !== null && value !== "" 
       ? `;${value};`  // 如果值有效，前后加分号
       : null;  // 如果值无效，返回空字符串

      return formattedString;
      },
      changePage(direction) {
       const newPage = this.currentPage + direction;
       if (newPage >= 1 && newPage <= this.totalPages) {
         this.currentPage = newPage;
         }
      }, 
      async onClick_search_job() {
       //按职位名称搜索
       if(this.selectedValue == 'Position'){
           console.log('发送搜索职位数据:', { 
             name:this.query,
 
         });
         // 发送请求
         this.$axios({
         url: '/search/Job',     
         method: 'get',
         params: {
           name:this.query,
         }
         }).then(res=>{
           console.log(res);
           if (res.data.code === 200) {
             // 搜索成功，显示搜索结果
             const responseData = res.data.data;
             console.log('后端返回的数据:', responseData);
             this.results.push(...responseData);
             this.currentPage = 1;
           }else {
             // 搜索失败，显示错误消息
             console.error('搜索失败:', res.data.msg);
           }
         },err=>{
           console.log(err);
       })
       };
       if(this.selectedValue == 'Enterprise'){
           console.log('发送搜索公司数据:', { 
             name:this.query,
 
         });
         // 发送请求
         this.$axios({
         url: '/search/Company',     
         method: 'get',
         params: {
           name:this.query,
         }
         }).then(res=>{
           console.log(res);
           if (res.data.code === 200) {
             // 搜索成功，显示搜索结果
             const responseData = res.data.data;
             console.log('后端返回的数据:', responseData);
             this.results.push(...responseData);
             this.currentPage = 1;
           }else {
             // 搜索失败，显示错误消息
             console.error('搜索失败:', res.data.msg);
           }
         },err=>{
           console.log(err);
       })
       };
      },
      sendFilter(){
        console.log('发送搜索职位数据:', { 
            tag:this.formatSelectedOptions(0),
            time:this.formatSelectedOptions(1),
            salary:this.formatSelectedOptions(4),
            salaryDetail: null,
            workingHours: this.formatSelectedOptions(2),
            requirements: null,
            description: null,
            recruitNum: this.formatSelectedOptions(5),
            deadline:null,
            address: null

        })
        this.$axios({
         url: '/search/Tag',     
         method: 'get',
         data: {
          name:this.formatSelectedOptions(0),
            time:this.formatSelectedOptions(1),
            salary:this.formatSelectedOptions(4),
            salaryDetail: null,
            workingHours: this.formatSelectedOptions(2),
            requirements: null,
            description: null,
            recruitNum: this.formatSelectedOptions(5),
            deadline:null,
            address: null
         }
         }).then(res=>{
           console.log(res);
           if (res.data.code === 200) {
             // 搜索成功，显示搜索结果
             const responseData = res.data.data;
             console.log('后端返回的数据:', responseData);
             this.results.push(...responseData);
             this.currentPage = 1;
           }else {
             // 搜索失败，显示错误消息
             console.error('搜索失败:', res.data.msg);
           }
         },err=>{
           console.log(err);
       })
      },
       // 跳转主页
      onClick_2(){
         this.$router.push({ name: 'homepage'});
      }
      
      },
   };
 </script>
 
 <style scoped lang="scss">
 .ml-23 {
   margin-left: 23px;
 }
 .ml-19 {
   margin-left: 19px;
 }
 .ml-21 {
   margin-left: 21px;
 }
 .mt-13 {
   margin-top: 13px;
 }
 .page {
   position:fixed;
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
       line-height: 15.5px;
       font-weight: 600;
       color: #ffffff;
       cursor: pointer;
     }
     .text {
       line-height: 15px;
     }
     .text_2 {
       color: #c38370;
       line-height: 15px;
     }
     .text_3 {
       color: #ffffff;
       line-height: 19px;
       cursor: pointer;
     }
     .text_4 {
       line-height: 15px;
     }
     .image {
       border-radius: 50%;
       width: 42px;
       height: 42px;
     }
   }
   .group {
     padding: 83px 100px 0;
     .section_2 {
       padding: 22px 25px 29px 27px;
       background-color: #ffffff;
       border-radius: 16px;
       .section_3 {
         padding: 0 2px;
         background-color: #c38370;
         border-radius: 8px;
         width: 929px;//与搜索橙色框宽度有关
         
         .text-wrapper {
           margin-left: 800px;
           margin-right: -900px;
         }
 
         // 搜索按钮样式
         .view_1 {
           padding: 22px 0 22px 45px;
           background-color: #c38370;
           border-radius: 8px;
           width: 127px;
           height: 62px;
           cursor: pointer;
         }
         .button {
           color: #ffffff;
           font-size: 24px;
           font-family: Inter;
           font-weight: 600;
           line-height: 18px;
         }
         .section_4 {
           margin: 2px 125px 2px 0;
           padding-left: 16px;
           background-color: #ffffff;
           border-radius: 6px;
           height: 58px;
 
           // select下拉菜单栏样式
           .select {
               select {
                 cursor: pointer;
                 font-size: 18px; 
                 option {
                   font-size: 18px; 
                 }
               }
             }
 
           .text_5 {
             line-height: 15.5px;
             font-weight: unset;
           }
           .image_2 {
             width: 15px;
             height: 9px;
           }
           .image_3 {
             margin-left: 3px;
           }
           .text-wrapper_2 {
             flex-shrink: 0;
             margin-left: 19px;
           }
           .view {
             padding: 21px 0px 18px;
             background-color: #ffffff;
             border-radius: 6px;
             width: 662px;
             height: 58px;
           }
           .input {
             padding: 21px 11px 18px 11px;
           }
         }
       }
       .text_8 {
         margin-top: 20px;
         color: #c38370;
         line-height: 19.5px;
       }
       .group_2 {
         margin-top: 17px;
         padding: 0 3.5px;
         .font_4 {
           font-size: 18px;
           font-family: Inter;
           line-height: 13.5px;
           color: #121212;
         }
         .text_9 {
           color: #c38370;
         }
         .font_5 {
           font-size: 18px;
           font-family: Inter;
           line-height: 17px;
           color: #121212;
         }
         .text_10 {
           line-height: 17.5px;
         }
         .text_11 {
           line-height: 17.5px;
         }
         .text_12 {
           line-height: 17px;
         }
         .text_13 {
           line-height: 13.5px;
         }
         .text_14 {
           line-height: 17px;
         }
         .text_15 {
           line-height: 17px;
         }
         .text_16 {
           line-height: 13.5px;
         }
         .text_17 {
           line-height: 13.5px;
         }
         .text_18 {
           margin-right: 64.5px;
           line-height: 13.5px;
         }
       }
       .group_3 {
         margin-top: 25px;
         display: flex;
         justify-content: flex-start;
         gap: 16px;
         .section_1 {
           padding: 13.5px 12px 11.5px;
           background-color: #f8f8f8;
           border-radius: 6px;
           height: 42px;
         }
         .button_1 {
           font-size: 18px;
           font-family: Inter;
           line-height: 17px;
           color: #121212;
           img{
             height: 10px;
             margin-left: 8px;
           }
         }
         .section_6 {
           padding: 14px 9px 11.5px 11.5px;
           background-color: #f8f8f8;
           border-radius: 6px;
           height: 42px;
         }
         .button_2 {
           font-size: 18px;
           font-family: Inter;
           line-height: 17px;
           color: #121212;
           img{
             height: 10px;
             margin-left: 8px;
           }
         }
         .section_5 {
           padding: 13.5px 11.5px 11.5px;
           background-color: #f8f8f8;
           border-radius: 6px;
           height: 42px;
         }
         .button_3 {
           font-size: 18px;
           font-family: Inter;
           line-height: 17px;
           color: #121212;
           img{
             height: 10px;
             margin-left: 8px;
           }
         }
         .section_13 {
           padding: 14px 10px 11px 12px;
           background-color: #f8f8f8;
           border-radius: 6px;
           height: 42px;
         }
         .button_4 {
           font-size: 18px;
           font-family: Inter;
           line-height: 17px;
           color: #121212;
           img{
             height: 10px;
             margin-left: 8px;
           }
         }
         .section_7 {
           padding: 13.5px 8px 11.5px 12.5px;
           background-color: #f8f8f8;
           border-radius: 6px;
           height: 42px;
         }
         .button_5 {
           font-size: 18px;
           font-family: Inter;
           line-height: 17px;
           color: #121212;
           img{
             height: 10px;
             margin-left: 8px;
           }
         }
         .text_23 {
           line-height: 12.5px;
           margin-left: 125px;
         }
       }
     }
     
     .group_4 {
       padding-top: 5px;
       padding-bottom: 10px;
       //岗位列表样式
       .list-item {
         background-color: #ffffff;
         border-radius: 16px;
         &:first-child {
           margin-top: 0;
         }
         .group_5 {
           padding: 19px 28.5px 19px;
           .group_7 {
             margin-top: 7.5px;
             .font_7 {
               font-size: 20px;
               font-family: Inter;
               line-height: 20.5px;
               font-weight: 600;
               color: #121212;
             }
             .text_25 {
               line-height: 13.5px;
             }
             .text-wrapper_4 {
               padding: 9.5px 0 5.5px;
               background-color: #f8f8f8;
               border-radius: 6px;
               width: 104px;
               height: 32px;
             }
             .text-wrapper_5 {
               padding: 9.5px 0 9px;
               background-color: #f8f8f8;
               border-radius: 6px;
               height: 32px;
               .font_11 {
                 font-size: 18px;
                 font-family: Inter;
                 line-height: 13.5px;
                 color: #7e7e7e;
               }
               .text_26 {
                 margin-left: 11px;
                 margin-right: 11px;
               }
             }
           }
           .group_6 {
             margin-right: 15.5px;
             .image_6 {
               width: 72px;
               height: 72px;
             }
             .text-wrapper_6 {
               padding: 9.5px 0 5.5px;
               background-color: #f8f8f8;
               border-radius: 6px;
               .text_27 {
                 margin-left: 11px;
                 margin-right: 9px;
               }
             }
           }
         }
       }
       //公司列表样式
       .grid {
         height: 531px;
         display: grid;
         grid-template-rows: repeat(3, minmax(1fr));
         grid-template-columns: repeat(3, minmax(0, 1fr));
         row-gap: 13.5px;
         column-gap: 21.5px;
         .grid-item {
           height: 169px;
           background-color: #ffffff;
           border-radius: 8px;
           .group_4 {
             padding: 27px 24px 20px;
             .image_3 {
               width: 64px;
               height: 64px;
             }
             .group_5 {
               margin-left: 20px;
               .font_2 {
                 font-size: 20px;
                 font-family: Inter;
                 line-height: 14.5px;
                 font-weight: 600;
                 color: #121212;
               }
               .text_26 {
                 margin-left: 4px;
                 line-height: 15.5px;
               }
               .text-wrapper_4 {
                 padding: 6px 0;
                 background-color: #f8f8f8;
                 border-radius: 6px;
                 .font_7 {
                   font-size: 16px;
                   font-family: Inter;
                   line-height: 14.5px;
                   color: #6b6666;
                 }
                 .text_27 {
                   margin: 0 8px;
                   font-size: 15px;
                 }
               }
             }
             .text-wrapper_5 {
               margin-left: 10px;
               margin-top: 33px;
               padding: 8px 0;
               background-color: #f8f8f8;
               border-radius: 6px;
               width: 74px;
               height: 28px;
               .text_28 {
                 font-size: 15px;
                 line-height: 11px;
               }
             }
           }
           .section_5 {
             padding: 20px 24px;
             background-color: #f8f4ee;
             border-radius: 0px 0px 8px 8px;
             height: 59px;
             .text_29 {
               line-height: 12px;
             }
             .font_9 {
               font-size: 16px;
               font-family: Inter;
               line-height: 14.5px;
               color: #c38370;
             }
             .text_30 {
               margin-left: 16px;
               line-height: 15.5px;
             }
             .text_31 {
               margin-left: 6px;
             }
           }
           .font_8 {
             font-size: 16px;
             font-family: Inter;
             line-height: 12px;
             color: #6b6666;
           }
         }
         
       }
       .section_9 {
           padding: 24.5px 30px 20px;
           background-color: #f7f4ee;
           border-radius: 0px 0px 16px 16px;
           .text_29 {
             line-height: 17px;
           }
           .text_30 {
             line-height: 17.5px;
           }
           .text_31 {
             margin-right: 13.5px;
             line-height: 17px;
           }
         }
         .font_10 {
           font-size: 18px;
           font-family: Inter;
           line-height: 17px;
           color: #7e7e7e;
         }
       .section_8 {
         padding: 19px 30px 20px 31px;
         background-color: #f8f4ee;
         border-radius: 16px;
         .text-wrapper_3 {
           padding: 10px 0 5.5px;
           background-color: #c38370;
           border-radius: 8px;
           .text_24 {
             margin-left: 14px;
             margin-right: 9px;
             line-height: 17px;
           }
         }
         .text-wrapper_7 {
           padding: 10px 0 5.5px;
           background-color: #c38370;
           border-radius: 8px;
           width: 234px;
           .text_28 {
             line-height: 17px;
           }
         }
         .font_8 {
           font-size: 18px;
           font-family: Inter;
           line-height: 17px;
           color: #ffffff;
         }
       }
       .section_10 {
         padding-bottom: 14.5px;
         background-color: #ffffff;
         border-radius: 16px;
         .text-wrapper_8 {
           padding: 13px 0 13px;
           background-color: #f8f4ee;
           border-radius: 16px 16px 0px 0px;
           width: 295px;
           .text_32 {
             margin-left: 23.5px;
           }
         }
         .group_8 {
           margin-top: 12.5px;
           padding-left: 23.5px;
           padding-right: 13.5px;
           .text_33 {
             line-height: 13.5px;
           }
         }
         .text_34 {
           margin-left: 23.5px;
           margin-top: 20px;
           line-height: 15.5px;
         }
       }
       .font_9 {
         font-size: 18px;
         font-family: Inter;
         line-height: 13.5px;
         color: #fc6335;
       }
       .image_7 {
         width: 295px;
         height: 143px;
       }
       .image_8 {
         width: 295px;
         height: 204px;
       }
     }
     .font_3 {
       font-size: 20px;
       font-family: Inter;
       line-height: 15.5px;
       font-weight: 600;
       color: #121212;
     }
     .font_6 {
       font-size: 16px;
       font-family: Inter;
       color: #7e7e7e;
     }
   }
   .font_2 {
     font-size: 20px;
     font-family: Inter;
     line-height: 19.5px;
     font-weight: 600;
     color: #121212;
   }
   .image_8 {
   border-radius: 4px;
   width: 30px;
   height: 30px;
 }
 .text-wrapper_10 {
   margin-left: 12px;
   padding: 9.5px 0 9px;
   background-color: #c38370;
   border-radius: 4px;
   width: 30px;
   height: 30px;
   .text_35 {
     color: #ffffff;
     line-height: 11.5px;
   }
 }
 .text-wrapper_1 {
   margin-left: 12px;
   padding: 9px 0 9px;
   background-color: #ffffff;
   border-radius: 4px;
   width: 30px;
   height: 30px;
 }
 .font_7 {
   font-size: 16px;
   font-family: Inter;
   line-height: 12px;
   color: #7e7e7e;
 }
 .text-wrapper_11 {
   margin-left: 12px;
   padding: 9px 0 9px;
   background-color: #ffffff;
   border-radius: 4px;
   width: 30px;
   height: 30px;
   .text_36 {
     line-height: 12px;
   }
 }
 .font_7 {
   font-size: 16px;
   font-family: Inter;
   line-height: 12px;
   color: #7e7e7e;
 }
 .font_3 {
   font-size: 20px;
   font-family: Inter;
   color: #7e7e7e;
 }
 .text_37 {
   margin-left: 20.5px;
   line-height: 2.5px;
 }
 .image_9 {
   margin-left: 18.5px;
 }
 }
 </style>