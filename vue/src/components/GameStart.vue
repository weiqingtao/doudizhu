<template>
	<div>
		<el-row style="text-align: center;margin-top: 10px;color: #58B7FF;font-size: 20px">
			&nbsp&nbsp欢迎来斗地主
		</el-row>
		<el-row style="text-align: center;margin-top: 10px;color: #58B7FF;font-size: 20px">
			&nbsp&nbsp登录
		</el-row>
		<el-row>
		<el-col :span="5">&nbsp</el-col>
  		<el-col :span="14" style="margin-top: 20px">
  					 <el-form ref="form" name='loginForm' label-width="80px">
  					<el-form-item label="email">
    					<el-input type="input" placeholder="请输入EMAIL" name="email"></el-input>
 					 	</el-form-item>
  					<el-form-item label="密码" >
    					<el-input type="password" placeholder="请输入密码" name="pwd"></el-input>
  					</el-form-item>
  					
  					<el-form-item>
   				 		<el-button type="primary" @click='login'>登录</el-button>
   				 		<router-link to="/register">
    					<el-button >注册</el-button>
    					</router-link>
  					</el-form-item>
					</el-form>

  		</el-col>
  		<el-col :span="5">&nbsp</el-col>





</el-row>
	</div>
</template>
<script>
import {login} from '../vuex/actions/UserAction';

	export default {
	  data () {
	    return {
	      
	    }
	  },
	  methods:{
	  	login:function(e){
	  		login(loginForm,this);
	  	}
	  }
	}
</script>