<template>
  <div>
    <div class="title">TEST2</div>
    <div class="items">
      <div class="item">
        <div class="name">Access token:</div>
        <div class="value">{{ access_token }}</div>
      </div>
      <div class="item">
        <div class="name">Vue.js:</div>
        <div class="value">{{ vue }}</div>
      </div>
      <div class="item">
        <div class="name">Electron:</div>
        <div class="value">{{ electron }}</div>
      </div>
      <div class="item">
        <div class="name">Node:</div>
        <div class="value">{{ node }}</div>
      </div>
      <div class="item">
        <div class="name">Platform:</div>
        <div class="value">{{ platform }}</div>
      </div>
      <div class="item">
        <div class="name">Modules:</div>
        <div class="value">
            <span v-for="module in modules">
              {{ module.name }}
              <br/>
            </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { remote } from 'electron'
  export default {
    data () {
      return {
        access_token: remote.getGlobal('cookies').get('test'),
        electron: process.versions['atom-shell'],
        name: window.path,
        node: process.versions.node,
        path: '/',
        platform: require('os').platform(),
        vue: require('vue/package.json').version,
        modules: remote.getGlobal('initializedModules')
      }
    }
  }
</script>

<style scoped>
  .title {
    color: #888;
    font-size: 18px;
    font-weight: initial;
    letter-spacing: .25px;
    margin-top: 10px;
  }

  .items { margin-top: 8px; }

  .item {
    display: flex;
    margin-bottom: 6px;
  }

  .item .name {
    color: #6a6a6a;
    margin-right: 6px;
  }

  .item .value {
    color: #35495e;
    font-weight: bold;
  }
</style>
