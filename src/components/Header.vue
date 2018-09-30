<template>
	<div class="header">
		<p class="header_top"> Jiyoun Ha </p>
 		<ul>
			<masonry :cols="{default: 5,800:1}" :gutter="0">
            <li v-for="(tag, index) in header" 
            class="nav_list"> 
            	<router-link 
	            	class="nav" 
	            	:to="tag.route"
	            	@click.native="route=tag.name"
	            	v-bind:class="{nav_selected : tag.name==route}"

	            	>{{ tag.name }}
            	</router-link>
            </li>
      		</masonry>
        </ul>
	</div>
</template>


<script>
	export default {
		data:function(){
			return{
				route: this.$route.path,
				header: [
					{
						name: "Works",
						route: "/"
					},
										{
						name: "Curriculum Vitae",
						route: "/cv"
					},
										{
						name: "Logs",
						route: "/logs"
					},
										{
						name: "Beta",
						route: "/beta"
					},
										{
						name: "Contact",
						route: "/contact"
					}
				],
				route: 'Works'
			}
		},
		methods:{
			updateNav(nav){
				this.route = nav;
			}

		},
		computed:{

		}
	}
</script>


<style lang="scss">

body{
	font-family: 'Relative-book';
}

@media all and (max-width:800px) //800px for tablets and phones.
{
    .nav
    {
        display: block; 
        float: none; 
        width: 100% !important;
    }
    .nav_selected{
		height:24px;
		background:black;
		//border-bottom: 1px solid #FFF;
}
}
ul{
	margin:0;
	list-style: none;
    padding-left: 12px;
    max-width:900px;

}

.header{
	border-bottom: 1px solid;
	z-index:-99;
}
.header_top{
	margin: 7px 10px 21px;
}

.nav_list{
	display:flex;
	-ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    width: 100%;
    height: 29px;
    list-style-type: none;
}
.nav{
    display: table;
    width: 190px;
    height: 100%;
    padding: 5px 0 0 0;
    text-align: center;
    cursor: pointer;
    border: 1px solid #000;
    border-bottom:none;
    color:black;
    text-decoration: none;
    margin-right:8px;
}
.nav:hover{
	background:black;
	color:white;
}
.nav_selected{
	height:24px;
	background:white;
	//border-bottom: 1px solid #FFF;
}

</style>

