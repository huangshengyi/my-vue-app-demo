<template>
  <div class="jsplump-wrapper">
    <div id="diagramContainer">
      <div id="item_left" class="item">1</div>
      <div id="item_right" class="item" style="left: 300px; top: 100px">2</div>
    </div>
  </div>
</template>

<script>
import { jsPlumb } from 'jsplumb'
const firstInstance = jsPlumb.getInstance()

export default {
  mounted() {
    document.title = 'jsplump流程图'
    this.init()
  },
  methods: {
    init() {
      jsPlumb.ready(function() {
        // jsPlumb.setContainer('diagramContainer')

        // var common = {
        //   isSource: true,
        //   isTarget: true,
        //   connector: 'Bezier',
        //   // connector: ['Straight'],
        //   // maxConnectios: -1,
        //   endpoint: 'Dot',
        //   paintStyle: {
        //     fill: 'white',
        //     outlineStroke: 'blue',
        //     strokeWidth: 1
        //   },
        //   hoverPaintStyle: {
        //     outlineStroke: 'lightblue'
        //   },
        //   connectorStyle: {
        //     outlineStroke: 'green',
        //     strokeWidth: 1
        //   },
        //   connectorHoverStyle: {
        //     strokeWidth: 1
        //   }
        // }

        // jsPlumb.addEndpoint(
        //   'item_left',
        //   {
        //     anchors: ['Right']
        //   },
        //   common
        // )

        // jsPlumb.addEndpoint(
        //   'item_right',
        //   {
        //     anchor: 'Left'
        //   },
        //   common
        // )

        // jsPlumb.addEndpoint(
        //   'item_right',
        //   {
        //     anchor: 'Right'
        //   },
        //   common
        // )
        // jsPlumb.draggable('item_left')
        // jsPlumb.draggable('item_right')

        // 连接元素
        jsPlumb.connect({
          source: 'item_left',
          target: 'item_right',
          endpoint: 'Dot',
          connectorOverlays: [
            ['Arrow', {
              width: 10,
              length: 10,
              location: 1
            }],
            ['Label', {
              label: '<button class="delete-node-btn">X</button>',
              cssClass: '',
              labelStyle: {
                color: 'red'
              },
              events: {
                click: function(labelOverlay, originalEvent) {
                  console.log('click on label overlay for :' + labelOverlay.component)
                  console.log(labelOverlay)
                  console.log(originalEvent)
                }
              }
            }]
          ]
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.jsplump-wrapper {
  #diagramContainer {
    position: relative;
    padding: 20px;
    width: 80%;
    height: 400px;
    border: 1px solid gray;
  }
  .item {
    position: absolute;
    width: 100px;
    background: green;
    text-align: center;
    line-height: 100px;
    color: white;
    height: 100px;
  }
}
</style>
