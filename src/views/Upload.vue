<script setup>
import { ref } from "vue"
import {
    addData,
} from '../firebase/api'

const samples = [
    "マテリアルボード",
    "物理ボタン",
    "ゴムボール",
    "プリミティブオブジェクト",
    "卓球",
    "ガズバーナー",
    "ミスト発射",
    "アーチェリー",
    "銃",
    "ハンマー",
    "フライパン",
    "剣"
]

const deviceRules = [
    v => !!v || "必須項目です",
    v => /http+.*:\/\/+.+/.test(v) || "URLを入力してください",
]

const formDatas = ref({
    sample: "",
    device: "",
    file: "",
    hmd: "",
    note: ""
})

// const onFileUploaded = (event) => {
//     formDatas.value.file = event.target.files[0]
//     formDatas.value.filename = formDatas.value.file.name
// }

const upload = async() => {
    const input =
        formDatas.value.sample
        && formDatas.value.device
        && formDatas.value.file
        && formDatas.value.hmd
    if (input) {
        addData(formDatas.value)
    }
}
</script>

<template>
    <v-container>
        <h2 class="my-4 py-4">リザルトを投稿</h2>
        <v-form class="my-4 py-4">
                <v-row>
                    <v-col cols="4">
                        <p>使用サンプル <span class="text-red">*</span></p>
                    </v-col>
                    <v-col>
                        <v-select
                            v-model="formDatas.sample"
                            label=""
                            :items="samples"
                            :rules="[v => !!v || '必須項目です']"
                            required
                        ></v-select>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="4">
                        <p>デバイス情報 <span class="text-red">*</span></p>
                    </v-col>
                    <v-col>
                        <v-text-field 
                            v-model="formDatas.device"
                            label="製品ページや論文などのURL"
                            :rules="deviceRules"
                            required
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="4">
                        <p>基準デバイス <span class="text-red">*</span></p>
                    </v-col>
                    <v-col>
                        <v-text-field
                            v-model="formDatas.hmd"
                            label="Oculas Quest2, HTC VIVE Pro etc..."
                            :rules="[v => !!v || '必須項目です']"
                            required
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="4">
                        <p>リザルトデータ <span class="text-red">*</span></p>
                    </v-col>
                    <v-col>
                        <v-file-input
                            v-model="formDatas.file"
                            accept=".csv"
                            label="csvファイル"
                            :rules="[v => !!v || '必須項目です']"
                            required
                        ></v-file-input>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="4">
                        <p>備考</p>
                    </v-col>
                    <v-col>
                        <v-textarea
                            v-model="formDatas.note"
                            label=""
                        ></v-textarea>
                    </v-col>
                </v-row>

                <v-row justify="center" class="my-4 py-4">
                    <v-btn
                        @click="upload"
                        elevation="2"
                        color="primary"
                    >アップロード</v-btn>
                </v-row>
        </v-form>
    </v-container>
</template>

<style scoped>
.text-red {
    color: red;
}
</style>