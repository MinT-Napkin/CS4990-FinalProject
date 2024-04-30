import "../App.css";
import React, { useState } from 'react';
import OpenAI from "openai";
import LanguageDropdown from "../component/LanguageDropdown";
import Spinner from "../component/Spinner";

const Home = () => {

  const [conversation, setConversation] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [userText, setUserText] = useState('')
  const [roleText, setRoleText] = useState('a beginner')

  const [loading, setLoading] = useState(false);
  const [isInConversation, setIsInConversation] = useState(false);


  const fetchData = async (userMessage) => {
    setLoading(true);

    // The layout should be something like this after the user ONLY says "STOP" to stop the conversation:
    
    // Understood! Here is the translation of our conversation:
    
    // Assistant: [assistant response]
    // User: [user response]

    const systemContent = `
    
    The assistant should NEVER say STOP, or include USER in their responses in the conversation.
    ....`;

    const messages = [
      {"role": "system", "content": systemContent},
      ...conversation,
      {"role": "user", "content": userMessage}
    ];
  
    try {
      const openai = new OpenAI({
        organization: `${process.env.REACT_APP_OPENAI_ORGANIZATION_NAME}`, 
        apiKey: `${process.env.REACT_APP_OPENAI_API_KEY}`,
        dangerouslyAllowBrowser: true,
      });
      const apiResponse = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: messages,
        temperature: 0,
      });
  

      setConversation([...conversation, {"role": "user", "content": userMessage}, {"role": "assistant", "content": apiResponse.choices[0].message.content}]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data: ', error);
      setLoading(false);
    }
  };

  
  const handleBeginConversation = async () => {
    setIsInConversation(true);
    // Remove elements with id "remove"
    const elementsToRemove = document.querySelectorAll("#remove");
    elementsToRemove.forEach(element => element.remove());
  
    try {
      fetchData(`Treat me like ${roleText}, and Speak to the user in ${selectedLanguage.label}, then after the USER responds "STOP", translate the entire conversation to English from the beginning to end.\n`);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const handleClick = async () => {
    try {
      fetchData(userText)
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
    setUserText('')
  };

  const handleTranslationClick = async () => {
    setIsInConversation(false);
    fetchData('STOP')
  };


  return (
    <div>
      <LanguageDropdown selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} disabled={isInConversation}/>
      <div className="padded">
        <h2> TREAT ME LIKE: </h2>
        <input value={roleText} placeholder="beginner" onChange={(e) => setRoleText(e.target.value)} type="text" className="input-field" />
      </div>
      <div>
        <button onClick={handleBeginConversation} disabled={isInConversation} className={isInConversation ? 'disabled' : ''}>
              BEGIN CONVERSATION
        </button>
        <button onClick={handleTranslationClick} disabled={loading} className={loading ? 'disabled' : ''}>
              END CONVERSATION, TRANSLATION
        </button>
      </div>
      <div>
        <h2>CONVSERATION:</h2>
        {conversation.map((message, index) => {
          if (index === 0 && message.role === "user") {
            // Skip rendering the first user message
            return null;
          } else if (loading && index === conversation.length - 1) {
            return (
              <div id="remove">
                <p key={index} className={message.role === "user" ? "user-message" : "ai-message"}>
                  <Spinner />
                </p>
              </div>
            );
          } else if (message.role === "user" && message.content === "STOP") {
            return (
              <div id="remove">
                <br key={index} />
              </div>
            )
          } else {
            return (
              <div id="remove">
                <p key={index} className={message.role === "user" ? "user-message" : "ai-message"}>
                  {message.content}
                </p>
              </div>
            );
          }
        })}
      </div>

      <br/>
      <div>
       {isInConversation ? (
        <div>
          <textarea value={userText} onChange={(e) => setUserText(e.target.value)} type="text" className="input-field" />
          <button onClick={handleClick}>Send</button>
        </div>
       ) : (
        null
       )}
      </div>
    </div>
  );
};
  
export default Home;