<template>
  <div class="ckeditor5-build-classic-wrapper">
    ckeditor5-build-classic经典编辑富文本编辑器
    <div id="editor" ref="editor">
      <p>Here goes the initial content of the editor.</p>
    </div>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
  mounted() {
    this.initEditor()
  },
  methods: {
    initEditor() {
      ClassicEditor
      .create(this.$refs.editor)
      .then(editor => {
          console.log(editor)
      })
      .catch(error => {
          console.error(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.ckeditor5-build-classic-wrapper {
  background: #eee;
}
</style>