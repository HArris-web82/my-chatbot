import React from 'react'
import ChatMessageFormat from './ChatMessageFormat';

export default function ChatMessage({chatMessages}) {
  const chatMessagesRef = React.useRef(null);

  React.useEffect(() => {
    chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
  }, [chatMessages]);

  const chatMessageComponent =  chatMessages.map((chatMessage) => {
    return (
      <ChatMessageFormat
      message={chatMessage.message} 
      sender={chatMessage.sender}
      key={chatMessage.id}
      />
    )
  })

  return ( 
    <div className="flex-grow-1 mt-[20px] overflow-auto hide-scrollbar" 
    ref={chatMessagesRef}>
      {chatMessageComponent}
    </div>
  )
}
