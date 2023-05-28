import React from 'react';

const BancoContext = React.createContext();

function BancoProvider(props){
  const [openModal, setOpenModal] = React.useState(true);
  const [openLogin, setOpenLogin] = React.useState(true);
  const [openBuscarDon, setOpenBuscarDon] = React.useState(false);
  const [openBuscarPac, setOpenBuscarPac] = React.useState(false);
  const [openCrearDon, setOpenCrearDon] = React.useState(false);
  const [openCrearPac, setOpenCrearPac] = React.useState(false);
 
  return (
    <BancoContext.Provider value={{
      	openModal,
	setOpenModal,
      	openLogin,
      	setOpenLogin,
	openBuscarDon,
	setOpenBuscarDon,
	openBuscarPac,
	setOpenBuscarPac,
	openCrearDon,
	setOpenCrearDon,
	openCrearPac,
	setOpenCrearPac
    }}>
      {props.children}
    </BancoContext.Provider>
  );
}

export { BancoContext, BancoProvider };
