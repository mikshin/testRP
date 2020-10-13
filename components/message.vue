<template>
    <div class="message-wrapper">
        <div class="message-list">
            <div class="message"
            v-for="message in getMessages"
            :key="message.id"
            v-bind:class="{
                'message--incoming' : message.incoming,
                'message--unread' : message.unread,
                'message--last' : message.last
            }">
                <div class="message-headline">
                    <span class="message-author"></span>
                    <button class="reply-button">Reply</button>
                </div>
                <p class="message-content">{{message.content}}</p>
                <div class="message-footer">
                    <span class="message-time">{{message.time}}</span>
                    <button class="share-button"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data: function() {
    return {
      isActive: false
    };
  },
	computed: mapGetters(['getMessages']),
	async mounted() {
		this.$store.dispatch('fetchMessages')
	},
  methods: {
    checkContact(event) {
      let contacts = document.getElementsByClassName("contact")
      
      for(let i=0; i<contacts.length; i++ ) {
        contacts[i].classList.remove("active")
      }

      event.target.classList.add("active")
    },
  },
  checkLastMessage(event) {
    //   console.log('test')
  }
}
</script>

<style lang="scss" >
.message-headline,.message-input {
    display: flex;
    flex-shrink: 0;
}
.message-wrapper {
    overflow-y: auto;
    overflow-x: hidden;
    background-color: var(--light-blue);
    display: flex;
    flex: 1;
    height: 100%;
    &::-webkit-scrollbar {
      width: 4px;
      height: 4px;
      background-color: #FFFFFF;
    }
    &::-webkit-scrollbar-thumb { 
      border-radius: 2px;
      background-color: #d1d1d1;
    }
}
.message-list {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    
}
.message {
    max-width: 80%; 
    position: relative;
    padding: var(--margin-small);
    margin: var(--margin-small);
    margin-right: calc(var(--margin-small) + var(--margin-small));
    margin-left: auto;
    background-color: #fff;
    border-radius: 8px;

    &.message--incoming {
        margin-left: calc(var(--margin-small) + var(--margin-small));
        margin-right: auto;
    }

    &.message--last {
        position: relative;
        &:before {
            content: '';
            position: absolute;
            bottom: 0;
            width: 12px;
            height: 12px;
            transform: translateX(-100%);
            background-color: #fff;
        }
        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            width: 24px;
            height: 24px;
            transform: translateX(-100%);
            background-color: var(--light-blue);
            border-radius: 24px;
        }
        &.message--incoming {
            border-bottom-left-radius: 0;
            &:before,
            &:after {
                left: 0;
            }
        }
        &:not(.message--incoming) {
            border-bottom-right-radius: 0;
            &:before,
            &:after {
                right: 0;
                transform: translateX(100%);
            }
        }
    }
    &:hover {
        .reply-button {
            color: var(--gray);
        }
    }
}
.message-headline {
    display: flex;
}
.message-author {
    flex: 1;
}
.message-time {
    position: absolute;
    right: var(--margin-small);
    bottom: var(--margin-small);
}
.reply-button {
    border: none;
    background: none;
    color: transparent;
    cursor: pointer;
    transition: .2s color ease;
    flex-shrink: 0;
}
.share-button {
    display: none
}
</style>