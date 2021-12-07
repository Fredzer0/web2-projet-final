<template>
	<div id = "map" :style ="{backgroundImage:'url(../img/backgrounds/' + backGround + '.png)'}">
		<div id = "text-chat">
			<div type ="text" class = "chat" id="chat" v-for="message in messageList" v-bind:key="message.messageList">
				<div class="chat">{{message.message}}</div>

			</div>
			<div class=" users" v-for="user in userList" v-bind:key="user.userlist" >
				<div class="user">{{user}}  </div>

			</div>
		</div>
		<div class="input-chat">
			<textarea type="text" autofocus id="input-field"></textarea>
		</div>
		<div v-for="character in charaList"
			v-bind:key="character.charaList" 
			:src="character.path" 
			class="character"
			:style="{left:character.posX, top: character.posY}"
		>

		</div>
		
	</div>
	
</template>

<script>
	import {characterList} from './page-chat.js'
	import {background} from './page-chat.js'
	import {mainCharacter} from './page-chat.js'
	import {nouveauMessage} from './page-chat.js'
	import {membre} from './page-chat.js'
	export default {
		name: "App",
		data() {
			return {
				backGround: background,
				charaList : characterList,
				mainCharacter : mainCharacter,
				userList : membre,
				messagelist: []
			};
		},
		methods: {
			addMessage(text){
				this.messagelist.push({
					message: nouveauMessage
				})
				this.nouveauMessage = "";	
			},
			attack(victime){
				this.character(indexOf(charaList), int(mainCharacter));
				this.character.top = victime.top;
				this.character.left = victime.left + 10;
				//slap 
			}
			
		},
	};
</script>