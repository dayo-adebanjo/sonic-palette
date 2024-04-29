import React from "react";
import styled from "styled-components";

const Song = ({ currentSong }) => {
	return (
		<SongContainer>
			<H1>{currentSong.name}</H1>
		</SongContainer>
	);
};

const SongContainer = styled.div`
	max-height: 60vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Img = styled.img`
	width: 20%;
	border-radius: 50%;
	@media screen and (max-width: 768px) {
		width: 50%;
	}
`;

//3rem 1rem 1rem 1rem;
const H1 = styled.h2`
	padding: 0; 
`;

const H2 = styled.h3`
	font-size: 1rem;
`;

export default Song;
