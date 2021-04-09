import {Component } from 'react'
import api  from '../util/api'

class Home extends Component {

	state = {
		routes: [
			{
				_id: 0,
                title: '',
			    startPosition: { lat: Number, lng: Number},
			    endPosition: { lat: Number, lng: Number}
            }
		] 
	}

	componentDidMount(){
	 api.get('/routes')
		.then(res => {
			console.log(res.data)
			this.setState({routes: res.data})
		});
	}
	render(){

		const {routes} = this.state;
		return(
			<div>
				<h1 style={{textAlign: "center"}}> Imersão FullCycle </h1>
				<h2 style={{textAlign: "center"}}> Desafio 02 </h2>
				<table style={{border: "solid 1px"}}>
					<thead style={{backgroundColor: 'silver'}}>
						<tr> 
							<th>Rota</th>
							<th>Início da partida (Latitude,Longitude)</th>
							<th>Fim da partida (Latitude,Longitude)</th>
						</tr>
					</thead>
					<tbody>
						{routes.map(dado => (
								<tr key={dado._id}>
									<td style={{border: "solid 1px"}}>{dado.title}</td>
									<td style={{border: "solid 1px"}}>({dado.startPosition.lat}, {dado.startPosition.lng})</td>
									<td style={{border: "solid 1px"}}>({dado.endPosition.lat}, {dado.endPosition.lng})</td>
								</tr>
							)
						)}
					</tbody>
				</table>
			</div>
		)
	}
}

export default Home;