<<<<<<< HEAD
import { Configuration, OpenAIApi } from 'openai';

import FormSection from './openai/FormSection';
import AnswerSection from './openai/AnswerSection';
import { useState } from 'react';

const App = () => {

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
        <div>
            <div className="header-section">
                <h1>ChatGPT CLONE 🤖</h1>
                <p>
                    I am an automated question and answer system, designed to assist you
                    in finding relevant information. You are welcome to ask me any queries
                    you may have, and I will do my utmost to offer you a reliable
                    response. Kindly keep in mind that I am a machine and operate solely
                    based on programmed algorithms.
                </p>
            </div>

            <FormSection generateResponse={generateResponse} />
            <AnswerSection storedValues={storedValues} />
        </div>
    );
};
=======
import { React, Suspense, StrictMode, lazy } from 'react';

// Route librairies import
import { Routes, Route } from 'react-router-dom';


// --------Page import--------
//loader
import Loader from './pages/loaderPage/loaderPage';

/* page & components with lazy load */
const NotFoundPage = lazy(() => import('./pages/notFoundPage/notFoundPage'))
const MainPage = lazy(() => import('./pages/mainPage/mainPage'))
const OrinixPage = lazy(() => import('./pages/onirixPage/onirixPage'))
const OrinixBotPage = lazy(() => import('./pages/chatPage/ChatPage'))

function App() {
  return (
    <StrictMode>
      <Suspense fallback={<Loader/>}>
        <Routes>
          {/* Authentification pages route */}
          <Route path='/' element={<Loader />}/>
          {/* main pages route */}
          {/* Page route */}
          <Route path='/' element={<MainPage />}/>
          <Route path='/onirix' element={<OrinixPage />}/>
          <Route path='/onirix/bot' element={<OrinixBotPage />}/>

          {/* supplements pages route */}
          <Route path='loader' element={<Loader />} />
          <Route path='*' element={<NotFoundPage />} />

          </Routes>
        </Suspense>
    </StrictMode>
  );
}
>>>>>>> e888908428a4e089a1ea93a98453ccef3aa9ac5e

export default App;
