import TextInput from "../components/TextInput";

export default function Index(){
    return (
        <div>
            <h1>TreinaTweet</h1>
            <div>
                <img src={'https://github.com/wesleygado.png'} alt="" />
                <TextInput />
            </div>
            <div>
                <div>0 / 125</div>
                <button>Tweetar</button>
            </div>

            <ul>
                <li>Tweet 1</li>
                <li>Tweet 2</li>
            </ul>
        </div>
    )
}