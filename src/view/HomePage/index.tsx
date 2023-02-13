import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { prePageRedux, nextPageRedux, getListApi } from './sliceToolKit';

const HomePage = () => {
  const page = useSelector((state:any) => state.pokemon.page);
  const loading = useSelector((state:any) => state.pokemon.loading);
  const listPokemon = useSelector((state:any) => state.pokemon.list);
  const dispatch = useDispatch();
  useEffect(() => {
    const action = getListApi(page);
    dispatch(action);
  }, [page])
  const prePage = () => {
    const action = prePageRedux();
    dispatch(action);
  }
  const nextPage = () => {
    const action = nextPageRedux();
    dispatch(action);
  }
  const renderList = listPokemon.map((item:any) => {
    return (
      <div key={item.name}>
        {item.name}
      </div>
    )
  })
  return (
    <>
      <div>
        <img src="assets/img/loading.gif" alt="" />
      </div>
      <div>
        {page}
        {renderList}
        <button onClick={prePage}>pre</button>
        <button onClick={nextPage}>next</button>
      </div>
    </>
  );
};
export default HomePage
