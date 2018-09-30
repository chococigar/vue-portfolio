<template>
    <div>
    	<div class="works">
	    	<router-view></router-view>
	    	<p> These are my works, ordered in no particular order.</p>
	    	<p>
	    	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
	    	</p>
	    </div>
    	<hr>
        <div class="works">	
	    	Sort by: 
		    <masonry class="categories" :cols="{default: 5,900:4, 700: 3,500:2,300:1}" :gutter="0">
		 		<div v-for="(tag, index) in tags"
		 		class="tag"
		 		v-on:click="tagSelected(tag)">
		 			<span v-if="activeClass===tag" class="box_selected"></span>	
		            <span v-else class="box"></span>
		           	
		            <span class="name"> {{ tag }}</span>
		        </div>
		    </masonry>
		</div>


	    <masonry class="projects" :cols="{default: 5,1250:4, 1000: 3,500:2,200:1}" :gutter="0">
	 		<div v-for="(item, index) in items" 

	 			v-if="activeClass==='All' || item.class.includes(activeClass)"
	            :key="index"
	            :ref="'item_${index}'"
	            @mouseover="hoverCard(index)"
	            @mouseout="hoverCard(-1)"
	            class="project"
	            >
		            <router-link :to="item.detail">
		                <img class="project_img" :src='item.img' >
		                <div class="project_overlay">
		                	{{ item.name }} 
		                </div>
		            </router-link>
	        </div>
	    </masonry>
    </div>
</template>

<script>

	export default {
		data:function(){
			return{
				items: [{
		            name: 'Markov BTS',
		            class: ['Deep Learning', "Bangtan Boys"],
		            client: 'Class project',
		            location: 'Daejeon, Korea',
		            period: '2018.03 - 2018.06',
		            img: "/src/assets/img/dev_misc/markov.png",
		            detail: "/works/markov_bts",
		            type: 'small'
		        }, {
		            name: 'Biziduk 비지덕',
		            class: ['Web', 'Bangtan Boys'],
		            client: 'Class project',
		            location: 'Daejeon, Korea',
		            period: '2018.03 - 2018.06',
		            img: "/src/assets/img/bzduck/2_onboarding.png",
		            detail: "",
		            type: 'small'
		        }, {
		            name: 'Moody',
		            class: ['Web', 'Bangtan Boys', 'Design'],
		            client: 'Class project',
		            location: 'Daejeon, Korea',
		            period: '2017.09 - 2017.12',
		            img: "/src/assets/img/moody/plot.png",
		            detail: "",
		            type: 'small'
		        }, {
		            name: 'Detecting Personality Unobtrusively from Users’ Online and Offline Workplace Behaviors',
		            class: ['Research'],
		            client: 'research @ KIXLAB',
		            location: 'Daejeon, Korea',
		            period: '2018.01 - 2018.08',
		            img: "/src/assets/img/publication/CHI_LBW18.png",
		            detail: "",
		            type: 'large'
		        }, {
		            name: 'MINT',
		            class: ['Web', 'Data Visualization'],
		            client: 'GS SHOP Innolab',
		            location: 'Seoul, Korea',
		            period: '2017.06 - 2018.08',
		            img: "/src/assets/img/mint/1_chart.png",
		            detail: "",
		            type: 'large'
		        }, {
		            name: 'InVideo',
		            class: ['Web', 'Deep Learning'],
		            client: 'project',
		            location: 'UCSD, San Diego, USA',
		            period: '2018.07 - 2017.08',
		            img: "/src/assets/img/invideo/1_pose.png",
		            detail: "/projects/pajuchurch",
		            type: 'small'
		        }, {
		            name: 'KAORI Poster',
		            class: ['Poster', 'Design', 'Too much'],
		            client: 'Chanou Manu',
		            location: 'Seoul, Korea',
		            period: '2017.01 - 2017.08',
		            img: "/src/assets/img/poster/kaori_f.jpg",
		            detail: "/projects/pajuchurch",
		            type: 'large'
		        },
		        {
		            name: '2017 coworkers',
		            class: ['Illustration'],
		            client: 'Chanou Manu',
		            location: 'Seoul, Korea',
		            period: '2017.01 - 2017.08',
		            img: "/src/assets/img/illustration/2017_coworkers.jpg",
		            detail: "/projects/pajuchurch",
		            type: 'large'
		        },
		        {
		            name: 'Herald poster',
		            class: ['Illustration', 'Poster', 'Design'],
		            client: 'Chanou Manu',
		            location: 'Seoul, Korea',
		            period: '2017.01 - 2017.08',
		            img: "/src/assets/img/poster/herald.jpg",
		            detail: "/projects/pajuchurch",
		            type: 'large'
		        },
		        {
		            name: 'Herald cartoon: Kim Jung Un',
		            class: ['Illustration', 'Cartoon'],
		            client: 'Chanou Manu',
		            location: 'Seoul, Korea',
		            period: '2017.01 - 2017.08',
		            img: "/src/assets/img/illustration/herald_cartoon_kimjungun.jpg",
		            detail: "/projects/pajuchurch",
		            type: 'large'
		        },
		        {
		            name: 'Herald cartoon: While loop',
		            class: ['Illustration', 'Cartoon'],
		            client: 'Chanou Manu',
		            location: 'Seoul, Korea',
		            period: '2017.01 - 2017.08',
		            img: "/src/assets/img/illustration/herald_cartoon_while_loop.png",
		            detail: "/projects/pajuchurch",
		            type: 'large'
		        },
		        {
		            name: 'KAORI t-shirt',
		            class: ['Design'],
		            client: 'Chanou Manu',
		            location: 'Seoul, Korea',
		            period: '2017.01 - 2017.08',
		            img: "/src/assets/img/design_misc/kaori_tshirt.png",
		            detail: "/projects/pajuchurch",
		            type: 'large'
		        },
		        {
		            name: 'elice quiz',
		            class: ['Illustration'],
		            client: 'Chanou Manu',
		            location: 'Seoul, Korea',
		            period: '2017.01 - 2017.08',
		            img: "/src/assets/img/illustration/elice_quiz.png",
		            detail: "/projects/pajuchurch",
		            type: 'large'
		        }
       			],
				tags:[
					'All', 
					'Deep Learning',
					'Research',
					'Web',
					'Data Visualization',
					'Exhibitions',
					'Mobile',
					'Bangtan Boys',
					'Writing',
					'Design',
					'Poster',
					'Liked',
					'Cartoon',
					'Painting',
					'Too much',
					'Shower thoughts',
					'Travel',
					'Photos',
					'Gif',
					'Illustration'
				],
				route: this.$route.path,
				activeClass: "All"
			}
		},
		methods:{
			tagSelected(tagName){
				this.activeClass = tagName;
			},
	        hoverCard(selectedIndex){
	            this.selectedCard = selectedIndex
	        },
	        isSelected(cardIndex){
	            return this.selectedCard === cardIndex
	        }
		},
		computed:{

		},

	}
