<template>
<el-row>
<el-row style="text-align: center;margin-top: 10px;color: #58B7FF;font-size: 20px">
			&nbsp&nbsp欢迎来斗地主
		</el-row>
		<el-row style="text-align: center;margin-top: 10px;color: #58B7FF;font-size: 20px">
			&nbsp&nbsp注册
		</el-row>
		<el-col :span="5">&nbsp</el-col>
  		<el-col :span="14" style="margin-top: 20px">
  		 <el-form ref="form" name='zhuceForm' label-width="80px">
  					<el-form-item label="email">
    					<el-input type="input" placeholder="请输入EMAIL" name="email"></el-input>
 					 	</el-form-item>
  					<el-form-item label="密码" >
    					<el-input type="password" placeholder="请输入密码" name="pwd"></el-input>
  					</el-form-item>
  					<el-form-item label="确认密码" >
    					<el-input type="password" placeholder="请再次输入密码" name='repwd'></el-input>
  					</el-form-item>
            <el-form-item label="昵称">
              <el-input type="input" placeholder="请输入昵称" name='nicheng'></el-input>
            </el-form-item>
  					<el-form-item style="text-align: center;">
   				 		<el-button type="primary" @click='register'>注册</el-button>
   				 		<router-link to="/">
    					<el-button >返回登录</el-button>
    					</router-link>
  					</el-form-item>
					</el-form>

  		</el-col>
  		<el-col :span="5">&nbsp</el-col>
</el-row>
</template>
<script>
import {zhuce} from '../../vuex/actions/UserAction';
import {getZhuce} from '../../vuex/getters/UserGetter'
export default {
  data(){
    return {
      data:0
    }
  },
  methods:{
    register:function(e){
      zhuce(zhuceForm,this);
    }
  },
  computed:{
    data:getZhuce
  }
}
</script>
<style>
	.elInputClass{
		margin-bottom:15px;
	}
</style>