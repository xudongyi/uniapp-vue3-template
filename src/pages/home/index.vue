<template>
    <view class="container">
        <view>
            <van-grid>
                <van-grid-item icon="photo-o" text="访客申请" />
                <van-grid-item icon="photo-o" text="办公申请" />
                <van-grid-item icon="photo-o" text="文字" />
                <van-grid-item icon="photo-o" text="文字" />
            </van-grid>
        </view>
        <view>
            <van-cell title="选择单个日期" :value="state.date" @click="onDisplay" />
            <van-calendar color="#035CAC" :show="state.show" @close="onClose" @confirm="onConfirm" />
        </view>
    </view>
</template>

<script lang="ts">
    import {onPageScroll, onLoad, onShow, onHide, onReachBottom} from '@dcloudio/uni-app'
    import {ref, getCurrentInstance, reactive, toRef, computed, defineComponent} from 'vue'
    import {AppActionTypes} from '@/store/modules/app/action-types'
    import {useStore, mapActions} from 'vuex'
    import {useMapState} from '@/hooks/useMapState'
    import {IMAGE_URL, APP_NAME} from '@/config/app'

    export default defineComponent({
        name: 'Vue3 File',
        components: {},
        setup() {
            const { proxy } = getCurrentInstance() as any
            const state = reactive({
                imageUrl: IMAGE_URL,
                showBg: false,
                display: 'block',
                navTop: 0,
                navHeight: 40,
                date: '',
                show: false,
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
                state.navTop = proxy.$StatusBar
                // #ifdef MP-WEIXIN
                state.navHeight = proxy.$CustomBar
                // #endif
            })

            const  onDisplay = ()=> {
                state.show = true
            }
            const onClose = ()=>{
                state.show = false
            }
            const formatDate = date=>{
                date = new Date(date);
                return `${date.getMonth() + 1}/${date.getDate()}`;
            }
            const onConfirm = event=>{
                state.show = false
                state.date = formatDate(event.detail)
            }
            return {
                state,
                onDisplay,
                onClose,
                formatDate,
                onConfirm

            }
        }

    })
</script>

<style lang="scss">
.container {

}
</style>
