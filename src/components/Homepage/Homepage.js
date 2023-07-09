import React, { useState } from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'
import Header from '../Header'
import Footer from '../Footer'

const Homepage = () => {
    const [sentence, setSentence] = useState('');
    const [convertedSentence, setConvertedSentence] = useState('');
    const TextChange = (event) => {
        setSentence(event.target.value)
    };
    const convertToUpperCase = () =>{
       setConvertedSentence(sentence.toUpperCase());
    }
    const convertToLowerCase = () =>{
       setConvertedSentence(sentence.toLowerCase());
    }
    const convertToSentenceCase = () => {
        if (sentence) {
            const sentenceLower = sentence.toLowerCase(); 
            const convertedSentence =
        sentenceLower.charAt(0).toUpperCase() + sentenceLower.slice(1);
      setConvertedSentence(convertedSentence);
       }
    }
    const convertCapitalCase = () => {
        const words = sentence.split(' ');
        const convertCapitalCase = words.map((word) => {
            const firstLetter = word.charAt(0).toUpperCase();
            const restOfWord = word.substring(1).toLowerCase();
            return firstLetter + restOfWord;
        });
        const convertedSentence = convertCapitalCase.join(' ');
        setConvertedSentence(convertedSentence);
    }
    const convertReverse = () => {
        const reverse = sentence.split('').reverse().join('');
       setConvertedSentence(reverse);
    }
    const downloadText = () => {
        const element = document.createElement('a');
        const file = new Blob([sentence], { type: 'plain/text' });
        element.href = URL.createObjectURL(file);
        element.download = sentence.txt;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
    const copyText = () => {
        const copy = document.getElementById("textarea");
        copy.select();
        copy.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copy.value);
        alert("Copied the text: " + copy.value);
    }
  return (
      <>
          <Header />
            <div className="about-page">
                <Container>
                <Row>
                    <Col md= {6}>
                        <div className="case-convert mt-5">
                           <h3 className='mb-4'>Enter Your Text</h3>   
                           <textarea value={sentence}  onChange={TextChange} className='form-control convert-area' rows={10} cols={50} />                         
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="case-convert mt-5">
                            <h3 className='mb-4'>Your Converted Text</h3>
                            <textarea value={convertedSentence} id ="textarea"  className='form-control convert-area' rows={10} cols={50} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className="convert-button mt-5">
                            <Button className='convert-btn' onClick={convertToUpperCase}>Convert Uppercase</Button>
                            <Button className='convert-btn' onClick={convertToLowerCase}>Convert Lowercase</Button>
                            <Button className='convert-btn' onClick={convertCapitalCase}>Convert Capitalize</Button>
                            <Button className='convert-btn' onClick={convertToSentenceCase}>Sentencecase</Button>
                            <Button className='convert-btn' onClick={convertReverse}>Reverse Text</Button>
                            <Button className='convert-btn' onClick={downloadText}>Download Text</Button>
                            <Button className='convert-btn' onClick={copyText}>Copy Text</Button>

                        </div>
                    </Col>
                </Row>
                </Container>
            </div>
          <Footer />
      </>
  )
}

export default Homepage