const API = 'https://gist.githubusercontent.com/islamstatus360/27cf7254ae0f97542e4a53979b0d5e31/raw/2993fd1975c5d7dd45c61155214e2dfca43e7528/Surah-Fatiha-English-Verses-API.json';

class App extends React.Component{
  state = {
    verses: [
      {
      "ayah":"In the name of God, The Most Gracious, The Dispenser of Grace:",
      "reference":"[1:1]"
      }
     ],
    colors :  [
      '#FFC312',
      '#C4E538',
      '#12CBC4',
      '#FDA7DF',
      '#ED4C67',
      '#F79F1F',
      '#A3CB38',
      '#1289A7',
      '#D980FA',
      '#B53471',
      '#EE5A24',
      '#009432',
      '#0652DD',
      '#9980FA',
      '#833471',
      '#EA2027',
      '#006266',
      '#1B1464',
      '#5758BB',
      '#6F1E51'
    ] ,
    index: 0
}

componentDidMount(){
    // call the API and update state
    fetch(API).then(res => res.json())
      .then(res => {
        this.setState({
          verses: res.verses
        }, this.getRandomIndex);
    });
    
}
  
getRandomIndex = () => {
    const {verses, colors} = this.state;
    
    if(verses.length > 0){
      const index = Math.floor(Math.random() * verses.length);
      this.setState({
        index
      })
    }

    const cIndex = Math.floor(Math.random() * colors.length);

    document.body.style.background = colors[cIndex];
}
  
render(){
    const {verses, index} = this.state;
    
    const ayah = verses[index];
    
    const tweetURL =`https://twitter.com/intent/tweet?text=${ayah.ayah} - ${ayah.reference}`;
    
    return(
        <div className="wrapper d-flex  align-items-center justify-content-center">
            <div className="col-6 box p-4 rounded" id="quote-box">
                { 
                    ayah && (
                    <div className="mb-4">
                        <p id="text" className="quote"><strong><i className="fas fa-quote-left fa-2x"></i> {ayah.ayah}</strong></p>
                        
                        <div className = "writer" >
                          <cite className="d-block text-center" id="author" className="author">
                          - {ayah.reference}
                          </cite>
                        </div>                        
                    </div>
                    )  
                }
    
            
                <div className="d-flex justify-content-between buttons">
                    <a className="btn btn-primary" target="_blank" href = {tweetURL} id="tweet-quote"><i className="fab fa-twitter"></i> Tweet</a>
                    <button className="btn  btn-outline-primary" onClick={this.getRandomIndex} id="new-quote">
                    Get Next
                    </button>
                </div>
            </div>
       </div>
    )
  }
} 

ReactDOM.render(<App />, document.getElementById("app"));