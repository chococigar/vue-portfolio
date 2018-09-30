<template>
    <div class="Cv">

    </div>
</template>

<script>
    export default {
        data:function(){
            return{
            }
        },
        methods:{
        },
        computed:{
        }
    }

    var myPythonScriptPath = 'test.py';

    var uint8arrayToString = function(data){
    return String.fromCharCode.apply(null, data);
    };


</script>

<style lang="scss">

    .Cv {

        width:400px;
        height:400px;
        border: 1px solid;
        margin:0 auto;
        margin-top:30px;
    }
    .a{
    	color:black;
    	text-decoration: none;
    }

</style>
