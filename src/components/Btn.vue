<template>
        <button type="button" :class="[variant, color, disabledShadow, size]" v-if="!disabled">
            <template v-if="startIcon">
                <div class="flex-icon">
                    <slot name="startIcon">
                        <span class="material-icons">{{startIcon}}</span>
                    </slot>
                <p class="m-0 ml-3">
                    <slot></slot>
                </p>
                </div>
            </template>

            <template v-else-if="endIcon">
                <div class="flex-icon">
                    <p class="m-0 mr-3">
                        <slot></slot>
                    </p>
                    <slot name="endIcon">
                        <span class="material-icons">{{endIcon}}</span>
                    </slot>
                </div>
            </template>

            <template v-else>
                <slot></slot>
            </template>
        </button>
</template>

<script>

export default {
    name: 'btn',
    data() {
        return {
        }
    },
    props: ['variant', 'color', 'disabledShadow', 'startIcon', 'endIcon', 'size'],
}

</script>

<style>
.flex-icon {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0px;
}

.m-0 {
    margin: 0;
}

.ml-3 {
    margin-left: 3px;
}
.mr-3 {
    margin-right: 3px;
}
.material-icons {
    font-size: 16px !important;
}
</style>
