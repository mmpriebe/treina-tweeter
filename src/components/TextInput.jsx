import { useRef, useState } from 'react';
import styles from './TextInput.module.css';

export default function TextInput({placeholder = 'O que está acontecendo', maxLength, ...props}) {

const [text, setText] = useState('');
const inputElement = useRef();
const [tweetList, setTweetList] = useState([])

function onTextChange(event) {
  const text = event.target.value;
  if (text.length <= maxLength) {
      setText(text);
  }
}

function sendTwitt() {
  setTweetList([...tweetList, text])
}


return (

  <div>
    <h2>TreinaTweet</h2>
    <textarea 
      className={styles.input}
      placeholder={placeholder}
      maxLength={maxLength}
      value={text}
      onChange={onTextChange}
      defaultValue='10'
      {...props}
    />
    <p>{text.length} / {maxLength}</p>
    <button onClick={sendTwitt}>Enviar</button>
    {tweetList.map(tweet => {
      return (
        <p>{tweet}</p>
      )
    })}
  </div>
)
}

