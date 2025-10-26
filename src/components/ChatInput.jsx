'use client'
import React from 'react';
import Button from '../components/Button';
 


export default function ChatInput({chatMessages, setChatMessages}) {
  const [inputText, setInputText] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)


  function getValue(event) {
    setInputText(event.target.value)
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      submitMessage()
    }

    if (event.key === 'Escape') {
      setInputText('')
    }
  }

  async function submitMessage() {    
    if (!inputText.trim()) return

    const myInput = [
      ...chatMessages,
      {
        message: inputText,
        sender: 'User',
        id: crypto.randomUUID()
      }
    ]
    
    setChatMessages(myInput)
    setIsLoading(true)
    
    try {
      const response = await window.Chatbot.getResponseAsync(inputText)
      setChatMessages([
        ...myInput,
        {
          message: response,
          sender: 'Robot',
          id: crypto.randomUUID()
        }
      ])
    } catch (error) {
      const errorMessage = {
        message: "Oops! Something went wrong",
        sender: 'Robot',
        id: crypto.randomUUID()
      }
      setChatMessages([...myInput, errorMessage])
    } finally {
      setIsLoading(false)
      }
   
    setInputText('')
  }

  return (
    <div className='mb-[60px]'>
      {isLoading && (
        <div className='flex items-center mt-4 mb-2 ml-2'>
          <div className='animate-spin rounded-full h-4 w-4 border-t-2 border-blue-900'></div>
          <span className='ml-2 text-gray-500 italic'>Bot is typing...</span>
        </div>
      )}
      <input 
        type="text" 
        placeholder="Send Chatbot a message"
        size="50" 
        className='border border-gray-300 rounded-lg h-10 ml-2 mt-20'
        onChange={getValue}
        value={inputText}
        onKeyDown={handleKeyDown}
      />
      

      <Button 
        onClick={submitMessage}
        disabled={isLoading}
      />
            
    </div>
  )
}
