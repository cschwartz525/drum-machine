import styled from 'styled-components';
import playIcon from '../../../images/play.svg';
import stopIcon from '../../../images/stop.svg';

interface PlayStopButtonProps {
    isPlaying: boolean;
}

export default styled.button<PlayStopButtonProps>`
    background: url(${({ isPlaying }) => (isPlaying ? stopIcon : playIcon)});
    background-color: #fff;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 30%;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    height: 40px;
    width: 80px;
`;