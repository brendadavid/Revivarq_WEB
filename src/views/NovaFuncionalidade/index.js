import React from 'react';
import Modal from '../../components/Modal';
import Page from 'views/Page';
import Typography from '@material-ui/core/Typography';
import './styles.css';

class NovaFuncionalidade extends Page {
	unauthenticated = () => {
		return (
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
				<Typography 
				variant="overline" 
				className="txtIni" 
				style={{ fontSize: 40, color: 'white', fontFamily: 'Playfair Display' }} 
				gutterBottom>
					Em Breve
				</Typography>
			</div>
		)
	}

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      modalOpened: true
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

	authenticated = () => {
		return (
			<div style={{ 
        minHeight: '38.5rem',
        background: 'black',
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
				}} >
				<form>
          <h1>
            Reforma Simples
          </h1>
          <h3>
            Selecione o tipo de serviço
          </h3>
          <select value={this.state.value} onChange={this.handleChange}>
            <option defaultValue value="servicos_iniciais">Serviços Iniciais</option>
            <option value="infra_fundacoes">Infraestrutura e Fundações </option>
            <option value="estrutura">Estrutura</option>
            <option value="pisos">Pisos</option>
            <option value="paredes">Paredes</option>
          </select>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column ', 
            alignItems: 'center',
            justifyContent: 'center', 
            marginTop: '10px'
            }} 
            >
            <><button type="button" className='btn-reforma' onClick={() => this.setState({ modalOpened: true })}>
              Tapume/Fechamento de obra
            </button>
            <button type="button" className='btn-reforma'>
                Canteiro de obra
              </button><button type="button" className='btn-reforma'>
                Locação de obra
              </button></>
          </div>
          <Modal 
              title="Serviços de limpeza e preparo do terreno para a construção"
              open={this.state.modalOpened}
              >
                Informe a área a ser limpa em m². A limpeza e preparo do terreno compreende os serviços <br></br>
                necessários à completa remoção de camada vegetal e entulhos da obra.
                <h4>
                  M²
                </h4>
                <input placeholder='Ex.: 3.2'>
                </input>
                <h4>
                  Informe o tipo de limpeza
                </h4>
                <select value={this.state.value} onChange={this.handleChange}>
                  <option defaultValue value="1">Desmatamento e limpeza mecanizada de terreno com remoção de camada vegetal</option>
                  <option value="2">Desmatamento e limpeza mecanizada de terreno com árvores de até 15cm </option>
                  <option value="3">Capina e limpeza manual do terreno</option>
                  <option value="4">Preparo manual de terreno s/ raspagem superficial</option>
                </select>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center'
                  }}>
                  <button style={{width: '220px', height: '30px', fontSize:'14px'}} className='btn-reforma' onClick={() => this.setState({ modalOpened: false })}>
                    Salvar
                  </button>
                </div>
              </Modal>
        </form>
			</div>
		)
	}
}

export default NovaFuncionalidade