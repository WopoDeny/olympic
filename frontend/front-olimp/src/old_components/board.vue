<template>
<table>
    <tr v-for="index in LeftColumns" :key="index" >
        <td >
            <div class="drop-zone" @drop="onDrop($event,'left')"> 
                <div v-for="item in isLeft" :key="item.value" class="drag-el" draggable @dragstart="onDrag($event, item)">{{item.value}}</div>
            </div>
        </td>
        <td>
            <div class="drop-zone" @drop="onDrop($event,'right')"> 
                <div v-for="item in aviableLeft" :key="item.value" class="drag-el" draggable @dragstart="onDrag($event, item)">{{item.value}}</div>
            </div>
        </td>
    </tr>
</table>

</template>
<script>

export default {
    name: "board",
    props: ['answers'], //answers - is Array of objects {id: , value:  , column: left||right}
    computed: {
        isLeft(){
            return this.CurrentAnswers.filter((answer)=> answer.column == 'left')
        },
        isRight(){
            return this.CurrentAnswers.filter((answer)=> answer.column == 'right')
        }
    },
    data(){
        return {
            CurrentAnswers: this.props.answers
        }
    },

    methods:{
        startDrag(event, item){
            event.dataTransfer.dropEffect = 'move'
            event.dataTransfer.effectAllowed = 'move'
            event.dataTransfer.setData('itemID', item.id)
        },
        ondrop(event, column){
            const itemID = event.dataTransfer.getData('itemID')
            const item = this.CurrentAnswers.find((item)=>item.id == itemID)
            item.column = column
        }
    }
}
</script>
<style>
.drop-zone{
    background-color: #eee;
    margin-bottom: 10px;
    padding: 6px;
}

.drag-el{
    background-color: #fff;
    margin-bottom: 10px;
    padding: 5px;

}
</style>
