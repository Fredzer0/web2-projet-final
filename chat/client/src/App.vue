<template>
	<div id="notes">
		<div id="message-form">
      		<div>
        		<input type="text" placeholder="Sujet de la note" v-model="subject" />
      		</div>
      	<div>
        	<textarea placeholder="Contenu de la note" v-model="content"></textarea>
    	</div>
    	<div>
	    	<button @click="addNote()">Ajouter</button>
	    </div>
	    </div>
	    <div id="message-list">
    		<div v-for="note in notes" v-bind:key="note.subject" class="message" @click="toggleExpanded(note)">
	        	<div class="message-subject">{{ note.subject }}</div>
        		<div class="message-body" v-if="note.expanded">{{note.content}}</div>
      		</div>
    	</div>
  	</div>
</template>

<script>
import {characterList} from './page-chat.js'
export default {
	name: "App",
	data() {
		return {
            character: characterList,
            

    	};
  	},
  	methods: {
    	
  	},
};
</script>