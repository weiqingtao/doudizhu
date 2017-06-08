<template>
	<el-row style="margin-bottom: 18px">
			<el-col :span='1'>&nbsp;</el-col>
			<el-col :span='4'>
				<levelnav/>
			</el-col>
			<el-col :span='18'>
				<roomlist/>
			</el-col>
			<el-col :span='1'>&nbsp;</el-col>
	</el-row>
		
		
</template>
<script>
import Levelnav from './Levelnav'
import RoomList from './RoomList'
	export default {
  		components:{
  			levelnav:Levelnav,
  			roomlist:RoomList
  		}
	}
</script>