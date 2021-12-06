<template>
	<div id = "map" :style ="{backgroundImage:'url(../img/backgrounds/' + background + '.png)'}">
		 <div class = "chat" id="chat" v-for="message in messageList" v-bind:key="message.messageList">
			<div class="message"> message.text </div>

		</div>
		<div class=" users" v-for="user in userList" v-bind:key="user.userlist" >
			<div class="user">{{user.name}}  </div>

		</div>
		<div class="input-chat">
			<textarea type="text" autofocus id="input-field" cols="3" rows="2"></textarea>
		</div>
		<div v-for="character in characters"
			v-bind:key="character.characters" 
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
export default {
	name: "App",
	data() {
		return {
            background: background,
            characters: [],
			characterlist : characterList,
			mainCharacter : mainCharacter,
			userList: [],
			messageList:[]
     	};
  	},
  	methods: {
		addCharacter() {
		this.characters.push({
			path: this.path,
			posX: this.posX = Math.random()*100,
			posY: this.posY = Math.random()*100
			})
		},
		addUser(){
			this.userList.push({
				name: this.name

			})
		},
		addMessage(text){
			this.messageList.push({
				text: text
			})
		}
    	
  	},
};
</script>