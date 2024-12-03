<template>
  <div class="flex-col justify-start page">
    <div class="flex-row section">
      <div class="flex-row items-baseline self-start group">
        <span class="font">Message</span>
        <span class="ml-20 font text_2">Position</span>
      </div>
      <div class="flex-row self-center ml-41">
        <span class="self-start font text">Enterprise</span>
        <img
          class="shrink-0 self-center image ml-25"
          src="https://ide.code.fun/api/image?token=6722d94ec471750012dd9599&name=d88541b92244517c26ff99b4be957132.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="scss">
  .ml-41 {
    margin-left: 41px;
  }
  .ml-25 {
    margin-left: 25px;
  }
  .page {
    padding-bottom: 964px;
    background-color: #eadbd7;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
    .section {
      padding: 5px 42px 12px;
      background-color: #212328;
      .group {
        margin-top: 14px;
        .text_2 {
          line-height: 23px;
        }
      }
      .font {
        font-size: 30px;
        font-family: Inter;
        line-height: 28.5px;
        font-weight: 600;
        color: #ffffff;
      }
      .text {
        margin-top: 14px;
        line-height: 29px;
      }
      .image {
        width: 126px;
        height: 36px;
      }
    }
  }
</style>