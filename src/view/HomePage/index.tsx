import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import CardPokemon from './CardPokemon1';
import { getListApi, setPageRedux } from './sliceToolKit';
import Loading from '../../components/Loading';
import MyBag from '../../components/MyBag';
import './styles.scss';

const HomePage = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams();
  const page = useSelector((state:any) => state.pokemon.page);
  const pageMax = useSelector((state:any) => state.pokemon.pageMax);
  const loading = useSelector((state:any) => state.pokemon.loading);
  const listPokemon = useSelector((state:any) => state.pokemon.list);
  const [pageInput, setPageInput] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    const pageTemp = searchParams.get('page') || 1;
    const action = setPageRedux(pageTemp);
    dispatch(action);
  }, [searchParams]);
  useEffect(() => {
    const action = getListApi(page);
    dispatch(action);
  }, [page]);
  const prePage = () => {
    const pageTemp = page <=1 ? 1 : page - 1
    setSearchParams({page: pageTemp.toString()});
  }
  const nextPage = () => {
    setSearchParams({page: (page + 1).toString()});
  }
  const renderList = listPokemon.map((item:any) => {
    return (
      <div key={item.id} onClick={() => navigate(`pokemon/${item.id}`)}>
        <CardPokemon pokemon={item} />
      </div>
    )
  })
  return (
    <div className='home-page'>
      <MyBag />
      {loading && <div>
        <Loading />
      </div>}
      <div className='container'>
        <div className='group-btn'>
          <button className='btn' disabled={page <= 1} onClick={prePage}>pre</button>
          <div className='page'>
            {page}
          </div>
          <button className='btn' disabled={page >= pageMax} onClick={nextPage}>next</button>
          <div className='stick'></div>
          <input
            className='page-input'
            type="number"
            value={pageInput}
            onChange={(e) => {setPageInput(e.target.value)}}
          />
          <button className='btn' disabled={!pageInput || Number(pageInput) <= 0} onClick={() => {setSearchParams({page: pageInput})}}>Go</button>
        </div>
        <div className="slide">
          <img src={require("../../assets/img/slider-img.png")} />
        </div>
        <div className='list-card'>
          {
            listPokemon.length > 0 ? renderList :
            <div className="no-data">There are no Pokemon</div>
          }
        </div>
      </div>
    </div>
  );
};
export default HomePage
