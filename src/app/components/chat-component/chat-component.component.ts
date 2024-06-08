import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat-component',
  templateUrl: './chat-component.component.html',
  styleUrl: './chat-component.component.scss'
})
export class ChatComponentComponent {
  messages: { user: string; content: string }[] = [];
  newMessage: any = '';

  @ViewChild('chatMessages', { static: false }) chatMessages!: ElementRef;

  ngOnInit(): void {
   
  }
  currentYear: number = new Date().getFullYear();

  sendMessage() {
    if (this.newMessage.trim()) {
      // Simulate a new message (replace with actual chat functionality)
      this.messages.push({ user: 'You', content: this.newMessage });
      this.newMessage = '';

      // Scroll to the bottom of the chat window after sending a message
      this.scrollToBottom();
    }
  }

  scrollToBottom() {
    // Get a reference to the chat messages container element
    const element = this.chatMessages.nativeElement;

    // Scroll to the bottom of the element
    element.scrollTop = element.scrollHeight;
  }
}
