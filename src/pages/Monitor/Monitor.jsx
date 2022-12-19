import React, { useState } from 'react'
import { useEffect } from 'react'
//import SingleVendaPost from '../../components/SingleVendaPost/SingleVendaPost'
import VendaEditMonitor from '../../components/VendaEditMonitor/VendaEditMonitor'
import Vendapost from '../../components/VedaPost/Vendapost'
import api from '../../services/api'
import './Monitor.css'
import DoacaoPost from '../../components/DoacaoPost/DoacaoPost'
import DoacaoEditMonitor from '../../components/DoacaoEditMonitor/DoacaoEditMonitor'

export default function Monitor() {
    const [menumonitor, setMenumonitor] = useState(true)
    const [postvendam, setPostvendam] = useState(false)
    const [edvenda, setEdvenda] = useState(false)
    const [postdoacao, setPostdoacao] = useState(false)
    const [eddoacao, setEddoacao] = useState(false)
    const [vendapn, setVendapn] = useState(0)
    const [vendapu, setVendapu] = useState(0)
    const [doac, setDoac] = useState(0)
    const [doaced, setDoaced] = useState(0)


    const setVenda = ()=>{
        setMenumonitor(false)
        setPostvendam(true)
        setEdvenda(false)
    }
    const setEdVenda = ()=>{
        setMenumonitor(false)
        setPostvendam(false)
        setEdvenda(true)
    }
    const setDoacao = ()=>{
        setPostdoacao(true)
        setMenumonitor(false)
        setPostvendam(false)
        setEdvenda(false)
    }
    const setnewDoacao = ()=>{
        setEddoacao(true)
        setPostdoacao(false)
        setMenumonitor(false)
        setPostvendam(false)
        setEdvenda(false)
    }

    const calcularVenda = async ()=>{
        try{
            const product = await api.get('/produtomonitor')
            const response = await api.get('/produtomonitor/checkUpdate');
            const doacaoValor = await api.get('/doacaomonitor')
            const doacedValor = await api.get("/doacaomonitor/check/true");
            setVendapu(response.data.length)
            setVendapn(product.data.length)
            setDoac(doacaoValor.data.length)
            setDoaced(doacedValor.data.length)
        }catch(err){}
    }

    useEffect(()=>{
        calcularVenda()
    }, [])

  return (
    <div className='MonitorContent'>
        <div className="menuMonitor">
            <img src="./image/newLogo.png" alt=" " className="imgLOgoMonitor" />
        </div>
        <div className="menuMonitorInferior">
            <i className="painelMenu">Painel de Monitoramento - UNILABTEM</i>
        </div>
        <div className="MenuLateralAndPainel">
            <div className="MenuLateral">
                <div className="menuMM">Número de Pedidos</div>
                <div className="vendaMonitor editMMonitor">Venda {vendapn}/{vendapu}</div>
                <div className="doacaoMonitor editMMonitor">Doação {doac}/{doaced}</div>
                <div className="aluguelMonitor editMMonitor">Aluguel 0/0</div>
                <div className="compartilhamentoMonitor editMMonitor">Compartilhamento 0/0</div>
            </div>
            <div className="Painel">
                {menumonitor && (
                <>
                
                    <div className="cardMonitor" onClick={setVenda}>
                        <h4 className="titleCardMonitor">Postar Venda</h4>
                        <p className="textMonitor">
                            Neste Carde tem os produtos que 
                            os usuários da plataforma UNILABTEM
                            desejam <b className='verdeDivulgar'>DIVULGAR</b> (a espera de aprovação).
                        </p>
                    </div>
                    
                    <div className="cardMonitor" onClick={setEdVenda}>
                        <h4 className="titleCardMonitor">Editar Venda</h4>
                        <p className="textMonitor">
                            Neste Carde tem os produtos que 
                            os usuários da plataforma UNILABTEM
                            desejam <b className='editarAmarelo'>EDITAR</b> (a espera de aprovação).
                        </p>
                    </div>
                    <div className="cardMonitor" onClick={setDoacao}>
                        <h4 className="titleCardMonitor">Postar Doação</h4>
                        <p className="textMonitor">
                            Neste Carde tem as doações que 
                            os usuários da plataforma UNILABTEM
                            desejam <b className='verdeDivulgar'>DIVULGAR</b> (a espera de aprovação).
                        </p>
                    </div>
                    <div className="cardMonitor" onClick={setnewDoacao}>
                        <h4 className="titleCardMonitor">Editar Doação</h4>
                        <p className="textMonitor">
                            Neste Carde tem os produtos que 
                            os usuários da plataforma UNILABTEM
                            desejam <b className='editarAmarelo'>EDITAR</b> (a espera de aprovação).
                        </p>
                    </div>
                    <div className="cardMonitor">
                        <h4 className="titleCardMonitor">Postar Aluguel</h4>
                        <p className="textMonitor">
                            Neste Carde tem as casas que 
                            os usuários da plataforma UNILABTEM
                            desejam <b className='verdeDivulgar'>DIVULGAR</b> (a espera de aprovação).
                        </p>
                    </div>
                    <div className="cardMonitor">
                        <h4 className="titleCardMonitor">Editar Aluguel</h4>
                        <p className="textMonitor">
                            Neste Carde tem as casas que 
                            os usuários da plataforma UNILABTEM
                            desejam <b className='editarAmarelo'>EDITAR</b> (a espera de aprovação).
                        </p>
                    </div>
                    <div className="cardMonitor">
                        <h4 className="titleCardMonitor">Postar Compartilhamento</h4>
                        <p className="textMonitor">
                            Neste Carde tem as casas que 
                            os usuários da plataforma UNILABTEM
                            desejam <b className='verdeDivulgar'>DIVULGAR</b> (a espera de aprovação).
                        </p>
                    </div>
                    <div className="cardMonitor">
                        <h4 className="titleCardMonitor">Editar Compartilhamento</h4>
                        <p className="textMonitor">
                            Neste Carde tem as casas que 
                            os usuários da plataforma UNILABTEM
                            desejam <b className='editarAmarelo'>EDITAR</b> (a espera de aprovação).
                        </p>
                    </div>
                </>)}
                
                {postvendam && (<Vendapost /> )}
                {edvenda && (<VendaEditMonitor /> )}
                {postdoacao && (<DoacaoPost /> )}
                {eddoacao && (<DoacaoEditMonitor /> )}
                {/* <SingleVendaPost /> */}
                
            </div>
        </div>
    </div>
  )
}
