<script setup>
import { ref } from "vue"
import {
  setResultsListener,
} from '../firebase/api'

const headers = ref(['使用サンプル', 'デバイス情報', '基準デバイス', 'データ', '備考'])

const datas = ref([])

const added = (data) => {
  datas.value.push(data)
}
const modified = () => {
}
const deleted = () => {
}

setResultsListener(added, modified, deleted)
</script>

<template>
  <div>
    <v-img
      src="@/assets/CommonExperienceSample.png"
      height="100vh"
      cover
      ></v-img>

    <div class="title-wrapper">
      <v-container>
        <v-row justify="center" class="my-2 py-2">
          <h1>Common Experience Sample</h1>
        </v-row>
        <v-row justify="center" class="my-2 py-2">
          <p>VR体験に触感覚を与えるデバイスの新しい標準評価基盤</p>
        </v-row>
        <v-row justify="center" class="my-4 py-4">
          <v-btn
            href="https://github.com/open-video-game-library/CommonExperienceSample"
            elevation="2"
            color="primary"
          >はじめる</v-btn>
        </v-row>
      </v-container>
    </div>

    <v-btn to="/admin" color="grey" variant="text" icon="mdi-cog"
      style="position: absolute; top: 8px; right: 8px;"></v-btn>

    <v-container>
      <div class="my-4 py-4">
        <h2>リザルト</h2>
        <p>Common Experience Sampleを使用した研究の実験結果一覧</p>
      </div>

      <v-table class="my-4 py-4">
        <thead>
          <tr>
            <th v-for="item in headers" :key="item">{{ item }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in datas" :key="item.id">
            <td>{{ item.sample }}</td>
            <td>
              <a :href="item.device" target="_blank" rel="noreferrer">
                {{ item.device.substr(0,16) }}...
              </a>
            </td>
            <td>{{ item.hmd }}</td>
            <td>
              <a :href="item.downloadURL[0]" type="text/csv">
                {{ item.filename[0] }}
              </a><br />
              <a v-if="item.filename[1]" :href="item.downloadURL[1]" type="text/csv">
                {{ item.filename[1] }}
              </a>
            </td>
            <td>{{ item.note }}</td>
          </tr>
        </tbody>
      </v-table>

      <v-row justify="center" class="my-4 py-4">
        <v-btn to="/upload" elevation="2" color="primary">リザルトを投稿する</v-btn>
      </v-row>

    </v-container>
  </div>
</template>

<style scoped>
.title-wrapper {
  position: absolute;
  top: 0;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  display: flex;
  color: white;
  width: 100vw;
  height: 100vh;
}

th, td {
  min-width: 140px;
}
</style>