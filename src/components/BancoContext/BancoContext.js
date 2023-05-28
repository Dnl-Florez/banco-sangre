import React from 'react';

const BancoContext = React.createContext();

function BancoProvider(props){
  const [openModal, setOpenModal] = React.useState(false);
  const [openRegister, setOpenRegister] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);
  
  return (
    <BancoContext.Provider value={{
      openModal,
      setOpenModal,
      openRegister,
      setOpenRegister,
      openLogin,
      setOpenLogin
    }}>
      {props.children}
    </BancoContext.Provider>
  );
}

export { BancoContext, BancoProvider };
