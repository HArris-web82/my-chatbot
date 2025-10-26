

export default function ChatMessageFormat({ message, sender }) {
  return (
    <div className={sender === "User" 
      ? "flex justify-end" 
      : "flex justify-start"}>
      {sender === "Robot" && <img src="Robot.png" className="inline-block w-10 h-10 mr-1" />}
      <div 
      className="bg-gray-200 py-[15px] px-[20px] rounded-xl mr-[10px] ml-[10px] mb-[20px] max-w-[300px] break-words">
        {message}
      </div>
      {sender === "User" && <img src="Sender.png" className="inline-block w-10 h-10 ml-1"/>}
    </div>
  )
}  
 