<template>
    <div class="markov_demo">
        <button v-on:click="markovDemo">            
        </button>
        {{ output }}
    </div>
</template>

<script>

    export default {
        data:function(){
            return{
                output: ""
            }
        },
        methods:{
            markovDemo(){
                var spawn = require("child_process").spawn;
                console.log("this is spawn : ");
                console.log(spawn);
                
                var pa = spawn('python',["./test.py"]);
                pa.stdout.on('data', function(data) {
                    this.output = data.toString('utf8');
                });

            }
        },
        computed:{
        }
    }

    var myPythonScriptPath = 'test.py';

    var uint8arrayToString = function(data){
        return String.fromCharCode.apply(null, data);
    };

    function tester(req, res){
        console.log(req);
        console.log("inside tester function");
    }
    console.log("outside functions");

    //callName(['a', 'b'], 'c');

    tester('hello', 'sup');


    // Save code as start.js

</script>

<style lang="scss">

button{
    color:blue;
    width:100px;
    height:100px;
}

    .markov_demo {

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
