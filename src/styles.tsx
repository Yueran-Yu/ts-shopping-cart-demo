import styled from 'styled-components'
import IconButton from "@material-ui/core/IconButton"

export const Wrapper = styled.div`
  margin:0 40px;
`

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`

export const CircleProcess = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`
