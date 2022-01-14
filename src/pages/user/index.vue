<template>
    <view class="container">
        这是一个模板页面
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
            const state = reactive({})
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
