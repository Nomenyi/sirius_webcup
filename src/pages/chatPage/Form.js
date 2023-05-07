import { useEffect, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const FormSection = ({ generateResponse }) => {

    const [newQuestion, setNewQuestion] = useState('');
    const [isStarted, setIsStarted] = useState(false);

    const {
        transcript,
        listening,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    useEffect(() => {
        if (transcript) {
            setNewQuestion(transcript);
        }
    }, [transcript]);

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    const handleStart = () => {
        SpeechRecognition.startListening({ continuous: true })
        setIsStarted(true);
    }

    const handleStop = () => {
        SpeechRecognition.stopListening();
        SpeechRecognition.abortListening();
        setIsStarted(false);
    }

    return (
        <div className="form-section">
            <textarea
                rows="5"
                className="form-control"
                placeholder="Ask me anything..."
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
            ></textarea>

            <p>Microphone: {listening ? 'on' : 'off'}</p>

            {!isStarted && (
                <button className="mic" onClick={handleStart}>Alummer micro</button>
            )}
            {isStarted && (
                <button className="mic"onClick={handleStop}>Eteindre micro</button>
            )}

            <button 
                className="btn"
                onClick={() => generateResponse(newQuestion, setNewQuestion)}>
                Generer une reponse🤖
            </button>
        </div>
    )
}

export default FormSection;