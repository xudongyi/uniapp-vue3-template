<template>
    <view class="container">
        <van-cell-group>
            <van-field
                    :value="state.form.passwordusername"
                    required
                    clearable
                    label="用户名"
                    icon="question-o"
                    placeholder="请输入用户名"
            />

            <van-field
                    :value="state.form.password"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    required
                    :border="false"
            />
        </van-cell-group>
    </view>
</template>

<script lang="ts">
    import {onLoad, onShow, onHide, onReachBottom} from '@dcloudio/uni-app'
    import {ref, getCurrentInstance, reactive, toRef, computed, defineComponent} from 'vue'
    import {AppActionTypes} from '@/store/modules/app/action-types'
    import {useStore, mapActions} from 'vuex'
    import {useMapState} from '@/hooks/useMapState'
    import {IMAGE_URL, APP_NAME} from '@/config/app'

    export default defineComponent({
        name: 'Vue3 File',
        components: {},
        setup() {
            const state = reactive({
                form:{}
            })
            const store = useStore()
            onShow(() => {
                console.log('onShow')
            })
            onHide(() => {
                console.log('onHide')
            })
            onLoad(() => {
                console.log('onLoad')
            })
            return {
                state
            }
        }

    })
</script>

<style lang="scss">


</style>