</script>


<style lang="scss">

body{
}
hr{
	display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #000;

    padding: 0;
}
p{
	font-size:15px;
}

.tag:hover{
	cursor: pointer;
}
.tag:click{
}

.works{
	padding-left:10px;

}
a{
	color:#000;
	text-decoration: none;
}
span{
    display: inline-block; 
}
span.box{
	width:12px;
	height:12px;
	border: 1px solid #000;
}
span.box_selected:before{
	content:"";
	position:absolute;
	border-top:1px solid black;
  	width:17px;
  	transform:  translate(12.5px) rotate(135deg);
  	transform-origin: 0% 0%;
}
span.box_selected{
	width:12px;
	height:12px;
	border: 1px solid #000;
}
span.box_selected:after{
	content:"";
	position:absolute;
	border-top:1px solid black;
  	width:17px;
  	transform: rotate(45deg);
  	transform-origin: 0% 0%;
}



.project {
  position:relative;
  overflow:hidden;
}

.project_img{
    vertical-align:top;
    object-fit: cover;
    width: 100%;
    height: 100%;
   	transition: transform 2s;
}

.project_overlay {
  position:absolute;
  top:0px;
  transition: transform 2s;
  width:100%;
  height:100%;
  overflow:hidden;
  opacity:0;

}

.project:hover{
	.project_overlay {
		background:black;
		opacity:0.6;
		color:white;
	}
		.project_img{
	    width: 100%;
		transform:scale(1.2);
		color:white;
	}
}



</style>
