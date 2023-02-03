<script setup>
import { ref, reactive } from "vue"
import {
    loginWithGoogle,
    setResultsListener,
    deleteData
} from '../firebase/api'
import admins from '../firebase/.admins.js'

const loginUser = reactive({})
const isAdmin = ref(false)
const getUser = (user) => {
    loginUser.value = user
    admins.map(adminUid => {
        if (user.uid === adminUid) isAdmin.value = true
    })
}

const datas = ref([])
const headers = ref(['ID', '使用サンプル', 'デバイス情報', '基準デバイス', 'データ', '備考', '投稿日', '削除'])
const added = (data) => {
    datas.value.push(data)
}
const modified = () => {
}
const deleted = (id) => {
    datas.value = datas.value.filter((item) => item.id !== id)
}

setResultsListener(added, modified, deleted)

const clickDeleteBtn = (id, filename) => {
    if(!confirm(`${id}のデータを削除しますか？\n*この操作は取り消せません*`)) return
    deleteData(id, filename)
}
</script>

<template>
    <v-container>
        <h2 class="mt-4 pt-4">
            共通体験サンプル データ管理
        </h2>
        <p class="mb-4 pb-4">
            <span v-if="!Object.keys(loginUser).length">
                閲覧するには権限のあるGoogleアカウントでのログインが必要です
            </span>
            <span v-else>
                <span v-if="isAdmin">
                    {{ loginUser.value.email }}でログイン中
                </span>
                <span v-else style="color: red;">
                    ログインされたGoogleアカウントは閲覧権限がありません
                </span>
            </span>
        </p>
        <v-row v-if="!Object.keys(loginUser).length" justify="center" class="my-4 py-4">
            <v-btn @click="loginWithGoogle(getUser)" prepend-icon="mdi-google" color="primary" elevation="2">Googleでログイン</v-btn>
        </v-row>
        <v-row v-else-if="isAdmin" justify="center" class="my-4 py-4">
            <v-table>
                <thead>
                    <tr>
                        <th v-for="item in headers" :key="item">{{ item }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in datas" :key="item.id">
                        <td>{{ item.id }}</td>
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
                        <td>{{ new Date(item.timestamp * 1000) }}</td>
                        <td>
                            <v-btn @click="clickDeleteBtn(item.id, item.filename)" class="ma-2" variant="text" icon="mdi-delete" color="gray"></v-btn>
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </v-row>

        <v-row justify="center" class="my-4 py-4">
            <v-btn to="/" elevation="2" color="primary">トップへ戻る</v-btn>
        </v-row>
    </v-container>
</template>

<style scoped>

th, td {
    min-width: 140px;
}
</style>