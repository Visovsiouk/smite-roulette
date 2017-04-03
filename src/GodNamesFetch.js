import React from 'react';
import { Col } from 'react-bootstrap';
import ReactAudioPlayer from 'react-audio-player'

function shuffleArray(names, src, selsrc) {
	let i = names.length - 1;
	for (; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const tempname = names[i];
		names[i] = names[j];
		names[j] = tempname;
		const tempsrc = src[i];
		src[i] = src[j];
		src[j] = tempsrc;
		const tempselsrc = selsrc[i];
		selsrc[i] = selsrc[j];
		selsrc[j] = tempselsrc;
	}
	return names[i], src[i], selsrc[i];
}

class GodNamesFetch extends React.Component  {
	constructor(props) {
		super(props);
			this.state = { 
				gods: {}
			};
	}
	componentDidMount(){
		shuffleArray(this.props.gods.names, this.props.gods.porsrc, this.props.gods.selsrc);
	}
	render() {	
		return (
			<div className="Randomizer-container">
				<Col xs={12}>
					<div className="Randomizer-item">
						<h1>{this.props.gods.names[0]}</h1>
						<img src={this.props.gods.porsrc[0]} alt="god" />
						<ReactAudioPlayer
							src={this.props.gods.selsrc[0]}
							autoPlay
						/>
					</div>
				</Col>
			</div>
		)		
	}
}

export default GodNamesFetch;