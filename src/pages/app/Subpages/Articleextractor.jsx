import React, { useState } from "react";
import "./main.css";
import { IoLinkOutline } from "react-icons/io5";
import axios from "axios";
import Loader from "../../../Components/Loader/Loader";
import Errorbx from "../../../Components/Errorbbx/Errorbx";

const Articleextractor = () => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState("");
  const [summary, setSummary] = useState("");
  const [err, setErr] = useState();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = async () => {
    setLoading("true");
    setSummary("");
    setErr(false);

    const options = {
      method: "GET",
      url: "https://article-extractor-and-summarizer.p.rapidapi.com/extract",
      params: {
        url: inputValue,
        length: "3",
      },
      headers: {
        "X-Rapidapi-Key": "b87d59a214msh01373491a0dd521p1e51f9jsnac9e0ec78ed6",
        "X-Rapidapi-Host": "article-extractor-and-summarizer.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      const finalData = response.data.content;
      setSummary(finalData);
    } catch (error) {
      console.log(error);
      setErr(error);
    }

    setLoading(false);
  };

  return (
    <>
      <div className="inputarea main">
        <div className="inputArea w100">
          <IoLinkOutline className="link-icon" />
          <input
            onChange={handleInputChange}
            type="text"
            placeholder="Paste your URL here"
          />
          <button onClick={() => handleSearch()} disabled={!inputValue}>
            Summarize
          </button>
        </div>
      </div>

      {loading ? <Loader /> : ""}

      {err ? (
        <Errorbx
          msg={err.message}
          code={err.code}
          data={err.response.data.message}
        />
      ) : (
        ""
      )}

      {summary ? (
        <div className="summaryarea main">
          <div className="article-bx article w100">
            <div className="summaryHead">
              <a href={inputValue}>
                <span className="url">{inputValue}</span>
              </a>
            </div>
            <h3>{summary.title}</h3>
            <br />
            <div
              dangerouslySetInnerHTML={{ __html: summary }}
              className="article-area"
            ></div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Articleextractor;
