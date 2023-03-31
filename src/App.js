import "./Style/Style.css";
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Name from "./NamObj/Name";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="ContainerBox">
          <div className="InsideBox">
            <div className="AddItemBar">
              <h3>Field name and type</h3>
              <AddIcon className="AddItem" />
            </div>
            <div className="Inputfol">
              <form className="formArea">
                <h1 className="numbeRing">1</h1>
                <div className="formLeftCompo">
                  <input type="text" className="FormInput" placeholder="Person" />
                  <span >Object</span>
                  <ExpandMoreIcon className="ExpandMoreIcon" />

                </div>
                <div className="formRightCompo">
                  <h5 className="RightcomItem">Required</h5>
                  <ToggleOnIcon className="RightcomItem ToggleIcon" />
                  <DeleteOutlineIcon className="RightcomItem" />
                </div>
              </form>
              <div className="insidePerson">
              


                {/* inside the person container */}
                <div className="InputsIntoPerson">
                  <div className="insideLeftCompo">
                    <input type="text" className="FormInput" placeholder="Name" />
                    <span >Object</span>
                    <ExpandMoreIcon className="ExpandMoreIcon" />

                  </div>
                  <div className="insideRightCompo">
                    <h5 className="RightcomItem">Required</h5>
                    <ToggleOnIcon className="RightcomItem ToggleIcon" />
                    <DeleteOutlineIcon className="RightcomItem" />
                  </div>

                  </div>
                  {/* inside the Name object*/}
                  <div className="NameObj">
                  <Name/>
                  </div>
                



                <div className="InputsIntoPerson">
                  <div className="insideLeftCompo">
                    <input type="text" className="FormInput" placeholder="Age" />
                    <span >Integer</span>
                    <ExpandMoreIcon className="ExpandMoreIcon" />

                  </div>
                  <div className="insideRightCompo">
                    <h5 className="RightcomItem">Required</h5>
                    <ToggleOnIcon className="RightcomItem ToggleIcon" />
                    <DeleteOutlineIcon className="RightcomItem" />
                  </div>
                </div>
                <div className="InputsIntoPerson">
                  <div className="insideLeftCompo">
                    <input type="text" className="FormInput" placeholder="AddName" />
                    <span >String</span>
                    <ExpandMoreIcon className="ExpandMoreIcon" />

                  </div>
                  <div className="insideRightCompo">
                    <h5 className="RightcomItem">Required</h5>
                    <ToggleOnIcon className="RightcomItem ToggleIcon" />
                    <DeleteOutlineIcon className="RightcomItem" />
                  </div>
                </div>
              </div>


             {/* oder box */}
              <form className="formArea">
                <h1 className="numbeRing">2</h1>
                <div className="formLeftCompo">
                  <input type="text" className="FormInput" placeholder="Order" />
                  <span >Object</span>
                  <ExpandMoreIcon className="ExpandMoreIcon" />
                </div>
                <div className="formRightCompo">
                  <h5 className="RightcomItem">Required</h5>
                  <ToggleOnIcon className="RightcomItem ToggleIcon" />
                  <DeleteOutlineIcon className="RightcomItem" />
                </div>
              </form>


              {/* class box */}
              <form className="formArea">
                <h1 className="numbeRing">3</h1>
                <div className="formLeftCompo">
                  <input type="text" className="FormInput" placeholder="Class" />
                  <span >Object</span>
                  <ExpandMoreIcon className="ExpandMoreIcon" />
                </div>
                <div className="formRightCompo">
                  <h5 className="RightcomItem">Required</h5>
                  <ToggleOnIcon className="RightcomItem ToggleIcon" />
                  <DeleteOutlineIcon className="RightcomItem" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
