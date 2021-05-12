<template>
    <div class="sidebar">
        <h1 class="title"><span class="dev-style">Dev</span>challenges.io</h1>
    <div class="fake-nav">
        <ul class="p-0">
            <li class="fake-link">Colors</li>
            <li class="fake-link">Typography</li>
            <li class="fake-link">Spaces</li>
            <li class="fake-link active">Buttons</li>
            <li class="fake-link">Inputs</li>
            <li class="fake-link">Grid</li>
        </ul>
    </div>


    </div>
</template>

<script>

export default {
    name: 'home',
    data() {
        return {

        }
    }
}

</script>

<style scoped>
.sidebar {
    position: fixed;
    width: 237px;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #FAFBFD;
    margin: 0;
    padding: 0;
}

.title {
    font-weight: 600;
    font-size: 13px;
    margin-top: 48px;
    margin-left: 48px;
}

.dev-style {
    color: #F7542E;
}

.fake-nav {
    margin-top: 122px;
    margin-left: 48px;
}

.p-0 {
    padding: 0;
}

.fake-link {
    list-style: none;
    margin-bottom: 35px;
    color: #9E9E9E;
    font-size: 14px;
}

.active {
    color: #090F31;
    font-weight: 700;
}
</style>