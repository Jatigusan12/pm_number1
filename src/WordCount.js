import React, {Component} from 'react';

class WordCount extends Component{
    constructor(props){
        super(props)
            this.state ={
                word : '',
                spec : '',
                result : "  ",
                occur: "",
                Lista : []
            }
        }
        
    
    
    printThis(e){
        this.setState({word : e.target.value})
    }

    countWord(e){
        e.preventDefault();
        let word1 = this.state.word;
        word1 = word1.split(" ");
        // let word =this..
        //let count = 0;
        // word1.forEach(element => {
        //     word1.forEach(event => {
        //         if (element === event){
        //             console.log(count)
        //             count=count+1;
        //         }  
        //     });
        // });
        let count = word1.length
        this.setState({result: count});
    }
    occurWord(e){
        e.preventDefault();
        let word2 = this.state.word;
        word2 = word2.split(" ");
        let spec = this.state.spec;
        let counter = 0;
        word2.forEach(element => {
            if(element === spec){
                counter+=1
                console.log(counter)
            }  
        });
            this.setState({occur: counter});
    }
    specword(e){
        this.setState({spec : e.target.value})
    }



    render(){
        return(
            <div>
                <center>
                <input type="text" placeholder="Enter a Paragraph" onChange={(e)=>this.printThis(e)}/><button onClick={(e)=>this.countWord(e)}>count</button><br/>
                <input type="text" placeholder="Count This Word" onChange={(e)=> this.specword(e)}/><button onClick={(e)=>this.occurWord(e)}>count this word</button><br/>
                
                
                <div>
                    <label>Sentence:</label><br/>
                        {this.state.word}<br/>
                </div>
                <div>
                    <label>Total Words:</label><br/>
                        {this.state.result}<br/>
                </div>
                <div>
                    <label>Total Word Occurence:</label><br/>
                        {this.state.occur}<br/>
                </div>
                </center>
            </div>
        );
    }
}

export default WordCount;