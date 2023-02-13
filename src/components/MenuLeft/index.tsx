import { useEffect, useState } from 'react';
import { SCMenuLeft, SCMenuItem, SCItemChild, SCLogoutBtn } from './styles'
import {useLocation, useNavigate} from 'react-router-dom';
const MenuLeft = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [listMenu, setListMenu] = useState(
    [
      {
        id: 0,
        name: 'Menu',
        url: '/',
        status: false,
        child: []
      },
      {
        id: 1,
        name: 'table 123',
        url: '',
        status: true,
        child: [
          {
            name: 'table 1',
            url: '/table1'
          },
          {
            name: 'table 2',
            url: '/table2'
          },
          {
            name: 'table 3',
            url: '/table3'
          },
        ]
      },
      {
        id: 2,
        name: 'table 456789',
        url: '',
        status: false,
        child: [
          {
            name: 'table 4',
            url: '/table4'
          },
          {
            name: 'table 5',
            url: '/table5'
          },
          {
            name: 'table 6',
            url: '/table6'
          },
          {
            name: 'table 7',
            url: '/table7'
          },
          {
            name: 'table 8',
            url: '/table8'
          },
          {
            name: 'table 9',
            url: '/table9'
          },
        ]
      },
    ]
  )
  const renderListMenu = (listMenu:any) => {
    return listMenu.map((item:any) => {
      return <SCMenuItem key={item.id} active={item.url === location.pathname || item.child.some((i:any) => i.url === location.pathname)}>
        {
          item.child.length > 0 ? (
            <>
              <div onClick={() => activeCollapseItem(item.id)}>
                { item.name }
              </div>
              { renderListMenuChild(item.child, item.status) }
            </>
          ) : (
            <div onClick={() => navigate(item.url)}>
              { item.name }
            </div>
          )
        }
      </SCMenuItem>
    })
  }
  const renderListMenuChild = (listChild:any, status:boolean) => {
    return listChild.map((item:any) => {
      return <SCItemChild key={item.url} onClick={() => navigate(item.url)} active={item.url === location.pathname} status={status}>
        { item.name }
      </SCItemChild>
    })
  }
  const activeCollapseItem = (id:any) => {
    const index = listMenu.findIndex(item => item.id === id);
    const temp = [...listMenu];
    temp[index].status = !temp[index].status;
    setListMenu(temp);
  }
  return (
    <>
      <div>
        <h1>
          Vector Portal
        </h1>
        <SCMenuLeft>
          {
            renderListMenu(listMenu)
          }
        </SCMenuLeft>
      </div>
      <div>
        <SCLogoutBtn onClick={() => navigate('/login')}>
          Log out
        </SCLogoutBtn>
      </div>
    </>
  );
};
export default MenuLeft;
