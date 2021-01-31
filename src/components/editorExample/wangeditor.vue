<template>
  <div class="wangeditor-container">
    <h3>wangeditor富文本编辑器</h3>
    <!-- <div ref="editor" class="my-text-edit" @click="handleGetCurSortPosition"></div> -->
    <div ref="editor" class="my-text-edit"></div>

    <div class="modal-selected-filter" v-show="showModal">
      <ul>
        <li @click="handleSelectedText(item)" v-for="item of ['文本1', '文本2', '文本3']" :key="item">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import wangeditor from 'wangeditor'
import { getCursortPosition } from 'utils/dom'

export default {
  data() {
    return {
      showModal: false,
      editor: null,
      editorText: '',
      form: {
        content: ''
      }
    }
  },
  mounted() {
    document.title = 'wangeditor富文本编辑器'
    this.setEditor()
    this.editor.txt.html(this.editorText)
  },
  methods: {
    handleGetCurSortPosition(e) {
      let posVal = getCursortPosition(e)
      console.log('打印点击的光标位置：', posVal)
    },
    handleSelectedText(text) {
      let insertContent = `<span style="color: red">{{我是变量${text}}}</span>`
      this.editor.cmd.do('insertHTML', insertContent)
      let htmlText = this.editor.txt.html()
      let newContent = htmlText.replace(new RegExp(`(.*)@(<span style="(.*)">{{我是变量${text}}}<\/span>)(.*)`, 'g'), '$1$2$4')
      newContent = newContent.replace(new RegExp(`(.*)@(</span><span style="(.*)">{{我是变量${text}}}<\/span>)(.*)`, 'g'), '$1$2$4')
      console.log('输出新内容：', newContent)
      this.editor.txt.html('')
      this.editor.txt.append(newContent)
      console.log('选取所在的DOM：', this.editor.selection.getSelectionContainerElem().elems[0])
      this.showModal = false
    },
    setEditor() {
      this.editor = new wangeditor(this.$refs.editor)
      this.editor.config.uploadImgShowBase64 = false // base 64 存储图片
      this.editor.config.showLinkImg = false
      this.editor.config.uploadImgServer = 'http://otp.cdinfotech.top/file/upload_images' // 配置服务器端地址
      this.editor.config.uploadImgHeaders = {} // 自定义 header
      this.editor.config.uploadFileName = 'file' // 后端接受上传文件的参数名
      this.editor.config.uploadImgMaxSize = 2 * 1024 * 1024 // 将图片大小限制为 2M
      this.editor.config.uploadImgMaxLength = 6 // 限制一次最多上传 3 张图片
      this.editor.config.uploadImgTimeout = 3 * 60 * 1000 // 设置超时时间

      // 配置菜单
      this.editor.config.menus = [
        'head', // 标题
        'bold', // 粗体
        'fontSize', // 字号
        'fontName', // 字体
        'italic', // 斜体
        'underline', // 下划线
        'strikeThrough', // 删除线
        'indent', // 缩进
        'lineHeight', // 行高
        'foreColor', // 文字颜色
        'backColor', // 背景颜色
        'link', // 插入链接
        'list', // 列表
        'justify', // 对齐方式
        'quote', // 引用
        // 'emoticon', // 表情
        'image', // 插入图片
        'video', // 视频
        'table', // 表格
        'code', // 代码区
        'splitLine', // 分割线
        'undo', // 撤销
        'redo', // 重复
        'fullscreen' // 全屏
      ];

      this.editor.config.uploadImgHooks = {
        before: function(xhr, editor, files) {
          console.log(files)
          // 图片上传之前触发
          // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件
          // 如果返回的结果是 {prevent: true, msg: 'xxxx'} 则表示用户放弃上传
          // return {
          //     prevent: true,
          //     msg: '放弃上传'
          // }
          // alert('前奏')
        },
        fail: (xhr, editor, result) => {
          // 插入图片失败回调
        },
        success: (xhr, editor, result) => {
          // 图片上传成功回调
        },
        timeout: (xhr, editor) => {
          // 网络超时的回调
        },
        error: (xhr, editor) => {
          // 图片上传错误的回调
        },
        customInsert: (insertImg, result, editor) => {
          // 图片上传成功，插入图片的回调
          // result为上传图片成功的时候返回的数据，这里我打印了一下发现后台返回的是data：[{url:"路径的形式"},...]
          // console.log(result.data[0].url)
          // insertImg()为插入图片的函数
          // 循环插入图片
          // for (let i = 0; i < 1; i++) {
          // console.log(result)
          let url = 'http://otp.cdinfotech.top' + result.url
          insertImg(url)
          // }
        }
      }

      // 失焦触发
      this.editor.config.onblur = function (newHtml, a, b) {
          console.log('onblur:', newHtml, a, b) // 获取最新的 html 内容
      }

      // 聚焦触发
      this.editor.config.onfocus = function (newHtml, a, b) {
          console.log('onfocus:', newHtml, a, b) // 获取最新的 html 内容
      }

      // 内容变化触发
      this.editor.config.onchange = (html, a, b) => {
        // 在光标位置插入文字 editor.cmd.do('insertHTML', '<p>...</p>')
        if (!/(.*)(>@)(.*)/g.test(html) && html.indexOf('@') > -1) {
          this.showModal = true
          setTimeout(() => {
            // this.editor.cmd.do('insertHTML', '<span style="color: red">@我是变量</span>')
            // let textVal = this.editor.txt.text()
            // console.log('获取文本内容：', textVal)
            // this.editor.txt.html(textVal)
            // console.log('获取组合后的内容：', this.editor.txt.text(), this.editor.txt.html())
          }, 200)
        }
        console.log('onchange:', html, a, b)
        this.form.content = html
      }

      // 创建富文本编辑器
      this.editor.create()
    },
  }
}
</script>

<style lang="scss">
.wangeditor-container {
  .my-text-edit {
    text-align: left;
  }
  .modal-selected-filter {
    position: fixed;
    top: 30px;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    z-index: 10002;
    width: 380px;
    height: 280px;
    color: blue;
    cursor: pointer;
    background: rgba($color: #e2a9a9, $alpha: 0.6);
    &:hover {
      color: brown;
    }
  }
}
</style>