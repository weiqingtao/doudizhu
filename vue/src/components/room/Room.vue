<template>
	<div style='height:100%'>
		<roomhead/>
		<roomready ref='roomready' style='height: 100%'/>
	</div>
</template>
<script>
import RoomHead from './RoomHead'
import RoomReady from './RoomReady'
export default {
  mounted(){
  	let uobj = this.$route.query;
    let self = this;
  	let pomelo = window.pomelo;
      let host = "127.0.0.1";
      let port = "3010";
      function show() {
        pomelo.init({
          host: host,
          port: port,
          log: true
        }, function() {
        	pomelo.notify('connector.roomHandler.enterRoom',uobj);
        // pomelo.request("connector.entryHandler.entry", {uid:3,uname:'zhangsan'}, function(data) {
        //     alert(data.name);
        //   });
        	pomelo.on('enterRoom', function(seat){
              for(let i=0;i<3;i++){
                self.$refs.roomready.setSeat(i,'');
              }
              for(let key in seat){
                self.$refs.roomready.setSeat(key,seat[key].nicheng);
              }
              
            });
          //-----------------------------------------
          pomelo.on('fullRoom', function(data){
              alert('客满');
              self.$router.push('/hill');
            });
          //------------被动离开------------------
          pomelo.on('leave', function(data){
              alert(data);
              self.$router.push('/hill');
            });
        });
	}
	show();
  },
  components:{
  	roomhead:RoomHead,
  	roomready:RoomReady
  }
}
</script>