import styled, { keyframes } from 'styled-components'

const stretch = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -124px;
  }
`

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

const Spinner = styled.svg`
    height: 25px;
    width: 25px;
    vertical-align: middle;
    transform-origin: center;
    animation: ${rotate} var(--uib-speed) linear infinite;

    circle {
      fill: none;
      stroke: #ffffff;
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
      stroke-linecap: round;
      animation: ${stretch} calc(1.4s * 0.75) ease-in-out infinite;
    }
`

const Loader = () => {
  return (
    <Spinner
      viewBox="25 25 50 50"
      strokeWidth="3"
    >
      <circle cx="50" cy="50" r="20" />
    </Spinner>
  )
}

export default Loader