import React, { useState } from 'react'
import './main.css'
import axios from 'axios';
import Loader from '../../../Components/Loader/Loader';
import Errorbx from '../../../Components/Errorbbx/Errorbx';


const Textsummarizer = () => {



  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState("");
  const [summary, setSummary] = useState("");
  const [err, setErr] = useState()


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };


  const handleSearch = async () => {

    setLoading("true")
    setSummary('')
    setErr(false)


    const options = {
      method: 'POST',
      url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize-text',
      headers: {
        'content-type': 'application/json',
        'X-Rapidapi-Key': 'b87d59a214msh01373491a0dd521p1e51f9jsnac9e0ec78ed6',
        'X-Rapidapi-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
      },
      data: {
        lang: 'en',
        text: inputValue
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.summary)
      const finalData = response.data.summary;
      setSummary(finalData)

    } catch (error) {
      console.log(error)
      setErr(error)
    }

    setLoading(false)
  }

  return (

    <>

      <div className="inputarea main">
        <div className="textarea w100">
          <textarea onChange={handleInputChange} defaultValue={"Enter your text here"}></textarea>
        </div>
        <button onClick={() => handleSearch()} disabled={!inputValue} className='txt-sum-btn'>Summarize Text</button>
      </div>



      {
        loading ? <Loader /> : ''
      }

      {
         err ? <Errorbx msg={err.message} code={err.code} data={err.response.data.message} /> : ''
      }

      {

        summary ? (
          <div className="summaryarea main">
            <div className="summary-bx w100">
              <h3>Text Summary:</h3>
              <br />
              <p>
                {
                  summary
                }
              </p>
            </div>
          </div>
        ) : ''
      }
    </>
  )
}

export default Textsummarizer


