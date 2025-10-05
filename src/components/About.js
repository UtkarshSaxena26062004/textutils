import React from 'react';

export default function About(props) {
  // const [mystyle, setmystyle] = useState({
  //   color: 'white',
  //   backgroundColor: 'black'
  // });
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? '#041828ff' : 'white',
    border: props.mode === 'dark' ? '1px solid white' : '1px solid #042743'
  }; 
  return (
    <div className='container' style={myStyle}>
      <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample">

        {/* Accordion Item 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or removing extra spaces.
            </div>
          </div>
        </div>

        {/* Accordion Item 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtils is a free tool that allows you to analyze your text without any cost.
            </div>
          </div>
        </div>

        {/* Accordion Item 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtils is compatible with all modern web browsers.
            </div>
          </div>
        </div>
      </div>
    </div>
    //    {/* Toggle Button */}
    //   <div className='my-3'>
    //     <button type="button" className="btn btn-primary" onClick={toggleStyle}>
    //       {btntext}
    //     </button>
    //   </div>
    // </div>
  );
}
