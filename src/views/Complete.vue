<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <v-container>

    <h2 class="my-4 py-4">以下の内容で登録しました</h2>

    <div class="my-4 py-4">
      <v-row>
        <v-col cols="4">使用サンプル</v-col>
        <v-col>{{ route.query.sample }}</v-col>
      </v-row>

      <v-row>
        <v-col cols="4">デバイス情報</v-col>
        <v-col><a :href="route.query.device">{{ route.query.device }}</a></v-col>
      </v-row>

      <v-row>
        <v-col cols="4">基準デバイス</v-col>
        <v-col>{{ route.query.hmd }}</v-col>
      </v-row>

      <v-row>
        <v-col cols="4">リザルトデータ</v-col>
        <v-col>
          <p>{{ route.query.filename[0] }}</p>
          <p v-if="route.query.filename[1]">{{ route.query.filename[1] }}</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="4">備考</v-col>
        <v-col>{{ $route.query.note }}</v-col>
      </v-row>
      
    </div>
  
  <v-row justify="center" class="my-4 py-4">
    <v-btn to="/" elevation="2" color="primary">トップへ戻る</v-btn>
  </v-row>
  </v-container>
</template>
