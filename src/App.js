import React, { useState } from "react";
import "./App.css";
import image from "./img/photo.jpg";
import one from "./img/one.jpg";
import three from "./img/three.jpg";
const App = () => {
  const [show, setshow] = useState(false); // it show manage the data shows on screen on button click
  const [Data, SetData] = useState(true); // it hide the tag from screen on submit the details
  const [down, setdown] = useState(false); // it show the download data
  const [up, setup] = useState(false); // it shows show all and download button
  const [first, setfirst] = useState(false); // it show the data when it true
  const [second, setsecond] = useState(false); // it show the data when it true
  const [third, setthird] = useState(false); // it show the data when it true
  const [fifth, setfifth] = useState(false); // it show the data when it true
  const [six, setsix] = useState(false); // it show the data when it true
  const [seven, setseven] = useState(false); // it show the data when it true
  const [eight, seteight] = useState(false); // it show the data when it true
  const [shows, setshows] = useState([]); // storing tag with data
  const [set, subSet] = useState([]); // for storing a on tags onDropEnd function
  const [firstV, setfirstV] = useState([]); // it store the value from the input
  const [secondV, setsecondV] = useState([]); // it store the value from the input
  const [thirdV, setthirdV] = useState([]); // it store the value from the input
  const [fifthV, setfifthV] = useState([]); // it store the value from the input
  const [sixV, setsixV] = useState([]); // it store the value from the input
  const [sevenV, setsevenV] = useState([]); // it store the value from the input
  const [eightV, seteightV] = useState([]); // it store the value from the input
  const [firstI, setfirstI] = useState({
    // it store first tag data
    Type: "text",
    Id: "",
    Classname: "",
    Placeholder: "",
  });
  const [secondI, setsecondI] = useState({
    // it store second tag data
    Type: "submit",
    Id: "",
    Classname: "",
  });

  const [thirdI, setthirdI] = useState({
    // it store third tag data
    Type: "checkbox",
    Id: "",
    Classname: "",
    Name: "",
  });

  const [fifthI, setfifthI] = useState({
    // it store fourth tag data
    Type: "radio",
    Id: "",
    Classname: "",
    Name: "",
  });

  const [sixI, setsixI] = useState({
    // it store fifth tag data
    Type: "range",
    Id: "",
    Name: "",
    Minimum: "",
    Maximum: "",
  });

  const [sevenI, setsevenI] = useState({
    // it store sixth tag data
    Title: "",
    Id: "",
  });

  const [eightI, seteightI] = useState({
    // it store seventh tag data
    Type: "number",
    Id: "",
    Name: "",
    Minimum: "",
    Maximum: "",
  });

  const handleFirst = (e) => {
    // it append the input details & create a object
    setfirstI({ ...firstI, [e.target.name]: e.target.value });
  };

  const handleSecond = (e) => {
    // it append the input details & create a object
    setsecondI({ ...secondI, [e.target.name]: e.target.value });
  };

  const handleThird = (e) => {
    // it append the input details & create a object
    setthirdI({ ...thirdI, [e.target.name]: e.target.value });
  };

  const handleFifth = (e) => {
    // it append the input details & create a object
    setfifthI({ ...fifthI, [e.target.name]: e.target.value });
  };

  const handleSix = (e) => {
    // it append the input details & create a object
    setsixI({ ...sixI, [e.target.name]: e.target.value });
  };

  const handleSeven = (e) => {
    // it append the input details & create a object
    setsevenI({ ...sevenI, [e.target.name]: e.target.value });
  };

  const handleEight = (e) => {
    // it append the input details & create a object
    seteightI({ ...eightI, [e.target.name]: e.target.value });
  };

  const handleFirstSubmit = () => {
    if (
      firstI.Id === "" ||
      firstI.Classname === "" ||
      firstI.Placeholder === ""
    ) {
      alert("please enter all details");
    } else {
      setshow(true); // it show the tag with details
      SetData(false); // it shows only tags
      setfirstV([...firstV, firstI]); // object value store in an arrray
      setshows([
        // here append the details in the tag for showing
        ...shows,
        <input
          type="text"
          id={firstI.Id}
          className={firstI.Classname}
          placeholder={firstI.Placeholder}
        />,
      ]);
      setfirstI({
        // after submit the details will clear
        Id: "",
        Classname: "",
        Placeholder: "",
      });
    }
  };

  const handleSecondSubmit = () => {
    if (secondI.Id === "" || secondI.Classname === "") {
      alert("please enter all details");
    } else {
      setshow(true); // it show the tag with details
      SetData(false); // it shows only tags
      setsecondV([...secondV, secondI]); // object value store in an arrray
      setshows([
        // here append the details in the tag for showing
        ...shows,
        <button type="submit" id={secondI.Id} className={secondI.Classname}>
          Buttton
        </button>,
      ]);
      setsecondI({
        // after submit the details will clear
        Id: "",
        Classname: "",
      });
    }
  };

  const handleThirdSubmit = () => {
    if (thirdI.Id === "" || thirdI.Classname === "" || thirdI.Name === "") {
      alert("please enter all details");
    } else {
      setshow(true); // it show the tag with details
      SetData(false); // it shows only tags
      setthirdV([...thirdV, thirdI]); // object value store in an arrray
      setshows([
        // here append the details in the tag for showing
        ...shows,
        <input
          type="checkbox"
          id={thirdI.Id}
          className={thirdI.Classname}
          name={thirdI.Name}
        />,
      ]);
      setthirdI({
        // after submit the details will clear
        Id: "",
        Classname: "",
        Name: "",
      });
    }
  };

  const handleFifthSubmit = () => {
    if (fifthI.Id === "" || fifthI.Classname === "" || fifthI.Name === "") {
      alert("please enter all details");
    } else {
      setshow(true); // it show the tag with details
      SetData(false); // it shows only tags
      setfifthV([...fifthV, fifthI]); // object value store in an arrray
      setshows([
        // here append the details in the tag for showing
        ...shows,
        <input
          type="radio"
          id={fifthI.Id}
          className={fifthI.Classname}
          name={fifthI.Name}
        />,
      ]);
      setfifthI({
        // after submit the details will clear
        Id: "",
        Classname: "",
        Name: "",
      });
    }
  };

  const handlesixSubmit = () => {
    if (
      sixI.Id === "" ||
      sixI.Name === "" ||
      sixI.Minimum === "" ||
      sixI.Maximum === ""
    ) {
      alert("please enter all details");
    } else {
      setshow(true); // it show the tag with details
      SetData(false); // it shows only tags
      setsixV([...sixV, sixI]); // object value store in an arrray
      setshows([
        // here append the details in the tag for showing
        ...shows,
        <input
          type="range"
          id={sixI.Id}
          name={sixI.Name}
          min={sixI.Minimum}
          max={sixI.Maximum}
        />,
      ]);
      setsixI({
        // after submit the details will clear
        Id: "",
        Name: "",
        Minimum: "",
        Maximum: "",
      });
    }
  };

  const handleSevenSubmit = () => {
    if (sevenI.Id === "" || sevenI.Title === "") {
      alert("please enter all details");
    } else {
      setshow(true); // it show the tag with details
      SetData(false); // it shows only tags
      setsevenV([...sevenV, sevenI]); // object value store in an arrray
      setshows([
        ...shows,
        <abbr id={sevenI.Id} title={sevenI.Title}>
          Abbriviation
        </abbr>,
      ]);
      setsevenI({
        // after submit the details will clear
        Title: "",
        Id: "",
      });
    }
  };

  const handleEightSubmit = () => {
    if(eightI.Id==="" || eightI.Name==="" || eightI.Maximum==="" || eightI.Minimum===""){
      alert("please enter all details");
    }
    else{
      setshow(true); // it show the tag with details
      SetData(false); // it shows only tags
      seteightV([...eightV, eightI]); // object value store in an arrray
      setshows([
        ...shows,
        <input
          type="number"
          id={eightI.Id}
          name={eightI.Name}
          min={eightI.Minimum}
          max={eightI.Maximum}
        />,
      ]);
      seteightI({
        // after submit the details will clear
        Id: "",
        Name: "",
        Minimum: "",
        Maximum: "",
      });
    }
    
  };

  const InputDrag = (value) => {
    SetData(true);
    setshow(false);
    subSet([...set, value]); // for storing a on tags onDropEnd function.
    setfirstV([]); // clear the objects detail for another detail(new tag)
    setsecondV([]); // clear the objects detail for another detail(new tag)
    setthirdV([]); // clear the objects detail for another detail(new tag)
    setfifthV([]); // clear the objects detail for another detail(new tag)
    setsixV([]); // clear the objects detail for another detail(new tag)
    setsevenV([]); // clear the objects detail for another detail(new tag)
    seteightV([]); // clear the objects detail for another detail(new tag)
  };

  const firstfun = () => {
    // this condtion show the detail on double click functionalities
    setup(true);
    setfirst(true);
    setsecond(false);
    setthird(false);
    setfifth(false);
    setsix(false);
    setseven(false);
    seteight(false);
    setshow(false);
    setdown(false);
    setshow(false);
  };

  const secondfun = () => {
    // this condtion show the detail on double click functionalities
    setup(true);
    setfirst(false);
    setsecond(true);
    setthird(false);
    setfifth(false);
    setsix(false);
    setseven(false);
    seteight(false);
    setshow(false);
    setdown(false);
  };

  const thirdfun = () => {
    // this condtion show the detail on double click functionalities
    setup(true);
    setfirst(false);
    setsecond(false);
    setthird(true);
    setfifth(false);
    setsix(false);
    setseven(false);
    seteight(false);
    setshow(false);
    setdown(false);
  };

  const fifthfun = () => {  
    // this condtion show the detail on double click functionalities
    setup(true);
    setfirst(false);
    setsecond(false);
    setthird(false);
    setfifth(true);
    setsix(false);
    setseven(false);
    seteight(false);
    setshow(false);
    setdown(false);
  };
  const sixfun = () => {
    // this condtion show the detail on double click functionalities
    setup(true);
    setfirst(false);
    setsecond(false);
    setthird(false);
    setfifth(false);
    setsix(true);
    setseven(false);
    seteight(false);
    setshow(false);
    setdown(false);
  };

  const sevenfun = () => {
    // this condtion show the detail on double click functionalities
    setup(true);
    setfirst(false);
    setsecond(false);
    setthird(false);
    setfifth(false);
    setsix(false);
    setseven(true);
    seteight(false);
    setshow(false);
    setdown(false);
  };

  const Eightfun = () => {
    // this condtion show the detail on double click functionalities
    setup(true);
    setfirst(false);
    setsecond(false);
    setthird(false);
    setfifth(false);
    setsix(false);
    setseven(false);
    seteight(true);
    setshow(false);
    setdown(false);
  };

  const handleshow = () => {
    // this condtion show the detail on double click functionalities
    setfirst(false);
    setsecond(false);
    setthird(false);
    setfifth(false);
    setsix(false);
    setseven(false);
    seteight(false);
    setshow(true);
    setdown(false);
  };

  const handleDownload = () => {
    // this condtion show the detail on double click functionalities
    setfirst(false);
    setsecond(false);
    setthird(false);
    setfifth(false);
    setsix(false);
    setseven(false);
    seteight(false);
    setshow(false);
    setdown(true);
  };

  const handledatadownload = (value) => {
    //console.log("value", value);
    if (value.type === "input" && value.props.type === "text") {
      let data = new Blob(
        [
          `<input type="text" id="${value.props.id}" className=${value.props.className} placeholder=${value.props.placeholder} />`,
        ],
        { type: "text/html" }
      );
      let URL = window.URL.createObjectURL(data);
      let tempLink = document.createElement("a");
      tempLink.href = URL;
      tempLink.setAttribute("download", "Tag.html");
      tempLink.click();
    } else if (value.type === "button" && value.props.type === "submit") {
      let data = new Blob(
        [
          `<button type="submit" id="${value.props.id}" className=${value.props.className} >Buttton</button>`,
        ],
        { type: "text/html" }
      );
      let URL = window.URL.createObjectURL(data);
      let tempLink = document.createElement("a");
      tempLink.href = URL;
      tempLink.setAttribute("download", "Tag.html");
      tempLink.click();
    } else if (value.type === "input" && value.props.type === "checkbox") {
      let data = new Blob(
        [
          `<input type="checkbox" id="${value.props.id}" className=${value.props.className} name=${value.props.name} />`,
        ],
        { type: "text/html" }
      );
      let URL = window.URL.createObjectURL(data);
      let tempLink = document.createElement("a");
      tempLink.href = URL;
      tempLink.setAttribute("download", "Tag.html");
      tempLink.click();
    } else if (value.type === "input" && value.props.type === "radio") {
      let data = new Blob(
        [
          `<input type="radio" id="${value.props.id}" className=${value.props.className} name=${value.props.name} />`,
        ],
        { type: "text/html" }
      );
      let URL = window.URL.createObjectURL(data);
      let tempLink = document.createElement("a");
      tempLink.href = URL;
      tempLink.setAttribute("download", "Tag.html");
      tempLink.click();
    } else if (value.type === "input" && value.props.type === "range") {
      let data = new Blob(
        [
          `<input type="range" id="${value.props.id}" name=${value.props.name} min=${value.props.min} max=${value.props.max} />`,
        ],
        { type: "text/html" }
      );
      let URL = window.URL.createObjectURL(data);
      let tempLink = document.createElement("a");
      tempLink.href = URL;
      tempLink.setAttribute("download", "Tag.html");
      tempLink.click();
    } else if (value.type === "abbr") {
      let data = new Blob(
        [
          `<abbr  id="${value.props.id}" title=${value.props.title}>Abriviation Tag</abbr>`,
        ],
        { type: "text/html" }
      );
      let URL = window.URL.createObjectURL(data);
      let tempLink = document.createElement("a");
      tempLink.href = URL;
      tempLink.setAttribute("download", "Tag.html");
      tempLink.click();
    } else if (value.type === "input" && value.props.type === "number") {
      let data = new Blob(
        [
          `<input type="number" id="${value.props.id}" name=${value.props.name} min=${value.props.min} max=${value.props.max} />`,
        ],
        { type: "text/html" }
      );
      let URL = window.URL.createObjectURL(data);
      let tempLink = document.createElement("a");
      tempLink.href = URL;
      tempLink.setAttribute("download", "Tag.html");
      tempLink.click();
    }
  };

  // let Allkey = Math.random() * (10.0 - 1.0 + 1.0);
  return (
    <>
      <img
        src={one}
        alt="Error"
        style={{
          width: 90,
          height: 50,
          marginLeft: 15,
          borderRadius: 3,
          marginTop:5,
          backgroundColor: "white",
        }}
      />
      <div className="main">
      <div className="header">
        <h1 className="heading">Drag & Drop</h1>
        {up && (
          <>
            <button
              onClick={handleshow}
              style={{ width: 67, height: 27, marginTop: 16, marginLeft: 71 }}
            >
              Show all
            </button>
            <button
              onClick={handleDownload}
              style={{ width: 79, height: 27, marginTop: 16, marginLeft: 91 }}
            >
              Download
            </button>
          </>
        )}
      </div>
      <div className="containers">
        <div className="firstData">
          <div className="first">
            <input
              placeholder="Input Type Text"
              draggable="true"
              onDragEnd={() => InputDrag(<input key="1" />)}
            />
          </div>
          <div className="first">
            <input
              placeholder="Button Type Submit"
              draggable="true"
              onDragEnd={() => InputDrag(<button key="2">Button</button>)}
            />
          </div>
          <div className="first">
            <input
              placeholder="Input Type Checkbox"
              draggable="true"
              onDragEnd={() => InputDrag(<input key="3" />)}
            />
          </div>
          <div className="first">
            <input
              placeholder="Input Type Radio"
              draggable="true"
              onDragEnd={() => InputDrag(<input key="5" />)}
            />
          </div>
          <div className="first">
            <input
              placeholder="Input Type Range"
              draggable="true"
              onDragEnd={() => InputDrag(<input key="6" />)}
            />
          </div>
          <div className="first">
            <input
              placeholder="Abbreviation Tag"
              draggable="true"
              onDragEnd={() => InputDrag(<abbr key="7">WHO</abbr>)}
            />
          </div>
          <div className="first">
            <input
              placeholder="Input Type Number"
              draggable="true"
              onDragEnd={() => InputDrag(<input key="8" />)}
            />
          </div>
        </div>
        <div className="second">
          <img src={three} alt="Error" style={{ width: 795, height: 505 }} />
          <div className="abc">
            {Data && (
              <>
                {set.map((val, index) => {
                  if (val.type === "input" && val.key === "1") {
                    return (
                      <input
                        key={index}
                        type="text"
                        id={firstV?.map((val) => {
                          return val["Id"];
                        })}
                        className={firstV?.map((val) => {
                          return val["Classname"];
                        })}
                        placeholder={firstV?.map((val) => {
                          return val["Placeholder"];
                        })}
                        onDoubleClick={firstfun}
                      />
                    );
                  } else if (val.type === "button" && val.key === "2") {
                    return (
                      <button
                        key={index}
                        type="submit"
                        id={secondV?.map((val) => {
                          return val["Id"];
                        })}
                        className={secondV?.map((val) => {
                          return val["Classname"];
                        })}
                        onDoubleClick={secondfun}
                      >
                        Button
                      </button>
                    );
                  } else if (val.type === "input" && val.key === "3") {
                    return (
                      <input
                        key={index}
                        type="checkbox"
                        id={thirdV?.map((val) => {
                          return val["Id"];
                        })}
                        className={thirdV?.map((val) => {
                          return val["Classname"];
                        })}
                        name={thirdV?.map((val) => {
                          return val["Name"];
                        })}
                        onDoubleClick={thirdfun}
                      />
                    );
                  } else if (val.type === "input" && val.key === "5") {
                    return (
                      <input
                        key={index}
                        type="radio"
                        id={fifthV?.map((val) => {
                          return val["Id"];
                        })}
                        className={fifthV?.map((val) => {
                          return val["Classname"];
                        })}
                        name={fifthV?.map((val) => {
                          return val["Name"];
                        })}
                        onDoubleClick={fifthfun}
                      />
                    );
                  } else if (val.type === "input" && val.key === "6") {
                    return (
                      <input
                        key={index}
                        type="range"
                        id={sixV?.map((val) => {
                          return val["Id"];
                        })}
                        name={sixV?.map((val) => {
                          return val["Name"];
                        })}
                        min={sixV?.map((val) => {
                          return val["Minimum"];
                        })}
                        max={sixV?.map((val) => {
                          return val["Maximum"];
                        })}
                        onDoubleClick={sixfun}
                      />
                    );
                  } else if (val.type === "abbr" && val.key === "7") {
                    return (
                      <abbr
                        key={index}
                        id={sevenV?.map((val) => {
                          return val["Id"];
                        })}
                        title={sevenV?.map((val) => {
                          return val["Title"];
                        })}
                        onDoubleClick={sevenfun}
                      >
                        Abriviation Tag
                      </abbr>
                    );
                  } else if (val.type === "input" && val.key === "8") {
                    return (
                      <input
                        key={index}
                        type="number"
                        id={eightV?.map((val) => {
                          return val["Id"];
                        })}
                        name={eightV?.map((val) => {
                          return val["Name"];
                        })}
                        min={eightV?.map((val) => {
                          return val["Minimum"];
                        })}
                        max={eightV?.map((val) => {
                          return val["Id"];
                        })}
                        onDoubleClick={Eightfun}
                      />
                    );
                  }
                })}
              </>
            )}

            {show && (
              <>
                {shows.map((val, index) => {
                  return (
                    <>
                      <li key={index}>{val}</li>
                    </>
                  );
                })}
              </>
            )}
          </div>
        </div>
        <div className="third">
          {first && (
            <>
              <h3>Input Type Text</h3>
              <label>Type</label>
              <br />
              <input type="text" name="Type" defaultValue="text" />
              <br />
              <label>Id</label>
              <br />
              <input
                type="text"
                name="Id"
                value={firstI.Id}
                onChange={handleFirst}
              />
              <br />
              <label>Classname</label>
              <br />
              <input
                type="text"
                name="Classname"
                value={firstI.Classname}
                onChange={handleFirst}
              />
              <br />
              <label>Placeholder</label>
              <br />
              <input
                type="text"
                name="Placeholder"
                value={firstI.Placeholder}
                onChange={handleFirst}
              />
              <br />
              <input type="submit" onClick={handleFirstSubmit} />
            </>
          )}
          {second && (
            <>
              <h3>Button Type Submit</h3>
              <label>Type</label>
              <br />
              <input type="text" name="Type" defaultValue="submit" />
              <br />
              <label>Id</label>
              <br />
              <input
                type="text"
                name="Id"
                value={secondI.Id}
                onChange={handleSecond}
              />
              <br />
              <label>Classname</label>
              <br />
              <input
                type="text"
                name="Classname"
                value={secondI.Classname}
                onChange={handleSecond}
              />
              <br />
              <input type="submit" onClick={handleSecondSubmit} />
            </>
          )}
          {third && (
            <>
              <h3>Input Type Checkbox</h3>
              <label>Type</label>
              <br />
              <input type="text" name="Type" defaultValue="checkbox" />
              <br />
              <label>Id</label>
              <br />
              <input
                type="text"
                name="Id"
                value={thirdI.Id}
                onChange={handleThird}
              />
              <br />
              <label>Classname</label>
              <br />
              <input
                type="text"
                name="Classname"
                value={thirdI.Classname}
                onChange={handleThird}
              />
              <br />
              <label>Name</label>
              <br />
              <input
                type="text"
                name="Name"
                value={thirdI.Name}
                onChange={handleThird}
              />
              <br />
              <input type="submit" onClick={handleThirdSubmit} />
            </>
          )}

          {fifth && (
            <>
              <h3>Input Type Radio</h3>
              <label>Type</label>
              <br />
              <input type="text" name="Type" defaultValue="radio" />
              <br />
              <label>Id</label>
              <br />
              <input
                type="text"
                name="Id"
                value={fifthI.Id}
                onChange={handleFifth}
              />
              <br />
              <label>Classname</label>
              <br />
              <input
                type="text"
                name="Classname"
                value={fifthI.Classname}
                onChange={handleFifth}
              />
              <br />
              <label>Name</label>
              <br />
              <input
                type="text"
                name="Name"
                value={fifthI.Name}
                onChange={handleFifth}
              />
              <br />
              <input type="submit" onClick={handleFifthSubmit} />
            </>
          )}
          {six && (
            <>
              <h3>Input Type Range</h3>
              <label>Type</label>
              <br />
              <input type="text" name="Type" defaultValue="range" />
              <br />
              <label>Id</label>
              <br />
              <input
                type="text"
                name="Id"
                value={sixI.Id}
                onChange={handleSix}
              />
              <br />
              <label>Name</label>
              <br />
              <input
                type="text"
                name="Name"
                value={sixI.Name}
                onChange={handleSix}
              />
              <br />
              <label>Minimun Value</label>
              <br />
              <input
                type="text"
                name="Minimum"
                value={sixI.Minimum}
                onChange={handleSix}
              />
              <br />
              <label>Maximum Value</label>
              <br />
              <input
                type="text"
                name="Maximum"
                value={sixI.Maximum}
                onChange={handleSix}
              />
              <br />
              <input type="submit" onClick={handlesixSubmit} />
            </>
          )}
          {seven && (
            <>
              <h3>Abbreviation Tag</h3>
              <label>Title</label>
              <br />
              <input
                type="text"
                name="Title"
                value={sevenI.Title}
                onChange={handleSeven}
              />
              <br />
              <label>Id</label>
              <br />
              <input
                type="text"
                name="Id"
                value={sevenI.Id}
                onChange={handleSeven}
              />
              <br />
              <input type="submit" onClick={handleSevenSubmit} />
            </>
          )}

          {eight && (
            <>
              <h3>Input Type Number</h3>
              <label>Type</label>
              <br />
              <input type="text" name="Type" defaultValue="number" />
              <br />
              <label>Id</label>
              <br />
              <input
                type="text"
                name="Id"
                value={eightI.Id}
                onChange={handleEight}
              />
              <br />
              <label>Name</label>
              <br />
              <input
                type="text"
                name="Name"
                value={eightI.Name}
                onChange={handleEight}
              />
              <br />
              <label>Minimun Value</label>
              <br />
              <input
                type="text"
                name="Minimum"
                value={eightI.Minimum}
                onChange={handleEight}
              />
              <br />
              <label>Maximum Value</label>
              <br />
              <input
                type="text"
                name="Maximum"
                value={eightI.Maximum}
                onChange={handleEight}
              />
              <br />
              <input type="submit" onClick={handleEightSubmit} />
            </>
          )}
          {show && (
            <>
              {shows.map((val, index) => {
                return (
                  <>
                    <li key={index}>{val}</li>
                  </>
                );
              })}
            </>
          )}
          {down && (
            <>
              {shows.map((val, index) => {
                return (
                  <>
                    <li key={index}>
                      {val}
                      <br />
                      <button
                        className="downloadButton"
                        onClick={() => handledatadownload(val)}
                      >
                        Download
                      </button>
                    </li>
                  </>
                );
              })}
            </>
          )}
        </div>
      </div>
      </div>
    </>
  );
};

export default App;
