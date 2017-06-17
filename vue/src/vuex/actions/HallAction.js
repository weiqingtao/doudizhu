import {axGet} from '../../common/HttpBean'
import userStore from '../stores/UserStore'

export function getRoomList(thisa){
		axGet('/api/hall/getRoomList',{},function(res){
			//alert(res.data);
			thisa.roomList=res.data;
			},function(err){
				alert(err);
		});
};

export function newRoom(formObj,thisa){
		axGet('/api/hall/newroom?'+formObj,{},function(res){
			if(res.data.id){
				//跳进
				//thisa.$router.push('/room');
				thisa.$router.push({ path: '/room', query:res.data});
			}
			},function(err){
				alert(err);
		});
};

export function enterRoom(room,thisa){
		let msg = userStore.state.loginbean;
		msg.room = room;
		thisa.$router.push({ path: '/room', query:msg});
			
};

