<template>
	<div>
		游戏大厅
	</div>
</template>
<script>
import {getRoomList} from '../../vuex/actions/HallAction'
import Levelnav from './Levelnav'
import RoomList from './RoomList'
	export default {
		mounted:function(){ 
       		//axios向服务器发请求,获取房间列表
       		getRoomList(this);
  		},
  		components:{
  			
  		}

	}
</script>