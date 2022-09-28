<template>
  <div
    class="hm-bg-card"
    v-show="!hidden"
    :style="{ 'background-image': `url('${backgroundImage}')` }"
  >
    <slot></slot>
  </div>
</template>

<script>
/**
 * 背景卡片
 */
export default {
  name: "HmBgCard",
  components: {},
  props: {
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "200",
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: "200",
    },
    /**
     * 圆角
     */
    borderRadius: {
      type: String,
      default: "8",
    },
    /**
     * 边框类型
     * @type Enum
     * @default none
     * @options ["none", "solid", "dotted", "dashed", "double", "groove", "ridge", "inset", "outset", "hidden"]
     */
    borderStyle: {
      type: String,
      default: "none",
    },
    /**
     * 边框宽度
     */
    borderWidth: {
      type: String,
      default: "0",
    },
    /**
     * 边框颜色
     * @type Color
     */
    borderColor: {
      type: String,
      default: "#fff",
    },
    /**
     * 对齐
     * @type Enum
     * @options ["left", "right", "center"]
     */
    textAlign: {
      type: String,
      default: "left",
    },
    /**
     * 内边距
     */
    padding: {
      type: String,
      default: "5",
    },
    /**
     * 水平阴影
     */
    boxShadowHShadow: {
      type: String,
      default: "0",
    },
    /**
     * 垂直阴影
     */
    boxShadowVShadow: {
      type: String,
      default: "2",
    },
    /**
     * 模糊距离
     */
    boxShadowBlur: {
      type: String,
      default: "12",
    },
    /**
     * 阴影大小
     */
    boxShadowSpread: {
      type: String,
      default: "0",
    },
    /**
     * 阴影颜色
     * @type Color
     */
    boxShadowColor: {
      type: String,
      default: "rgba(0,0,0,0.04)",
    },
    /**
     * 背景色
     * @type Color
     */
    backgroundColor: {
      type: String,
      default: "#ddd",
    },
    /**
     * 背景图片
     */
    backgroundImage: {
      type: String,
    },
    /**
     * 是否隐藏
     */
    hidden: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      cWidth: "200px",
      cHeight: "200px",
      cPadding: "5px",
      cTextAlign: "left",
      cBackgroundColor: "white",
      cBorderRadius: "8px",
      cBoxShadowHShadow: "0px",
      cBoxShadowVShadow: "2px",
      cBoxShadowBlur: "12px",
      cBoxShadowSpread: "0px",
      cBoxShadowColor: "rgba(0,0,0,0.04)",
      cBorderWidth: "0px",
      cBorderColor: "white",
      cBorderStyle: "none",
    };
  },
  watch: {
    width(value) {
      this.cWidth = this.getCssUnit(value);
    },
    height(value) {
      this.cHeight = this.getCssUnit(value);
    },
    padding(value) {
      this.cPadding = this.getCssUnit(value);
    },
    textAlign(value) {
      this.cTextAlign = value;
    },
    backgroundColor(value) {
      this.cBackgroundColor = value;
    },
    borderColor(value) {
      this.cBorderColor = value;
    },
    borderWidth(value) {
      this.cBorderWidth = this.getCssUnit(value);
    },
    borderStyle(value) {
      this.cBorderStyle = value;
    },
    borderRadius(value) {
      this.cBorderRadius = this.getCssUnit(value);
    },
    boxShadowHShadow(value) {
      this.cBoxShadowHShadow = this.getCssUnit(value);
    },
    boxShadowVShadow(value) {
      this.cBoxShadowVShadow = this.getCssUnit(value);
    },
    boxShadowBlur(value) {
      this.cBoxShadowBlur = this.getCssUnit(value);
    },
    boxShadowSpread(value) {
      this.cBoxShadowSpread = this.getCssUnit(value);
    },
    boxShadowColor(value) {
      this.cBoxShadowColor = value;
    },
  },
  computed: {},
  mounted() {
    this.cWidth = this.getCssUnit(this.width);
    this.cHeight = this.getCssUnit(this.height);
    this.cPadding = this.getCssUnit(this.padding);
    this.cTextAlign = this.textAlign;
    this.cBackgroundColor = this.backgroundColor;
    this.cBorderColor = this.borderColor;
    this.cBorderWidth = this.getCssUnit(this.borderWidth);
    this.cBorderStyle = this.borderStyle;
    this.cBorderRadius = this.getCssUnit(this.borderRadius);
    this.cBoxShadowHShadow = this.getCssUnit(this.boxShadowHShadow);
    this.cBoxShadowVShadow = this.getCssUnit(this.boxShadowVShadow);
    this.cBoxShadowBlur = this.getCssUnit(this.boxShadowBlur);
    this.cBoxShadowSpread = this.getCssUnit(this.boxShadowSpread);
    this.cBoxShadowColor = this.boxShadowColor;
  },
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
  },
};
</script>

<style scoped>
.hm-bg-card {
  /* display: inline-flex; */
  width: v-bind(cWidth);
  height: v-bind(cHeight);
  padding: v-bind(cPadding);
  text-align: v-bind(cTextAlign);
  background-color: v-bind(cBackgroundColor);
  border-radius: v-bind(cBorderRadius);
  box-shadow: v-bind(cBoxShadowHShadow) v-bind(cBoxShadowVShadow)
    v-bind(cBoxShadowBlur) v-bind(cBoxShadowSpread) v-bind(cBoxShadowColor);
  border-style: v-bind(cBorderStyle);
  border-width: v-bind(cBorderWidth);
  border-color: v-bind(cBorderColor);
}

.hm-bg-card /deep/ .sortable-list {
  display: block !important;
  text-align: v-bind(cTextAlign);
}
</style>
