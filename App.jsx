import React from "react";
import defaultDataset from "./dataset";
import "./assets/styles/style.css";
import { AnswersList, Chats } from "./components/index";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      // dataset: {},←初期化の時は連想配列{ name:'田中',age:'89',sex:'female' }
      dataset: defaultDataset,
      open: false,
    };
  }

  initAnswer = () => {
    const initDataset = this.state.dataset[this.state.currentId];
    const initAnswers = initDataset.answers;

    this.setState({
      answers: initAnswers,
    });
  };

  initChats = () => {
    const initDataset = this.state.dataset[this.state.currentId];
    const chat = {
      text: initDataset.question,
      type: "question",
    };

    const chats = this.state.chats;
    chats.push(chat); //30行目で宣言したchat{text:initDataset.question,type:"question"}を変数35行目で宣言したchats(11行目のchats:[]を継承→つまり空)にpushしている

    this.setState({
      chats: chats, //36行目でpushされたデータをsetStateして置き換える。。setStateさせると事で初期値を残しつつ新しい状態に置き換わる。
    });
  };

  componentDidMount() {
    this.initChats();
    this.initAnswer();
  }

  render() {
    return (
      <section className="c-section">
        <div className="c-box ">
          <Chats chats={this.state.chats} />
          <AnswersList answers={this.state.answers} />
        </div>
      </section>
    );
  }
}
