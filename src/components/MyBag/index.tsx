import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { releasePokemon, renamePokemon } from './sliceToolKit';
import './styles.scss'
const MyBag = () => {
  const listPokemon = useSelector((state:any) => state.myBag.listMyPokemon);
  const dispatch = useDispatch();
  const [showBag, setShowBag] = useState(false);
  const [showCofirm, setShowCofirm] = useState(false);
  const [indexChange, setIndexChange] = useState(-1);
  const [nick, setNick] = useState("");
  const renderCount = () => {
    if(listPokemon.length <= 9){
      return listPokemon.length;
    }
    return "+9"
  }
  const renderListPokemon = () => {
    return listPokemon.map((item:any, index:number) => {
      return(
        <div className="my-pokemon" style={{backgroundImage: `url(${item.img})`}} key={index}>
          <button className="release-btn" disabled={indexChange !== -1} onClick={() => release(index)}>X</button>
          <div className="name-pokemon">
            {indexChange !== index ? (
              <div className="nick">{item.nickName}</div>
            ):(
              <div>
                <input type="text" value={nick} maxLength={30} onChange={(e) => setNick(e.target.value)} />
              </div>
            )
            }
          </div>
          <div className="my-pokemon__group-btn">
            {indexChange !== index ? (
              <div>
                <button className="btn" disabled={indexChange !== -1} onClick={() => rename(index, item.nickName)}>Rename</button>
              </div>
            ):(
              <div>
                <button className="btn" onClick={acceptRename}>Accept</button>
                <button className="btn" onClick={cancelRename}>Cancel</button>
              </div>
            )
            }
          </div>
        </div>
      )
    })
  }

  const release = (index:number) => {
    const action = releasePokemon(index);
    dispatch(action)
  }
  const rename = (index:number, nickPo:string) => {
    setIndexChange(index);
    setNick(nickPo);
  }
  const closePopup = () => {
    if(indexChange !== -1) {
      setShowCofirm(true);
    } else {
      setShowBag(false);
    }
  }
  const yesConfirm = () => {
    const action = renamePokemon({
      index: indexChange,
      nick: nick
    });
    dispatch(action);
    setIndexChange(-1);
    setNick("");
    setShowCofirm(false);
    setShowBag(false);
  }
  const noConfirm = () => {
    setIndexChange(-1);
    setNick("");
    setShowCofirm(false);
    setShowBag(false);
  }
  const acceptRename = () => {
    const action = renamePokemon({
      index: indexChange,
      nick: nick
    });
    dispatch(action);
    setIndexChange(-1);
    setNick("");
  }
  const cancelRename = () => {
    setIndexChange(-1);
    setNick("");
  }
  return (
    <div className='my-bag'>
      <div className="bag-btn" onClick={() => setShowBag(true)}>
        <img src={require("../../assets/img/bag.png")} />
        {listPokemon.length > 0 && (
          <div className="pokemon-count">
            {renderCount()}
          </div>
        )}
      </div>
      {showBag && (
        <div className="popup">
          <div className="popup-container">
            <button className="close-btn" onClick={closePopup}>X</button>
            {listPokemon.length > 0 ? (
              <div className="list-my-pokemon">
                {renderListPokemon()}
              </div>
            ): (
              <div className="no-pokemon">
                You haven't caught any pokemon
              </div>
            )}
          </div>
        </div>
      )}
      {showCofirm && (
        <div className="popup-confirm">
          <div className="popup-confirm__container">
            <div className="text">
              <div className='icon-custom'>?</div> Do you want to save your changes?
            </div>
            <div className="btn-group">
              <button className="btn" onClick={yesConfirm}>Yes</button>
              <button className="btn" onClick={noConfirm}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBag;
