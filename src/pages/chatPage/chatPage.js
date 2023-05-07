import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';

import FormSection from './Form';
import AnswerSection from './Answer';
import logo from '../../assets/image/logo/IIR_Logo/IIR_Logo_Large_transparent.png';

const ChatPage = () => {

  const key = "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"

  const configuration = new Configuration({
    apiKey: key
  })

  const openai = new OpenAIApi(configuration)

  const [storedValues, setStoredValues] = useState([]);

  const generateResponse = async (newQuestion, setNewQuestion) => {
        let options = {
            model: 'text-davinci-003',
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ['/'],
        };

        let completeOptions = {
            ...options,
            prompt: newQuestion,
        };

        const response = await openai.createCompletion(completeOptions);

        // console.log(response.data.choices[0].text);
        if (response.data.choices) {
            setStoredValues([
                {
                    question: newQuestion,
                    answer: response.data.choices[0].text,
                },
                ...storedValues,
            ]);
            setNewQuestion('');
        }
  };


    return (
        <div className='chat_conatiner'>
        <div className='mainpage_Navbar'>
        <nav id="navbar" className="navbar">
            <div className="nav-wrapper">
                
                {/* <div className="logo">
                    <img src={logo} alt='IIR Logo' width={'190px'}/>
                </div> */}

                <ul id="menu">
                    <li><a href="/">Accueil</a></li>
                    {/* <li><a href="#services">Services</a></li>
                    <li><a href="#about">à propos</a></li>
                    <li><a href="#contact">Contact</a></li> */}
                    
                </ul>

                <div>
                    <a href='/' className='Onirix-Btn'>Retour Onirix</a>
                </div>

                
                
            </div>
        </nav>


            {/* <div className="overlay-menu">
            <ul id="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div> */}
    </div>
            <div className="header-section">
                <h1>Orinix AI 🤖</h1>
                <p>
                    Avez-vous déjà voulu savoir ce que vos rêves signifient et comment ils pourraient 
                    vous aider à prédire votre avenir ? Laissez-nous vous présenter notre intelligence 
                    artificielle de pointe qui peut décoder vos rêves et vous donner des informations 
                    précieuses sur votre avenir. Grâce à notre technologie de pointe, vous pouvez enfin 
                    comprendre la signification de vos rêves et découvrir des opportunités que vous n'auriez 
                    jamais imaginées. Essayez-le dès maintenant et commencez à transformer vos rêves en réalité.
                </p>
            </div>

            <FormSection generateResponse={generateResponse} />
            <AnswerSection storedValues={storedValues} />
        </div>
    );
};

export default ChatPage;
