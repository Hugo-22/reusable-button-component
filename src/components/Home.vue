<template>
    <div>
        <sidebar></sidebar>

        <div class="content">
            <h2 class="title-btn">Button component</h2>
            
            <!-- DEFAULT -->
            <div class="col-2">
                <div>
                    <p> {{ btnDefault }} </p>
                    <btn>Default</btn>
                </div>
                
            </div>

            <!-- OUTLINE -->
            <div class="col-2">
                <div>
                    <p> {{ btnOutline }} </p>
                    <btn variant="outline">Default</btn>
                </div>
                
            </div>

            <!-- TEXT -->
            <div class="col-2">
                <div>
                    <p> {{ btnText }} </p>
                    <btn variant="text">Default</btn>
                </div>
                
            </div>

            <!-- DISABLED SHADOW -->
            <div>
                <div>
                    <p> {{ btnDisabledShadow }} </p>
                    <btn disabledShadow="disabledShadow">Default</btn>
                </div>
            </div>

            <!-- DISABLED -->
            <div class="col-2-bis">
                <div>
                    <p> {{ btnDisabled }} </p>
                    <btn disabled>Disabled</btn>
                </div>
                <div>
                    <p> {{ btnTextDisabled }} </p>
                    <btn variant="text" disabled>Disabled</btn>
                </div>
            </div>

            <!-- ICONS 1 _ 2 -->
            <div class="col-2-icons">
                <div>
                    <p> {{ btnIcon1 }} </p>
                    <btn color="primary" startIcon="autorenew">Default</btn>
                    
                </div>

                <div>
                    <p> {{ btnIcon2 }} </p>
                    <btn color="primary" endIcon="backup">Default</btn>
                    
                </div>
               
            </div>

            <!-- ICONS 3 _ 4 _ 5 -->
            <div class="col-3">
                <div>
                    <p> {{ btnIcon3 }} </p>
                    <btn color="secondary" startIcon="done_all">Default</btn>
                </div>

                <div>
                    <p> {{ btnIcon4 }} </p>
                    <btn color="danger" endIcon="favorite_border">Default</btn>
                </div>

                <div>
                    <p> {{ btnIcon5 }} </p>
                    <btn color="secondary" endIcon="visibility">Default</btn>
                </div>
               
            </div>

            <!-- SIZE -->
            <div class="col-3">
                <div>
                    <p> {{ btnSizeSM }} </p>
                    <btn color="primary" size="sm">Default</btn>
                </div>

                <div>
                    <p> {{ btnSizeMD }} </p>
                    <btn color="secondary" size="md">Default</btn>
                </div>

                <div>
                    <p> {{ btnSizeLG }} </p>
                    <btn color="danger" size="lg">Default</btn>
                </div>
               
            </div>

            <!-- COLOR -->
            <div class="col-4">
                <div>
                    <p> {{ btnColorDefault }} </p>
                    <btn color="default">Default</btn>
                </div>

                <div>
                    <p> {{ btnColorPrimary }} </p>
                    <btn color="primary">Primary</btn>
                </div>

                <div>
                    <p> {{ btnColorSecondary }} </p>
                    <btn color="secondary">Secondary</btn>
                </div>

                <div>
                    <p> {{ btnColorDanger }} </p>
                    <btn color="danger">Danger</btn>
                </div>
               
            </div>

        </div>
    </div>
</template>

<script>
import sidebar from '@/components/Sidebar'
import btn from '@/components/Btn'

export default {
    name: 'home',
    components: {
        sidebar,
        btn
    },
    data() {
        return {
            name: {
                default: 'Default',
                disabled: 'Disabled',
                secondary: 'Secondary',
                danger: 'Danger'
            },
            btnDefault: '<btn />',
            btnHoverFocus: '&:hover, &:focus',
            btnOutline: '<btn variant="outline" />',
            btnText: '<btn variant="text" />',
            btnDisabledShadow: '<btn disabledShadow />',
            btnDisabled: '<btn disabled />',
            btnTextDisabled: '<btn variant="text" disabled />',
            btnIcon1: '<btn startIcon="autorenew"  />',
            btnIcon2: '<btn endIcon="backup"  />',
            btnIcon3: '<btn startIcon="done_all"  />',
            btnIcon4: '<btn endIcon="favorite_border"  />',
            btnIcon5: '<btn endIcon="visibility"  />',
            btnSizeSM: '<btn size="sm"  />',
            btnSizeMD: '<btn size="md"  />',
            btnSizeLG: '<btn size="lg"  />',
            btnColorDefault: '<btn color="default"  />',
            btnColorPrimary: '<btn color="primary"  />',
            btnColorSecondary: '<btn color="secondary"  />',
            btnColorDanger: '<btn color="danger"  />',
        }
    }, 
}

</script>

<style src='../../public/css/btn.css'></style>
<style scoped>
.content {
    margin-left: 320px;
}

.title-btn {
    margin-top: 53px;
    font-weight: 500;
    font-size: 24px;
    color: #4F4F4F;
}

.col-2 {
    display: flex;
    justify-content: space-between;
    width: 332px;
}
.col-2-bis {
    display: flex;
    justify-content: space-between;
    width: 420px;
}

.col-2-icons {
    display: flex;
    justify-content: space-between;
    width: 500px;
}

.col-3 {
    display: flex;
    justify-content: space-between;
    width: 750px;
}

.col-4 {
    display: flex;
    justify-content: space-between;
    width: 750px;
}
.flex-between {
    display: flex;
    justify-content: space-between;
}

.flex-end {
    display: flex;
    align-items: flex-end;
}
</style>