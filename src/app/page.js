'use client'
import ChatInput from '@/components/ChatInput'
import ChatMessage from '@/components/ChatMessage'
import DisplayText from '@/components/DisplayText'
import React from 'react' 
import ProjectInfo from '@/components/ProjectInfo'


export default function App() {
  const [chatMessages, setChatMessages] = React.useState([]);
  return (
    <div  className='w-[600px] ml-auto mr-auto h-[100vh] flex flex-col '>
      <DisplayText />
      <ChatMessage 
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />

      <ProjectInfo />
    </div>

  )
}

